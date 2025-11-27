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
    <section className="relative px-4 py-12 md:py-20 bg-gradient-hero overflow-hidden mt-[-1rem]">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <div
          ref={ref}
          className={`transition-all duration-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Jedna&nbsp;fotka, <span className="gradient-text">10&nbsp;vteřin.</span> Přehled o jídle po celý den.
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Jedna fotka stačí. Kalori spočítá vše za vás. Bez zdlouhavého zapisování, bez vážení, bez stresu.
          </p>
        </div>
        
        <div
          className={`mb-8 transition-all duration-400 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="w-full h-56 sm:h-[30rem] md:h-[30rem] bg-white rounded-xl shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 pointer-events-none z-0"></div>
            <video
              src="/assets/heroGray.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="relative z-10 w-full h-full object-cover"
              controls={false}
            >
              {/* Provide a short fallback so screen readers know what's happening */}
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        <div
          className={`mb-6 transition-all duration-400 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <DownloadBadges />
        </div>
        
        <div
          className={`mt-8 transition-all duration-400 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="flex items-center justify-center gap-3 md:gap-4">
            {/* Toggle Switch */}
           
            {/* Text */}
            <p className="text-sm md:text-base font-base text-gray-900">
              125+ spokojených uživatelů
            </p>
          </div>
          
          {/* User Images */}
          <div className="mt-2 flex justify-center items-center gap-2 md:gap-3">
            {userImages.map((imageUrl, index) => (
              <div
                key={index}
                className={`w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white shadow-md ${
                  index > 0 ? '-ml-6' : ''
                } ${index === userImages.length - 1 ? 'flex items-center justify-center bg-gray-200' : ''}`}
              >
                {index === userImages.length - 1 ? (
                  <span className="text-xs md:text-sm font-bold text-gray-500">+121</span>
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

