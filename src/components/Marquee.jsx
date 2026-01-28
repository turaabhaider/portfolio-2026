import React from 'react';
import { motion } from 'framer-motion';

const techLogos = [
  "REACT", "NODE.JS", "MYSQL", "NEXT.JS", "TAILWIND", 
  "TYPESCRIPT", "FRAMER MOTION", "EXPRESS", "MONGODB", "AWS"
];

export default function Marquee() {
  return (
    <div className="bg-black py-20 overflow-hidden border-y border-white/5 relative">
      {/* Side Fades for Depth */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

      <motion.div 
        className="flex whitespace-nowrap gap-20"
        animate={{ x: [0, -1000] }}
        transition={{ 
          repeat: Infinity, 
          duration: 20, 
          ease: "linear" 
        }}
      >
        {/* We double the array to create the infinite loop effect */}
        {[...techLogos, ...techLogos].map((logo, index) => (
          <span 
            key={index} 
            className="text-6xl md:text-8xl font-black text-slate-900 hover:text-blue-600 transition-colors cursor-default uppercase italic tracking-tighter"
          >
            {logo}
          </span>
        ))}
      </motion.div>
    </div>
  );
}