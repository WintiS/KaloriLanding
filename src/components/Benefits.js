import React from 'react';
import DownloadBadges from './DownloadBadges';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Benefits = () => {
  const benefits = [
    "Automatické počítání kalorií pomocí AI",
    "Rychlé a jednoduché použití",
    "Přesné rozpoznávání jídla",
    "Přehledné zobrazení živin",
    "Dlouhodobé sledování stravy",
    "Bezpečné uchování dat",
    "Intuitivní design",
    "Dostupné na iOS i Android"
  ];

  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="px-4 py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 md:p-12 text-center shadow-xl border border-gray-200 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vyzkoušejte Kalori na 7 dní zdarma
          </h2>
          <div className="space-y-3 md:space-y-4 mb-8 text-left">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 md:gap-4 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <span className="text-primary text-xl md:text-2xl flex-shrink-0 font-bold">✓</span>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
          <div className="text-center transition-all duration-700 delay-500">
            <DownloadBadges />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

