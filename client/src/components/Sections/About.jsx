import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { FaGraduationCap, FaUserCheck, FaNotesMedical, FaRegHandshake } from 'react-icons/fa';

const About = () => {
  const { t } = useLanguage();

  const revealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const chooseUsCards = [
    {
      icon: <FaUserCheck size={24} />,
      titleKey: 'aboutChoose1',
      textKey: 'aboutChoose1Text',
      bg: 'bg-blue-550/10 dark:bg-blue-950/20',
      color: 'text-blue-500'
    },
    {
      icon: <FaNotesMedical size={24} />,
      titleKey: 'aboutChoose2',
      textKey: 'aboutChoose2Text',
      bg: 'bg-cyan-550/10 dark:bg-cyan-950/20',
      color: 'text-cyan-500'
    },
    {
      icon: <FaGraduationCap size={24} />,
      titleKey: 'aboutChoose3',
      textKey: 'aboutChoose3Text',
      bg: 'bg-teal-550/10 dark:bg-teal-950/20',
      color: 'text-teal-500'
    },
    {
      icon: <FaRegHandshake size={24} />,
      titleKey: 'aboutChoose4',
      textKey: 'aboutChoose4Text',
      bg: 'bg-indigo-550/10 dark:bg-indigo-950/20',
      color: 'text-indigo-550'
    }
  ];

  return (
    <section id="about" className="py-14 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-sans"
          >
            {t('aboutTitle')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-slate-500 dark:text-slate-400 mt-4 font-sans"
          >
            {t('aboutSubtitle')}
          </motion.p>
        </div>

        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">
          
          {/* Left Column: Media */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-brand-500 to-accent-500 opacity-15 blur-lg" />
            <div className="relative p-2 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600"
                alt="Uddanam Clinic Internal Reception"
                className="w-full h-72 sm:h-80 object-cover rounded-xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/doctor.jpeg";
                }}
              />
            </div>
          </motion.div>

          {/* Right Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 text-left"
          >
            <h3 className="text-lg font-bold text-slate-800 dark:text-white font-sans">
              Welcome to Uddanam Care Hospital
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {t('aboutIntro')}
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex flex-col space-y-2">
                <span className="text-sm font-bold tracking-wider text-brand-600 dark:text-brand-400 uppercase font-sans">
                  {t('aboutMission')}
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {t('aboutMissionText')}
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex flex-col space-y-2">
                <span className="text-sm font-bold tracking-wider text-accent-600 dark:text-accent-400 uppercase font-sans">
                  {t('aboutVision')}
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {t('aboutVisionText')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white font-sans">
              {t('aboutChoose')}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {chooseUsCards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-5 glass-card border hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-3"
              >
                <div className={`p-3 rounded-lg ${card.bg} ${card.color} flex items-center justify-center`}>
                  {card.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-white font-sans">
                  {t(card.titleKey)}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {t(card.textKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
