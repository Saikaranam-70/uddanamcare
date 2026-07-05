import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaInstagram, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaEnvelope, 
  FaCommentMedical,
  FaTimes
} from 'react-icons/fa';

const FloatingWidgets = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactLinks = [
    { 
      icon: <FaWhatsapp size={18} />, 
      color: 'bg-[#25D366] hover:scale-110 shadow-[0_4px_12px_rgba(37,211,102,0.4)]', 
      url: 'https://wa.me/919494332569', 
      label: 'WhatsApp' 
    },
    { 
      icon: <FaPhoneAlt size={16} />, 
      color: 'bg-blue-600 hover:scale-110 shadow-[0_4px_12px_rgba(37,99,235,0.4)]', 
      url: 'tel:+919494332569', 
      label: 'Call Us' 
    },
    { 
      icon: <FaInstagram size={16} />, 
      color: 'bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 hover:scale-110 shadow-[0_4px_12px_rgba(236,72,153,0.4)]', 
      url: 'https://www.instagram.com/uddanamcarehealthclinic', 
      label: 'Instagram' 
    },
    { 
      icon: <FaFacebookF size={16} />, 
      color: 'bg-[#1877F2] hover:scale-110 shadow-[0_4px_12px_rgba(24,119,242,0.4)]', 
      url: '#', 
      label: 'Facebook' 
    },
    { 
      icon: <FaLinkedinIn size={16} />, 
      color: 'bg-[#0A66C2] hover:scale-110 shadow-[0_4px_12px_rgba(10,102,194,0.4)]', 
      url: '#', 
      label: 'LinkedIn' 
    },
    { 
      icon: <FaEnvelope size={16} />, 
      color: 'bg-[#EA4335] hover:scale-110 shadow-[0_4px_12px_rgba(234,67,53,0.4)]', 
      url: 'mailto:info@uddanamcarehealthclinic.com', 
      label: 'Email' 
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center">
      {/* Expanded Sub-Buttons */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col space-y-3.5 mb-4">
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { delay: (contactLinks.length - 1 - index) * 0.06, type: 'spring', stiffness: 200 }
                }}
                exit={{ 
                  opacity: 0, 
                  y: 20, 
                  scale: 0.8,
                  transition: { delay: index * 0.04, duration: 0.15 }
                }}
                className={`relative flex items-center justify-center w-11 h-11 text-white rounded-full shadow-lg transition-transform duration-200 cursor-pointer ${link.color}`}
                aria-label={link.label}
              >
                {/* Tooltip Label */}
                <span className="absolute right-14 px-2.5 py-1 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-100 dark:border-slate-800 rounded-lg opacity-0 hover:opacity-100 md:group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm pointer-events-none">
                  {link.label}
                </span>
                {link.icon}
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main Pulse Action Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center justify-center w-14 h-14 text-white rounded-full shadow-xl focus:outline-none cursor-pointer ${
          isOpen 
            ? 'bg-slate-800 dark:bg-slate-900 shadow-slate-500/20' 
            : 'bg-brand-500 hover:bg-brand-600 shadow-brand-500/30'
        }`}
        aria-label="Toggle Quick Contact Channels"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              {/* Pulsing ring indicator */}
              <span className="absolute inset-0 rounded-full bg-brand-400/50 animate-ping" />
              <FaCommentMedical size={24} className="relative z-10" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingWidgets;
