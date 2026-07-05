import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "What are the clinic's working hours?",
      a: "Uddanam Care Health Clinic is open Monday to Saturday from 9:00 AM to 1:00 PM and from 4:00 PM to 8:00 PM. Our emergency casualty department operates 24/7."
    },
    {
      q: "How can I schedule an appointment?",
      a: "You can easily schedule an appointment by filling out the online 'Book Appointment' form on our website, calling our support line at +91 94943 32569, or walking into our reception desk."
    },
    {
      q: "Do you offer cashless health insurance support?",
      a: "Yes, we support cashless health insurance. We coordinate directly with major insurance companies. Please bring your insurance health card and ID proof during admission or consulting."
    },
    {
      q: "Are the pharmacy and diagnostic labs open on Sundays?",
      a: "Our emergency pharmacy and laboratory work 24/7 and are fully operational on Sundays for emergency casualty cases. Routine outpatient services are restricted to weekdays."
    },
    {
      q: "How will I receive my diagnostic lab reports?",
      a: "For your convenience, we compile and deliver digital copies of all lab, ECG, and X-ray reports directly to your registered WhatsApp number or email address as soon as they are ready. Hard copies are also available at our reception."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans"
          >
            {t('faqTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-slate-500 dark:text-slate-400 mt-4 font-sans"
          >
            {t('faqSubtitle')}
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/20 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm sm:text-base font-sans">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-brand-500 ml-4 flex-shrink-0"
                  >
                    <FaChevronDown size={14} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-slate-100 dark:border-slate-900">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
