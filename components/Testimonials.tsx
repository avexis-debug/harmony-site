
import React from 'react';

const testimonials = [
  { text: "Une expérience transformative. Après seulement une séance de Reiki, j'ai ressenti un apaisement profond et une clarté mentale retrouvée.", author: "Marie L." },
  { text: "L'expertise en bioénergie a radicalement changé mon quotidien. Je me sens plus ancré et dynamique dans mes activités.", author: "Jean-Philippe R." },
  { text: "Un accueil d'une grande bienveillance. La chromathérapie est une découverte majeure pour mon équilibre personnel.", author: "Sophie D." }
];

const Testimonials: React.FC = () => {
  return (
    <section className="pt-12 pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl text-chakra-primary uppercase tracking-[0.2em] italic">Échos de sérénité</h2>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mt-4 font-bold">Témoignages</p>
          <div className="w-8 h-px bg-chakra-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((t, i) => (
            <div key={i} className="relative p-10 flex flex-col text-center group">
              
              {/* Coins ornementaux mauves très fins pour chaque témoignage */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-[0.5px] border-l-[0.5px] border-chakra-primary/30 rounded-tl-lg transition-all duration-700 group-hover:w-12 group-hover:h-12 group-hover:border-chakra-primary/60"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-[0.5px] border-r-[0.5px] border-chakra-primary/30 rounded-tr-lg transition-all duration-700 group-hover:w-12 group-hover:h-12 group-hover:border-chakra-primary/60"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[0.5px] border-l-[0.5px] border-chakra-primary/30 rounded-bl-lg transition-all duration-700 group-hover:w-12 group-hover:h-12 group-hover:border-chakra-primary/60"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[0.5px] border-r-[0.5px] border-chakra-primary/30 rounded-br-lg transition-all duration-700 group-hover:w-12 group-hover:h-12 group-hover:border-chakra-primary/60"></div>

              {/* Icône de guillemet très discrète */}
              <div className="text-chakra-accent/10 font-serif text-4xl absolute top-4 left-1/2 -translate-x-1/2 select-none group-hover:text-chakra-accent/20 transition-colors">
                “
              </div>
              
              <p className="text-gray-500 font-serif italic leading-relaxed mb-8 text-lg relative z-10 pt-4">
                {t.text}
              </p>
              
              <div className="mt-auto relative z-10">
                 <div className="w-4 h-px bg-chakra-accent/20 mx-auto mb-4"></div>
                 <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-chakra-accent">
                   {t.author}
                 </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;
