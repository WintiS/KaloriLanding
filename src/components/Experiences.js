import React from 'react';

const Experiences = () => {
  return (
    <section className="px-4 py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          Zkušenosti s Kalori ostatních
        </h2>
        <div className="w-full h-48 sm:h-64 md:h-96 bg-gray-200 rounded-lg mb-6"></div>
        <p className="text-base md:text-lg text-gray-600 text-center">
          Tisíce uživatelů už používají Kalori k jednoduchému sledování své stravy. 
          Připojte se k nim a získejte kontrolu nad svým jídelníčkem.
        </p>
      </div>
    </section>
  );
};

export default Experiences;

