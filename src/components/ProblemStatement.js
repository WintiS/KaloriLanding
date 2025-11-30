import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProblemStatement = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="px-4 py-12 md:py-16 bg-gradient-to-b from-gray-50 to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Left column - 60% width on md+ */}
            <div className="w-full md:w-[60%]">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center md:text-left">
                Vidíte se v&nbsp;této situaci?
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed text-left">
                Chcete být fit, cítit&nbsp;se dobře v oblečení a mít jistotu, že&nbsp;jíte „tak&nbsp;akorát"? Ale zároveň nemáte čas několik hodin denně řešit, co&nbsp;přesně sníte? Kalorické tabulky jsou fajn… jenže zaberou desítky minut každý den. Vážit každé jídlo, abyste vše správně zapsali? Ještě&nbsp;horší. 
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-4 text-left">
                A&nbsp;tak často skončíme tak, že&nbsp;jíme od oka a&nbsp;doufáme, že to nepřeháníme. A&nbsp;právě tady přichází Kalori. Během 2 minut máte zapsané celé jídlo na den. Stačí jídlo vyfotit nebo&nbsp;krátce popsat a&nbsp;appka udělá zbytek za vás. Jednoduché, rychlé a&nbsp;přehledné.
              </p>
            </div>
            {/* Right column - 40% width on md+ */}
            <div className="w-full md:w-[40%] flex items-center justify-center">
              <div className="relative w-full h-[220px] sm:h-[280px] md:h-full max-h-[380px] rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white group">
                <img 
                  src="/assets/beforeAfter.png"
                  alt="Náhled aplikace Kalori"
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                  style={{ minHeight: '220px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-dark/10 opacity-50 group-hover:opacity-75 transition-opacity duration-200 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;

