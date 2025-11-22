import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Kalori mi změnilo život. Už nemusím složitě počítat kalorie, stačí vyfotit jídlo a mám hotovo!",
      align: "left"
    },
    {
      text: "Nejlepší aplikace na sledování stravy, kterou jsem kdy používala. Intuitivní a rychlá.",
      align: "right"
    },
    {
      text: "Konečně aplikace, která skutečně funguje. AI rozpozná všechno přesně a já mám přehled o své stravě.",
      align: "left"
    }
  ];

  return (
    <section className="px-4 py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gray-100 rounded-lg p-6 ${
                testimonial.align === 'right' ? 'ml-auto md:ml-0 md:mr-auto' : 'mr-auto'
              } max-w-md md:max-w-lg`}
            >
              <p className="text-gray-700 text-sm md:text-base">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

