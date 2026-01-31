
import React, { useState, useEffect } from 'react';

const CookiesPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Un léger délai pour ne pas agresser l'utilisateur dès le chargement
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[100] max-w-sm animate-fade-up">
      <div className="bg-white border border-gray-100 p-6 shadow-2xl rounded-sm">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-chakra-accent rounded-full animate-pulse"></div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-chakra-primary">
              Respect de votre vie privée
            </h4>
          </div>
          
          <p className="text-gray-500 text-xs leading-relaxed font-light">
            Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser notre trafic de manière anonyme. 
            Aucune donnée personnelle n'est revendue à des tiers.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <button 
              onClick={handleAccept}
              className="bg-chakra-primary text-white px-6 py-2.5 rounded-full text-[9px] uppercase tracking-widest font-bold hover:bg-chakra-accent transition-colors duration-300"
            >
              Accepter
            </button>
            <button 
              onClick={handleDecline}
              className="text-gray-400 hover:text-chakra-primary text-[9px] uppercase tracking-widest font-bold transition-colors duration-300"
            >
              Refuser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPopup;
