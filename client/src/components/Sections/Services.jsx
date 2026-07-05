import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { 
  FaPills, 
  FaVials, 
  FaXRay, 
  FaHeartbeat, 
  FaBed, 
  FaProcedures,
  FaTimes
} from 'react-icons/fa';

const Services = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState(null);

  const servicesData = [
    {
      id: 1,
      icon: <FaPills size={28} />,
      title: "Pharmacy",
      description: "Well-stocked, 24/7 in-house pharmacy providing prescription medications, OTC drugs, and healthcare consumables directly to our patients.",
      details: [
        "Fully computerized inventory management for trace accuracy.",
        "Equipped with refrigeration systems to store temperature-sensitive vaccines and insulin.",
        "Run by certified and registered pharmacists to guide you on dosage and instructions.",
        "Open 24/7 for emergency prescription fulfillment."
      ],
      color: "from-blue-500 to-indigo-500",
      glow: "shadow-[0_8px_30px_rgb(59,130,246,0.15)] hover:shadow-[0_8px_30px_rgb(59,130,246,0.3)]"
    },
    {
      id: 2,
      icon: <FaVials size={28} />,
      title: "Diagnostic Laboratory",
      description: "Modern laboratory offering biochemistry, pathology, hematology, and clinical microbiology tests with automated report delivery.",
      details: [
        "Equipped with fully automated biochemistry analyzers and cell counters.",
        "Quality controls run daily to ensure absolute report precision.",
        "Support for home sample collection and online report downloads.",
        "Comprehensive health check-up packages for all age groups."
      ],
      color: "from-cyan-500 to-blue-500",
      glow: "shadow-[0_8px_30px_rgb(6,182,212,0.15)] hover:shadow-[0_8px_30px_rgb(6,182,212,0.3)]"
    },
    {
      id: 3,
      icon: <FaXRay size={28} />,
      title: "Digital X-Ray",
      description: "Low-radiation digital radiography system providing immediate, high-definition bone and organ imaging for fast diagnostic results.",
      details: [
        "Advanced high-frequency digital X-Ray technology.",
        "Significant reduction in radiation exposure compared to conventional X-Rays.",
        "Instant image generation and digital transmission to consulting doctors.",
        "Experienced radiology technicians to ensure patient safety and comfort."
      ],
      color: "from-teal-500 to-emerald-500",
      glow: "shadow-[0_8px_30px_rgb(20,184,166,0.15)] hover:shadow-[0_8px_30px_rgb(20,184,166,0.3)]"
    },
    {
      id: 4,
      icon: <FaHeartbeat size={28} />,
      title: "ECG Department",
      description: "Electrocardiogram monitoring to detect cardiac arrhythmias, heart rate variability, and coronary blood flow anomalies.",
      details: [
        "12-channel digital ECG machines with diagnostic auto-interpretive algorithms.",
        "Experienced technicians to perform cardiac trace checks under minutes.",
        "Instant diagnostic traces reviewed by Dr. Gorakala Giribabu.",
        "Dedicated room for stress testing (TMT) and Holter monitoring."
      ],
      color: "from-rose-500 to-red-500",
      glow: "shadow-[0_8px_30px_rgb(244,63,94,0.15)] hover:shadow-[0_8px_30px_rgb(244,63,94,0.3)]"
    },
    {
      id: 5,
      icon: <FaBed size={28} />,
      title: "In-Patient Care",
      description: "Comfortable semi-private and general wards equipped with patient monitoring devices, oxygen lines, and 24/7 nursing supervision.",
      details: [
        "Clean, hygienic, air-conditioned patient recovery cabins.",
        "Piped oxygen outlets and medical suction systems beside every bed.",
        "Highly experienced nursing staff on duty round-the-clock.",
        "Daily visits by chief specialists for treatment monitoring."
      ],
      color: "from-indigo-500 to-purple-500",
      glow: "shadow-[0_8px_30px_rgb(99,102,241,0.15)] hover:shadow-[0_8px_30px_rgb(99,102,241,0.3)]"
    },
    {
      id: 6,
      icon: <FaProcedures size={28} />,
      title: "24/7 Casualty & Emergency",
      description: "Dedicated emergency response room geared for stabilizing trauma cases, cardiac arrest, respiratory distress, and pediatrics.",
      details: [
        "Manned by emergency care medical officers and trained nurses 24/7.",
        "Equipped with advanced defibrillators, crash carts, and ventilators.",
        "Direct coordination with ambulance services for fast patient transit.",
        "Immediate priority treatment protocols based on triage codes."
      ],
      color: "from-amber-500 to-orange-500",
      glow: "shadow-[0_8px_30px_rgb(245,158,11,0.15)] hover:shadow-[0_8px_30px_rgb(245,158,11,0.3)]"
    }
  ];

  return (
    <section id="services" className="py-14 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-sans"
          >
            {t('servicesTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-slate-500 dark:text-slate-400 mt-4 font-sans"
          >
            {t('servicesSubtitle')}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`p-6 glass-card border hover:-translate-y-1 transition-all duration-300 cursor-pointer ${service.glow} flex flex-col items-start text-left`}
              onClick={() => setSelectedService(service)}
            >
              {/* Icon Container with gradient background */}
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center shadow-md mb-6`}>
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-slate-800 dark:text-white font-sans mb-3">
                {service.title}
              </h3>
              
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <button
                className="text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 hover:underline flex items-center space-x-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedService(service);
                }}
              >
                <span>{t('serviceLearnMore')}</span>
                <span>→</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal for Service Details */}
        <AnimatePresence>
          {selectedService && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-50 cursor-pointer"
                onClick={() => setSelectedService(null)}
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed inset-x-4 bottom-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 max-w-xl w-full bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-100 dark:border-slate-800 z-50 overflow-hidden text-left"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3.5 rounded-xl bg-gradient-to-br ${selectedService.color} text-white flex items-center justify-center`}>
                      {selectedService.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white font-sans">
                      {selectedService.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <FaTimes size={16} />
                  </button>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {selectedService.description}
                  </p>

                  <hr className="border-slate-100 dark:border-slate-800" />

                  <h4 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-500 dark:text-slate-400">
                    {selectedService.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-brand-500 mr-2 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="btn-ripple bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
                  >
                    {t('serviceClose')}
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Services;
