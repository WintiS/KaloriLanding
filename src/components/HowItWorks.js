import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Stáhnete aplikaci a přihlásíte se",
      description: "Jednoduše si stáhnete Kalori, vyplníte pár údajů o sobě (ať vám appka může doporučit správné cíle) a jste uvnitř. Žádná věda, jen pár vteřin a máte hotovo.",
      
    },
    {
      number: 2,
      title: "Zapište své první jídlo",
      description: "Po přihlášení uvidíte svůj denní přehled. V pravém dolním rohu najdete \"plus\" tlačítko. Na tlačítko klikněte a můžete přidat jídlo. Vše je jasné a přehledné, žádné zmatky."
    },
    {
      number: 3,
      title: "Vyberte možnost zápisu",
      description: "Zobrazí se vám tři možnosti, jak jídlo přidat: vyfotit jídlo (nejrychlejší možnost), vybrat jídlo z galerie nebo krátce popsat, co jste měli. Doporučujeme možnost \"Kamera\". Je to nejrychlejší způsob, jak mít celý den hotový už za pár minut."
    },
    {
      number: 4,
      title: "Máte hotovo!",
      description: "Vše jste zvládli bez chyby, gratulace! Samotný zápis zabere jen pár vteřin a máte přehled o celém dni. A pokud si pořád nejste jisti, zda Kalori je pro vás to pravé, zkuste appku zdarma ještě dnes!",
      imageUrl: "/assets/screenshot1.png"
    }
  ];

  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-transparent to-green-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary-dark opacity-5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Jak Kalori funguje?
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div ref={ref} className="space-y-20 md:space-y-28">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            const textAlignment = isLeft ? 'text-left' : 'text-right';
            const itemsAlignment = isLeft ? 'items-start' : 'items-end';
            
            return (
              <div
                key={step.number}
                className={`relative flex flex-col transition-all duration-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Content Card with alternating alignment */}
                <div className={`flex flex-col ${itemsAlignment} ${textAlignment} relative`}>
                  {/* Decorative accent line */}
                  <div className={`absolute top-0 ${isLeft ? 'left-0' : 'right-0'} w-1 h-16 bg-gradient-primary rounded-full opacity-20`}></div>
                  
                  {/* Content wrapper with subtle background */}
                  <div className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100/50 transition-all duration-200 hover:shadow-xl hover:border-primary/20 ${isLeft ? 'ml-0' : 'mr-0'} max-w-2xl`}>
                    {/* Small number badge inside the box */}
                    <div className={`absolute ${isLeft ? 'top-4 right-4' : 'top-4 left-2'} z-10`}>
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shadow-md">
                        <span className="text-sm font-semibold text-white">{step.number}</span>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Image or Placeholder */}
                    {step.imageUrl ? (
                      <div className="relative w-full max-w-md h-56 md:h-72 rounded-xl overflow-hidden shadow-md group">
                        <img 
                          src={step.imageUrl} 
                          alt={step.title}
                          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-dark/10 opacity-50 group-hover:opacity-75 transition-opacity duration-200"></div>
                      </div>
                    ) : (
                      <div className="relative w-full max-w-md h-56 md:h-72 rounded-xl overflow-hidden shadow-md group">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-dark/10 opacity-50 group-hover:opacity-75 transition-opacity duration-200"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

