import React from 'react';
// PASTI KAN DUA IMPORT INI ADA:
import { motion } from 'framer-motion';
import { MapPinIcon, DownloadIcon, LinkedinIcon, GithubIcon, InstagramIcon } from './icons.jsx';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative px-6 md:px-12 pt-20 bg-[#0a0a0f] text-[#e2e8f0]">
      <div className="max-w-4xl mx-auto text-center z-10">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12121a] border border-[#1e1e2d] mb-8"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs md:text-sm font-medium text-[#94a3b8]">
            Available for Hire / Collaboration
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Halo, Saya <span className="text-[#06b6d4]">Daniel</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-2xl text-[#94a3b8] max-w-2xl mx-auto mb-6 font-light"
        >
          Software Engineering Student & Full-Stack Web Developer.
        </motion.p>

        {/* Location */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-2 text-sm text-[#64748b] mb-10"
        >
          <MapPinIcon className="w-4 h-4 text-[#06b6d4]" />
          <span>Indonesia</span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-[#06b6d4] text-black font-semibold text-sm hover:bg-[#0891b2] transition-colors shadow-lg shadow-[#06b6d4]/20"
          >
            Lihat Proyek
          </a>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#12121a] border border-[#1e1e2d] text-sm font-semibold hover:border-[#06b6d4]/50 transition-colors"
          >
            <DownloadIcon className="w-4 h-4 text-[#06b6d4]" />
            <span>Unduh CV</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-6 text-[#64748b]"
        >
          <a href="https://github.com/danielcharlie9122e" target="_blank" rel="noreferrer" className="hover:text-[#06b6d4] transition-colors p-2">
            <GithubIcon className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/daniel-charlie-samuel-siburian-1a9a162a3/?locale=in" target="_blank" rel="noreferrer" className="hover:text-[#06b6d4] transition-colors p-2">
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/danielchrliie/" target="_blank" rel="noreferrer" className="hover:text-[#06b6d4] transition-colors p-2">
            <InstagramIcon className="w-6 h-6" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}