import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { FaCalendarCheck, FaClock, FaUserMd, FaNotesMedical, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const Booking = ({ selectedDoctorName, onClearSelectedDoctor }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    doctor: '',
    department: '',
    date: '',
    time: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const departments = [
    "General Medicine",
    "Pediatrics",
    "Cardiology",
    "Orthopedics",
    "Gynecology"
  ];

  const doctorsList = [
    { name: "Dr. B. Rajesh Kumar", dept: "Cardiology" },
    { name: "Dr. Sunita Patnaik", dept: "Pediatrics" },
    { name: "Dr. Amit Mishra", dept: "Orthopedics" },
    { name: "Dr. L. Gayatri", dept: "Gynecology" }
  ];

  // Pre-fill doctor name if clicked from Doctor section
  useEffect(() => {
    if (selectedDoctorName) {
      const match = doctorsList.find(d => d.name === selectedDoctorName);
      setFormData(prev => ({
        ...prev,
        doctor: selectedDoctorName,
        department: match ? match.dept : ''
      }));
    }
  }, [selectedDoctorName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Auto-select department if doctor is changed
    if (name === 'doctor') {
      const match = doctorsList.find(d => d.name === value);
      if (match) {
        setFormData(prev => ({ ...prev, doctor: value, department: match.dept }));
      }
    }
  };

  const timeSlots = [
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "04:00 PM - 05:00 PM",
    "05:00 PM - 06:00 PM",
    "06:00 PM - 07:00 PM",
    "07:00 PM - 08:00 PM"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    // Client-side quick checks
    if (!formData.name || !formData.phone || !formData.email || !formData.doctor || !formData.department || !formData.date || !formData.time) {
      setErrorMessage("Please fill in all mandatory fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || 'Something went wrong while booking.');
      }

      setSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        doctor: '',
        department: '',
        date: '',
        time: '',
        message: '',
      });
      if (onClearSelectedDoctor) {
        onClearSelectedDoctor();
      }
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message || 'Failed to connect to the booking server. Please check if backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-brand-200/30 dark:bg-brand-950/15 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans"
          >
            {t('bookingTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-slate-500 dark:text-slate-400 mt-4 font-sans"
          >
            {t('bookingSubtitle')}
          </motion.p>
        </div>

        {/* Form Panel */}
        <div className="p-8 md:p-12 glass-card border shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Error Banner */}
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-xs sm:text-sm flex items-center space-x-3 text-left"
                  >
                    <FaExclamationTriangle className="flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  {/* Name */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-650 dark:text-slate-350 uppercase tracking-wider font-sans">
                      {t('formName')} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Rama Rao"
                      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 text-slate-850 dark:text-white transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-650 dark:text-slate-350 uppercase tracking-wider font-sans">
                      {t('formPhone')} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="e.g. +91 94943 32569"
                      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 text-slate-850 dark:text-white transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-650 dark:text-slate-350 uppercase tracking-wider font-sans">
                      {t('formEmail')} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. ramarao@gmail.com"
                      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 text-slate-850 dark:text-white transition-colors"
                    />
                  </div>

                  {/* Doctor selection */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="doctor" className="text-xs font-bold text-slate-650 dark:text-slate-350 uppercase tracking-wider font-sans">
                      {t('formDoctor')} <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="doctor"
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                        required
                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-brand-500 text-slate-850 dark:text-white transition-colors appearance-none"
                      >
                        <option value="">-- Choose Specialist --</option>
                        {doctorsList.map((doc, idx) => (
                          <option key={idx} value={doc.name}>{doc.name}</option>
                        ))}
                      </select>
                      <FaUserMd className="absolute left-3.5 top-4 text-slate-400" size={14} />
                    </div>
                  </div>

                  {/* Department selection */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="department" className="text-xs font-bold text-slate-650 dark:text-slate-350 uppercase tracking-wider font-sans">
                      {t('formDept')} <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-brand-500 text-slate-850 dark:text-white transition-colors appearance-none"
                      >
                        <option value="">-- Choose Department --</option>
                        {departments.map((dept, idx) => (
                          <option key={idx} value={dept}>{dept}</option>
                        ))}
                      </select>
                      <FaNotesMedical className="absolute left-3.5 top-4 text-slate-400" size={14} />
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="date" className="text-xs font-bold text-slate-650 dark:text-slate-350 uppercase tracking-wider font-sans">
                      {t('formDate')} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 text-slate-850 dark:text-white transition-colors"
                    />
                  </div>

                  {/* TimeSlot */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="time" className="text-xs font-bold text-slate-650 dark:text-slate-350 uppercase tracking-wider font-sans">
                      {t('formTime')} <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-brand-500 text-slate-850 dark:text-white transition-colors appearance-none"
                      >
                        <option value="">-- Choose TimeSlot --</option>
                        {timeSlots.map((slot, idx) => (
                          <option key={idx} value={slot}>{slot}</option>
                        ))}
                      </select>
                      <FaClock className="absolute left-3.5 top-4 text-slate-400" size={14} />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col space-y-2 text-left">
                  <label htmlFor="message" className="text-xs font-bold text-slate-650 dark:text-slate-350 uppercase tracking-wider font-sans">
                    {t('formMsg')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Provide details about symptoms or diagnostic query here..."
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 text-slate-850 dark:text-white transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-ripple w-full md:w-auto bg-gradient-to-r from-brand-600 to-accent-600 hover:brightness-110 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>{t('formBookingNow')}</span>
                      </>
                    ) : (
                      <>
                        <FaCalendarCheck />
                        <span>{t('formSubmit')}</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              // Success Panel
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 flex flex-col items-center justify-center space-y-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="text-brand-500"
                >
                  <FaCheckCircle size={64} className="animate-bounce" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-850 dark:text-white font-sans">
                  {t('formSuccess')}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                  {t('formSuccessSub')}
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-750 dark:text-slate-200 text-xs font-bold rounded-xl transition-all cursor-pointer"
                >
                  Book Another Appointment
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Booking;
