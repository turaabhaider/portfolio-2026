import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "EcoTrack Pro",
    category: "Full-Stack • Node.js",
    desc: "A carbon footprint monitoring system for logistics companies. Reduced manual reporting time by 40%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", // Placeholder
  },
  {
    title: "Fintech Ledger",
    category: "React • MySQL",
    desc: "Secure banking dashboard with real-time transaction tracking and complex data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800", // Placeholder
  }
];

export default function Projects() {
  return (
    <section className="py-32 px-6 relative bg-glow">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 italic tracking-tighter">SELECTED WORKS</h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-slate-400 max-w-sm text-right font-medium">Focused on scalability and business outcomes.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/40 backdrop-blur-xl"
            >
              <div className="aspect-video overflow-hidden">
                <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={p.title} />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">{p.category}</span>
                  <div className="flex gap-4 text-slate-400">
                     <Github size={20} className="hover:text-white cursor-pointer" />
                     <ArrowUpRight size={20} className="hover:text-white cursor-pointer" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{p.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}