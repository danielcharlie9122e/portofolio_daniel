import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { label: 'Tahun Pengalaman', value: '2+' },
    { label: 'Proyek Selesai', value: '10+' },
    { label: 'Spesialisasi', value: 'Web & Software' },
  ];

  return (
    <section id="about" className="py-20 bg-[#0a0a0f] text-[#e2e8f0] px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Tentang <span className="text-[#06b6d4]">Saya</span>
          </h2>
          <div className="w-20 h-1 bg-[#06b6d4] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Card Deskripsi */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#12121a] border border-[#1e1e2d] shadow-xl hover:border-[#06b6d4]/50 transition-colors duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Software Engineering Student & Developer
            </h3>
            <p className="text-[#94a3b8] leading-relaxed mb-6">
              Halo! Saya Daniel, seorang pengembang perangkat lunak yang berfokus pada pembangunan aplikasi web modern, performan, dan berarsitektur bersih. Saya memiliki ketertarikan tinggi pada *full-stack development*, desain sistem, serta metodologi pengembangan modern.
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              Selalu antusias mempelajari teknologi baru dan siap berkontribusi dalam membangun solusi digital yang memberikan dampak nyata.
            </p>
          </motion.div>

          {/* Stats & Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="p-6 rounded-xl bg-[#12121a] border border-[#1e1e2d] text-center"
                >
                  <h4 className="text-3xl font-bold text-[#06b6d4] mb-1">{stat.value}</h4>
                  <p className="text-xs text-[#94a3b8] uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Quick Info List */}
            <div className="p-6 rounded-xl bg-[#12121a] border border-[#1e1e2d] space-y-3 text-sm text-[#cbd5e1]">
              <div className="flex justify-between border-b border-[#1e1e2d] pb-2">
                <span className="text-[#64748b]">Fokus Utama:</span>
                <span className="font-medium text-white">Web & Mobile Application</span>
              </div>
              <div className="flex justify-between border-b border-[#1e1e2d] pb-2">
                <span className="text-[#64748b]">Status:</span>
                <span className="font-medium text-emerald-400">Terbuka untuk Kolaborasi / Magang</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748b]">Metodologi:</span>
                <span className="font-medium text-white">Agile / Scrum / Prototype</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}