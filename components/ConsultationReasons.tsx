
import React from 'react';

const reasons = [
  {
    title: "Dépression",
    recommendation: "Reiki & Chromathérapie",
    desc: "Retrouver une lueur intérieure et apaiser le mental par les couleurs et l'énergie universelle.",
    icon: "✧"
  },
  {
    title: "Manque de confiance en soi",
    recommendation: "Reiki & Bioénergie",
    desc: "Renforcer son ancrage et libérer les blocages émotionnels qui entravent votre plein potentiel.",
    icon: "✦"
  },
  {
    title: "Problèmes d’estomac & intestinaux",
    recommendation: "Bioénergie",
    desc: "Rééquilibrer les flux énergétiques liés au centre des émotions et de la digestion.",
    icon: "⟡"
  },
  {
    title: "Gestion des émotions & du stress",
    recommendation: "Chromathérapie & Reiki",
    desc: "Une immersion lumineuse pour réguler le système nerveux et retrouver le calme intérieur.",
    icon: "✧"
  },
  {
    title: "Maux de tête & de dos",
    recommendation: "Bioénergie & Reiki",
    desc: "Identifier les tensions cristallisées et relancer la circulation vitale dans le corps physique.",
    icon: "✦"
  },
  {
    title: "Fatigue, épuisement & insomnie",
    recommendation: "Reiki & Chromathérapie",
    desc: "Un protocole de relaxation profonde pour restaurer vos réserves énergétiques.",
    icon: "⟡"
  },
  {
    title: "Deuil, séparation & divorce",
    recommendation: "Reiki & Harmonisation Habitat",
    desc: "Accompagner le cœur dans sa transition et purifier votre espace de vie pour un nouveau départ.",
    icon: "✧"
  }
];

const ConsultationReasons: React.FC = () => {
  return (
    <section id="motifs" className="py-24 bg-[#fafaf9]/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-chakra-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-4">Pourquoi consulter ?</p>
          <h2 className="font-serif text-4xl md:text-5xl text-chakra-primary italic leading-tight">
            Trouver le soin qui vous correspond
          </h2>
          <div className="w-12 h-px bg-chakra-accent mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {reasons.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white p-8 rounded-xl border border-gray-100 hover:border-chakra-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-900/5"
            >
              {/* Coins ornementaux fins mauves */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-[0.5px] border-l-[0.5px] border-chakra-primary/30 rounded-tl-lg group-hover:border-chakra-primary/60 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[0.5px] border-r-[0.5px] border-chakra-primary/30 rounded-br-lg group-hover:border-chakra-primary/60 transition-colors"></div>

              <div className="mb-6 text-chakra-accent text-xl">{item.icon}</div>
              
              <h3 className="font-serif text-xl text-chakra-primary mb-4 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                {item.desc}
              </p>

              <div className="pt-4 border-t border-gray-50">
                <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold block mb-2">Soin recommandé :</span>
                <p className="text-chakra-primary font-serif italic text-sm">
                  {item.recommendation}
                </p>
              </div>
            </div>
          ))}

          {/* Carte finale d'appel à l'action */}
          <div className="lg:col-span-1 xl:col-span-1 bg-chakra-primary p-8 rounded-xl flex flex-col justify-center items-center text-center text-white space-y-6">
             <p className="font-serif italic text-lg opacity-80">"Chaque maux exprime ce que les mots n'ont pu dire."</p>
             <a 
              href="tel:+32495380149" 
              className="border border-white/30 px-6 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-chakra-primary transition-all"
             >
               En discuter ensemble
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationReasons;
