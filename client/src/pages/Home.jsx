import React, { useEffect, useState } from 'react';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Services from '../components/Sections/Services';
import Specialities from '../components/Sections/Specialities';
import Doctors from '../components/Sections/Doctors';
import Facilities from '../components/Sections/Facilities';
import Gallery from '../components/Sections/Gallery';
import Testimonials from '../components/Sections/Testimonials';
import FAQ from '../components/Sections/FAQ';
import HealthTips from '../components/Sections/HealthTips';
import Booking from '../components/Sections/Booking';
import Contact from '../components/Sections/Contact';

const Home = ({ activeSection, setActiveSection, selectedDoctorName, onClearSelectedDoctor }) => {
  useEffect(() => {
    const sections = [
      'home',
      'about',
      'services',
      'specialities',
      'doctors',
      'gallery',
      'testimonials',
      'health-tips',
      'booking',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // offset for triggers

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  return (
    <div className="relative">
      <Hero />
      <About />
      <Services />
      <Specialities />
      <Doctors onSelectDoctor={(name) => {
        // Pass to parent layout state
        if (typeof onClearSelectedDoctor === 'function') {
          onClearSelectedDoctor(name);
        }
      }} />
      <Facilities />
      <Gallery />
      <Testimonials />
      <FAQ />
      <HealthTips />
      <Booking 
        selectedDoctorName={selectedDoctorName}
        onClearSelectedDoctor={onClearSelectedDoctor}
      />
      <Contact />
    </div>
  );
};

export default Home;
