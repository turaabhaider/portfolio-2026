import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLogs = [
  "INITIALIZING CORE...",
  "LOADING REACT FRAMEWORK...",
  "ESTABLISHING SECURE CONNECTION...",
  "SYNCING DATABASE SCHEMAS...",
  "MOUNTING UI COMPONENTS...",
  "SYSTEM ONLINE."
];

export default function BootLoader({ onComplete }) {
  const [currentLog, setCurrentLog] = useState(0);

  useEffect(() => {
    if (currentLog < bootLogs.length) {
      const timer = setTimeout(() => {
        setCurrentLog(prev => prev + 1);
      }, 400); // Speed of the boot sequence
      return () => clearTimeout(timer);
    } else {
      setTimeout(onComplete, 800);
    }
  }, [currentLog, onComplete]);

  return (
    <motion.div 
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center font-mono p-6"
    >
      <div className="max-w-md w-full">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 rounded-full bg-blue-600 animate-pulse" />
          <h2 className="text-blue-500 text-xs font-bold tracking-[0.3em]">SYED.TURAAB OS v1.0</h2>
        </div>
        
        <div className="space-y-2">
          {bootLogs.slice(0, currentLog + 1).map((log, i) => (
            <motion.p 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white text-[10px] md:text-xs tracking-wider"
            >
              <span className="text-slate-600 mr-2">[{new Date().toLocaleTimeString()}]</span>
              {log}
            </motion.p>
          ))}
        </div>

        <div className="mt-12 w-full h-[2px] bg-white/5 relative overflow-hidden">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-y-0 left-0 bg-blue-600"
          />
        </div>
      </div>
    </motion.div>
  );
}