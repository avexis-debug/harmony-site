
import React from 'react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center text-center px-6 pt-32 bg-[#fdfcfb] overflow-hidden">
      {/* Couche d'image de fond avec opacité réduite pour la lisibilité */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000" 
          alt="Nature zen" 
          className="w-full h-full object-cover opacity-10 grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdfcfb]/80 via-transparent to-[#fdfcfb]"></div>
      </div>

      <div className="max-w-5xl animate-fade-up relative z-10">
        {/* Titre principal optimisé SEO avec la localisation et les mots-clés clés */}
        <h1 className="font-serif text-5xl md:text-8xl text-chakra-primary mb-8 italic font-light tracking-tight leading-tight">
          Chakras Harmony
        </h1>
        
        <h2 className="text-gray-500 uppercase tracking-[0.25em] text-xs md:text-base font-semibold mb-6 max-w-2xl mx-auto leading-relaxed">
          Soins Énergétiques, Reiki & Chromathérapie à <span className="text-chakra-accent">Beaumont</span>
        </h2>

        <div className="w-12 h-px bg-chakra-accent/30 mx-auto mb-12"></div>

        <p className="text-gray-400 font-serif text-xl md:text-2xl font-light italic mb-16 max-w-xl mx-auto">
          Retrouvez votre équilibre vibratoire au cœur du Hainaut dans un espace dédié à la sérénité.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Bouton d'appel à l'action direct (Conversion) */}
          <a 
            href="tel:+32495380149"
            className="bg-chakra-primary text-white px-12 py-5 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold shadow-xl hover:bg-chakra-accent transition-all duration-500 min-w-[240px]"
          >
            Réserver un soin
          </a>
          
          {/* Bouton de navigation (Découverte) */}
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-chakra-primary text-chakra-primary px-12 py-5 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-chakra-primary/5 transition-all duration-500 min-w-[240px]"
          >
            Découvrir les soins
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
