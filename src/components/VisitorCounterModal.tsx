"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { Users, Sparkles, Star } from "lucide-react";

export default function VisitorCounterModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        console.log("Checking visit status...");

        const hasVisited = localStorage.getItem("hasVisited");
        let response;

        if (!hasVisited) {
          response = await fetch("/api/visitor-count", {
            method: "POST",
            cache: 'no-store'
          });
          localStorage.setItem("hasVisited", "true");
        } else {
          response = await fetch("/api/visitor-count", {
            method: "GET",
            cache: 'no-store'
          });
        }

        const data = await response.json();

        if (!response.ok) {
          console.error("Database update failed. Check VS Code terminal.");
          return;
        }

        const targetCount = data.count || 0;
        setIsVisible(true);

        // Animate the number
        const controls = animate(0, targetCount, {
          duration: 1.5,
          ease: "easeOut",
          onUpdate(value) {
            setDisplayCount(Math.round(value));
          },
        });

        // Hide after 3 seconds (gives time to admire the animation)
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);

        return () => controls.stop();
      } catch (error) {
        console.error("Network error / Failed to fetch visitor count:", error);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 p-4 overflow-hidden"
        >
          {/* Main Modal Body */}
          <motion.div
            initial={{ scale: 0.4, y: 150, rotate: -15, opacity: 0 }}
            animate={{ scale: 1, y: 0, rotate: -2, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, rotate: 10, opacity: 0 }}
            transition={{ type: "spring", damping: 12, stiffness: 200 }}
            className="relative bg-white border-4 border-slate-900 p-8 sm:p-12 rounded-3xl shadow-[16px_16px_0px_#38bdf8] flex flex-col items-center max-w-md w-full overflow-hidden"
          >
            {/* Background Pattern */}
            <div
              className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}
            />

            {/* Floating Decorations */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute top-6 right-6 text-yellow-400 z-10"
            >
              <Star size={32} fill="currentColor" strokeWidth={1.5} className="text-slate-900" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute bottom-10 left-6 text-pink-400 z-10"
            >
              <Sparkles size={28} strokeWidth={2} className="text-slate-900 fill-pink-400" />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-yellow-300 p-4 rounded-2xl mb-6 border-2 border-slate-900 shadow-[4px_4px_0px_#1e293b]"
              >
                <Users size={36} className="text-slate-900" strokeWidth={2.5} />
              </motion.div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 tracking-tight">
                Welcome Aboard!
              </h2>

              <p className="text-slate-600 font-bold mb-4 text-sm sm:text-base uppercase tracking-wider">
                You are visitor number
              </p>

              {/* Animated Number with Pulse Effect */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                className="relative"
              >
                <div className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-blue-600 drop-shadow-sm">
                  {displayCount.toLocaleString()}
                </div>
                {/* Offset duplicate for neo-brutalist text shadow effect */}
                <div className="absolute top-1 left-1 text-6xl sm:text-7xl font-black text-slate-900 -z-10 select-none">
                  {displayCount.toLocaleString()}
                </div>
              </motion.div>
            </div>

            {/* Disappearing Progress Bar at bottom */}
            <div className="absolute bottom-0 left-0 h-2 bg-sky-400 w-full z-20">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 3, ease: "linear" }}
                className="h-full bg-slate-900"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}