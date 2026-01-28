import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe2, BarChart3, ShieldCheck, Zap } from 'lucide-react';

const capabilities = [
  {
    title: "Enterprise Architecture",
    desc: "Designing robust Full-Stack ecosystems that handle high traffic and complex data logic without breaking.",
    icon: <Globe2 className="text-blue-500" />
  },
  {
    title: "Custom SaaS Development",
    desc: "Building scalable software-as-a-service platforms from the ground up using React and Node.js.",
    icon: <Code2 className="text-indigo-400" />
  },
  {
    title: "Database Optimization",
    desc: "Mastering MySQL schemas for lightning-fast queries and deep data integrity for growing businesses.",
    icon: <BarChart3 className="text-cyan-400" />
  },
  {
    title: "Performance Engineering",
    desc: "Optimizing every kilobyte to ensure your application earns a 100/100 Lighthouse score.",
    icon: <Zap className="text-yellow-400" />
  },
  {
    title: "Secure Auth Systems",
    desc: "Implementing military-grade JWT, OAuth, and data encryption to protect user information.",
    icon: <ShieldCheck className="text-red-400" />
  },
  {
    title: "Responsive UX Strategy",
    desc: "Crafting pixel-perfect interfaces that adapt perfectly to mobile, tablet, and desktop screens.",
    icon: <Smartphone className="text-green-400" />
  }
];

export default function Capabilities() {
  return (
    <section className="py-32 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h3 className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase mb-4">Expertise</h3>
            <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
              SOLVING COMPLEX <br /> <span className="text-slate-800">CHALLENGES.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg max-w-sm leading-tight italic">
            I don't just write code; I build tools that drive business growth and user engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, backgroundColor: "#0F172A" }}
              className="p-10 rounded-[40px] bg-[#0A0A0A] border border-white/5 hover:border-blue-500/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600/10 transition-all">
                {cap.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{cap.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}