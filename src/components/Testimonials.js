import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Kalori mi změnilo život. Už nemusím složitě počítat kalorie, stačí vyfotit jídlo a mám hotovo!",
      align: "left",
      picture: "/assets/female4.jpg" // Add your image URL here
    },
    {
      text: "Nejlepší aplikace na sledování stravy, kterou jsem kdy používala. Intuitivní a rychlá.",
      align: "right",
      picture: "/assets/female3.jpg" // Add your image URL here
    },
    {
      text: "Konečně aplikace, u které vydržím dlouho a nepřestanu ji používat",
      align: "left",
      picture: "/assets/female1.jpg" // Add your image URL here
    }
  ];

  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="px-4 py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="space-y-4 md:space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`card-hover bg-white rounded-xl p-5 md:p-7 shadow-lg border border-gray-100 ${
                testimonial.align === 'right' ? 'ml-auto' : 'mr-auto'
              } max-w-[18rem] md:max-w-sm transition-all duration-300 ${
                isVisible ? `opacity-100 ${testimonial.align === 'right' ? 'translate-x-0' : 'translate-x-0'}` : 
                `opacity-0 ${testimonial.align === 'right' ? 'translate-x-4' : '-translate-x-4'}`
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
                  <img 
                    src={testimonial.picture} 
                    alt="Testimonial author" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-1">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

