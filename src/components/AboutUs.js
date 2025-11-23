import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutUs = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="px-4 py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 text-center">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`bg-white rounded-2xl p-8 md:p-10 lg:p-12 shadow-xl border border-gray-200 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-10">
            Něco krátce<br />o nás
          </h2>
          
          <div className="space-y-6 md:space-y-8">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Viděli jsme, že lidé Neselhávají proto, že by byli slabí. Selhávají proto, že nástroje, které mají, jsou příliš těžké na používání. Dnešní svět je hrozně rychlý. Jíme venku, u známých, v práci, mezi schůzkami... Kdo má vůbec čas zapisovat všechno ručně?
            </p>
            
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Řekli jsme si: „Co kdyby šlo mít přehled bez vážení, bez tabulek a bez stresu?" A tak jsme vytvořili aplikaci, která počítá kalorie z jediné fotky. Tak jednoduchou, že v ní vydrží i člověk, který tabulky vzdal za 3 dny. A to byl přesně náš cíl. Udělat zdravé stravování udržitelné pro normální lidi, kteří chtějí být fit, ale nemají čas na zdlouhavé zapisování a vážení.
            </p>
          </div>
          
          <div className="mt-8 md:mt-10 w-full">
            <div className="w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-dark/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-400 font-bold text-xl md:text-2xl">foto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

