
import React from 'react';

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-24 bg-[#fcfaf7] min-h-screen">
      {/* Navigation de retour */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-gray-400 hover:text-chakra-primary transition-all uppercase text-[9px] tracking-[0.4em] font-bold"
        >
          <span className="text-lg transition-transform group-hover:-translate-x-1">←</span> Retour à l'accueil
        </button>
      </div>

      <article className="max-w-4xl mx-auto px-6">
        {/* En-tête de la page */}
        <header className="text-center mb-20 space-y-6">
          <p className="text-chakra-accent font-light tracking-[0.3em] uppercase text-[10px] font-bold">L'histoire de Chakras Harmony</p>
          <h1 className="font-serif text-5xl md:text-7xl text-chakra-primary italic leading-tight">
            Mon cheminement spirituel
          </h1>
          <div className="w-16 h-px bg-chakra-accent mx-auto mt-8"></div>
        </header>

        {/* Section Image d'ambiance */}
        <div className="mb-24 relative">
          <div className="aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl grayscale-[0.1]">
            <img 
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=2000" 
              alt="Nature paisible" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-8 py-4 shadow-xl border border-gray-50 rounded-lg">
             <p className="font-serif italic text-chakra-primary text-lg whitespace-nowrap">"Pour la petite histoire..."</p>
          </div>
        </div>

        {/* Corps du texte */}
        <div className="space-y-12 text-gray-600 font-light leading-relaxed text-lg text-justify font-body">
          <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-chakra-accent first-letter:mr-3 first-letter:float-left">
            Ce qui s’annonçait à moi dès mon plus jeune âge, devait être le début de l’aventure que je mène avec vous aujourd’hui.
            Mais hier, j’ai pensé « pourquoi n’ai-je pas été à l’écoute plus tôt ? » et avec ce sentiment de réponse « parce qu’il n’y a pas de chemin sans détours ! »
          </p>

          <div className="bg-white p-12 my-16 border-l-4 border-chakra-accent italic font-serif text-2xl text-chakra-primary leading-relaxed shadow-sm">
            "Je voudrais donc, dire merci à ces émotions qui m’ont affectée autrefois lors de la perte d’un être cher car elles m’ont rendue davantage perméable à toutes sortes de ressentis..."
          </div>

          <p>
            ...et m’ont invitée à nouveau et avec le temps bien sûr, à explorer le monde des énergies subtiles.
          </p>

          <p>
            Aujourd’hui enfin, comprendre et travailler avec ces énergies, c’est contribuer chaque jour au maintien de l’équilibre de mon corps, de mon esprit et de mon habitat. Elles m’aident à progresser vers un bien–être au quotidien.
          </p>

          {/* Section Passions */}
          <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {['Le dessin', 'La musique', 'Les animaux', 'La nature'].map((item, idx) => (
              <div key={idx} className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-chakra-accent/10 flex items-center justify-center mx-auto text-chakra-accent">✧</div>
                <p className="font-serif italic text-chakra-primary">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center italic font-serif text-xl text-chakra-primary py-8">
            ...sont toutes ces passions entre autres, qui m’accompagnent dans ma vie quotidienne et qui me rappellent à vous … Belles Energies !
          </p>

          <p className="text-center font-bold text-chakra-accent tracking-[0.2em] uppercase text-sm">
            Alors merci tout simplement.
          </p>
        </div>

        {/* Section Remerciements */}
        <section className="mt-32 bg-white border border-gray-100 p-12 md:p-20 rounded-3xl shadow-xl shadow-indigo-900/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-chakra-accent/5 rounded-bl-full"></div>
          
          <h2 className="font-serif text-3xl text-chakra-primary italic mb-12 text-center">Remerciements</h2>
          
          <div className="space-y-8 text-gray-500 font-light leading-relaxed">
            <p>
              À mon époux, pour cet intérêt à ce monde subtil, à mes enfants pour leur confiance et à mes collègues et amis pour leurs encouragements et leurs soutiens lors de mes doutes.
            </p>
            
            <p>
              À vous chers lecteurs, qui êtes déjà en train de parcourir ce site et qui peut-être avec moi et comme moi, recherchez la paix intérieure et l’équilibre de soi.
            </p>
            
            <div className="pt-8 border-t border-gray-50 space-y-4">
              <p className="text-chakra-primary font-medium italic">
                Je remercie tout particulièrement mon fils <span className="text-chakra-accent">Alexis</span> pour la réalisation de ce site magnifique et le temps qu’il y a consacré, à mon fils <span className="text-chakra-accent">Delphis</span> pour son implication dans l’agencement du bureau et le choix du nom de ma société.
              </p>
              <p className="text-sm italic opacity-70 text-center">Je sais qu’ils me porteront chance.</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <div className="mt-24 text-center space-y-12">
          <div className="space-y-4">
            <p className="text-gray-400 font-light italic">À bientôt,</p>
            <p className="font-serif text-4xl text-chakra-primary italic">Audrey</p>
          </div>

          <div className="pt-12 border-t border-gray-100">
             <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] leading-relaxed max-w-2xl mx-auto italic">
              Les soins énergétiques ne remplacent aucunement la médecine traditionnelle mais ils peuvent sans aucun doute l’accompagner.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AboutPage;
