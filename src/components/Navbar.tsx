"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CiPaperplane } from "react-icons/ci";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const handleScroll = (href: string) => {
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <>
            {/* NAVBAR */}
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 mb-10 "
            >
                <div className="
          flex items-center justify-between 
          w-full max-w-5xl 
     
        
       px-6 py-3 
         mb-10
        ">
                    {/* Logo */}
                    <span className="text-xl font-extrabold bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">

                    </span>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleScroll(link.href)}
                                className="text-[15px] font-bold tracking-wide 
                           text-blue-600/70 hover:text-blue-500 
                           transition-colors duration-300"
                            >
                                {link.name}
                            </button>
                        ))}

                        {/* Resume Button */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="px-4 py-2 text-sm font-bold text-white 
                         rounded-full bg-gradient-to-r from-blue-600 to-sky-500 
                         shadow-md hover:shadow-lg 
                         transition-all duration-300"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 rounded-full bg-white/50 backdrop-blur-xl 
                       text-blue-700 shadow"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </motion.nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="
              md:hidden fixed top-20 left-4 right-4 
              bg-white/70 backdrop-blur-xl 
              rounded-2xl shadow-xl border border-white/40 
              flex flex-col p-6 gap-4 z-40
            "
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => {
                                    setOpen(false);
                                    handleScroll(link.href);
                                }}
                                className="text-lg font-semibold text-blue-600 hover:text-blue-500 
                           transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}

                        {/* Mobile Resume Button */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="mt-3 px-4 py-2 text-center text-sm font-bold text-white
                         rounded-full bg-gradient-to-r from-blue-600 to-sky-500 
                         shadow-md hover:shadow-lg transition-all"
                        >
                            Resume
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}