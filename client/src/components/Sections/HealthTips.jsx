import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { FaSearch, FaUserMd, FaTag, FaCalendarAlt, FaTimes, FaBookOpen, FaClock } from 'react-icons/fa';

const HealthTips = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTip, setSelectedTip] = useState(null);

  const tips = [
    {
      id: 1,
      title: "Managing Hypertension: Essential Steps for Cardiac Health",
      category: "Cardiology",
      author: "Dr. Gorakala Giribabu",
      date: "June 28, 2026",
      desc: "High blood pressure is a silent contributor to cardiovascular complications. Learn key lifestyle changes, diet shifts, and monitoring patterns to stabilize pressure.",
      longText: "Hypertension (high blood pressure) is often called a silent killer because it rarely shows obvious symptoms until it causes serious vascular damage. Our cardiology expert, Dr. Gorakala Giribabu, highlights that monitoring blood pressure daily and altering salt intake can decrease cardiovascular risk by 40%.\n\nKey steps to manage hypertension include:\n1. DASH Diet: Focus on potassium-rich fruits, vegetables, whole grains, and lean proteins, while restricting daily sodium to under 2,000 mg.\n2. Cardiovascular Exercise: Aim for 30 minutes of moderate aerobic activity (e.g. brisk walking, cycling) at least 5 days a week.\n3. Weight Management: Losing even 3-5 kg can drop systolic pressure significantly.\n4. Limit Alcohol & Stress: Practice deep breathing, meditation, or yoga, and avoid smoking entirely.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Child Nutrition: Promoting Healthy Eating Habits in Kids",
      category: "Pediatrics",
      author: "Dr. Sunita Patnaik",
      date: "June 24, 2026",
      desc: "Encouraging children to eat nourishing meals sets up lifetime wellness. Discover tips to introduce vegetables, manage sugar intake, and balance proteins.",
      longText: "Encouraging children to eat nutrition-packed meals builds a strong immune foundation. Consultant pediatrician Dr. Sunita Patnaik advises parents to avoid processed sugars and instead gamify healthy plate colors to keep meals appealing for children.\n\nRecommendations for child nutrition:\n1. Colorful Plates: Ensure half the plate consists of vibrant vegetables and fruits (red tomatoes, orange carrots, green spinach).\n2. Protein Power: Incorporate eggs, beans, pulses, or lean meats to support muscle and tissue development.\n3. Whole Grains: Choose brown rice or whole-wheat rotis over refined grains (maida).\n4. Fluid Hydration: Avoid sugary juices or sodas; encourage pure water, coconut water, or buttermilk.",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=600",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Strengthening Bones: Preventing Early Joint Degradation",
      category: "Orthopedics",
      author: "Dr. Amit Mishra",
      date: "June 18, 2026",
      desc: "Osteoporosis and joint inflammation restrict mobility as we age. Learn how calcium assimilation, weight-bearing exercise, and correct posture keep joints active.",
      longText: "Joint pain and osteoporosis restrict active lives. Orthopedic surgeon Dr. Amit Mishra highlights that bone density peaks in early adulthood, making constant calcium and Vitamin D intake essential throughout life to prevent early wear and tear.\n\nSteps to maintain bone density:\n1. Calcium Intake: Consume dairy products, almonds, leafy greens, or calcium-fortified plant milks daily.\n2. Vitamin D Synthesis: Spend 15-20 minutes in early morning sunlight, or consult on Vitamin D3 supplements.\n3. Strength Training: Weight-bearing exercises (walking, climbing stairs, lifting light weights) stimulate bone building.\n4. Avoid Sedentary Posture: Take active breaks every 45 minutes to stretch and keep joints lubricated.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Prenatal Wellness: Safeguarding Pregnancy Journey",
      category: "Gynecology",
      author: "Dr. L. Gayatri",
      date: "June 12, 2026",
      desc: "A healthy pregnancy requires correct nutrition, mild activity, and strict consulting intervals. Explore essential safety guides for expecting mothers.",
      longText: "A healthy pregnancy requires dedicated attention. Obstetrician Dr. L. Gayatri emphasizes that prenatal care is vital to protect both mother and child, focusing on nutrition, mental relaxation, and strict consulting intervals.\n\nEssential safety tips:\n1. Folic Acid & Iron: Take prescribed prenatal supplements to avoid birth anomalies and maternal anemia.\n2. Balanced Nutrition: Consume small, frequent meals rich in fibers, proteins, and essential fats (nuts, seeds).\n3. Keep Moving: Engage in safe prenatal exercises like walking or customized yoga under expert guidance.\n4. Hydration is Key: Drink at least 3 liters of water daily to maintain amniotic fluid levels and prevent infections.",
      image: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?auto=format&fit=crop&q=80&w=600",
      readTime: "7 min read"
    }
  ];

  const categories = ['All', 'Cardiology', 'Pediatrics', 'Orthopedics', 'Gynecology'];

  const filteredTips = tips.filter((tip) => {
    const matchesSearch = tip.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tip.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tip.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tip.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="health-tips" className="py-14 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-sans"
          >
            {t('healthTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-slate-500 dark:text-slate-400 mt-4 font-sans"
          >
            {t('healthSubtitle')}
          </motion.p>
        </div>

        {/* Filter Controls (Search and Categories) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-brand-600 border-transparent text-white shadow-md'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchTips')}
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-brand-500 text-slate-850 dark:text-white transition-colors"
            />
            <FaSearch className="absolute left-3.5 top-3 text-slate-400" size={14} />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTips.length > 0 ? (
            filteredTips.map((tip, idx) => (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 overflow-hidden shadow-premium hover:shadow-premium-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col text-left cursor-pointer"
                onClick={() => setSelectedTip(tip)}
              >
                {/* Media */}
                <div className="h-40 overflow-hidden relative bg-gradient-to-br from-brand-600 to-accent-600 dark:from-brand-950 dark:to-accent-950 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 dark:text-white/10 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                    <FaUserMd size={56} />
                  </div>
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <span className="absolute top-4 left-4 bg-brand-500 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md shadow-md z-20">
                    {tip.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-[10px] text-slate-400">
                      <FaCalendarAlt />
                      <span>{tip.date}</span>
                      <span>•</span>
                      <span>{tip.readTime}</span>
                    </div>
                    
                    <h3 className="text-sm font-bold text-slate-850 dark:text-white font-sans leading-snug group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {tip.title}
                    </h3>
                    
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {tip.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-bold uppercase">
                      <FaUserMd className="text-brand-500" />
                      <span>{tip.author}</span>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTip(tip);
                      }}
                      className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline cursor-pointer"
                    >
                      {t('readMore')}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-slate-400">
              No health tips found matching your search.
            </div>
          )}
        </div>

        {/* Modal for Reading Full Article */}
        <AnimatePresence>
          {selectedTip && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-50 cursor-pointer"
                onClick={() => setSelectedTip(null)}
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed inset-x-4 bottom-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 max-w-2xl w-full bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-100 dark:border-slate-800 z-50 overflow-hidden text-left max-h-[90vh] overflow-y-auto"
              >
                {/* Header info */}
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-1.5 pr-8">
                    <span className="px-2.5 py-1 bg-brand-50 dark:bg-brand-950/40 border border-brand-100 dark:border-brand-900 text-brand-655 dark:text-brand-400 text-[10px] font-bold uppercase tracking-wider rounded-md">
                      {selectedTip.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-slate-855 dark:text-white font-sans mt-2 leading-tight">
                      {selectedTip.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-400 text-[11px] pt-1">
                      <span className="flex items-center gap-1"><FaCalendarAlt /> {selectedTip.date}</span>
                      <span className="flex items-center gap-1"><FaClock /> {selectedTip.readTime}</span>
                      <span className="flex items-center gap-1 font-semibold text-slate-500 dark:text-slate-400"><FaUserMd className="text-brand-500" /> {selectedTip.author}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTip(null)}
                    className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex-shrink-0"
                  >
                    <FaTimes size={16} />
                  </button>
                </div>

                {/* Article Image */}
                <div className="h-56 md:h-64 w-full overflow-hidden rounded-2xl mb-6 shadow-sm border border-slate-100 dark:border-slate-800 bg-gradient-to-br from-brand-600 to-accent-600 dark:from-brand-950 dark:to-accent-950 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 dark:text-white/10 pointer-events-none">
                    <FaUserMd size={72} />
                  </div>
                  <img 
                    src={selectedTip.image} 
                    alt={selectedTip.title} 
                    className="w-full h-full object-cover relative z-10"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                {/* Article Body */}
                <div className="space-y-4 text-sm text-slate-650 dark:text-slate-350 leading-relaxed font-sans">
                  {selectedTip.longText.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('Key') || paragraph.startsWith('Recommendations') || paragraph.startsWith('Steps') || paragraph.startsWith('Essential')) {
                      return (
                        <h4 key={index} className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider pt-2 flex items-center gap-1.5">
                          <FaBookOpen className="text-brand-500" />
                          <span>{paragraph}</span>
                        </h4>
                      );
                    }
                    if (paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.') || paragraph.startsWith('4.')) {
                      return (
                        <div key={index} className="pl-4 space-y-1">
                          {paragraph.split('\n').map((listItem, liIdx) => (
                            <div key={liIdx} className="flex items-start gap-2.5 text-xs md:text-sm">
                              <span className="text-brand-500 font-bold">{listItem.charAt(0)}</span>
                              <span>{listItem.substring(2)}</span>
                            </div>
                          ))}
                        </div>
                      );
                    }
                    return (
                      <p key={index}>
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <button
                    onClick={() => setSelectedTip(null)}
                    className="btn-ripple bg-slate-100 hover:bg-slate-200 dark:bg-slate-850 dark:hover:bg-slate-750 text-slate-750 dark:text-slate-250 font-bold px-6 py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    Done Reading
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default HealthTips;
