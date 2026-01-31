import React from 'react';

interface ServiceDetailProps {
  type: 'reiki' | 'bioenergie' | 'chromatherapie' | 'nettoyage';
  onBack: () => void;
}

const serviceData = {
  reiki: {
    title: "Reiki Usui",
    subtitle: "L'art de la guérison par l'énergie universelle",
    price: "45€",
    fullDesc: "Le Reiki est bien plus qu'une simple technique : c'est une rencontre avec soi-même. Originaire du Japon, cette pratique millénaire consiste à canaliser l'énergie vitale pour restaurer l'harmonie intérieure. Lors d'une séance, je sers de canal pour transmettre cette force subtile par une imposition des mains douce, agissant comme un baume sur vos centres énergétiques.",
    steps: [
      { name: "Accueil & Échange", detail: "Un moment pour poser vos intentions." },
      { name: "Soin Énergétique", detail: "Imposition des mains sur les centres vitaux." },
      { name: "Harmonisation", detail: "Rééquilibrage des chakras et des corps subtils." }
    ],
    benefits: ["Apaisement mental profond", "Libération des blocages", "Vitalité retrouvée", "Clarté émotionnelle"],
    reasons: [
      "Gestion du stress et de l'anxiété",
      "Accompagnement lors d'un deuil ou d'une séparation",
      "Soutien émotionnel lors de périodes de transition",
      "Besoin de relaxation profonde et de lâcher-prise",
      "Reconnexion avec son moi intérieur"
    ],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
  },
  bioenergie: {
    title: "Bioénergie",
    subtitle: "Réalignement vibratoire à l'antenne de Lecher",
    price: "50€",
    fullDesc: "La bioénergie est une approche scientifique de l'invisible. En utilisant l'antenne de Lecher, nous explorons les fréquences vibratoires de votre corps pour identifier les pollutions énergétiques ou les décalages. Ce soin permet de 'nettoyer' votre architecture subtile pour que l'énergie circule à nouveau librement, comme une rivière retrouvant son lit.",
    steps: [
      { name: "Bilan Vibratoire", detail: "Mesure des champs avec l'antenne." },
      { name: "Correction", detail: "Neutralisation des points de blocage." },
      { name: "Centrage", detail: "Réalignement des axes de vie." }
    ],
    benefits: ["Ancrage renforcé", "Dégagement énergétique", "Équilibre physique", "Protection subtile"],
    reasons: [
      "Douleurs physiques persistantes (dos, articulations)",
      "Sensation de fatigue chronique ou d'épuisement",
      "Pollutions énergétiques ou sensation d'être 'pollué'",
      "Troubles digestifs liés au stress",
      "Manque d'ancrage et sentiment d'instabilité"
    ],
    image: "https://images.unsplash.com/photo-1614036417651-efe591214972?auto=format&fit=crop&q=80&w=1200"
  },
  chromatherapie: {
    title: "Chromathérapie",
    subtitle: "La puissance curative du spectre lumineux",
    price: "35€",
    fullDesc: "La lumière est une nourriture pour nos cellules. Chaque couleur possède une longueur d'onde spécifique qui résonne avec nos organes et nos émotions. Par la projection de faisceaux colorés précis sur des zones réflexes, la chromathérapie informe votre organisme et l'aide à retrouver ses capacités d'auto-régulation naturelles.",
    steps: [
      { name: "Diagnostic Coloré", detail: "Choix des teintes selon vos besoins." },
      { name: "Projection Lumineuse", detail: "Soin par immersion de couleurs." },
      { name: "Stabilisation", detail: "Intégration des fréquences reçues." }
    ],
    benefits: ["Régulation du sommeil", "Gestion du stress aigu", "Tonus biologique", "Apaisement nerveux"],
    reasons: [
      "Troubles du sommeil et insomnies",
      "États de tristesse ou baisse de moral saisonnière",
      "Inflammations ou douleurs ciblées",
      "Besoin de revitalisation rapide",
      "Équilibrage des émotions par la lumière"
    ],
    image: "https://images.unsplash.com/photo-1554123168-b407f937466e?auto=format&fit=crop&q=80&w=1200"
  },
  nettoyage: {
    title: "Harmonisation Habitat",
    subtitle: "Purification et Équilibre de votre lieu de vie",
    price: "Sur devis",
    fullDesc: "Votre maison est le réceptacle de votre vie. Elle emmagasine les énergies, les tensions et les mémoires des occupants. Une harmonisation permet de libérer ces charges accumulées dans les murs et les objets pour transformer votre foyer en un véritable sanctuaire de régénération, où la circulation fluide de l'énergie favorise la santé et le bien-être de toute la famille.",
    steps: [
      { name: "Étude des Lieux", detail: "Détection des zones de stagnation énergétique." },
      { name: "Transmutation", detail: "Libération des mémoires et charges lourdes." },
      { name: "Protection", detail: "Mise en place d'une bulle vibratoire saine." }
    ],
    benefits: ["Sommeil plus réparateur", "Atmosphère légère et sereine", "Meilleure entente familiale", "Sentiment de sécurité"],
    reasons: [
      "Emménagement dans un nouveau lieu de vie",
      "Sensation de malaise inexpliqué chez soi",
      "Difficultés à dormir ou cauchemars fréquents",
      "Après une période difficile (maladie, conflit, séparation)",
      "Besoin de purifier les 'mémoires des murs'"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
  }
};

const ServiceDetail: React.FC<ServiceDetailProps> = ({ type, onBack }) => {
  const data = serviceData[type];

  return (
    <div className="pt-32 pb-24 bg-[#fcfaf7] min-h-screen">
      {/* Navigation de retour discrète */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-gray-400 hover:text-chakra-primary transition-all uppercase text-[9px] tracking-[0.4em] font-bold"
        >
          <span className="text-lg transition-transform group-hover:-translate-x-1">←</span> Retour aux soins
        </button>
      </div>

      <article className="max-w-4xl mx-auto px-6">
        {/* Header du soin */}
        <header className="text-center mb-20 space-y-6">
          <div className="inline-block bg-chakra-primary text-white px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold mb-4 shadow-lg shadow-indigo-900/20">
            Soin Signature • {data.price}
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-chakra-primary italic leading-tight">
            {data.title}
          </h1>
          <p className="text-chakra-accent font-light tracking-[0.2em] uppercase text-xs md:text-sm">
            {data.subtitle}
          </p>
        </header>

        {/* Image d'ambiance */}
        <div className="relative mb-24">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-1000">
            <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-white p-8 hidden md:block border border-gray-100 shadow-xl max-w-xs italic font-serif text-chakra-primary text-lg">
            "L'équilibre n'est pas quelque chose que l'on trouve, c'est quelque chose que l'on crée."
          </div>
        </div>

        {/* Contenu textuel principal */}
        <div className="space-y-24">
          {/* Description narrative */}
          <section className="prose prose-lg mx-auto">
            <div className="flex justify-center mb-8">
               <div className="w-12 h-px bg-chakra-accent/40"></div>
            </div>
            <p className="text-gray-600 font-light text-xl leading-relaxed text-center font-serif italic">
              {data.fullDesc}
            </p>
          </section>

          {/* Motifs de consultation */}
          <section className="bg-indigo-50/30 border border-indigo-100 p-12 md:p-16 rounded-3xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 bg-chakra-accent/5 rounded-bl-full"></div>
             <h3 className="text-center text-chakra-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-12">Pourquoi choisir ce soin ?</h3>
             <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-2xl mx-auto">
                {data.reasons.map((reason, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <span className="text-chakra-accent text-sm transition-transform group-hover:scale-125">✧</span>
                    <p className="text-gray-600 font-serif italic text-lg leading-tight">{reason}</p>
                  </div>
                ))}
             </div>
          </section>

          {/* Déroulement du soin */}
          <section>
            <h3 className="text-center text-chakra-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-12">Le Déroulement de votre séance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.steps.map((step, idx) => (
                <div key={idx} className="text-center space-y-4">
                  <span className="font-serif text-2xl text-chakra-accent/30 italic">0{idx + 1}</span>
                  <h4 className="font-serif text-xl text-chakra-primary italic">{step.name}</h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bienfaits */}
          <section className="bg-white border border-gray-100 p-12 md:p-20 rounded-3xl shadow-sm">
             <h3 className="text-center text-chakra-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-16">Bienfaits observés</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                {data.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-1 h-12 bg-chakra-accent/20 group-hover:bg-chakra-accent transition-colors duration-500"></div>
                    <div className="space-y-2">
                      <h5 className="font-serif text-xl text-chakra-primary italic">{benefit}</h5>
                      <p className="text-gray-400 text-xs uppercase tracking-widest font-light">Amélioration durable</p>
                    </div>
                  </div>
                ))}
             </div>
          </section>

          {/* Action */}
          <section className="text-center pt-12">
            <div className="space-y-8">
              <p className="text-gray-400 italic font-serif text-lg">Prêt à retrouver votre harmonie ?</p>
              <a 
                href="tel:+32495380149" 
                className="inline-block bg-chakra-primary text-white px-16 py-6 rounded-full text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-chakra-accent transition-all duration-500 shadow-xl shadow-indigo-900/10"
              >
                Prendre rendez-vous
              </a>
              <p className="text-[10px] text-gray-300 uppercase tracking-widest pt-4">
                Paiement en espèces uniquement • Séance de 60 à 90 min
              </p>
            </div>
          </section>
        </div>

        {/* Disclaimer Médical */}
        <footer className="mt-32 pt-12 border-t border-gray-100 text-center">
          <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em] leading-relaxed max-w-2xl mx-auto italic">
            Les soins énergétiques complètent la médecine conventionnelle mais ne remplacent pas un avis médical.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default ServiceDetail;