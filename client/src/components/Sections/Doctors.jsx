import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { FaInstagram, FaFacebook, FaLinkedin, FaEnvelope, FaClock, FaLanguage, FaCalendarAlt } from 'react-icons/fa';

const Doctors = ({ onSelectDoctor }) => {
  const { t } = useLanguage();
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/doctors');
        if (!response.ok) {
          throw new Error('Failed to fetch doctors');
        }
        const data = await response.json();
        setDoctors(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
        // Fallback to static data if backend is not running yet
        setDoctors([
          {
            _id: 'static-1',
            name: 'Dr. B. Rajesh Kumar',
            specialization: 'General Physician & Cardiologist',
            qualification: 'M.B.B.S, M.D. (General Medicine), D.Card',
            experience: 12,
            languages: ['English', 'Telugu', 'Hindi'],
            availability: {
              days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              hours: '09:00 AM - 01:00 PM, 04:00 PM - 08:00 PM',
            },
            image: '/doctor.jpeg',
            socialLinks: {
              instagram: 'https://www.instagram.com/uddanamcarehealthclinic',
              facebook: '#',
              linkedin: '#',
              email: 'rajesh.kumar@uddanamclinic.com',
            },
          },
          {
            _id: 'static-2',
            name: 'Dr. Sunita Patnaik',
            specialization: 'Consultant Pediatrician',
            qualification: 'M.B.B.S, D.C.H (Pediatrics)',
            experience: 8,
            languages: ['English', 'Odia', 'Hindi', 'Telugu'],
            availability: {
              days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              hours: '10:00 AM - 02:00 PM, 05:00 PM - 07:00 PM',
            },
            image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
            socialLinks: {
              instagram: '#',
              facebook: '#',
              linkedin: '#',
              email: 'sunita.patnaik@uddanamclinic.com',
            },
          },
          {
            _id: 'static-3',
            name: 'Dr. Amit Mishra',
            specialization: 'Orthopedic Surgeon',
            qualification: 'M.B.B.S, M.S. (Orthopedics)',
            experience: 10,
            languages: ['English', 'Hindi', 'Odia'],
            availability: {
              days: ['Monday', 'Wednesday', 'Friday'],
              hours: '11:00 AM - 03:00 PM, 06:00 PM - 08:00 PM',
            },
            image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300',
            socialLinks: {
              instagram: '#',
              facebook: '#',
              linkedin: '#',
              email: 'amit.mishra@uddanamclinic.com',
            },
          },
          {
            _id: 'static-4',
            name: 'Dr. L. Gayatri',
            specialization: 'Obstetrician & Gynecologist',
            qualification: 'M.B.B.S, D.G.O, M.D. (Obstetrics & Gynecology)',
            experience: 14,
            languages: ['English', 'Telugu', 'Hindi'],
            availability: {
              days: ['Tuesday', 'Thursday', 'Saturday'],
              hours: '09:00 AM - 01:00 PM, 03:00 PM - 06:00 PM',
            },
            image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=300',
            socialLinks: {
              instagram: '#',
              facebook: '#',
              linkedin: '#',
              email: 'gayatri.l@uddanamclinic.com',
            },
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleBookDoctor = (docName) => {
    if (onSelectDoctor) {
      onSelectDoctor(docName);
    }
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

  return (
    <section id="doctors" className="py-14 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-sans"
          >
            {t('navDoctors')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-slate-500 dark:text-slate-400 mt-4 font-sans"
          >
            Our medical specialists are driven by clinic excellence, compassionate care, and years of experience.
          </motion.p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            // Skeleton Loading State
            Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="p-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-4">
                <div className="h-64 rounded-2xl skeleton" />
                <div className="h-6 rounded skeleton w-3/4" />
                <div className="h-4 rounded skeleton w-1/2" />
                <div className="h-4 rounded skeleton w-5/6" />
                <div className="h-10 rounded-xl skeleton" />
              </div>
            ))
          ) : (
            doctors.map((doctor, idx) => (
              <motion.div
                key={doctor._id || idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 text-left"
              >
                {/* Photo & Social Hover */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={doctor.image.startsWith('/') ? doctor.image : doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/doctor.jpeg"; // Local fallback
                    }}
                  />
                  
                  {/* Social Overlay */}
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                    {doctor.socialLinks?.instagram && (
                      <a href={doctor.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white hover:bg-brand-500 text-slate-800 hover:text-white transition-colors">
                        <FaInstagram size={16} />
                      </a>
                    )}
                    {doctor.socialLinks?.facebook && (
                      <a href={doctor.socialLinks.facebook} className="p-2.5 rounded-full bg-white hover:bg-brand-500 text-slate-800 hover:text-white transition-colors">
                        <FaFacebook size={16} />
                      </a>
                    )}
                    {doctor.socialLinks?.linkedin && (
                      <a href={doctor.socialLinks.linkedin} className="p-2.5 rounded-full bg-white hover:bg-brand-500 text-slate-800 hover:text-white transition-colors">
                        <FaLinkedin size={16} />
                      </a>
                    )}
                    {doctor.socialLinks?.email && (
                      <a href={`mailto:${doctor.socialLinks.email}`} className="p-2.5 rounded-full bg-white hover:bg-brand-500 text-slate-800 hover:text-white transition-colors">
                        <FaEnvelope size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-5">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                    {doctor.specialization}
                  </span>
                  <h3 className="text-lg font-bold text-slate-850 dark:text-white font-sans mt-1">
                    {doctor.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium font-sans mt-0.5">
                    {doctor.qualification}
                  </p>

                  <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 mt-4">
                    <FaClock className="text-brand-500 flex-shrink-0" />
                    <span className="truncate">{doctor.availability.hours}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 mt-2">
                    <FaLanguage className="text-brand-500 flex-shrink-0" />
                    <span>{doctor.languages.join(', ')}</span>
                  </div>

                  <div className="text-xs font-bold text-slate-400 dark:text-slate-500 mt-4 border-t border-slate-100 dark:border-slate-800/80 pt-4 flex justify-between items-center">
                    <span>Experience</span>
                    <span className="text-slate-700 dark:text-slate-350">{doctor.experience} Years</span>
                  </div>

                  <button
                    onClick={() => handleBookDoctor(doctor.name)}
                    className="btn-ripple w-full mt-5 bg-slate-100 hover:bg-gradient-to-r hover:from-brand-600 hover:to-accent-600 hover:text-white text-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:text-white py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2"
                  >
                    <FaCalendarAlt size={12} />
                    <span>Book Appointment</span>
                  </button>
                </div>

              </motion.div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};

export default Doctors;
