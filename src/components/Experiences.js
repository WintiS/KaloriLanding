import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import DownloadBadges from './DownloadBadges';

const Experiences = () => {
  const testimonials = [
    {
      text: "za mě je aplikace hezká občas se mi stalo že mi to celkově myslím tím bílkoviny sacharidy dle fotky vyfocené spočetlo ne úplně přesně nicméně to považuji za úspěch protože co si budem z fotky vypočítat přibližnou výživovou hodnotu je pecka 👌 A potom na co jsem narazila tak bylo to že když jsem si uložila dané jídlo tak mi to nešlo nebo jsem na to nepřišla jak se to dělá něco tam doplnit, takže jsem to musela vymazat a napsat znovu. Každopádně se domnívám že za tu cenu roční co si aplikaci může člověk zakoupit je to velmi užitečné 👏",
      author: "Monika",
      picture: "/assets/woman1.jpg" // Add your image URL here
    },
    {
      text: "Ahojky, tak jsou zkoušela tu vaší apku a musím říct, že super. I kdyz jsem zastánce klasického vážení a počítání, třeba na dovolený nebo u jídla v restauraci je to fakt skvělý.",
      author: "Klárka",
      picture: "/assets/woman2.jpg" // Add your image URL here
    },
    {
      text: "Moc se mi líbí, že stačí jen fotka a hned je přehled o jídle..., to musí být obrovské ulehčení pro každodenní sledování stravy.",
      author: "Martina",
      picture: "/assets/female4.jpg" // Add your image URL here
    }
  ];

  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const [isFirstExpanded, setIsFirstExpanded] = useState(false);

  return (
    <section className="px-4 py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 text-center">
            Zkušenosti s Kalori ostatních
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-10 md:mb-12 text-center">
            Podívejte se, co si o Kalori myslí ostatní lidé.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`card-hover bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 transition-all duration-300 relative overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Decorative accent line */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-primary"></div>

                <div className="pl-4">
                  <div className="relative">
                    <p
                      className={`text-gray-800 text-base md:text-lg leading-relaxed mb-5 ${
                        index === 0 && !isFirstExpanded ? 'md:max-h-48 md:overflow-hidden' : ''
                      }`}
                    >
                      {testimonial.text}
                    </p>
                    {index === 0 && !isFirstExpanded && (
                      <div className="hidden md:block absolute inset-x-0 bottom-0 h-16 pointer-events-none bg-gradient-to-t from-white via-white/80 to-transparent" />
                    )}
                  </div>
                  {index === 0 && (
                    <button
                      type="button"
                      className="hidden md:inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 mb-3"
                      onClick={() => setIsFirstExpanded((prev) => !prev)}
                    >
                      {isFirstExpanded ? 'Zobrazit méně' : 'Zobrazit více'}
                    </button>
                  )}
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 shadow-md flex items-center justify-center bg-gradient-primary">
                      {testimonial.picture ? (
                        <img 
                          src={testimonial.picture} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-white font-bold text-sm md:text-base">
                          {testimonial.author.charAt(0)}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 text-sm md:text-base font-semibold">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 md:mt-12 flex justify-center">
            <DownloadBadges />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;

