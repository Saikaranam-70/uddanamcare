import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashLoader = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 text-white"
        >
          <div className="relative flex flex-col items-center">
            {/* Pulsing Medical Cross / Heart Icon */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-brand-500 shadow-[0_0_50px_rgba(14,165,233,0.5)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-12 w-12 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </motion.div>

            {/* Premium ECG Heartbeat Animation */}
            <svg
              className="w-64 h-16"
              viewBox="0 0 300 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="stroke-brand-400"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 0 50 L 50 50 L 65 30 L 75 75 L 85 50 L 120 50 L 125 40 L 130 60 L 135 50 L 160 50 L 175 10 L 190 90 L 205 50 L 240 50 L 250 40 L 255 60 L 260 50 L 300 50"
              />
            </svg>

            {/* Clinic Name */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 font-sans text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-accent-300"
            >
              UDDANAM CARE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-1 text-[10px] tracking-widest uppercase text-slate-400 font-sans"
            >
              Health Clinic & Diagnostics
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashLoader;
