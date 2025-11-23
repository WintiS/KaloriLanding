import React from 'react';
import DownloadBadges from './DownloadBadges';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const userImages = [
    "/assets/female5.jpg", // Add your image URL here
    "/assets/generated3.png", // Add your image URL here
    "/assets/female6.jpg", // Add your image URL here
    "/assets/generated5.png", // Add your image URL here
    "/assets/generated3.png"  // Add your image URL here (last one with +21 overlay)
  ];

  return (
    <section className="relative px-4 py-12 md:py-20 bg-gradient-hero overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Jedna fotka, <span className="gradient-text">Dvě minuty.</span> Přehled jídla na celý den.
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Vyfoťte své jídlo a AI vám okamžitě spočítá kalorie, bílkoviny, sacharidy a tuky. 
            Jednoduše takto získáte dlouhodobý přehled o vaší stravě.
          </p>
        </div>
        
        <div
          className={`mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="w-full h-48 sm:h-64 md:h-80 bg-white rounded-xl shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20"></div>
            <div className="w-full h-full bg-gray-200"></div>
          </div>
        </div>
        
        <div
          className={`mb-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <DownloadBadges />
        </div>
        
        <div
          className={`mt-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center justify-center gap-3 md:gap-4">
            {/* Toggle Switch */}
           
            {/* Text */}
            <p className="text-sm md:text-base font-base text-gray-900">
              25+ spokojených klientů
            </p>
          </div>
          
          {/* User Images */}
          <div className="mt-2 flex justify-center items-center gap-2 md:gap-3">
            {userImages.map((imageUrl, index) => (
              <div
                key={index}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white shadow-md ${
                  index > 0 ? '-ml-3' : ''
                } ${index === userImages.length - 1 ? 'flex items-center justify-center bg-gray-200' : ''}`}
              >
                {index === userImages.length - 1 ? (
                  <span className="text-xs md:text-sm font-bold text-gray-500">+21</span>
                ) : (
                  <img 
                    src={imageUrl || undefined} 
                    alt={`User ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('bg-gray-200');
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

