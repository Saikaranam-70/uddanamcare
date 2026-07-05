import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { FaChevronLeft, FaChevronRight, FaTimes, FaSearchPlus } from 'react-icons/fa';

const Gallery = () => {
  const { t } = useLanguage();
  const [activePhotoIdx, setActivePhotoIdx] = useState(null);

  const photos = [
    { src: '/data1.jpeg', alt: 'Clinic Exterior & Entrance', span: 'col-span-1 md:col-span-2' },
    { src: '/data2.jpeg', alt: 'Reception & Waiting Area', span: 'col-span-1' },
    { src: '/data3.jpeg', alt: 'Consultation & Examination Wards', span: 'col-span-1' },
    { src: '/data4.jpeg', alt: 'Diagnostic lab & Medical Equipments', span: 'col-span-1 md:col-span-2' },
  ];

  const handlePrev = () => {
    setActivePhotoIdx((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActivePhotoIdx((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative group rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover cursor-pointer border border-slate-100 dark:border-slate-800/80 h-72 ${photo.span}`}
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
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <div className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg text-brand-600 dark:text-brand-400 shadow-md">
                  <FaSearchPlus size={14} />
                </div>
                <span className="text-xs font-semibold text-brand-300 uppercase tracking-widest">UDDANAM CARE GALLERY</span>
                <h3 className="text-white font-bold text-base font-sans mt-1">
                  {photo.alt}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

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
                  key={activePhotoIdx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  src={photos[activePhotoIdx].src}
                  alt={photos[activePhotoIdx].alt}
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
                  <h4 className="text-base font-semibold font-sans">{photos[activePhotoIdx].alt}</h4>
                  <p className="text-xs text-slate-500 mt-1">Image {activePhotoIdx + 1} of {photos.length}</p>
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
