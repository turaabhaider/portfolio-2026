import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  // Helper to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md border-b border-white/5 bg-black/20">
      <Link to="/" className="text-xl font-black tracking-tighter uppercase group">
        Syed<span className="text-blue-600 group-hover:text-white transition-colors">.</span>Turaab
      </Link>

      <div className="hidden md:flex gap-12 text-[10px] font-bold tracking-[0.3em] uppercase items-center">
        <Link 
          to="/works" 
          className={`${isActive('/works') ? 'text-blue-500' : 'text-slate-500'} hover:text-white transition-colors`}
        >
          Selected Works
        </Link>
        <Link 
          to="/services" 
          className={`${isActive('/services') ? 'text-blue-500' : 'text-slate-500'} hover:text-white transition-colors`}
        >
          Services
        </Link>
        
        <Link 
          to="/contact" 
          className="bg-white text-black px-6 py-2.5 rounded-full hover:bg-blue-600 hover:text-white transition-all font-black shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          Hire Me
        </Link>
      </div>

      {/* Mobile Menu Icon (Placeholder for functionality) */}
      <div className="md:hidden text-slate-500 uppercase text-[10px] font-bold tracking-widest">
        Menu
      </div>
    </nav>
  );
};

export default Navbar;