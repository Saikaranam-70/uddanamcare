import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { 
  FaUserMd, 
  FaBaby, 
  FaHeart, 
  FaBone, 
  FaFemale, 
  FaSpa, 
  FaBrain, 
  FaTooth,
  FaTimes,
  FaCalendarAlt,
  FaNotesMedical
} from 'react-icons/fa';

const Specialities = () => {
  const { t } = useLanguage();
  const [selectedSpec, setSelectedSpec] = useState(null);

  const specialitiesData = [
    {
      id: 1,
      icon: <FaUserMd size={24} />,
      titleKey: 'specGenMed',
      desc: "Comprehensive primary healthcare, diagnostics, and management of chronic conditions for adult patients.",
      longDesc: "Our General Medicine department serves as the cornerstone of healthcare at Uddanam Care. Led by senior specialists, we provide clinical evaluations, disease screenings, and advanced therapies for multi-system conditions. We coordinate closely with our laboratory and pharmacy to provide unified care.",
      image: "https://images.unsplash.com/photo-1579684389782-64d84b5e905d?auto=format&fit=crop&q=80&w=600",
      treatments: ["Hypertension Management", "Diabetes Control", "Infectious Diseases", "Wellness Exams"],
      details: [
        "In-depth blood pressure monitoring and lipid profiling.",
        "Customized diabetic care pathways and insulin guidance.",
        "Preventive immunization advising for shingles, pneumonia, and influenza.",
        "Direct link with in-house diagnostic labs for speed results."
      ],
      color: "text-blue-500",
      bg: "bg-blue-50/50 dark:bg-blue-950/20",
      border: "hover:border-blue-300 dark:hover:border-blue-800"
    },
    {
      id: 2,
      icon: <FaBaby size={24} />,
      titleKey: 'specPed',
      desc: "Dedicated medical care for infants, children, and adolescents, including developmental checks and immunizations.",
      longDesc: "Children require gentleness and highly specialized care to thrive. Our Pediatrics department is tailored to guide kids from birth through adolescence. Dr. Sunita Patnaik coordinates vaccinations, physical growth mapping, nutrition check-ups, and childhood illness treatments.",
      image: "https://images.unsplash.com/photo-1536257130722-ea3b9afd2104?auto=format&fit=crop&q=80&w=600",
      treatments: ["Newborn Screening", "Vaccination Programs", "Growth Monitoring", "Childhood Infections"],
      details: [
        "Systematic vaccination schedules conforming to national pediatric standards.",
        "Milestone tracking for motor, cognitive, and speech development.",
        "Specialized nutrition planning for underweight or selective eaters.",
        "Gentle diagnostic sample collections tailored for children."
      ],
      color: "text-cyan-500",
      bg: "bg-cyan-50/50 dark:bg-cyan-950/20",
      border: "hover:border-cyan-300 dark:hover:border-cyan-800"
    },
    {
      id: 3,
      icon: <FaHeart size={24} />,
      titleKey: 'specCardio',
      desc: "Specialized diagnostics and therapy for cardiovascular anomalies, hypertension, and coronary artery conditions.",
      longDesc: "Your heart health is our absolute priority. The Cardiology unit combines the expertise of Dr. B. Rajesh Kumar with advanced ECG profiling to identify vascular blocks, arrhythmic beats, and cardiac risk metrics early, protecting your heart from future complications.",
      image: "https://images.unsplash.com/photo-1507556640981-b9a47b4d1580?auto=format&fit=crop&q=80&w=600",
      treatments: ["ECG Interpretation", "Cardiac Risk Profiling", "Arrhythmia Control", "Lipid Management"],
      details: [
        "12-channel digital ECG checking and stress testing correlations.",
        "Vascular health screening and early stroke prevention checks.",
        "Post-infarction care and medication synchronization programs.",
        "Specialized heart-healthy nutrition and fitness plans."
      ],
      color: "text-red-500",
      bg: "bg-red-50/50 dark:bg-red-950/20",
      border: "hover:border-red-300 dark:hover:border-red-800"
    },
    {
      id: 4,
      icon: <FaBone size={24} />,
      titleKey: 'specOrtho',
      desc: "Surgical and non-surgical therapy for musculoskeletal systems, bone fractures, and joint degenerative diseases.",
      longDesc: "Keep moving without discomfort. Our Orthopedics unit treats a wide range of muscle, bone, and ligament injuries. Dr. Amit Mishra provides plaster casting, joint injection therapies, arthritis management, and custom physical rehabilitation coordination.",
      image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=600",
      treatments: ["Fracture Management", "Arthritis Care", "Joint Pain Therapy", "Spine Rehabilitation"],
      details: [
        "Accident fracture reductions, splinting, and cast setups.",
        "Advanced intra-articular injections to treat chronic knee arthritis.",
        "Postural training and ergonomics recommendations for spine care.",
        "Coordinated physical therapy schedules to regain range of motion."
      ],
      color: "text-orange-500",
      bg: "bg-orange-50/50 dark:bg-orange-950/20",
      border: "hover:border-orange-300 dark:hover:border-orange-800"
    },
    {
      id: 5,
      icon: <FaFemale size={24} />,
      titleKey: 'specGyn',
      desc: "Comprehensive care for women’s reproductive health, prenatal checks, and management of gynecological disorders.",
      longDesc: "Dedicated to providing private, compassionate healthcare to women through all chapters of life. Dr. L. Gayatri manages prenatal care, postpartum recovery support, contraception solutions, PCOD/PCOS clinical therapies, and menopausal health check-ups.",
      image: "https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9d?auto=format&fit=crop&q=80&w=600",
      treatments: ["Antenatal Check-ups", "PCOS/PCOD Management", "Menopause Care", "Infertility Workups"],
      details: [
        "Routine antenatal sonography checks and maternal blood profiling.",
        "Weight, metabolic, and hormonal management systems for PCOS.",
        "Bone density monitoring and hot-flash reliefs for menopause.",
        "Cancer screenings including Pap smears and breast examinations."
      ],
      color: "text-pink-500",
      bg: "bg-pink-50/50 dark:bg-pink-950/20",
      border: "hover:border-pink-300 dark:hover:border-pink-800"
    },
    {
      id: 6,
      icon: <FaSpa size={24} />,
      titleKey: 'specDerma',
      desc: "Expert diagnosis and therapy for skin, hair, and nail disorders, including acne and eczema.",
      longDesc: "Your skin reflects your inner health. Our Dermatology division manages complex skin allergies, eczema, acne flare-ups, and psoriasis. We offer clinical evaluations and prescribe custom dermatological regimens to restore skin barrier health.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600",
      treatments: ["Acne Therapy", "Eczema & Psoriasis", "Skin Allergy Tests", "Hair Loss Control"],
      details: [
        "Targeted chemical peels and topical regimens for stubborn acne.",
        "Allergy patch test grids to isolate contact dermatitis triggers.",
        "Topical and systemic therapies for scaling and eczema relief.",
        "Platelet-rich plasma consultation guidelines for hair loss."
      ],
      color: "text-teal-500",
      bg: "bg-teal-50/50 dark:bg-teal-950/20",
      border: "hover:border-teal-300 dark:hover:border-teal-800"
    },
    {
      id: 7,
      icon: <FaBrain size={24} />,
      titleKey: 'specNeuro',
      desc: "Evaluation and management of brain, spinal cord, and peripheral nerve disorders, including headaches and seizures.",
      longDesc: "Diagnosing neurological symptoms requires precision. Our Neurology department manages chronic migraines, neuropathy numbness, tremors, and supports recovery programs for stroke patients. We prioritize keeping your nervous system healthy.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600",
      treatments: ["Migraine Therapy", "Neuropathy Care", "Stroke Recovery Advice", "Dizziness Diagnosis"],
      details: [
        "Prophylactic migraine therapies and trigger identification guides.",
        "Clinical assessments for nerve conduction abnormalities.",
        "Cognitive exercises and memory loss screening profiles.",
        "Rehabilitative exercises for fine and gross motor restoration."
      ],
      color: "text-purple-500",
      bg: "bg-purple-50/50 dark:bg-purple-950/20",
      border: "hover:border-purple-300 dark:hover:border-purple-800"
    },
    {
      id: 8,
      icon: <FaTooth size={24} />,
      titleKey: 'specDental',
      desc: "Preventive, restorative, and cosmetic dental treatments to keep your smile healthy and radiant.",
      longDesc: "Maintain perfect dental health with our dental consulting team. We focus on gentle procedures, offering deep scaling, root canals, composite restorations, and cosmetic alignments in a highly sterilized and modern setup.",
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&q=80&w=600",
      treatments: ["Dental Cleaning", "Root Canal Therapy", "Tooth Fillings", "Teeth Whitening"],
      details: [
        "Ultrasonic scaling to remove tartar and plaque build-up.",
        "Rotary endodontics for pain-free, fast root canal therapies.",
        "Cosmetic restorations utilizing UV-cured tooth-colored resins.",
        "Consultation for orthodontic aligners and wisdom tooth removals."
      ],
      color: "text-emerald-500",
      bg: "bg-emerald-50/50 dark:bg-emerald-950/20",
      border: "hover:border-emerald-300 dark:hover:border-emerald-800"
    }
  ];

  const handleBookRedirect = () => {
    setSelectedSpec(null);
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
    <section id="specialities" className="py-14 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
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
            {t('specialitiesTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-slate-500 dark:text-slate-400 mt-4 font-sans"
          >
            {t('specialitiesSubtitle')}
          </motion.p>
        </div>

        {/* Specialities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialitiesData.map((spec, idx) => (
            <motion.div
              key={spec.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className={`group glass-card border overflow-hidden hover:shadow-premium-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col text-left ${spec.border}`}
              onClick={() => setSelectedSpec(spec)}
            >
              {/* Header Image */}
              <div className="h-36 overflow-hidden relative bg-gradient-to-br from-brand-600 to-accent-600 dark:from-brand-950 dark:to-accent-950 flex items-center justify-center">
                {/* Large Background Vector Icon (Visible when image is offline/broken) */}
                <div className="absolute inset-0 flex items-center justify-center text-white/20 dark:text-white/10 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(spec.icon, { size: 64 })}
                </div>
                <img 
                  src={spec.image} 
                  alt={t(spec.titleKey)} 
                  className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent z-20" />
              </div>

              {/* Card Body */}
              <div className="p-5 relative pt-7 flex-grow flex flex-col justify-between">
                {/* Floating Icon */}
                <div className={`absolute -top-6 left-6 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-md ${spec.color} transition-colors duration-300 flex items-center justify-center`}>
                  {spec.icon}
                </div>

                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-850 dark:text-white font-sans group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {t(spec.titleKey)}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {spec.desc}
                  </p>
                </div>

                <div className="mt-5 space-y-4">
                  <hr className="border-slate-100 dark:border-slate-850" />
                  
                  {/* Treatments Tags */}
                  <div>
                    <span className="block text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5">
                      Treatments
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {spec.treatments.slice(0, 3).map((tmt, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 text-[9px] text-slate-500 dark:text-slate-400 font-sans"
                        >
                          {tmt}
                        </span>
                      ))}
                      {spec.treatments.length > 3 && (
                        <span className="text-[9px] text-brand-500 font-bold self-center ml-1">+{spec.treatments.length - 3} more</span>
                      )}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSpec(spec);
                    }}
                    className="w-full text-center py-2.5 rounded-xl text-xs font-bold bg-slate-50 dark:bg-slate-950 text-slate-650 dark:text-slate-300 border border-slate-150 dark:border-slate-850 group-hover:bg-gradient-to-r group-hover:from-brand-600 group-hover:to-accent-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 cursor-pointer"
                  >
                    {t('specViewDetails')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Specialty Details */}
        <AnimatePresence>
          {selectedSpec && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-50 cursor-pointer"
                onClick={() => setSelectedSpec(null)}
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed inset-x-4 bottom-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 max-w-xl w-full bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-100 dark:border-slate-800 z-50 overflow-hidden text-left max-h-[90vh] overflow-y-auto"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-3.5">
                    <div className={`p-3 rounded-xl ${selectedSpec.bg} ${selectedSpec.color} flex items-center justify-center`}>
                      {selectedSpec.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white font-sans">
                      {t(selectedSpec.titleKey)}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedSpec(null)}
                    className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <FaTimes size={16} />
                  </button>
                </div>

                {/* Big Image inside modal */}
                <div className="h-48 w-full overflow-hidden rounded-2xl mb-6 shadow-sm border border-slate-100 dark:border-slate-800 bg-gradient-to-br from-brand-600 to-accent-600 dark:from-brand-950 dark:to-accent-950 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 dark:text-white/10 pointer-events-none">
                    {React.cloneElement(selectedSpec.icon, { size: 80 })}
                  </div>
                  <img 
                    src={selectedSpec.image} 
                    alt={t(selectedSpec.titleKey)} 
                    className="w-full h-full object-cover relative z-10"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-slate-650 dark:text-slate-300 leading-relaxed font-sans">
                    {selectedSpec.longDesc}
                  </p>

                  <hr className="border-slate-100 dark:border-slate-800" />

                  <h4 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider flex items-center space-x-1.5">
                    <FaNotesMedical className="text-brand-500" />
                    <span>Key Diagnostic Features</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-500 dark:text-slate-400">
                    {selectedSpec.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-brand-500 mr-2 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center gap-4">
                  <button
                    onClick={() => setSelectedSpec(null)}
                    className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold px-5 py-2.5 rounded-xl text-xs transition-colors"
                  >
                    {t('serviceClose')}
                  </button>
                  <button
                    onClick={handleBookRedirect}
                    className="btn-ripple bg-gradient-to-r from-brand-600 to-accent-600 hover:brightness-110 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-md flex items-center space-x-1.5"
                  >
                    <FaCalendarAlt size={11} />
                    <span>Book Consulting</span>
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

export default Specialities;
