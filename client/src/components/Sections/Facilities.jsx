import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { 
  FaPills, 
  FaVials, 
  FaXRay, 
  FaHeartbeat, 
  FaBed, 
  FaProcedures,
  FaAmbulance,
  FaCreditCard,
  FaFileMedical,
  FaParking
} from 'react-icons/fa';

const Facilities = () => {
  const { t } = useLanguage();

  const facilitiesList = [
    { icon: <FaPills size={22} />, titleKey: 'facPharmacy', color: 'text-blue-500', bg: 'bg-blue-50/50 dark:bg-blue-950/20' },
    { icon: <FaVials size={22} />, titleKey: 'facLab', color: 'text-cyan-500', bg: 'bg-cyan-50/50 dark:bg-cyan-950/20' },
    { icon: <FaXRay size={22} />, titleKey: 'facXray', color: 'text-teal-500', bg: 'bg-teal-50/50 dark:bg-teal-950/20' },
    { icon: <FaHeartbeat size={22} />, titleKey: 'facEcg', color: 'text-rose-500', bg: 'bg-rose-50/50 dark:bg-rose-950/20' },
    { icon: <FaBed size={22} />, titleKey: 'facInPatient', color: 'text-indigo-500', bg: 'bg-indigo-50/50 dark:bg-indigo-950/20' },
    { icon: <FaProcedures size={22} />, titleKey: 'facCasualty', color: 'text-orange-500', bg: 'bg-orange-50/50 dark:bg-orange-950/20' },
    { icon: <FaAmbulance size={22} />, titleKey: 'facAmbulance', color: 'text-red-500', bg: 'bg-red-50/50 dark:bg-red-950/20' },
    { icon: <FaCreditCard size={22} />, titleKey: 'facInsurance', color: 'text-emerald-500', bg: 'bg-emerald-50/50 dark:bg-emerald-950/20' },
    { icon: <FaFileMedical size={22} />, titleKey: 'facReports', color: 'text-purple-500', bg: 'bg-purple-50/50 dark:bg-purple-950/20' },
    { icon: <FaParking size={22} />, titleKey: 'facParking', color: 'text-slate-500', bg: 'bg-slate-100 dark:bg-slate-850' },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans"
          >
            {t('facilitiesTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-slate-500 dark:text-slate-400 mt-4 font-sans"
          >
            {t('facilitiesSubtitle')}
          </motion.p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {facilitiesList.map((fac, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-6 glass-card border hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className={`p-4 rounded-full ${fac.bg} ${fac.color} flex items-center justify-center`}>
                {fac.icon}
              </div>
              <h3 className="text-sm font-semibold text-slate-800 dark:text-white font-sans">
                {t(fac.titleKey)}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Facilities;
