import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const nameSequence = ["D", "Da", "Dan", "Dani", "Daniel", "Daniel C", "Daniel Charlie"];

export default function Loader({ onComplete }) {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const interval = setInterval(() => {
      setTextIndex((prev) => {
        if (prev < nameSequence.length - 1) return prev + 1;
        clearInterval(interval);
        setTimeout(() => {
          document.body.style.overflow = 'auto';
          onComplete();
        }, 800);
        return prev;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ y: '-100%', opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0f]"
    >
      <h1 className="text-4xl font-bold text-[#e2e8f0] tracking-widest h-12">
        {nameSequence[textIndex]}
      </h1>
      <motion.div 
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-48 h-[2px] bg-[#06b6d4] mt-4 origin-left"
      />
    </motion.div>
  );
}