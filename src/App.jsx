import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Component Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BootLoader from './components/BootLoader';

// Page Imports
import Home from './pages/Home';
import Works from './pages/Works';
import ServicesPage from './pages/ServicesPage';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      {/* 1. System Boot Loader */}
      <AnimatePresence mode="wait">
        {loading && <BootLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-x-hidden font-sans cursor-none">
          
          {/* 2. Global Interactive Cursor */}
          <CustomCursor />

          {/* 3. Dynamic Atmospheric Background */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <motion.div 
              animate={{ 
                x: [0, 80, 0], 
                y: [0, 40, 0], 
                scale: [1, 1.2, 1] 
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[120px]" 
            />
            <motion.div 
              animate={{ 
                x: [0, -60, 0], 
                y: [0, 80, 0], 
                scale: [1, 1.1, 1] 
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/10 blur-[100px]" 
            />
          </div>

          {/* 4. Film Grain Texture Overlay */}
          <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* 5. Main Content Wrapper */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            
            <main className="flex-grow">
              <AnimatedRoutes />
            </main>

            <Footer />
          </div>
        </div>
      )}
    </Router>
  );
}