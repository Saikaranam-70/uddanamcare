import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes, FaGlobe, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ activeSection, onNavigate }) => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Languages array
  const languagesList = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'te', label: 'తెలుగు', flag: '🇮🇳' },
    { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
    { code: 'or', label: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
  ];

  const currentLangLabel = languagesList.find((l) => l.code === language)?.label || 'English';

  useEffect(() => {
    const handleScroll = () => {
      // Calculate Scroll Progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check if scrolled
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', labelKey: 'navHome' },
    { id: 'about', labelKey: 'navAbout' },
    { id: 'value', labelKey: 'navValue' },
    { id: 'services', labelKey: 'navServices' },
    { id: 'specialities', labelKey: 'navSpecialities' },
    { id: 'doctors', labelKey: 'navDoctors' },
    { id: 'gallery', labelKey: 'navGallery' },
    { id: 'testimonials', labelKey: 'navTestimonials' },
    { id: 'health-tips', labelKey: 'navHealthTips' },
    { id: 'contact', labelKey: 'navContact' },
  ];

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      if (onNavigate) onNavigate(id);
    }
  };

  const announcements = {
    en: "🏥 Uddanam Care Health Clinic is now Uddanam Care Hospital! Upgraded In-Patient Wards & 24/7 Emergency Care. 📞 Call: +91 8008397870 / 7993488293 | ✉️ uddanamcare@gmail.com",
    te: "🏥 ఉద్దానం కేర్ హెల్త్ క్లినిక్ ఇప్పుడు ఉద్దానం కేర్ హాస్పిటల్ గా మార్చబడింది! అత్యాధునిక సదుపాయాలు మరియు 24/7 అత్యవసర వైద్యం. 📞 కాల్: +91 8008397870 / 7993488293",
    hi: "🏥 उद्दानम केयर क्लिनिक अब उद्दानम केयर हॉस्पिटल है! उन्नत इन-पेशेंट वार्ड और 24/7 आपातकालीन सेवा। 📞 कॉल करें: +91 8008397870 / 7993488293",
    or: "🏥 ଉଦ୍ଦାନମ କେୟାର କ୍ଲିନିକ ବର୍ତ୍ତମାନ ଉଦ୍ଦାନମ କେୟାର ହସ୍ପିଟାଲ୍! ଉନ୍ନତ ଇନ୍-ପେସେଣ୍ଟ ୱାର୍ଡ ଏବଂ ୨୪/୭ ଜରୁରୀ ସେବା । 📞 କଲ୍: +91 8008397870 / 7993488293"
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="fixed top-0 left-0 right-0 h-8 bg-gradient-to-r from-brand-700 via-slate-900 to-accent-700 text-white z-50 flex items-center overflow-hidden px-4 text-[11px] sm:text-xs font-semibold select-none border-b border-white/10 shadow-sm">
        <div className="flex items-center space-x-2 max-w-7xl mx-auto w-full justify-center">
          <span className="flex-shrink-0 inline-flex items-center justify-center px-1.5 py-0.5 rounded bg-brand-500/30 text-brand-200 font-bold border border-brand-500/40 text-[9px] tracking-wider uppercase animate-pulse">
            UPGRADE
          </span>
          <div className="overflow-hidden relative flex-1 text-center">
            <span className="animate-marquee whitespace-nowrap inline-block text-slate-100">
              {announcements[language] || announcements['en']}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-8 left-0 h-1 bg-gradient-to-r from-brand-500 to-accent-500 z-50 transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'top-0 glass-navbar py-2 shadow-md' 
          : 'top-8 bg-transparent py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <img 
                src="/logo.PNG" 
                alt="Uddanam Care Hospital Logo" 
                className={`w-auto rounded-lg shadow-sm mr-2.5 bg-white p-1 transition-all duration-300 ${
                  isScrolled ? 'h-10 sm:h-11' : 'h-13 sm:h-14'
                }`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=100"; // Fallback placeholder
                }}
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-brand-700 dark:text-brand-400 font-sans leading-none">
                  UDDANAM CARE
                </span>
                <span className="text-[9px] tracking-widest text-slate-500 dark:text-slate-400 font-sans uppercase mt-0.5">
                  Hospital
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all relative py-1 hover:text-brand-600 dark:hover:text-brand-400 ${
                    activeSection === item.id 
                      ? 'text-brand-600 dark:text-brand-400 font-semibold' 
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {t(item.labelKey)}
                  {activeSection === item.id && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right Side Options (Language, Dark Mode, CTA) */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Language Selector Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                >
                  <FaGlobe className="text-brand-500" />
                  <span>{currentLangLabel}</span>
                  <FaChevronDown className={`text-xs transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isLangDropdownOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setIsLangDropdownOpen(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-40 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl z-20 overflow-hidden"
                      >
                        {languagesList.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLanguage(lang.code);
                              setIsLangDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-4 py-2 text-sm text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${
                              language === lang.code 
                                ? 'text-brand-600 dark:text-brand-400 font-semibold bg-brand-50/50 dark:bg-brand-900/20' 
                                : 'text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            <span>{lang.label}</span>
                            <span>{lang.flag}</span>
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? <FaMoon className="text-brand-600" /> : <FaSun className="text-yellow-400" />}
              </button>

              {/* Booking CTA Button */}
              <button
                onClick={() => scrollToSection('booking')}
                className="btn-ripple bg-gradient-to-r from-brand-600 to-accent-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300"
              >
                {t('navBookNow')}
              </button>
            </div>

            {/* Mobile Menu & Controls */}
            <div className="flex lg:hidden items-center space-x-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300"
              >
                {theme === 'light' ? <FaMoon /> : <FaSun className="text-yellow-400" />}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300"
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-100 dark:border-slate-950 bg-white dark:bg-slate-900 mt-3 shadow-lg overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === item.id 
                        ? 'bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 font-semibold' 
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {t(item.labelKey)}
                  </button>
                ))}

                <hr className="border-slate-100 dark:border-slate-800 my-2" />

                {/* Language Select Grid in Mobile */}
                <div className="py-2">
                  <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-3">
                    Select Language / భాషను ఎంచుకోండి
                  </span>
                  <div className="grid grid-cols-2 gap-2 px-3">
                    {languagesList.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                        }}
                        className={`flex items-center justify-between px-3 py-1.5 rounded-lg border text-xs transition-colors ${
                          language === lang.code 
                            ? 'border-brand-500 text-brand-600 dark:text-brand-400 font-semibold bg-brand-50/30 dark:bg-brand-950/20' 
                            : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span>{lang.label}</span>
                        <span>{lang.flag}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 px-3">
                  <button
                    onClick={() => scrollToSection('booking')}
                    className="w-full text-center bg-gradient-to-r from-brand-600 to-accent-600 text-white font-semibold py-2.5 rounded-lg shadow-md"
                  >
                    {t('navBookNow')}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
