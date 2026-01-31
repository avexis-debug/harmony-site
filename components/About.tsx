
import React from 'react';

interface AboutProps {
  onNavigate?: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="pt-24 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Bloc Image - 50% */}
          <div className="relative group">
            <div className="absolute -inset-4 border border-chakra-accent/10 rounded-2xl -z-10 transition-transform duration-700 group-hover:scale-105"></div>
            <div className="rounded-2xl overflow-hidden shadow-2xl grayscale-[0.1] aspect-[4/5] lg:aspect-square">
              <img
                src="/Mon cheminement.avif"
                alt="Mon cheminement spirituel"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            {/* Détail décoratif */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-xl hidden md:block">
              <p className="font-serif italic text-chakra-primary text-sm">"L'écoute du cœur est le début de la sagesse."</p>
            </div>
          </div>

          {/* Bloc Texte - 50% */}
          <div className="flex flex-col space-y-8 py-8">
            <div className="space-y-4">
              <p className="text-chakra-accent uppercase tracking-[0.3em] text-[10px] font-bold">Notre Histoire</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-chakra-primary italic font-light leading-tight">
                Mon cheminement spirituel
              </h2>
              <div className="w-12 h-px bg-chakra-accent mt-6"></div>
            </div>
            
            <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
              <p className="italic text-gray-400">Pour la petite histoire...</p>
              
              <p>
                Ce qui s'annonçait à moi dès mon plus jeune âge, devait être le début 
                de l'aventure que je mène avec vous aujourd'hui.
              </p>
              <p>
                Mais hier, j'ai pensé « pourquoi n'ai-je pas été à l'écoute plus tôt ? » et 
                avec ce sentiment de réponse « parce qu'il n'y a pas de chemin sans détours ! »
              </p>
            </div>

            <div className="pt-6">
              <button 
                onClick={() => onNavigate && onNavigate('about')}
                className="bg-chakra-primary text-white px-10 py-4 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-chakra-accent transition-all duration-500 shadow-lg shadow-indigo-900/10"
              >
                Découvrir mon parcours complet
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
