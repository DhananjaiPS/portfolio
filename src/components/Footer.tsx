'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Code, Heart, Sparkles } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Footer() {
  return (
    <footer className="bg-white py-16 relative overflow-hidden border-t-4 border-dashed border-slate-300">

      {/* Notebook Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}
      />

      {/* Background Floating Doodles */}
      <motion.div animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute bottom-10 left-10 text-sky-200 opacity-50 z-0">
        <Sparkles size={60} strokeWidth={1} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-10">

          {/* LEFT: Text & Info */}
          <div className="text-center md:text-left relative flex-1">

            {/* Cute doodle above text */}
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-8 -left-8 text-yellow-400 text-4xl hidden md:block"
            >
              ✦
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 mb-4">
              Let's build <br className="hidden md:block" /> something <span className="text-sky-500 relative inline-block">
                crazy.
                {/* Hand-drawn underline */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400" viewBox="0 0 200 20" preserveAspectRatio="none">
                  <path d="M0,10 Q50,0 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p className="text-slate-600 font-bold text-lg max-w-sm mb-10 mx-auto md:mx-0">
              Building the seamless integration of Web Apps & IoT. Hit me up for collabs or just to say hi!
            </p>

            {/* SOCIAL STICKERS */}
            <div className="flex flex-wrap justify-center md:justify-start gap-5">
              <SocialSticker href="mailto:dhananjaips111@gmail.com" icon={<Mail size={22} />} color="bg-yellow-200" rotate="-rotate-3" />
              <SocialSticker href="tel:+916009950848" icon={<Phone size={22} />} color="bg-sky-200" rotate="rotate-6" />
              <SocialSticker href="https://www.linkedin.com/in/dhananjaips/" icon={<FaLinkedin size={22} />} color="bg-pink-200" rotate="-rotate-6" />
              <SocialSticker href="https://github.com/DhananjaiPS" icon={<Code size={22} />} color="bg-emerald-200" rotate="rotate-3" />
            </div>
          </div>

          {/* RIGHT: Polaroid Image */}
          <div className="flex-shrink-0 relative">
            <motion.div
              whileHover={{ rotate: 0, scale: 1.05, y: -5 }}
              className="relative p-3 pb-10 bg-white border-2 border-slate-800 shadow-[10px_10px_0px_#1e293b] rotate-3 transition-all duration-300 cursor-grab"
            >
              {/* Masking Tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/60 border border-slate-200 backdrop-blur-sm -rotate-2 z-10 shadow-sm" />

              <img
                src="https://i.pinimg.com/1200x/8a/75/4e/8a754e421fc09174cfb127472fa3f3a1.jpg"
                alt="Catch ya later!"
                className="w-56 h-56 md:w-64 md:h-64 object-cover border-2 border-slate-800 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />

              {/* Marker Text */}
              <div className="absolute bottom-2 left-0 w-full text-center font-serif italic text-slate-800 text-lg font-bold">
                Catch ya later! ✌️
              </div>
            </motion.div>
          </div>

        </div>

        {/* COPYRIGHT SECTION */}
        <div className="mt-24 pt-8 border-t-2 border-slate-300 border-dashed text-center flex flex-col items-center justify-center gap-3">
          <p className="text-slate-800 font-black text-sm uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Dhananjai Pratap Singh
          </p>
          <p className="text-slate-500 text-xs font-bold flex items-center gap-1.5 bg-white px-4 py-1.5 rounded-full border-2 border-slate-200">
            Made with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> and a lot of code.
          </p>
        </div>
      </div>
    </footer>
  );
}

// --- HELPER COMPONENT FOR STICKERS ---
function SocialSticker({ href, icon, color, rotate }: { href: string, icon: ReactNode, color: string, rotate: string }) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.15, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 flex items-center justify-center rounded-xl border-2 border-slate-800 shadow-[4px_4px_0px_#1e293b] ${color} ${rotate} hover:rotate-0 transition-all cursor-pointer text-slate-900 hover:shadow-[6px_6px_0px_#1e293b]`}
      >
        {icon}
      </motion.div>
    </Link>
  );
}