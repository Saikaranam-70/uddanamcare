import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import SplashLoader from './components/UI/SplashLoader';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import FloatingWidgets from './components/Layout/FloatingWidgets';
import ScrollToTop from './components/UI/ScrollToTop';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const AppContent = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const hasSpoken = React.useRef(false);

  const playTeluguWelcomeVoice = () => {
    if (hasSpoken.current) return;
    try {
      // Create a fresh Audio instance to guarantee audio context unlocks on click/gesture
      const audio = new Audio('/audio.mpeg');
      audio.play()
        .then(() => {
          hasSpoken.current = true;
        })
        .catch(err => {
          console.log("Audio autoplay blocked by browser, waiting for user gesture.", err);
        });
    } catch (e) {
      console.error("Error playing welcome audio:", e);
    }
  };

  useEffect(() => {
    // Automatically redirect/hide splash screen after 2.2 seconds
    const timer = setTimeout(() => {
      setIsAppLoading(false);
      // Attempt autoplay right away
      setTimeout(() => {
        playTeluguWelcomeVoice();
      }, 150);
    }, 2200);

    // Backup interaction listener: play voice immediately when they click/touch anywhere
    const handleInteraction = () => {
      playTeluguWelcomeVoice();
      removeListeners();
    };

    const removeListeners = () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchend', handleInteraction);
      window.removeEventListener('pointerup', handleInteraction);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchend', handleInteraction);
      document.removeEventListener('pointerup', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchend', handleInteraction);
    window.addEventListener('pointerup', handleInteraction);
    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchend', handleInteraction);
    document.addEventListener('pointerup', handleInteraction);

    return () => {
      clearTimeout(timer);
      removeListeners();
    };
  }, []);

  const handleSelectDoctor = (doctorName) => {
    setSelectedDoctor(doctorName);
  };

  return (
    <>
      {/* Native Browser Autoplay Hint */}
      <audio src="/audio.mpeg" autoPlay className="hidden animate-none" />

      {/* Animated Splash Loading Screen */}
      <SplashLoader isVisible={isAppLoading} />

      {!isAppLoading && (
        <div className="flex flex-col min-h-screen">
          {/* Header Navigation */}
          <Navbar 
            activeSection={activeSection} 
            onNavigate={(id) => setActiveSection(id)} 
          />
          
          {/* Page Routing */}
          <main className="flex-grow">
            <Routes>
              <Route 
                path="/" 
                element={
                  <Home 
                    activeSection={activeSection} 
                    setActiveSection={setActiveSection} 
                    selectedDoctorName={selectedDoctor}
                    onClearSelectedDoctor={handleSelectDoctor}
                  />
                } 
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Footer Section */}
          <Footer />

          {/* Quick Communication Floating Action Panel */}
          <FloatingWidgets />

          {/* Scroll Back To Top Trigger */}
          <ScrollToTop />
        </div>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
