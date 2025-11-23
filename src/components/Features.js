import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Features = () => {
  const features = [
    {
      number: 1,
      title: "Víte, co jíte a jste fit",
      description: "Konečně žádné odhadování kalorií, sacharidů ani tuků. Jen kontrola bez námahy. Už bude mnohem jednodušší proměňovat svého vysněného těla."
    },
    {
      number: 2,
      title: "Jistota, že to nepřeháníte",
      description: "Kalorie vám vždy ukáží, kdy jídlo ubrat a kdy si můžete dovolit více. Kompletně bez stresu a vše máte pod kontrolou."
    },
    {
      number: 3,
      title: "Už žádné vážení jídla",
      description: "Konec stresu. Jedna fotka nahradí celou tabulku, takže už žádné hodiny vážení."
    },
    {
      number: 4,
      title: "Svátky přežijete bez přibírání",
      description: "Budete moct jíst cokoliv budete chtít a nestresovat se nad tím, že každou chvíli přiberete."
    },
    {
      number: 5,
      title: "Vyfotíte jídlo, hned vidíte kalorie",
      description: "Jeden klik, bez psaní, bez tabulek. Stačí jen jedna fotka a máte na den vystaráno."
    },
    {
      number: 6,
      title: "Přehled dne za 2 minuty",
      description: "Ušetříte čas. Máte jasno i v největším shonu a nemusíte zdlouhavě psát a vkládat jednotlivé suroviny do tabulky."
    }
  ];

  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary-dark opacity-5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Co vás čeká uvnitř
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div ref={ref} className="space-y-16 md:space-y-20">
          {features.map((feature, index) => (
            <div key={feature.number}>
              {/* Intermediate heading before feature 5 */}
              {index === 4 && (
                <div className="mb-12 md:mb-16 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    A to není vše...
                  </h3>
                </div>
              )}
              
              {/* Feature Card */}
              <div
                className={`flex flex-col items-center text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Feature Content */}
                <div className="w-full max-w-3xl">
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    {feature.number}. {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
                    {feature.description}
                  </p>
                  
                  {/* Placeholder Image */}
                  <div className="relative w-full max-w-2xl mx-auto h-56 sm:h-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-dark/10 opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

