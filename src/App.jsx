import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import semua komponen yang sudah kita pisah
import Loader from './components/Loader';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Style bawaan (jika nanti mau dipindah ke index.css juga bisa)
const CustomStyles = () => (
  <style>{`
    :root {
      --deep-dark: #0a0a0f;
      --surface: #111118;
      --primary: #06b6d4;
      --secondary: #8b5cf6;
      --accent: #f43f5e;
      --text-primary: #e2e8f0;
      --text-muted: #64748b;
    }
    body {
      background-color: var(--deep-dark);
      color: var(--text-primary);
      margin: 0;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      overflow-x: hidden;
    }
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee 25s linear infinite;
      display: flex;
      width: max-content;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .animate-blink {
      animation: blink 530ms infinite;
    }
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: var(--deep-dark); }
    ::-webkit-scrollbar-thumb { background: var(--surface); border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: var(--text-muted); }
  `}</style>
);

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative flex flex-col w-full bg-[#0a0a0f] min-h-screen selection:bg-[#06b6d4]/30 selection:text-white">
      <CustomStyles />
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Navbar */}
        <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-[#111118]">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <span className="text-[#e2e8f0] font-bold text-xl tracking-tighter">
              Daniel<span className="text-[#06b6d4]">.</span>
            </span>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-[#64748b]">
              <span className="hover:text-[#e2e8f0] cursor-pointer transition-colors">About</span>
              <span className="hover:text-[#e2e8f0] cursor-pointer transition-colors">Matrix</span>
              <span className="hover:text-[#e2e8f0] cursor-pointer transition-colors">Architecture</span>
              <span className="hover:text-[#e2e8f0] cursor-pointer transition-colors">Portal</span>
            </div>
          </div>
        </nav>

        {/* Panggil komponen di sini */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        
        <footer className="py-8 text-center border-t border-[#111118] bg-[#0a0a0f]">
          <p className="text-[#64748b] text-sm">
            © 2026 Daniel Charlie Samuel Siburian. Politeknik Negeri Batam.
          </p>
        </footer>
      </motion.div>
    </div>
  );
}