import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, LinkedinIcon, GithubIcon, InstagramIcon } from './Icons';

export default function Contact() {
  const [stage, setStage] = useState(0);

  const handleInView = () => {
    if (stage !== 0) return;
    setTimeout(() => setStage(1), 800);
    setTimeout(() => setStage(2), 2000);
    setTimeout(() => setStage(3), 3200);
    setTimeout(() => setStage(4), 4500);
  };

  return (
    <section className="py-32 px-6 bg-[#0a0a0f] relative">
      <div className="max-w-3xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold mb-12 text-[#e2e8f0] text-center">
          System <span className="text-[#8b5cf6]">Portal</span>
        </motion.h2>
        
        <motion.div onViewportEnter={handleInView} viewport={{ amount: 0.5, once: true }} className="w-full bg-[#111118] border border-[#64748b]/30 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden font-mono text-sm sm:text-base">
          <div className="bg-[#1e1e28] px-4 py-3 flex items-center space-x-2 border-b border-[#64748b]/20">
            <div className="w-3 h-3 rounded-full bg-[#f43f5e]" />
            <div className="w-3 h-3 rounded-full bg-[#fbbf24]" />
            <div className="w-3 h-3 rounded-full bg-[#4ade80]" />
            <span className="ml-4 text-[#64748b] text-xs flex-1 text-center pr-10">daniel@portfolio ~ bash</span>
          </div>
          
          <div className="p-6 md:p-8 text-[#4ade80] min-h-[300px]">
            {stage >= 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4">
                <span className="text-[#06b6d4]">daniel@portfolio:~$</span> <span className="text-[#e2e8f0]">whoami</span>
                <p className="text-[#e2e8f0] mt-2 ml-4 border-l-2 border-[#4ade80]/30 pl-4">Daniel Charlie Samuel Siburian</p>
              </motion.div>
            )}
            {stage >= 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4">
                <span className="text-[#06b6d4]">daniel@portfolio:~$</span> <span className="text-[#e2e8f0]">skills</span>
                <p className="text-[#e2e8f0] mt-2 ml-4 border-l-2 border-[#4ade80]/30 pl-4">Laravel, Flutter, Firebase, System Analysis</p>
              </motion.div>
            )}
            {stage >= 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4">
                <span className="text-[#06b6d4]">daniel@portfolio:~$</span> <span className="text-[#e2e8f0]">contact --links</span>
                <div className="text-[#e2e8f0] mt-2 ml-4 border-l-2 border-[#4ade80]/30 pl-4 space-y-2">
                  <a href="mailto:danielces1120@gmail.com" className="hover:text-[#06b6d4] transition-colors flex items-center gap-2 w-fit">
                    <MailIcon className="w-4 h-4" /> danielces1120@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/daniel-charlie-samuel-siburian-1a9a162a3/" target="_blank" rel="noreferrer" className="hover:text-[#06b6d4] transition-colors flex items-center gap-2 w-fit">
                    <LinkedinIcon className="w-4 h-4" /> LinkedIn Profile
                  </a>
                  <a href="https://github.com/danielcharlie9122e" target="_blank" rel="noreferrer" className="hover:text-[#06b6d4] transition-colors flex items-center gap-2 w-fit">
                    <GithubIcon className="w-4 h-4" /> GitHub Repository
                  </a>
                  <a href="https://www.instagram.com/danielchrliie/" target="_blank" rel="noreferrer" className="hover:text-[#06b6d4] transition-colors flex items-center gap-2 w-fit">
                    <InstagramIcon className="w-4 h-4" /> Instagram Profile
                  </a>
                </div>
              </motion.div>
            )}
            {stage >= 4 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <span className="text-[#06b6d4]">daniel@portfolio:~$</span>
                <span className="inline-block w-2.5 h-5 bg-[#4ade80] animate-blink align-middle ml-2 translate-y-[-2px]" />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}