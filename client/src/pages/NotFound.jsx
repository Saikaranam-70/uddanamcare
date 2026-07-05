import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHeartBroken, FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 transition-colors duration-300">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-brand-200/20 dark:bg-brand-950/10 blur-[100px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-accent-200/20 dark:bg-accent-950/10 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full p-8 md:p-12 glass-card border shadow-2xl text-center relative z-10"
      >
        {/* Pulse Broken Heart Icon */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1, 1.08, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-950/30 text-rose-500 mx-auto"
        >
          <FaHeartBroken size={36} />
        </motion.div>

        <h1 className="text-6xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight">
          404
        </h1>
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 font-sans mt-3">
          Diagnosed: Page Not Found
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
          The clinic resource you are looking for might have been moved, updated, or does not exist.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="btn-ripple inline-flex items-center space-x-2 bg-gradient-to-r from-brand-600 to-accent-600 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <FaArrowLeft size={12} />
            <span>Go Back Home</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
