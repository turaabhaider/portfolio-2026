import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "Eco-System SaaS",
    category: "Full Stack Architecture",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    tags: ["React", "Node.js", "MySQL"],
    github: "#",
    live: "#"
  },
  {
    title: "Neuro-Interface UI",
    category: "Frontend Mastery",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    tags: ["Next.js", "Tailwind", "Framer"],
    github: "#",
    live: "#"
  }
];

export default function Works() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 px-8 max-w-7xl mx-auto pb-32">
      <div className="mb-20">
        <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-6">
          Selected <span className="text-blue-600">Works.</span>
        </h2>
        <p className="text-slate-500 text-xl max-w-2xl font-medium">
          A showcase of high-performance digital solutions built with technical precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}