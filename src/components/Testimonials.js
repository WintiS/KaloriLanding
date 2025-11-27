import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const testimonials = [
    {
      text: "2 minuty denně na zápis jídla",
      align: "left"
    },
    {
      text: "AI zapisování jídla ",
      align: "right"
    },
    {
      text: "Každý den doporučení zdravých jídel",
      align: "left"
    }
  ];

  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="px-4 py-12 md:py-16 bg-white">
      <div className="max-w-2xl mx-auto">
        <div ref={ref} className="space-y-4 md:space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative ${
                testimonial.align === 'right' ? 'ml-auto' : 'mr-auto'
              } max-w-[14rem] md:max-w-sm transition-all duration-300 group ${
                isVisible ? `opacity-100 ${testimonial.align === 'right' ? 'translate-x-0' : 'translate-x-0'}` : 
                `opacity-0 ${testimonial.align === 'right' ? 'translate-x-4' : '-translate-x-4'}`
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Animated gradient halo */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary-light via-primary to-primary-dark opacity-30 blur-md group-hover:opacity-80 group-hover:blur-xl transition-all duration-500 -z-10"></div>

              <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-primary-light via-primary to-primary-dark shadow-[0_10px_25px_rgba(45,200,120,0.25)] group-hover:shadow-[0_15px_35px_rgba(45,200,120,0.35)] transition-all duration-500 group-hover:-translate-y-1">
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/40 opacity-60 mix-blend-screen pointer-events-none"></div>

                <div className="relative bg-white rounded-[1.1rem] p-5 md:p-7 ring-1 ring-white/30">
                  <div 
                    className="absolute inset-0 rounded-[1.1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: '0 0 30px rgba(107, 224, 140, 0.35), 0 0 60px rgba(107, 224, 140, 0.25)',
                    }}
                  ></div>
                  <p className="relative text-gray-700 text-md md:text-lg font-bold group-hover:text-gray-900 transition-colors duration-300 z-10">{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

