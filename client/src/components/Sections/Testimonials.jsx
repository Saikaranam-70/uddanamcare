import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const { t } = useLanguage();
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/testimonials');
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        const data = await response.json();
        setTestimonials(data);
      } catch (err) {
        console.error(err);
        // Fallback to static reviews
        setTestimonials([
          {
            name: 'K. Rama Rao',
            rating: 5,
            review: 'Dr. Rajesh Kumar is extremely patient and knowledgeable. He diagnosed my cardiovascular issues quickly and guided me through the treatment process. The clinic facilities, especially the ECG and Pharmacy, are excellent and clean.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
          },
          {
            name: 'Savitri Devi',
            rating: 5,
            review: 'The best clinic in Sompeta. Having diagnostic labs, X-ray, and Pharmacy under one roof saves so much time. The staff is polite, and the doctor is very reassuring. Strongly recommended!',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
          },
          {
            name: 'P. Manoj Kumar',
            rating: 4,
            review: 'Very professional doctors. I brought my son here for pediatric consultation with Dr. Sunita Patnaik. She was great with him, spoke Odia/Telugu fluently which made him comfortable, and the medicine was effective.',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
          },
          {
            name: 'Minati Behera',
            rating: 5,
            review: 'Clean and modern clinic. We received very fast reports from the laboratory. The casualty service was prompt when my father had an emergency last month. Cashless insurance facility was very helpful.',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
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
            {t('navTestimonials')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-slate-500 dark:text-slate-400 mt-4 font-sans"
          >
            Read reviews and success stories shared by our patients.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto px-6">
          {loading ? (
            <div className="p-8 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl skeleton h-48" />
          ) : (
            <>
              {/* Swiper Slider */}
              <Swiper
                modules={[Autoplay, Pagination]}
                onSwiper={setSwiperInstance}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true, el: '.swiper-custom-pagination' }}
                spaceBetween={30}
                slidesPerView={1}
                className="pb-14"
              >
                {testimonials.map((test, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="p-8 md:p-12 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80 rounded-3xl flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 text-left relative">
                      
                      {/* Quote Mark */}
                      <FaQuoteLeft size={44} className="absolute top-6 right-8 text-brand-300/20 dark:text-brand-500/10 pointer-events-none" />

                      {/* Avatar */}
                      <img
                        src={test.image}
                        alt={test.name}
                        className="w-20 h-20 rounded-full object-cover border-2 border-brand-500 shadow-md"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100";
                        }}
                      />

                      {/* Content block */}
                      <div className="flex-grow flex flex-col">
                        
                        {/* Stars */}
                        <div className="flex space-x-1 text-yellow-500 mb-3">
                          {Array.from({ length: 5 }).map((_, sIdx) => (
                            <FaStar 
                              key={sIdx} 
                              className={sIdx < test.rating ? 'fill-current' : 'text-slate-200 dark:text-slate-800'} 
                              size={14} 
                            />
                          ))}
                        </div>

                        {/* Review text */}
                        <p className="text-slate-600 dark:text-slate-350 text-sm md:text-base leading-relaxed italic mb-4">
                          "{test.review}"
                        </p>

                        {/* Patient Name */}
                        <span className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider font-sans">
                          {test.name}
                        </span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold mt-0.5">
                          Verified Patient
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Controls */}
              <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 hidden sm:block">
                <button
                  onClick={() => swiperInstance?.slidePrev()}
                  className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-500 rounded-full shadow-md transition-colors cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <FaChevronLeft size={12} />
                </button>
              </div>
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 hidden sm:block">
                <button
                  onClick={() => swiperInstance?.slideNext()}
                  className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-500 rounded-full shadow-md transition-colors cursor-pointer"
                  aria-label="Next Slide"
                >
                  <FaChevronRight size={12} />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="swiper-custom-pagination flex justify-center space-x-2 mt-4" />
            </>
          )}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
