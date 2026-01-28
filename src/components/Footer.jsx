import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-24 pb-12 px-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter mb-8 leading-none">
              Let's build the <br /> 
              <span className="text-blue-600">next big thing.</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Currently accepting new freelance projects and collaborations worldwide.
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-4 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all group shadow-[0_0_40px_rgba(37,99,235,0.2)]"
            >
              Start a Conversation 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Middle Row: Socials & Quick Links */}
        <div className="flex flex-col md:flex-row justify-between items-center py-10 border-y border-white/5 gap-8">
          <div className="text-xl font-black tracking-tighter uppercase">
            Syed<span className="text-blue-600">.</span>Turaab
          </div>
          
          <div className="flex gap-8">
            <a href="https://github.com" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="https://linkedin.com" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:hello@syedturaab.dev" className="text-slate-500 hover:text-white transition-colors"><Mail size={20} /></a>
            <a href="https://twitter.com" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Bottom Row: Legal & Logistics */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 gap-4">
          <p>© {currentYear} SYED TURAAB. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <span>KARACHI, PK</span>
            <span className="text-slate-800 hidden md:block">|</span>
            <span>BUILT WITH REACT & TAILWIND V4</span>
          </div>
        </div>
      </div>
    </footer>
  );
}