import React from 'react';
import DownloadBadges from './DownloadBadges';

const Hero = () => {
  return (
    <section className="px-4 py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Jedna fotka, Dvě minuty. Přehled jídla na celý den.
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Vyfoťte své jídlo a AI vám okamžitě spočítá kalorie, bílkoviny, sacharidy a tuky. 
          Jednoduše takto získáte dlouhodobý přehled o vaší stravě.
        </p>
        <div className="mb-8">
          <div className="w-full h-48 sm:h-64 md:h-96 bg-gray-200 rounded-lg mb-6"></div>
        </div>
        <DownloadBadges />
        <p className="text-sm text-red-600 mt-4 flex items-center justify-center gap-2">
          <span className="text-red-600 font-bold">!</span>
          <span>Důležité upozornění</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;

