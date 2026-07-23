import React from 'react';
import { motion } from 'framer-motion';
// PERBAIKAN: Import diarahin ke icons.jsx & panggil SmartphoneIcon
import { CodeIcon, SmartphoneIcon, DatabaseIcon, LayoutIcon } from './icons.jsx';

const skills = [
  { name: 'Laravel', val: 95, icon: <CodeIcon className="w-5 h-5 text-[#f43f5e]" /> },
  { name: 'Flutter', val: 90, icon: <SmartphoneIcon className="w-5 h-5 text-[#06b6d4]" /> },
  { name: 'Firebase', val: 85, icon: <DatabaseIcon className="w-5 h-5 text-[#fbbf24]" /> },
  { name: 'System Analysis & Architecture', val: 85, icon: <LayoutIcon className="w-5 h-5 text-[#8b5cf6]" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0f] border-t border-[#111118] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 mb-20 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-4xl font-bold mb-12 text-[#e2e8f0]"
        >
          Technical <span className="text-[#06b6d4]">Matrix</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {skills.map((skill, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center space-x-3">
                  {skill.icon}
                  <span className="text-[#e2e8f0] font-medium text-lg">{skill.name}</span>
                </div>
                <span className="text-[#06b6d4] font-mono">{skill.val}%</span>
              </div>
              <div className="w-full bg-[#111118] h-3 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }} 
                  whileInView={{ width: `${skill.val}%` }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] relative"
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee Running Text */}
      <div className="w-full overflow-hidden bg-[#111118] py-6 flex border-y border-[#64748b]/10 transform -rotate-1 origin-left scale-105">
        <div className="animate-marquee flex text-[#06b6d4] font-mono text-2xl space-x-8 uppercase tracking-widest opacity-80 whitespace-nowrap">
           <span>Laravel • Flutter • Firebase • MySQL • PostgreSQL • Tailwind • Git • Figma • Postman • </span>
           <span>Laravel • Flutter • Firebase • MySQL • PostgreSQL • Tailwind • Git • Figma • Postman • </span>
           <span>Laravel • Flutter • Firebase • MySQL • PostgreSQL • Tailwind • Git • Figma • Postman • </span>
        </div>
      </div>
    </section>
  );
}