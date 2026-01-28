import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Rotation values
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Dynamic Shadow Logic: Moves shadow opposite to tilt
  const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], [20, -20]);
  const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], [20, -20]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0); y.set(0);
  };

  return (
    <div style={{ perspective: "1200px" }} className="w-full py-4">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d",
          boxShadow: `${shadowX.get()}px ${shadowY.get()}px 50px rgba(37, 99, 235, 0.1)` 
        }}
        className="relative group w-full aspect-[4/3] rounded-[40px] bg-[#0A0A0A] border border-white/10 overflow-hidden"
      >
        {/* Project Image Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          style={{ 
            backgroundImage: `url(${project.image})`,
            transform: "translateZ(-40px) scale(1.1)" 
          }}
        />

        {/* Content Layer (Popping Forward) */}
        <div 
          style={{ transform: "translateZ(60px)" }}
          className="absolute inset-0 z-20 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent"
        >
          <h4 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-4">
            {project.title}
          </h4>
          
          <div className="flex justify-between items-center">
             <div className="flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold px-3 py-1 bg-white/10 rounded-full text-slate-300">
                    {tag}
                  </span>
                ))}
             </div>
             <motion.div 
               whileHover={{ scale: 1.2, backgroundColor: "#ffffff", color: "#000000" }}
               className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white"
             >
                <ExternalLink size={20} />
             </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}