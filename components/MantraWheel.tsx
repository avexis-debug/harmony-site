
import React, { useState, useRef } from 'react';

const MANTRAS = [
  "Je suis en paix avec mon passé",
  "Mon énergie est fluide et harmonieuse",
  "Je rayonne la lumière et la bienveillance",
  "Je suis ancré et en toute sécurité",
  "Ma parole est juste et sincère",
  "Mon intuition me guide avec sagesse",
  "Je m'ouvre à l'abondance de l'univers",
  "Chaque respiration m'apporte la sérénité"
];

const MantraWheel: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setResult(null);

    // Calcul d'une rotation aléatoire entre 5 et 10 tours complets + une portion
    const extraDegrees = Math.floor(Math.random() * 360);
    const totalRotation = rotation + (360 * (5 + Math.floor(Math.random() * 5))) + extraDegrees;
    
    setRotation(totalRotation);

    // Attendre la fin de l'animation (5 secondes définies en CSS)
    setTimeout(() => {
      setIsSpinning(false);
      // Calcul du mantra correspondant (index inversé par rapport à la rotation)
      const actualDegrees = totalRotation % 360;
      const index = Math.floor(((360 - actualDegrees + 22.5) % 360) / 45);
      setResult(MANTRAS[index]);
    }, 5000);
  };

  return (
    <section className="py-24 bg-[#fdfcfb] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-chakra-primary mb-6 italic">Votre Guidance du Jour</h2>
        <p className="text-gray-400 font-light max-w-xl mx-auto mb-16 uppercase tracking-[0.2em] text-[10px]">
          Prenez une grande inspiration, posez une intention, et laissez l'énergie vous guider vers votre affirmation.
        </p>

        <div className="relative inline-block">
          {/* L'aiguille de la roue */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 z-20">
            <svg width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 40L0 0H30L15 40Z" fill="var(--chakra-accent)" className="drop-shadow-md" />
            </svg>
          </div>

          {/* La Roue */}
          <div 
            ref={wheelRef}
            className="w-72 h-72 md:w-96 md:h-96 rounded-full border-8 border-white shadow-2xl relative transition-transform duration-[5000ms] cubic-bezier(0.15, 0, 0.15, 1)"
            style={{ 
              transform: `rotate(${rotation}deg)`,
              background: `conic-gradient(
                #2e1065 0deg 45deg, 
                #3b0764 45deg 90deg, 
                #4c1d95 90deg 135deg, 
                #5b21b6 135deg 180deg, 
                #2e1065 180deg 225deg, 
                #3b0764 225deg 270deg, 
                #4c1d95 270deg 315deg, 
                #5b21b6 315deg 360deg
              )`
            }}
          >
            {/* Lignes de séparation dorées */}
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="absolute top-1/2 left-1/2 w-full h-px bg-white/10 origin-left -translate-y-1/2"
                style={{ transform: `rotate(${i * 45}deg)` }}
              ></div>
            ))}
            
            {/* Symboles (étoiles) parfaitement centrés dans les segments */}
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="absolute inset-0 flex justify-center"
                style={{ 
                  transform: `rotate(${i * 45 + 22.5}deg)` 
                }}
              >
                <span className="text-white/40 text-xl md:text-2xl mt-10 md:mt-14 font-serif select-none">
                  ✧
                </span>
              </div>
            ))}

            {/* Bordure intérieure subtile */}
            <div className="absolute inset-4 rounded-full border border-white/5 pointer-events-none"></div>
          </div>

          {/* Bouton Central */}
          <button 
            onClick={spinWheel}
            disabled={isSpinning}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-xl flex items-center justify-center group z-30 transition-transform active:scale-95 ${isSpinning ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}`}
          >
            <div className="absolute inset-2 border border-chakra-accent/30 rounded-full group-hover:scale-110 transition-transform"></div>
            <span className="text-chakra-primary font-serif italic text-sm md:text-base font-bold">
              {isSpinning ? '...' : 'Rayonner'}
            </span>
          </button>
        </div>

        {/* Résultat / Mantra */}
        <div className={`mt-16 transition-all duration-1000 ${result ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {result && (
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-xl max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-chakra-accent"></div>
              <p className="text-gray-400 uppercase tracking-widest text-[9px] mb-4 font-bold">Votre mantra de l'instant</p>
              <h3 className="font-serif text-2xl md:text-3xl text-chakra-primary italic leading-relaxed">
                "{result}"
              </h3>
              <div className="mt-8 flex justify-center gap-4">
                 <button 
                  onClick={() => setResult(null)}
                  className="text-[9px] uppercase tracking-[0.2em] text-gray-400 hover:text-chakra-primary transition-colors"
                 >
                   Fermer
                 </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MantraWheel;
