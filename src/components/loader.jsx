import React from 'react';
import { motion } from 'framer-motion';

export default function Loader({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        // PERBAIKAN: Gunakan Optional Chaining ?. biar tidak crash kalau prop tidak dikirim
        if (typeof onComplete === 'function') {
          onComplete();
        }
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0f]"
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-4 border-[#1e1e2d] border-t-[#06b6d4] rounded-full"
        />
        <p className="text-sm font-mono text-[#06b6d4] tracking-widest uppercase animate-pulse">
          Loading...
        </p>
      </div>
    </motion.div>
  );
}