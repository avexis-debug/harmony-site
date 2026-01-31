
import React from 'react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    }
  };

  return (
    <footer className="bg-[#fafaf9] pt-20">
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          
          {/* Colonne Contact */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-chakra-primary border-b border-gray-200 pb-4">
              Contact & Réseaux
            </h4>
            <div className="space-y-4 text-gray-600 font-light text-sm">
              <p>N'hésitez pas à me suivre sur les réseaux et à me contacter pour toutes questions concernant les soins proposés sur ce site.</p>
              <p className="pt-4 font-medium text-chakra-primary">0495/38.01.49</p>
              <p>bouny[A]outlook.be</p>
            </div>
            
            {/* Social Icons - Thin SVG style */}
            <div className="flex gap-6 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-chakra-primary hover:text-chakra-accent transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-chakra-primary hover:text-chakra-accent transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Colonne Navigation */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-chakra-primary border-b border-gray-200 pb-4">
              Navigation du site
            </h4>
            <ul className="grid grid-cols-1 gap-4 text-sm font-light text-gray-600">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-chakra-accent transition-colors text-left">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('reiki')} className="hover:text-chakra-accent transition-colors text-left">
                  Soin Reiki Usui
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('bioenergie')} className="hover:text-chakra-accent transition-colors text-left">
                  Soin Bioénergie
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('chromatherapie')} className="hover:text-chakra-accent transition-colors text-left">
                  Soin Chromathérapie
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('nettoyage')} className="hover:text-chakra-accent transition-colors text-left">
                  Harmonisation Habitat
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-chakra-accent transition-colors text-left">
                  Mon cheminement spirituel
                </button>
              </li>
            </ul>
          </div>

          {/* Colonne Carte Google Maps */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-chakra-primary border-b border-gray-200 pb-4">
              Localisation
            </h4>
            <div className="w-full h-64 bg-gray-200 rounded-sm overflow-hidden shadow-inner grayscale">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.4886616428464!2d4.3218730999999995!3d50.2443464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2270f2f79029b%3A0x6a0c0e5a88c7f07d!2sRue%20du%20Falin%2020%2C%206500%20Beaumont!5e0!3m2!1sfr!2sbe!4v1700000000000!5m2!1sfr!2sbe" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Barre copyright finale */}
      <div className="bg-chakra-primary py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/60">
          <p>© {new Date().getFullYear()} Tous droits réservés - Chakras Harmony</p>
          <div className="flex gap-4">
             <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
             <span className="opacity-30">|</span>
             <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
