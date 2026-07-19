import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FaInstagram, FaFacebook, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const quickLinks = [
    { id: 'home', labelKey: 'navHome' },
    { id: 'about', labelKey: 'navAbout' },
    { id: 'services', labelKey: 'navServices' },
    { id: 'specialities', labelKey: 'navSpecialities' },
    { id: 'doctors', labelKey: 'navDoctors' },
    { id: 'gallery', labelKey: 'navGallery' },
  ];

  const services = [
    { name: 'Pharmacy' },
    { name: 'Diagnostic Lab' },
    { name: 'Digital X-Ray' },
    { name: 'ECG Department' },
    { name: 'Casualty Care' },
    { name: 'In-Patient Wards' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <img 
                src="/logo.PNG" 
                alt="Uddanam Care Hospital Logo" 
                className="h-10 w-auto rounded-md bg-white p-1"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=100";
                }}
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight">UDDANAM CARE</span>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase">Hospital</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t('footerDesc')}
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.instagram.com/uddanamcarehealthclinic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-500 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaFacebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-700 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-bold text-base tracking-wider uppercase border-b border-slate-800 pb-2">
              {t('footerLinks')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-brand-400 transition-colors text-left"
                  >
                    {t(link.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-bold text-base tracking-wider uppercase border-b border-slate-800 pb-2">
              {t('navServices')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="hover:text-brand-400 transition-colors text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-bold text-base tracking-wider uppercase border-b border-slate-800 pb-2">
              {t('footerNewsletter')}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t('footerNewsletterSub')}
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footerNewsletterPlaceholder')}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 text-white transition-colors placeholder-slate-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bg-gradient-to-r from-brand-600 to-accent-600 hover:brightness-110 text-white rounded-lg p-2 flex items-center justify-center transition-all"
                aria-label="Subscribe"
              >
                <FaPaperPlane size={14} />
              </button>
            </form>
            {subscribed && (
              <span className="text-xs text-brand-400 font-semibold mt-1">
                {t('footerSubscribed')}
              </span>
            )}
          </div>
        </div>

        {/* Contact Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 pb-8 border-t border-slate-800 text-sm text-slate-400">
          <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="text-brand-500 mt-1 flex-shrink-0" size={18} />
            <span>
              1st Floor, Sairam Parlour, Baruva Kanchili Rd, Opposite SBI, Rapakaputtuga, Sompeta, Andhra Pradesh 532284
            </span>
          </div>
          <div className="flex items-start space-x-3">
            <FaPhone className="text-brand-500 mt-1 flex-shrink-0" size={16} />
            <div className="flex flex-col">
              <span>+91 8008397870</span>
              <span>+91 7993488293</span>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <FaEnvelope className="text-brand-500 mt-1 flex-shrink-0" size={16} />
            <span>uddanamcare@gmail.com</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <span>
            © {new Date().getFullYear()} Uddanam Care Hospital. {t('footerRights')}
          </span>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
