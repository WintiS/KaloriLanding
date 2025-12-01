import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutUs = ({ imageUrl }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="px-4 py-12 md:py-16 bg-gray-50 text-center lg:text-left">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`p-8 md:p-10 lg:p-12 transition-all duration-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-10">
            Něco krátce<br />o nás
          </h2>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            <div className="flex-1 space-y-6 md:space-y-8">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Viděli jsme, že lidé neselhávají proto, že by byli slabí. Selhávají proto, že nástroje, které mají, jsou příliš těžké na používání. Dnešní svět je hrozně rychlý. Jíme venku, u známých, v práci, mezi schůzkami... Kdo má vůbec čas zapisovat všechno ručně?
              </p>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Řekli jsme si: „Co kdyby šlo mít přehled bez vážení, bez tabulek a bez stresu?" A tak jsme vytvořili aplikaci, která počítá kalorie z jediné fotky. Tak jednoduchou, že v ní vydrží i člověk, který tabulky vzdal za 3 dny. A to byl přesně náš cíl. Udělat zdravé stravování udržitelné pro normální lidi, kteří chtějí být fit, ale nemají čas na zdlouhavé zapisování a vážení.
              </p>
            </div>
            
            <div className="mt-8 md:mt-10 lg:mt-0 w-full lg:w-80 lg:flex-shrink-0">
              <div className="w-full aspect-square max-w-md mx-auto lg:max-w-full lg:mx-0 rounded-xl shadow-lg overflow-hidden relative">
                {imageUrl ? (
                  <img 
                    src={imageUrl} 
                    alt="O nás" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 font-bold text-xl md:text-2xl">foto</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

