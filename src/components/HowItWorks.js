import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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

  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="px-4 py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
          Jak Kalori funguje?
        </h2>
        <div ref={ref} className="space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col md:flex-row gap-4 md:gap-6 items-start card-hover bg-white rounded-xl p-6 md:p-8 shadow-md transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
                  <span className="text-2xl md:text-3xl font-bold text-white">{step.number}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="w-full h-32 sm:h-40 md:h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-inner overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-dark/10"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

