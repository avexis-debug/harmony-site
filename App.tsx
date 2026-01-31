import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import AboutPage from './components/AboutPage';
import CookiesPopup from './components/CookiesPopup';
import MantraWheel from './components/MantraWheel';
import ConsultationReasons from './components/ConsultationReasons';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'reiki' | 'bioenergie' | 'chromatherapie' | 'nettoyage' | 'about'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page: any) => {
    if (page === 'services' || page === 'motifs' || page === 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        if (page === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document.getElementById(page)?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <Header onNavigate={navigateTo} />
      
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={navigateTo} />
            <MantraWheel />
            <Services onNavigate={navigateTo} />
            <ConsultationReasons />
            <About onNavigate={navigateTo} />
            <Testimonials />
          </>
        ) : currentPage === 'about' ? (
          <AboutPage onBack={() => setCurrentPage('home')} />
        ) : (
          <ServiceDetail type={currentPage as any} onBack={() => setCurrentPage('home')} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
      <CookiesPopup />
    </div>
  );
};

export default App;