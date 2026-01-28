import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen pt-32 pb-20 px-8 max-w-7xl mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-20">
        {/* Left Side: Contact Info */}
        <div>
          <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-8">
            Start a <br /> <span className="text-blue-600">Conversation.</span>
          </h2>
          <p className="text-slate-400 text-xl mb-12 leading-relaxed">
            Ready to architect your next high-performance system? Let's discuss your technical requirements and business goals.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email</p>
                <p className="text-lg font-bold">hello@syedturaab.dev</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/10 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Phone</p>
                <p className="text-lg font-bold">92 321 0000000</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-600/10 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Location</p>
                <p className="text-lg font-bold">DHA Phase 8, Karachi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Glassmorphism Form */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full -z-10" />
          <form className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[40px] space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Subject</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-all" placeholder="Project Inquiry" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Message</label>
              <textarea rows="5" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-all resize-none" placeholder="Tell me about your project..." />
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest py-5 rounded-2xl transition-all shadow-lg shadow-blue-500/20">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}