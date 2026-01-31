
import React from 'react';

const services = [
  {
    id: "reiki",
    title: "Reiki",
    price: "45€",
    desc: "Méthode de soins holistique pour rééquilibrer le corps physiquement et l'esprit mentalement et l'âme spirituellement par imposition des mains.",
    svg: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="1.5" strokeDasharray="2 4"/><circle cx="12" cy="12" r="5" strokeWidth="1.5"/></svg>
  },
  {
    id: "bioenergie",
    title: "Bioénergie",
    price: "50€",
    desc: "A pour but d'aider le corps à sa capacité d'auto-guérison en améliorant la circulation des énergies. Travail à l'antenne de Lecher.",
    svg: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
  },
  {
    id: "chromatherapie",
    title: "Chromathérapie",
    price: "35€",
    desc: "Méthode naturelle de projection de lumière colorée contribuant à maintenir le bon fonctionnement de l'organisme.",
    svg: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707"/></svg>
  },
  {
    id: "nettoyage",
    title: "Harmonisation Habitat",
    price: "Sur devis",
    desc: "Harmonisation des lieux de vie pour libérer les mémoires des murs et restaurer une atmosphère saine et protectrice dans votre foyer.",
    svg: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
  }
];

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl text-chakra-primary mb-6 italic">Nos disciplines thérapeutiques</h2>
            <p className="text-gray-500 font-light text-lg">Une sélection de soins adaptés à vos besoins pour un rééquilibrage global.</p>
          </div>
          <div className="h-px flex-grow bg-gray-100 hidden md:block mx-12"></div>
          <span className="text-chakra-accent font-serif text-2xl italic"> Beaumont</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div key={s.id} className="group p-10 bg-white border border-gray-100 transition-all duration-700 hover:border-chakra-accent/30 hover:shadow-xl hover:shadow-indigo-900/5 relative">
              
              {/* Coins ornementaux fins mauves (traits très fins 0.5px) */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-[0.5px] border-l-[0.5px] border-chakra-primary/30 rounded-tl-lg transition-all duration-700 group-hover:w-10 group-hover:h-10 group-hover:border-chakra-primary/60"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-[0.5px] border-r-[0.5px] border-chakra-primary/30 rounded-tr-lg transition-all duration-700 group-hover:w-10 group-hover:h-10 group-hover:border-chakra-primary/60"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[0.5px] border-l-[0.5px] border-chakra-primary/30 rounded-bl-lg transition-all duration-700 group-hover:w-10 group-hover:h-10 group-hover:border-chakra-primary/60"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[0.5px] border-r-[0.5px] border-chakra-primary/30 rounded-br-lg transition-all duration-700 group-hover:w-10 group-hover:h-10 group-hover:border-chakra-primary/60"></div>

              <div className="flex justify-between items-start mb-10">
                <div className="text-chakra-accent transition-transform duration-700 group-hover:scale-110">
                  {s.svg}
                </div>
                <span className="font-serif text-2xl text-chakra-primary/40 group-hover:text-chakra-accent transition-colors">
                  {s.price}
                </span>
              </div>
              <h3 className="font-serif text-xl mb-6 text-chakra-primary uppercase tracking-tight leading-tight">{s.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed mb-10 text-sm min-h-[80px]">
                {s.desc}
              </p>
              
              {/* Correction whitespace-nowrap et translation sur le tiret */}
              <button 
                onClick={() => onNavigate(s.id)}
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-chakra-primary flex items-center gap-3 whitespace-nowrap group/btn"
              >
                <span>Explorer le soin</span> 
                <span className="text-chakra-accent transition-transform duration-500 group-hover/btn:translate-x-2">
                  —
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
