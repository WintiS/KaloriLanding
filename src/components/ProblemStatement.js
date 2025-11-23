import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProblemStatement = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="px-4 py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
            Vidíte se v této situaci?
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center">
          Chcete být fit, cítit se dobře v oblečení a mít jistotu, že jíte „tak akorát“? Ale zároveň nemáte čas několik hodin denně řešit, co přesně sníte? Kalorické tabulky jsou fajn… jenže zaberou desítky minut každý den. Vážit každé jídlo, abyste vše správně zapsali? Ještě horší. 
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-4 text-center">
          A tak často skončíme tak, že jíme od oka a doufáme, že to nepřeháníme. A právě tady přichází Kalori. Během 2 minut máte zapsané celé jídlo na den. Stačí jídlo vyfotit nebo krátce popsat a appka udělá zbytek za vás. Jednoduché, rychlé a přehledné.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;

