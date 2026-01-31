
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSoinsOpen, setIsSoinsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Les soins à la personne uniquement
  const soinsItems = [
    { label: 'Reiki Usui', id: 'reiki' },
    { label: 'Bioénergie', id: 'bioenergie' },
    { label: 'Chromathérapie', id: 'chromatherapie' }
  ];

  const handleMobileNav = (id: string) => {
    setIsMenuOpen(false);
    setIsSoinsOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-header py-3 shadow-sm' : 'bg-white/80 py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer z-50" onClick={() => onNavigate('home')}>
            <img src="/logo.avif" alt="Chakras Harmony" className="w-10 h-10 rounded-full object-cover" />
            <span className={`font-serif text-xl tracking-tighter uppercase transition-colors text-chakra-primary`}>
              CHAKRAS <span className={`font-light italic text-gray-400`}>Harmony</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              className="text-[10px] uppercase tracking-[0.15em] font-semibold text-gray-600 hover:text-chakra-primary transition-colors"
            >
              Accueil
            </button>

            {/* Menu Déroulant "Soins" */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] font-semibold text-gray-600 group-hover:text-chakra-primary transition-colors py-4">
                Soins Holistiques
                <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="bg-white border border-gray-100 shadow-2xl rounded-xl py-6 min-w-[220px] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-chakra-accent"></div>
                  {soinsItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => onNavigate(item.id)}
                      className="w-full text-left px-8 py-3 text-sm font-serif italic text-chakra-primary hover:bg-gray-50 hover:text-chakra-accent transition-all border-b border-gray-50 last:border-0"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Harmonisation Habitat */}
            <button
              onClick={() => onNavigate('nettoyage')}
              className="text-[10px] uppercase tracking-[0.15em] font-semibold text-gray-600 hover:text-chakra-primary transition-colors"
            >
              Harmonisation Habitat
            </button>

            <button
              onClick={() => onNavigate('about')}
              className="text-[10px] uppercase tracking-[0.15em] font-semibold text-gray-600 hover:text-chakra-primary transition-colors"
            >
              Mon Parcours
            </button>

            <a href="tel:+32495380149" className="bg-chakra-primary text-white px-6 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-chakra-accent transition-colors ml-4 shadow-lg shadow-indigo-900/10">
              Réserver
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden z-50 p-2 transition-colors text-chakra-primary`}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 z-[40] transition-all duration-700 lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div 
          className="absolute inset-0 bg-[#fcfaf7] backdrop-blur-xl"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        <nav className="relative h-full flex flex-col items-center justify-center p-6 text-center">
          <div className="space-y-6 w-full max-h-[80vh] overflow-y-auto py-10">
            <button onClick={() => handleMobileNav('home')} className="block w-full text-2xl font-serif italic text-chakra-primary">Accueil</button>
            
            <div className="space-y-4">
              <button 
                onClick={() => setIsSoinsOpen(!isSoinsOpen)}
                className="flex items-center justify-center gap-4 w-full text-2xl font-serif italic text-chakra-primary"
              >
                Soins Holistiques
                <svg className={`w-5 h-5 transition-transform ${isSoinsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`space-y-3 overflow-hidden transition-all duration-500 ${isSoinsOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                {soinsItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleMobileNav(item.id)}
                    className="block w-full text-lg font-light text-gray-500 py-1"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={() => handleMobileNav('nettoyage')} className="block w-full text-2xl font-serif italic text-chakra-primary">Harmonisation Habitat</button>
            <button onClick={() => handleMobileNav('about')} className="block w-full text-2xl font-serif italic text-chakra-primary">Mon Parcours</button>
          </div>

          <div className={`mt-12 transition-all duration-1000 delay-300 ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <a 
              href="tel:+32495380149"
              className="inline-block border border-chakra-primary text-chakra-primary px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold"
            >
              Me Contacter
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
