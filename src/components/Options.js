import React from 'react';
import DownloadBadges from './DownloadBadges';

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
      borderColor: "border-red-500"
    },
    {
      title: "Používat klasické jídelníčky",
      items: [
        "Nevhodné pro všechny",
        "Omezené možnosti",
        "Drahé",
        "Nedostatečná flexibilita"
      ],
      borderColor: "border-red-500"
    },
    {
      title: "Kalori",
      items: [
        "Rychlé a jednoduché",
        "Přesné výpočty díky AI",
        "Flexibilní a přizpůsobitelné",
        "Dostupné a cenově výhodné"
      ],
      borderColor: "border-primary"
    }
  ];

  return (
    <section className="px-4 py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Máme 3 možnosti...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {options.map((option, index) => (
            <div key={index} className={`border-2 ${option.borderColor} rounded-lg p-4 md:p-6`}>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{option.title}</h3>
              <ul className="space-y-2 md:space-y-3">
                {option.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    {option.borderColor === 'border-primary' ? (
                      <span className="text-primary text-lg md:text-xl flex-shrink-0">✓</span>
                    ) : (
                      <span className="text-red-500 text-lg md:text-xl flex-shrink-0">×</span>
                    )}
                    <span className="text-sm md:text-base text-gray-700">{item}</span>
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

