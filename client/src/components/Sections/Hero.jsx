import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import AnimatedCounter from '../UI/AnimatedCounter';
import { 
  FaStethoscope, 
  FaPills, 
  FaHeartbeat, 
  FaCalendarAlt, 
  FaVolumeUp 
} from 'react-icons/fa';

const Hero = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatVariants = (delay = 0, yRange = [-10, 10]) => ({
    animate: {
      y: yRange,
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay,
        },
      },
    },
  });

  const playTeluguWelcomeVoice = () => {
    try {
      const audio = new Audio('/audio.mpeg');
      audio.play().catch(err => {
        console.log("Audio playback blocked or failed:", err);
      });
    } catch (e) {
      console.error("Error playing welcome audio:", e);
    }
  };

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-14 md:pt-32 md:pb-16 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-200/40 dark:bg-brand-950/20 blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-accent-200/40 dark:bg-accent-950/20 blur-[120px]" />
      </div>

      {/* Floating Medical Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          variants={floatVariants(0, [-12, 12])}
          animate="animate"
          className="absolute top-24 left-[8%] md:left-[12%] text-brand-400/30 dark:text-brand-500/20"
        >
          <FaStethoscope size={48} className="rotate-12" />
        </motion.div>
        <motion.div
          variants={floatVariants(1, [-8, 8])}
          animate="animate"
          className="absolute bottom-28 left-[5%] md:left-[8%] text-accent-400/30 dark:text-accent-500/20"
        >
          <FaPills size={40} className="-rotate-12" />
        </motion.div>
        <motion.div
          variants={floatVariants(1.5, [-15, 15])}
          animate="animate"
          className="absolute top-20 right-[5%] md:right-[15%] text-brand-400/30 dark:text-brand-500/20"
        >
          <FaHeartbeat size={44} className="animate-pulse" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-6 text-left"
          >
            {/* Tagline */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-100 dark:border-brand-900 w-fit"
            >
              <FaHeartbeat className="text-brand-500 animate-pulse" size={14} />
              <span className="text-xs font-bold tracking-wider text-brand-700 dark:text-brand-400 uppercase font-sans">
                Uddanam Care Hospital
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] font-sans"
            >
              {t('heroTitle')}
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base text-slate-605 dark:text-slate-300 max-w-lg leading-relaxed"
            >
              {t('heroSubtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-2"
            >
              <button
                onClick={scrollToBooking}
                className="btn-ripple flex items-center space-x-2 bg-gradient-to-r from-brand-600 to-accent-600 text-white font-bold px-5 py-3 rounded-lg shadow-md hover:shadow-lg hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-xs md:text-sm"
              >
                <FaCalendarAlt size={14} />
                <span>{t('heroCTA')}</span>
              </button>
              <button
                onClick={scrollToContact}
                className="btn-ripple bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-bold px-5 py-3 rounded-lg shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer text-xs md:text-sm"
              >
                {t('heroContactCTA')}
              </button>
              <button
                onClick={playTeluguWelcomeVoice}
                className="btn-ripple bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-455 border border-brand-100 dark:border-brand-900/60 font-bold px-5 py-3 rounded-lg shadow-sm hover:bg-brand-100 dark:hover:bg-brand-900/50 transition-colors cursor-pointer text-xs md:text-sm flex items-center space-x-2"
              >
                <FaVolumeUp className="animate-bounce text-brand-500" size={14} />
                <span>స్వాగతం వాయిస్ (Welcome Voice)</span>
              </button>
            </motion.div>

            {/* Statistics */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800"
            >
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold text-brand-600 dark:text-brand-400">
                  <AnimatedCounter endValue="10000" suffix="+" />
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t('statPatients')}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold text-brand-600 dark:text-brand-400">
                  <AnimatedCounter endValue="15" suffix="+" />
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t('statDoctors')}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold text-brand-600 dark:text-brand-400">
                  <AnimatedCounter endValue="99" suffix="%" />
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t('statSuccess')}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold text-brand-600 dark:text-brand-400">
                  <AnimatedCounter endValue="12" suffix="+" />
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t('statYears')}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Glowing Backdrop Ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-brand-500 to-accent-500 opacity-20 blur-xl animate-pulse-slow" />
            
            {/* Glassmorphic border container */}
            <div className="relative p-2.5 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 dark:border-slate-800/50 rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full">
              <img
                src="/doctor.jpeg"
                alt="Dr. Gorakala Giribabu"
                className="w-full h-80 md:h-[350px] object-cover object-top rounded-2xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600";
                }}
              />
              
              {/* Overlay Stat badge */}
              <motion.div
                variants={floatVariants(0.5, [-5, 5])}
                animate="animate"
                className="absolute bottom-6 left-6 p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center space-x-3.5"
              >
                <div className="p-2.5 bg-brand-100 dark:bg-brand-950 rounded-lg text-brand-600 dark:text-brand-400">
                  <FaHeartbeat size={20} className="animate-pulse" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Chief Consultant</span>
                  <span className="text-sm font-extrabold text-slate-800 dark:text-white">Dr. Gorakala Giribabu</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
