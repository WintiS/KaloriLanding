import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Features = () => {
  const features = [
    {
      number: 1,
      title: "Vše na jednom místě",
      description: "Všechny informace o vaší stravě na jednom místě. Kalorie, bílkoviny, sacharidy a tuky v přehledném rozhraní."
    },
    {
      number: 2,
      title: "Rychlé, ale to nejdůležitější",
      description: "Získejte přehled o své stravě za pár minut. Bez zbytečných komplikací, jen to nejdůležitější."
    },
    {
      number: 3,
      title: "Už žádné vaření jídla",
      description: "Nemusíte vařit podle složitých receptů. Jezte normálně a Kalori vám spočítá vše automaticky."
    },
    {
      number: 4,
      title: "Žádné složité počítání",
      description: "Zapomeňte na složité tabulky a kalkulačky. AI to udělá za vás."
    },
    {
      number: 5,
      title: "Vytvořte si svůj jídelníček",
      description: "Plánujte si jídla dopředu a mějte přehled o tom, co jíte."
    },
    {
      number: 6,
      title: "Přehled za 2 minuty",
      description: "Stačí vyfotit jídlo a během dvou minut máte kompletní přehled o kaloriích a živinách."
    }
  ];

  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="px-4 py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
          Co všechno umí?
        </h2>
        <div ref={ref} className="space-y-8 md:space-y-12">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className={`flex flex-col md:flex-row gap-4 md:gap-6 items-start card-hover bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 md:p-8 shadow-md border border-gray-100 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
                  <span className="text-2xl md:text-3xl font-bold text-white">{feature.number}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
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

export default Features;

