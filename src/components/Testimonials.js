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
              {/* Glowing ring effect - always visible, stronger on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-light via-primary to-primary-dark rounded-xl opacity-30 blur-sm group-hover:opacity-70 group-hover:blur-md transition-all duration-300 -z-10"></div>
              
              {/* Additional glow layer for more intensity on hover */}
              <div className="absolute -inset-0.5 bg-primary rounded-xl opacity-0 group-hover:opacity-40 group-hover:blur-lg transition-all duration-300 -z-10"></div>
              
              {/* Main green ring border with glow shadow */}
              <div 
                className="relative bg-white rounded-xl p-5 md:p-7 ring-2 ring-primary group-hover:ring-4 group-hover:ring-primary-dark transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1 z-0"
                style={{
                  boxShadow: '0 0 15px rgba(107, 224, 140, 0.2), 0 0 0 2px rgba(107, 224, 140, 0.1)',
                }}
              >
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: '0 0 25px rgba(107, 224, 140, 0.5), 0 0 50px rgba(107, 224, 140, 0.3)',
                  }}
                ></div>
                <p className="relative text-gray-700 text-md md:text-lg font-bold group-hover:text-gray-900 transition-colors duration-300 z-10">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

