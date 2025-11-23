import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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

  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="px-4 py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
          Před Kalori / Po Kalori
        </h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div
            className={`card-hover border-2 border-red-400 rounded-xl p-6 md:p-8 bg-white shadow-lg transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              Před
            </h3>
            <ul className="space-y-3 md:space-y-3.5">
              {beforeItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className="text-red-500 text-xl md:text-2xl flex-shrink-0 font-bold">×</span>
                  <span className="text-base md:text-lg text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`card-hover border-2 border-primary rounded-xl p-6 md:p-8 bg-gradient-to-br from-primary/5 to-white shadow-lg transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Po
            </h3>
            <ul className="space-y-3 md:space-y-3.5">
              {afterItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1"
                  style={{ transitionDelay: `${index * 50}ms` }}
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

