'use client';

import { motion, Variants } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Pin, ArrowRight, Earth, Sparkle } from 'lucide-react';
import Link from 'next/link';
import { FaBug } from 'react-icons/fa';

const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVars: Variants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
    show: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export default function About() {
    return (
        <section className="relative min-h-screen bg-white py-24 sm:py-32 overflow-hidden font-sans">

            {/* Dotted Notebook Background */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}
            />

            {/* Crazy Floating Doodles */}
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute top-20 right-10 text-yellow-400 text-5xl z-0 pointer-events-none">✦</motion.div>
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute bottom-40 left-10 text-pink-400 text-5xl z-0 pointer-events-none">❤</motion.div>
            <motion.div animate={{ x: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute top-1/2 right-[5%] text-sky-400 text-6xl z-0 opacity-50 pointer-events-none">★</motion.div>

            <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

                    {/* LEFT SIDE: Static Polaroid Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotate: -10 }}
                        whileInView={{ opacity: 1, x: 0, rotate: -3 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 relative z-20"
                    >
                        {/* Static Polaroid (Drag removed) */}
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 0 }}
                            className="relative p-4 pb-16 bg-white border-2 border-slate-800 shadow-[12px_12px_0px_#1e293b] mx-auto max-w-[320px] sm:max-w-md transition-transform duration-300"
                        >
                            {/* Masking Tape */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/90 border border-yellow-200/50 rotate-3 z-10 shadow-sm backdrop-blur-sm" />

                            <img
                                src="/pic70.png"
                                alt="Me coding"
                                className="w-full aspect-square object-cover border-2 border-slate-800 
                                transition-all duration-500 filter brightness-130 contrast-100 saturate-110
                                hover:brightness-125 hover:contrast-100 animate-floating ease-out"
                            />

                            {/* Hand-written text on Polaroid */}
                            <div className="absolute bottom-4 left-0 w-full text-center font-serif italic font-bold text-slate-800 text-xl flex items-center justify-center gap-2 pointer-events-none">
                                Just me & my bugs <FaBug />
                            </div>

                            {/* Cute floating stickers */}
                            <img src="/pic46.jpg" alt="sticker" className="absolute -right-8 -bottom-8 w-28 h-28 rounded-2xl drop-shadow-lg rotate-12 pointer-events-none animate-floating transition-transform duration-700 ease-out" />
                            <img src="/pic48.jpg" alt="sticker" className="absolute -left-8 -top-8 w-28 h-28 rounded-2xl drop-shadow-lg rotate-12 pointer-events-none animate-floating transition-transform duration-700 ease-out" />
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE: Scrapbook Bio & Sticky Notes */}
                    <motion.div
                        variants={containerVars}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-col justify-center lg:col-span-7"
                    >
                        <motion.div variants={itemVars} className="mb-6 relative inline-block w-max">
                            <div className="bg-sky-200 border-2 border-slate-800 px-4 py-1.5 text-sm font-black tracking-widest text-slate-900 shadow-[4px_4px_0px_#1e293b] rotate-[-2deg]">
                                THE MASTERMIND
                            </div>
                        </motion.div>

                        <motion.h2 variants={itemVars} className="mb-8 text-5xl md:text-6xl font-black text-slate-900 tracking-tighter relative inline-block w-max">
                            Who am I?
                            {/* Hand-drawn SVG underline */}
                            <svg className="absolute w-full h-4 -bottom-1 left-0 text-pink-400 pointer-events-none" viewBox="0 0 200 20" preserveAspectRatio="none">
                                <path d="M0,10 Q50,0 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                            </svg>
                        </motion.h2>

                        {/* Messy but highly readable Text */}
                        <motion.div variants={itemVars} className="space-y-6 text-[16px] sm:text-[18px] leading-relaxed text-slate-700 font-bold">
                            <p>
                                Hey there! I'm <span className="inline-block bg-yellow-300 border-2 border-slate-800 px-2 py-0.5 rounded-md shadow-[2px_2px_0px_#1e293b] rotate-1 hover:rotate-[-2deg] transition-transform">Dhananjai Pratap Singh</span>, a final-year CSE (Internet Of Things) student. Think of me as a guy who loves to connect the physical world with the digital one! <span className='inline-flex align-middle ml-1'><Earth /><Sparkle /></span>
                            </p>

                            <p className="pl-4 border-l-4 border-slate-800">
                                I love building full-stack apps with <strong className="text-sky-600">modern web technologies such as React, Next.js, Express.js, REST APIs, GraphQL, Tailwind CSS, and Prisma </strong>, but my real superpower? I make hardware talk! I program <strong className="text-emerald-600">ESP32 & Arduinos</strong> to build smart IoT ecosystems from scratch.
                            </p>

                            <p>
                                Always hungry to learn, I recently cracked the <strong className="bg-pink-200 px-1 border-b-2 border-slate-800">GATE 2026 in Both (Computer Science & Data Science & Artificial Intelligence) with AIR 6357</strong>! When I'm not writing code, I'm probably analyzing weird data or leading my college football team on the ground. ⚽
                            </p>

                            {/* HIRE ME Sticker */}
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                className="inline-flex items-center gap-2 bg-slate-900 text-white font-black px-5 py-3 border-2 border-slate-900 shadow-[6px_6px_0px_#38bdf8] rotate-2 mt-2 cursor-pointer animate-floating transition-transform duration-700 ease-out"
                            >
                                <ArrowRight size={20} className="text-yellow-400 animate-pulse" />
                                <Link href="mailto:dhananjaips111@gmail.com">ACTIVELY SEEKING ROLES! (HIRE ME PLS)</Link>
                            </motion.div>
                        </motion.div>

                        {/* Quick Facts - STICKY NOTES 📝 */}
                        <motion.div variants={itemVars} className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">

                            {/* Yellow Sticky */}
                            <motion.div whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }} className="relative bg-yellow-200 p-5 border-2 border-slate-800 shadow-[6px_6px_0px_#1e293b] rotate-[-3deg] flex flex-col items-center text-center cursor-pointer">
                                <div className="absolute -top-3 text-red-500 drop-shadow-md"><Pin size={24} className="fill-red-500" /></div>
                                <GraduationCap size={32} className="mb-2 text-slate-800" strokeWidth={2.5} />
                                <h4 className="font-black uppercase tracking-wider text-slate-900 text-sm">Education</h4>
                                <p className="font-bold text-slate-700 text-xs mt-1">B.Tech CSE (IoT)</p>
                            </motion.div>

                            {/* Sky Sticky */}
                            <motion.div whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }} className="relative bg-sky-200 p-5 border-2 border-slate-800 shadow-[6px_6px_0px_#1e293b] rotate-[2deg] flex flex-col items-center text-center cursor-pointer">
                                <div className="absolute -top-3 text-red-500 drop-shadow-md"><Pin size={24} className="fill-red-500" /></div>
                                <Briefcase size={32} className="mb-2 text-slate-800" strokeWidth={2.5} />
                                <h4 className="font-black uppercase tracking-wider text-slate-900 text-sm">Experience</h4>
                                <p className="font-bold text-slate-700 text-xs mt-1">Ex-Explorin Intern</p>
                            </motion.div>

                            {/* Pink Sticky */}
                            <motion.div whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }} className="relative bg-pink-200 p-5 border-2 border-slate-800 shadow-[6px_6px_0px_#1e293b] rotate-[-1deg] flex flex-col items-center text-center cursor-pointer">
                                <div className="absolute -top-3 text-red-500 drop-shadow-md"><Pin size={24} className="fill-red-500" /></div>
                                <Award size={32} className="mb-2 text-slate-800" strokeWidth={2.5} />
                                <h4 className="font-black uppercase tracking-wider text-slate-900 text-sm">Achievements</h4>
                                <p className="font-bold text-slate-700 text-xs mt-1">GATE 2025/26 (DA & CS)</p>
                            </motion.div>

                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}