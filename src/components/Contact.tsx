"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, AlertCircle, Sparkles } from "lucide-react";
import toast from "react-hot-toast";

type FormState = "idle" | "typing" | "error" | "success";

const Contact = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [errors, setErrors] = useState<string[]>([]);
    const [formState, setFormState] = useState<FormState>("idle");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Dynamically change Shin-chan based on form state
    const getImageMap = () => {
        switch (formState) {
            case "typing":
                return "https://i.pinimg.com/736x/af/4d/bd/af4dbd355af19c3b868b7f7352917ab0.jpg"; // Peeking image
            case "error":
                return "https://i.pinimg.com/1200x/16/66/da/1666da359ad8aa6189cecd97813890bc.jpg"; // Serious suit image
            case "success":
                return "https://i.pinimg.com/1200x/24/7c/6b/247c6bbc26fa6493f43dcf32985f0925.jpg"; // POOF! Superhero image
            case "idle":
            default:
                return "https://i.pinimg.com/736x/03/31/d4/0331d40a27359cb6fa8ea86f31fd06a6.jpg";
            // return "https://i.pinimg.com/736x/5c/cc/c2/5cccc237381e62babc6624690573577b.jpg"; // Crayon in mouth image
        }
    };

    const getStatusText = () => {
        switch (formState) {
            case "typing":
                return "Hiroshi is watching you type...";
            case "error":
                return "Hey! Fix the errors first!";
            case "success":
                return "Message sent! POOF!";
            case "idle":
            default:
                return "Ready to write a message!";
        }
    };

    // Reset to typing state when user starts typing again after an error
    const handleInputChange = (
        setter: React.Dispatch<React.SetStateAction<string>>,
        value: string
    ) => {
        setter(value);
        setErrors([]);
        if (formState !== "success") setFormState("typing");
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setErrors([]);
        let currentErrors: string[] = [];

        // Validations
        if (username.length < 3) currentErrors.push("Username is too short!");
        if (!email.includes("@")) currentErrors.push("That email looks weird...");
        if (msg.trim() === "") currentErrors.push("Don't send an empty message!");

        if (currentErrors.length > 0) {
            setErrors(currentErrors);
            setFormState("error");
            toast.error("Oops! Check your inputs.");
            return;
        }

        setIsSubmitting(true);

        try {
            const formData = new FormData(e.currentTarget);
            const res = await fetch("/api/contact", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                throw new Error("API Error");
            }

            const data = await res.json();
            setFormState("success");
            toast.success(`Yay! ${data?.message || "Message sent successfully!"}`);
            toast.success(`${username}, thanks for showing interest! 🌟`);

            // Reset form
            setUsername("");
            setEmail("");
            setMsg("");

            // Go back to idle after a few seconds
            setTimeout(() => {
                setFormState("idle");
            }, 5000);
        } catch (error) {
            setErrors(["Something went wrong on the server."]);
            setFormState("error");
            toast.error("Failed to send message!");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="min-h-screen w-full bg-white relative overflow-hidden flex justify-center items-center py-20 px-6">
            {/* Notebook Grid Background */}
            <div
                className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#1e293b 2px, transparent 2px)",
                    backgroundSize: "30px 30px",
                }}
            />

            <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 z-10">

                {/* LEFT: Dynamic Shin-chan Image (Polaroid Style) */}
                <div className="w-full md:w-1/2 flex justify-center relative">
                    <motion.div
                        animate={{ rotate: formState === "error" ? [-2, 2, -2] : [0, 2, 0] }}
                        transition={{ repeat: Infinity, duration: formState === "error" ? 0.5 : 4 }}
                        className="relative p-4 pb-12 bg-white border-4 border-slate-800 shadow-[12px_12px_0px_#1e293b] rotate-[-2deg] max-w-sm w-full"
                    >
                        {/* Masking Tape */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-gray-100/90 border border-slate-300 backdrop-blur-sm rotate-3 shadow-sm z-20" />

                        {/* Image Swap with Animation */}
                        <div className="overflow-hidden border-2 border-slate-800 aspect-square bg-slate-100 relative">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={formState}
                                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    exit={{ opacity: 0, scale: 1.1, rotate: 10 }}
                                    transition={{ type: "spring", bounce: 0.5 }}
                                    src={getImageMap()}
                                    alt="Shin-chan Status"
                                    className="w-full h-full object-cover"
                                />
                            </AnimatePresence>
                        </div>

                        {/* Marker Text Status */}
                        <div className="absolute bottom-3 left-0 w-full text-center font-black text-slate-800 text-xl tracking-tight">
                            {getStatusText()}
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT: Form Section */}
                <div className="w-full md:w-1/2 relative">

                    {/* Header */}
                    <div className="mb-8 relative">
                        <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 mb-2">
                            Say <span className="text-sky-500">Hello!</span>
                        </h2>
                        <svg
                            className="absolute w-32 h-3 -bottom-2 left-0 text-yellow-400"
                            viewBox="0 0 200 20"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0,10 Q50,0 100,10 T200,10"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="8"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    {/* Form */}
                    <form
                        className="bg-white border-4 border-slate-800 shadow-[10px_10px_0px_#1e293b] p-8 relative rounded-xl"
                        onSubmit={handleSubmit}
                    >
                        {/* Error Messages */}
                        <AnimatePresence>
                            {errors.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mb-6 bg-red-100 border-2 border-red-500 p-3 rounded-lg flex flex-col gap-1"
                                >
                                    {errors.map((val, index) => (
                                        <p
                                            key={index}
                                            className="text-red-600 font-bold flex items-center gap-2"
                                        >
                                            <AlertCircle size={18} /> {val}
                                        </p>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Username */}
                        <div className="mb-6 flex flex-col gap-1">
                            <label htmlFor="username" className="text-lg font-black text-slate-800">
                                Who are you?
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={username}
                                placeholder="Action Man..."
                                onChange={(e) => handleInputChange(setUsername, e.target.value)}
                                onBlur={() => setFormState("idle")}
                                className="w-full bg-amber-50 border-2 border-slate-800 rounded-lg p-3 outline-none focus:bg-white focus:ring-4 ring-sky-300 font-bold text-slate-700 placeholder:text-slate-400 shadow-[4px_4px_0px_#1e293b] transition-all"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-6 flex flex-col gap-1">
                            <label htmlFor="email" className="text-lg font-black text-slate-800">
                                Where do I reply?
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                placeholder="shinchan@kasukabe.com"
                                onChange={(e) => handleInputChange(setEmail, e.target.value)}
                                onBlur={() => setFormState("idle")}
                                className="w-full bg-amber-50 border-2 border-slate-800 rounded-lg p-3 outline-none focus:bg-white focus:ring-4 ring-pink-300 font-bold text-slate-700 placeholder:text-slate-400 shadow-[4px_4px_0px_#1e293b] transition-all"
                            />
                        </div>

                        {/* Message */}
                        <div className="mb-8 flex flex-col gap-1">
                            <label htmlFor="msg" className="text-lg font-black text-slate-800">
                                Your Masterpiece
                            </label>
                            <textarea
                                name="msg"
                                id="msg"
                                rows={4}
                                value={msg}
                                placeholder="Draw... I mean, write your message here!"
                                onChange={(e) => handleInputChange(setMsg, e.target.value)}
                                onBlur={() => setFormState("idle")}
                                className="w-full bg-amber-50 border-2 border-slate-800 rounded-lg p-3 outline-none focus:bg-white focus:ring-4 ring-yellow-300 font-bold text-slate-700 placeholder:text-slate-400 shadow-[4px_4px_0px_#1e293b] transition-all resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.95, y: 2 }}
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-slate-400 text-white font-black text-xl py-4 rounded-xl border-4 border-slate-800 shadow-[6px_6px_0px_#1e293b] hover:shadow-[8px_8px_0px_#1e293b] transition-all flex items-center justify-center gap-3
                            hover:bg-black hover:text-white cursor-pointer
                            "
                        >
                            {isSubmitting ? (
                                "Sending..."
                            ) : (
                                <>
                                    SEND IT! <Send size={24} strokeWidth={3} />
                                </>
                            )}
                        </motion.button>
                    </form>

                    {/* Decorative Sparkles */}
                    <div className="absolute -bottom-10 -right-10 text-yellow-400 z-0">
                        <Sparkles size={80} strokeWidth={1} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;