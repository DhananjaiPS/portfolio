"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { Users } from "lucide-react";

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
          // If it's a new visitor, POST to increment the count
          response = await fetch("/api/visitor-count", {
            method: "POST",
            cache: 'no-store'
          });
          // Mark as visited in local browser storage
          localStorage.setItem("hasVisited", "true");
        } else {
          // If they've already visited, just GET the current count without incrementing!
          response = await fetch("/api/visitor-count", {
            method: "GET",
            cache: 'no-store'
          });
        }

        const data = await response.json();
        console.log("API Response:", data);

        // Agar API fail hui (e.g., 500 error), toh modal mat dikhao
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

        setTimeout(() => {
          setIsVisible(false);
        }, 2500);

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 20, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="bg-white border-2 border-slate-800 p-8 rounded-2xl shadow-[8px_8px_0px_#38bdf8] flex flex-col items-center max-w-sm w-full mx-4"
          >
            <div className="bg-sky-100 p-4 rounded-full mb-4 border border-sky-200">
              <Users size={32} className="text-sky-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">Welcome to my Portfolio!</h2>
            <p className="text-slate-600 text-sm font-medium mb-4">You are visitor number:</p>

            {/* Animated Number */}
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-700">
              {displayCount.toLocaleString()}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}