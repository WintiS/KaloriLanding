import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Stáhněte aplikaci a přihlaste se",
      description: "Stáhněte Kalori z App Store nebo Google Play a vytvořte si účet během několika sekund."
    },
    {
      number: 2,
      title: "Zadejte své první jídlo",
      description: "Vyfoťte své jídlo nebo ho jednoduše popište. AI automaticky rozpozná všechny ingredience."
    },
    {
      number: 3,
      title: "Vyberte si svůj cíl",
      description: "Nastavte si svůj cíl - hubnutí, udržení váhy nebo přibírání. Kalori vám pomůže ho dosáhnout."
    },
    {
      number: 4,
      title: "Mějte hotovo!",
      description: "A to je vše! Kalori vám automaticky počítá kalorie a živiny. Jednoduše a rychle."
    }
  ];

  return (
    <section className="px-4 py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
          Jak Kalori funguje?
        </h2>
        <p className="text-base text-gray-600 mb-12 text-center">
          Jednoduchý proces ve čtyřech krocích
        </p>
        <div className="space-y-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-gray-700">{step.number}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-base text-gray-600 mb-4">
                  {step.description}
                </p>
                <div className="w-full h-40 sm:h-48 md:h-56 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

