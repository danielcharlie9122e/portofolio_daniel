import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, DownloadIcon, LinkedinIcon, GithubIcon, InstagramIcon } from './Icons';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const roles = ['Frontend Developer', 'System Analyst', 'Flutter Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 40,
      y: (e.clientY / window.innerHeight - 0.5) * 40,
    });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) setTimeout(() => setIsDeleting(true), 2000);
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-40"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", damping: 50, stiffness: 400 }}
      >
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-[#06b6d4] rounded-full mix-blend-screen filter blur-[100px] opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-[#8b5cf6] rounded-full mix-blend-screen filter blur-[100px] opacity-30" />
      </motion.div>

      <div className="z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="mx-auto mb-8 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#06b6d4]/30 shadow-[0_0_40px_rgba(6,182,212,0.2)]"
        >
          <img src="foto.jpg" alt="Daniel Charlie" className="w-full h-full object-cover object-top" />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-[#64748b] text-lg md:text-xl mb-4 tracking-wide uppercase font-semibold">
          Daniel Charlie Samuel Siburian
        </motion.h2>
        
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#e2e8f0] mb-6 leading-tight">
          Building Systems <br /> for <span className="text-[#06b6d4]">Impact.</span>
        </motion.h1>
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="text-2xl md:text-3xl font-mono text-[#8b5cf6] h-10 flex items-center justify-center">
          <span>{currentText}</span>
          <span className="w-3 h-8 bg-[#8b5cf6] ml-2 animate-blink inline-block" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }} className="flex items-center justify-center gap-2 text-[#64748b] mt-6">
          <MapPinIcon className="w-4 h-4" />
          <span>Batam, Riau Islands, Indonesia</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 }} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="CV_Daniel_Charlie.pdf" download="CV_Daniel_Charlie_Siburian.pdf" className="flex items-center gap-2 px-6 py-3 bg-[#06b6d4] text-[#0a0a0f] font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            <DownloadIcon className="w-5 h-5" /> Download CV
          </a>
          <a href="https://www.linkedin.com/in/daniel-charlie-samuel-siburian-1a9a162a3/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full border border-[#64748b]/30 bg-[#111118] text-[#e2e8f0] hover:text-[#06b6d4] hover:border-[#06b6d4] hover:scale-110 transition-all duration-300 shadow-lg">
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a href="https://github.com/danielcharlie9122e" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full border border-[#64748b]/30 bg-[#111118] text-[#e2e8f0] hover:text-[#06b6d4] hover:border-[#06b6d4] hover:scale-110 transition-all duration-300 shadow-lg">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/danielchrliie/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full border border-[#64748b]/30 bg-[#111118] text-[#e2e8f0] hover:text-[#f43f5e] hover:border-[#f43f5e] hover:scale-110 transition-all duration-300 shadow-lg">
            <InstagramIcon className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}