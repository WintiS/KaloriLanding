import React from 'react';

const BeforeAfter = () => {
  const beforeItems = [
    "Složité počítání kalorií",
    "Hodiny strávené nad jídelníčkem",
    "Nejistota, zda je to správně",
    "Frustrace z komplikovaných aplikací",
    "Ztráta motivace"
  ];

  const afterItems = [
    "Jednoduché focení jídla",
    "Přehled za 2 minuty",
    "Přesné výpočty díky AI",
    "Intuitivní design",
    "Dlouhodobá motivace"
  ];

  return (
    <section className="px-4 py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Před Kalori / Po Kalori
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="border-2 border-red-500 rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Před</h3>
            <ul className="space-y-2 md:space-y-3">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-500 text-lg md:text-xl flex-shrink-0">×</span>
                  <span className="text-sm md:text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-2 border-primary rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Po</h3>
            <ul className="space-y-2 md:space-y-3">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary text-lg md:text-xl flex-shrink-0">✓</span>
                  <span className="text-sm md:text-base text-gray-700">{item}</span>
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

