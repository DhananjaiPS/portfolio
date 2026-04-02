'use client';

import { motion, Variants } from 'framer-motion'; // <-- 1. Imported Variants here
import { Mail, Phone, Code, Plane, Sparkles } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

// <-- 2. Added : Variants here
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// <-- 3. Added : Variants here
const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 150, damping: 12 },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      <div
        className="absolute inset-0 bg-[url('https://i.pinimg.com/1200x/ac/24/dc/ac24dca5cc4bea79b6c7aee7c65ebb67.jpg')] 
                bg-center bg-repeat opacity-15 pointer-events-none bg-contain"
      ></div>

      {/* LEFT IMAGE – DO NOT TOUCH */}
      {/* <img
        src="https://i.pinimg.com/736x/bc/ee/d6/bceed6e0a37d24288d4bd1ad697d4820.jpg"
        alt=""
        className="relative -top-20 h-full   w-[30%] sm:block hidden border-white  "
      /> */}
      {/* <img
        src="https://i.pinimg.com/736x/b4/5f/63/b45f632f46f9d0ee4d13e683d3ea0fb0.jpg"
        alt=""
        className="relative -top-20   h-[100vh] w-[30%] sm:block hidden border-white  "
      /> */}
      <img src="/pic32.png" alt="" className="absolute top-50 p-4 left-35  h-45 w-40 sm:block hidden border-white  bg-contain animate-floating transition-transform duration-700 ease-out hover:scale-110" />
      <img src="/pic31.png" alt="" className="absolute top-125 p-4 left-45  h-52 rotate-352 w-40 sm:block hidden border-white  bg-contain animate-floating transition-transform duration-700 ease-out hover:scale-110" />


      {/* DOODLE FLOATING SHAPES */}
      <motion.div
        className="absolute left-[45%] top-16 text-yellow-400 text-6xl font-bold"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        ✦
      </motion.div>

      <motion.div
        className="absolute right-32 top-[30%] text-pink-400 text-5xl font-bold"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        ❤
      </motion.div>

      <motion.div
        className="absolute right-[25%] top-[60%] text-blue-400 text-6xl font-bold"
        animate={{ x: [5, 20, 3] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        ★
      </motion.div>

      {/* FLOATING PLANES */}
      {/* Hyperactive Floating Paper Airplanes */}
      <motion.div
        className="absolute top-24 left-[45%] text-sky-400"
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          rotate: [0, 20, -10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Plane size={48} className="rotate-45" />
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-20 text-sky-300"
        animate={{
          y: [0, -50, 0],
          x: [0, -40, 0],
          rotate: [0, -25, 25, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <Plane size={64} className="-rotate-12" />
      </motion.div>
      <motion.div
        className="absolute top-28 left-10 text-sky-200"
        animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Plane size={48} className="rotate-45" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-20 text-sky-100"
        animate={{ y: [0, -30, 0], x: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <Plane size={64} className="-rotate-12" />
      </motion.div>

      {/* RIGHT SIDE CONTENT */}
      <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
        {/* <img src="" alt="" /> */}

        {/* TOP BADGE */}
        <motion.div
          variants={itemVariants}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          whileHover={{ scale: 1.1, rotate: -3 }}
          whileTap={{ scale: 0.9, rotate: 3 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-sky-100 to-white border border-sky-300 text-sky-700 text-sm font-bold mb-4 shadow-[0_0_15px_rgba(56,189,248,0.4)] cursor-grab active:cursor-grabbing"
        >
          <img src="/pic3.png" alt="" className="w-25 h-25 absolute animate-floating transition-transform duration-700 ease-out  top-0 right-100 hover:scale-110" />
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
            <Sparkles size={16} className="text-sky-500" />
          </motion.div>
          Full Stack Intern & IoT Enthusiast
        </motion.div>

        {/* NAME BLOCK */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-6xl md:text-7xl font-extrabold text-slate-900 mt-6 leading-tight"
        >
          Hi, I'm <br />

          {/* NAME WITH GLOW + JELLY ANIMATION */}
          <motion.span
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-sky-500 relative inline-block drop-shadow-xl"
          >
            Dhananjai
            <span className="absolute left-0 bottom-1 w-full h-3 bg-sky-300/40 -z-10 -rotate-1"></span>
          </motion.span>

          <br /> Pratap Singh
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mt-5"
        >
          I build scalable web apps, craft beautiful user experiences, and
          engineer smart IoT solutions — blending hardware magic with modern software.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-5 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 mt-8"
          >
            <motion.div whileHover={{ scale: 1.15, y: -5 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="mailto:dhananjaips111@gmail.com"
                className="group relative flex items-center gap-2 px-4 mb-10 sm:px-8 py-4 bg-gradient-to-r from-sky-400 to-blue-500 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(56,189,248,0.5)] overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <Mail size={20} />
                </motion.div>
                <span className="hidden sm:block">Email Me</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.15, y: -5 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="tel:+916009950848"
                className="flex items-center gap-2 px-4 sm:px-8 py-4 mb-10 bg-white border-2 border-sky-100 hover:border-sky-400 text-slate-700 font-bold rounded-full transition-all shadow-lg hover:shadow-sky-200/50 hover:text-sky-600"
              >
                <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}>
                  <Phone size={20} />
                </motion.div>
                <span className="hidden sm:block">Call Me</span>
              </Link>
            </motion.div>

            {/* Spinning Social Icons */}
            <motion.div whileHover={{ scale: 1.3, rotate: 180 }} whileTap={{ scale: 0.8 }} transition={{ type: "spring", stiffness: 200 }}>
              <Link
                href="#"
                className="flex p-4 bg-white border-2 border-sky-100 mb-10 hover:border-blue-500 hover:bg-blue-50 text-slate-700 rounded-full transition-all shadow-lg hover:text-blue-600"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.3, rotate: -180 }} whileTap={{ scale: 0.8 }} transition={{ type: "spring", stiffness: 200 }}>
              <Link
                href="#"
                className="flex p-4 bg-white border-2 border-sky-100 mb-10 hover:border-sky-500 hover:bg-sky-50 text-slate-700 rounded-full transition-all shadow-lg hover:text-sky-500"
                aria-label="Code"
              >
                <Code size={24} />
              </Link>
            </motion.div>
            <img src="/pic33.png" alt="" className="absolute top-0 right-0  p-4  h-45 w-40 sm:block hidden border-white  bg-contain animate-floating transition-transform duration-700 ease-out hover:scale-110" />
            <img src="/pic42.png" alt="" className="absolute top-120 -right-10  p-4  h-45 w-40 sm:block hidden border-white  bg-contain animate-floating transition-transform duration-700 ease-out hover:scale-110" />

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}