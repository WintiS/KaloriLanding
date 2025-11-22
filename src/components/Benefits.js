import React from 'react';
import DownloadBadges from './DownloadBadges';

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

  return (
    <section className="px-4 py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-3 md:space-y-4 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-primary text-lg md:text-xl flex-shrink-0">✓</span>
              <p className="text-sm md:text-base text-gray-700">{benefit}</p>
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

export default Benefits;

