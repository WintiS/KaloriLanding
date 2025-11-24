import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BeforeAfter = () => {
  const beforeItems = [
    "Nejíte “špatně”, ale stejně přibíráte a nevíte proč",
    "Jíte od oka a pořád tipujete, jestli si můžete dovolit ještě kousek",
    "V restauraci vůbec netušíte, kolik vaše jídlo má kalorií a stresujete se",
    "Kalorické tabulky a vážení vás po pár týdnech unaví, je to neudržitelné",
    "Přes svátky ztrácíte kontrolu, všude je jídlo a jde to snadno “přestřelit”",
    "Chcete být fit, ale nechcete žít s váhou a kalkulačkou pořád při sobě"
  ];

  const afterItems = [
    "Vyfotíte jídlo a během vteřin víte, jak na tom jste",
    "Konečně máte jistotu. Víte, co si můžete dovolit bez přibírání",
    "Přehled o celém dni za 2 minuty, žádné zbytečné přemýšlení",
    "I v restauraci víte, co objednat a kolik toho sníst",
    "Jíte normálně, ale máte hladinu pod kontrolou",
    "Nemusíte držet diety. Konečně máte systém, který je udržitelný",
    "Přes svátky si dopřejete, ale nepřiberete"
  ];

  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="px-4 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
          Před Kalori / Po Kalori
        </h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div
            className={`card-hover border-2 border-red-400 rounded-xl p-6 md:p-8 bg-white shadow-lg transition-all duration-300 ${
              isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[0.97] translate-y-2'
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              Před
            </h3>
            <ul className="space-y-3 md:space-y-3.5">
              {beforeItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 transition-all duration-200 hover:translate-x-0.5"
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  <span className="text-red-500 text-xl md:text-2xl flex-shrink-0 font-bold">×</span>
                  <span className="text-base md:text-lg text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`card-hover border-2 border-primary rounded-xl p-6 md:p-8 bg-gradient-to-br from-primary/5 to-white shadow-lg transition-all duration-300 ${
              isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[0.97] translate-y-2'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Po
            </h3>
            <ul className="space-y-3 md:space-y-3.5">
              {afterItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 transition-all duration-200 hover:translate-x-0.5"
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  <span className="text-primary text-xl md:text-2xl flex-shrink-0 font-bold">✓</span>
                  <span className="text-base md:text-lg text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;

