import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      setErrorMsg("Please fill in all the fields.");
      setLoading(false);
      return;
    }

    try {
      const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:5000'
        : 'https://uddanamcare-1.onrender.com';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || 'Something went wrong.');
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || 'Failed to submit contact query. Please check if server is active.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
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
            {t('contactTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-slate-500 dark:text-slate-400 mt-4 font-sans"
          >
            {t('contactSubtitle')}
          </motion.p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Cards & Google Maps */}
          <div className="flex flex-col space-y-8 text-left">
            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Address */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-brand-100 dark:bg-brand-950 text-brand-650 flex-shrink-0">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white font-sans">{t('contactAddress')}</h4>
                  <p className="text-xs text-slate-555 dark:text-slate-400 leading-relaxed mt-1">
                    1st Floor, Sairam Parlour, Baruva Kanchili Rd, Opposite SBI, Rapakaputtuga, Sompeta, Andhra Pradesh 532284
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-accent-100 dark:bg-accent-950 text-accent-650 flex-shrink-0">
                  <FaClock size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white font-sans">{t('contactHours')}</h4>
                  <p className="text-xs text-slate-555 dark:text-slate-400 leading-relaxed mt-1">
                    {t('contactHoursWeek')}
                  </p>
                  <p className="text-[10px] text-rose-500 font-semibold mt-1">
                    {t('contactHoursSun')}
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-650 flex-shrink-0">
                  <FaPhoneAlt size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white font-sans">{t('contactPhone')}</h4>
                  <p className="text-xs text-slate-555 dark:text-slate-400 mt-1 font-semibold">
                    +91 94943 32569<br />+91 89196 48439
                  </p>
                </div>
              </div>

              {/* Emails */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-650 flex-shrink-0">
                  <FaEnvelope size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white font-sans">{t('contactEmail')}</h4>
                  <p className="text-xs text-slate-555 dark:text-slate-400 mt-1">
                    info@uddanamcarehealthclinic.com
                  </p>
                </div>
              </div>

            </div>

            {/* Embedded Google Map */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 h-64 shadow-lg bg-slate-100">
              <iframe
                title="Uddanam Care Health Clinic Location Sompeta"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.2057912644265!2d84.5910486!3d18.9328227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c613e5ad434b9%3A0xe543eb372a2db91e!2sRapakaputtuga%2C%20Sompeta%2C%20Andhra%20Pradesh%20532284!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-none"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="p-8 glass-card border shadow-xl">
            <h3 className="text-lg font-bold text-slate-850 dark:text-white font-sans text-left mb-6">
              {t('contactFormTitle')}
            </h3>

            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 text-left"
                >
                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 text-red-650 dark:text-red-400 text-xs sm:text-sm flex items-center space-x-2">
                      <FaExclamationTriangle className="flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Name */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="c-name" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {t('formName')}
                    </label>
                    <input
                      type="text"
                      id="c-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Savitri Devi"
                      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-500 text-slate-850 dark:text-white transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="c-email" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {t('formEmail')}
                      </label>
                      <input
                        type="email"
                        id="c-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="e.g. savitri@gmail.com"
                        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-500 text-slate-850 dark:text-white transition-colors"
                      />
                    </div>
                    
                    {/* Phone */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="c-phone" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {t('formPhone')}
                      </label>
                      <input
                        type="tel"
                        id="c-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="e.g. +91 94943 32569"
                        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-500 text-slate-850 dark:text-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="c-subject" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {t('formSubject')}
                    </label>
                    <input
                      type="text"
                      id="c-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Question about Lab report timeline"
                      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-500 text-slate-850 dark:text-white transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="c-message" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {t('formMsg')}
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Your message details here..."
                      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-500 text-slate-850 dark:text-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-ripple w-full bg-gradient-to-r from-brand-600 to-accent-600 hover:brightness-110 text-white font-bold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>{t('contactFormSending')}</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane size={12} />
                        <span>{t('contactFormSubmit')}</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center justify-center space-y-4"
                >
                  <div className="text-brand-500">
                    <FaCheckCircle size={56} className="animate-bounce" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-850 dark:text-white font-sans">
                    {t('contactSuccess')}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                    {t('contactSuccessSub')}
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-6 px-5 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
