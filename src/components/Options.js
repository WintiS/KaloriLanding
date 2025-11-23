import React from 'react';
import DownloadBadges from './DownloadBadges';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Options = () => {
  const options = [
    {
      title: "Počítat si kalorie sám",
      items: [
        "Časově náročné",
        "Časté chyby",
        "Ztráta motivace",
        "Složité tabulky"
      ],
      borderColor: "border-red-400",
      bgColor: "bg-white"
    },
    {
      title: "Používat klasické jídelníčky",
      items: [
        "Nevhodné pro všechny",
        "Omezené možnosti",
        "Drahé",
        "Nedostatečná flexibilita"
      ],
      borderColor: "border-red-400",
      bgColor: "bg-white"
    },
    {
      title: "Kalori",
      items: [
        "Rychlé a jednoduché",
        "Přesné výpočty díky AI",
        "Flexibilní a přizpůsobitelné",
        "Dostupné a cenově výhodné"
      ],
      borderColor: "border-primary",
      bgColor: "bg-gradient-to-br from-primary/5 to-white"
    }
  ];

  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="px-4 py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
          Tohle všechno a ještě více, vás život usnadní!
        </h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {options.map((option, index) => (
            <div
              key={index}
              className={`card-hover border-2 ${option.borderColor} rounded-xl p-6 md:p-8 ${option.bgColor} shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{option.title}</h3>
              <ul className="space-y-3">
                {option.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1"
                  >
                    {option.borderColor === 'border-primary' ? (
                      <span className="text-primary text-xl md:text-2xl flex-shrink-0 font-bold">✓</span>
                    ) : (
                      <span className="text-red-500 text-xl md:text-2xl flex-shrink-0 font-bold">×</span>
                    )}
                    <span className="text-base md:text-lg text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center">
          <DownloadBadges />
        </div>
      </div>
    </section>
  );
};

export default Options;

