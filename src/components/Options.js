import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Options = () => {
  const options = [
    {
      number: 1,
      title: "Počítat si kalorie ručně",
      descriptions: [
        "Každý den vážit jídlo, zapisovat každou ingredienci a trávit u toho desítky minut.",
        "Funguje to... ale je to časově náročné a málokdo u toho dlouhodobě vydrží."
      ],
      borderGradient: "from-red-600 via-red-500 to-red-400",
      shadowColor: "shadow-red-200",
      bgColor: "bg-gray-50"
    },
    {
      number: 2,
      title: "Používat klasické kalorické tabulky v telefonu",
      descriptions: [
        "Můžete vyhledávat potraviny, dávat dohromady recepty a zapisovat vše ručně.",
        "Funguje to, ale zabere to hoodně času a pozornosti, hlavně když jíte mimo domov nebo nemáte prostor se jídlu věnovat celý den..."
      ],
      borderGradient: "from-rose-600 via-red-500 to-red-400",
      shadowColor: "shadow-red-200",
      bgColor: "bg-gray-50"
    },
    {
      number: 3,
      title: "Kalori",
      descriptions: [
        "Vše zvládnete jen za 2 minuty denně.",
        "Stačí jídlo vyfotit nebo krátce popsat a Kalori vám spočítá kalorie, bílkoviny, sacharidy i tuky. Bez vážení, bez složitého zapisování a hlavně bez stresu.",
        "Pár minut vašeho času a máte jasný přehled o tom, co jíte."
      ],
      borderGradient: "from-primary via-green-500 to-emerald-300",
      shadowColor: "shadow-green-200",
      bgColor: "bg-gray-50"
    }
  ];

  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="px-4 py-12 md:py-16 lg:py-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-16 text-center">
          Máte 3 možnosti...
        </h2>
      <div className="max-w-4xl md:max-w-7xl mx-auto">
        <div ref={ref} className="space-y-6 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
          {options.map((option, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-[2px] bg-gradient-to-br ${option.borderGradient} shadow-xl ${option.shadowColor} transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`${option.bgColor} rounded-xl p-6 md:p-8 lg:p-10 flex flex-col h-full hover:-translate-y-1 hover:shadow-2xl transition-transform duration-300`}>
                <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {option.number}. {option.title}
                </h3>
                {option.title === "Kalori" && (
                  <h4 className="text-lg md:text-lg lg:text-xl font-bold text-gray-900 mb-4">
                    (nejjednodušší cesta)
                  </h4>
                )}
                <div className="space-y-3 flex-grow">
                  {option.descriptions.map((description, descIndex) => (
                    <p key={descIndex} className="text-base md:text-base lg:text-lg text-gray-900 leading-relaxed">
                      {description}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Options;

