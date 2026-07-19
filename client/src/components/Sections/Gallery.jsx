import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { FaChevronLeft, FaChevronRight, FaTimes, FaSearchPlus } from 'react-icons/fa';

const Gallery = () => {
  const { language, t } = useLanguage();
  const [activePhotoIdx, setActivePhotoIdx] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const photos = [
    { src: '/data1.jpeg', alt: 'Hospital Entrance & Front Exterior', category: 'facilities', span: 'col-span-1 md:col-span-2' },
    { src: '/data2.jpeg', alt: 'Main Reception & Waiting Lobby', category: 'facilities', span: 'col-span-1' },
    { src: '/data3.jpeg', alt: 'Patient Consultation & Checkup Room', category: 'services', span: 'col-span-1' },
    { src: '/data4.jpeg', alt: 'Advanced Clinical Diagnostic Lab', category: 'diagnostic', span: 'col-span-1 md:col-span-2' },
    { src: '/newImages/gallery_new_1.jpeg', alt: 'Advanced In-Patient Ward Rooms', category: 'wards', span: 'col-span-1' },
    { src: '/newImages/gallery_new_2.jpeg', alt: 'Casualty Ward & Emergency Beds', category: 'wards', span: 'col-span-1' },
    { src: '/newImages/gallery_new_3.jpeg', alt: 'High-Tech Diagnostics & Testing Station', category: 'diagnostic', span: 'col-span-1 md:col-span-2' },
    { src: '/newImages/gallery_new_4.jpeg', alt: '24/7 In-House Pharmacy counter', category: 'services', span: 'col-span-1' },
    { src: '/newImages/gallery_new_5.jpeg', alt: 'Premium Private Patient Cabin', category: 'wards', span: 'col-span-1' },
    { src: '/newImages/gallery_new_6.jpeg', alt: 'Specialized Medical Ward Care beds', category: 'wards', span: 'col-span-1' },
    { src: '/newImages/gallery_new_7.jpeg', alt: 'Chief Specialist Consultation Desk', category: 'services', span: 'col-span-1 md:col-span-2' },
    { src: '/newImages/gallery_new_8.jpeg', alt: 'General Ward & Recovery Chambers', category: 'wards', span: 'col-span-1' },
    { src: '/newImages/gallery_new_9.jpeg', alt: 'Support & In-Patient Nursing Ward', category: 'wards', span: 'col-span-1' },
  ];

  const categories = ['all', 'facilities', 'wards', 'diagnostic', 'services'];

  const categoryLabels = {
    all: { en: "All Images", te: "అన్నీ", hi: "सभी चित्र", or: "ସମସ୍ତ ଚିତ୍ର" },
    facilities: { en: "Lobby & Reception", te: "లాబీ & రిసెప్షన్", hi: "लॉबी और रिसेप्शन", or: "ଲବି ଏବଂ ରିସେପ୍ସନ" },
    wards: { en: "Wards & Rooms", te: "వార్డులు & రూములు", hi: "वार्ड और कमरे", or: "ୱାର୍ଡ ଏବଂ ରୁମ୍" },
    diagnostic: { en: "Diagnostics & Labs", te: "డయాగ్నోస్టిక్స్ & ల్యాబ్స్", hi: "डायग्नोस्टिक्स और लैब", or: "ଡାଇଗ୍ନୋଷ୍ଟିକ୍ସ ଏବଂ ଲାବ୍" },
    services: { en: "Pharmacy & consulting", te: "ఫార్మసీ & కన్సల్టింగ్", hi: "फार्मेसी और ओपीडी", or: "ଫାର୍ମାସୀ ଏବଂ ଓପିଡି" }
  };

  const getCategoryLabel = (cat) => {
    return categoryLabels[cat]?.[language] || categoryLabels[cat]?.['en'] || cat;
  };

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(p => p.category === activeCategory);

  const handlePrev = () => {
    setActivePhotoIdx((prev) => (prev === 0 ? filteredPhotos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActivePhotoIdx((prev) => (prev === filteredPhotos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans"
          >
            {t('galleryTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-slate-500 dark:text-slate-400 mt-4 font-sans"
          >
            {t('gallerySubtitle')}
          </motion.p>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'text-white shadow-md' 
                    : 'text-slate-650 dark:text-slate-400 bg-white/70 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-800/80'
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-gradient-to-r from-brand-600 to-accent-600 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{getCategoryLabel(cat)}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                layout
                key={photo.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`relative group rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover cursor-pointer border border-slate-105 dark:border-slate-800/80 h-72 ${photo.span}`}
                onClick={() => setActivePhotoIdx(idx)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600";
                  }}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <div className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg text-brand-600 dark:text-brand-400 shadow-md">
                    <FaSearchPlus size={14} />
                  </div>
                  <span className="text-xs font-semibold text-brand-300 uppercase tracking-widest">UDDANAM CARE HOSPITAL</span>
                  <h3 className="text-white font-bold text-base font-sans mt-1">
                    {photo.alt}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fullscreen Lightbox */}
        <AnimatePresence>
          {activePhotoIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePhotoIdx(null)}
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <FaTimes size={18} />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-6 p-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50 cursor-pointer"
                aria-label="Previous Image"
              >
                <FaChevronLeft size={16} />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-6 p-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50 cursor-pointer"
                aria-label="Next Image"
              >
                <FaChevronRight size={16} />
              </button>

              {/* Active Image and Caption */}
              <div className="relative max-w-4xl max-h-[80vh] flex flex-col items-center select-none">
                <motion.img
                  key={filteredPhotos[activePhotoIdx].src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  src={filteredPhotos[activePhotoIdx].src}
                  alt={filteredPhotos[activePhotoIdx].alt}
                  className="max-w-full max-h-[72vh] object-contain rounded-2xl shadow-2xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600";
                  }}
                />
                
                {/* Caption Banner */}
                <motion.div
                  key={`caption-${activePhotoIdx}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-center text-slate-200"
                >
                  <h4 className="text-base font-semibold font-sans">{filteredPhotos[activePhotoIdx].alt}</h4>
                  <p className="text-xs text-slate-500 mt-1">Image {activePhotoIdx + 1} of {filteredPhotos.length}</p>
                </motion.div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Gallery;
