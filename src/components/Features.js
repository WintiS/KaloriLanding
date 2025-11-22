import React from 'react';

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

  return (
    <section className="px-4 py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
          Co vás čeká uvnitř?
        </h2>
        <div className="space-y-12 mt-12">
          {features.map((feature) => (
            <div key={feature.number} className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-gray-700">{feature.number}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 mb-4">
                  {feature.description}
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

export default Features;

