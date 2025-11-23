import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white border-b border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="text-lg md:text-xl font-bold text-gray-900 transition-colors duration-300 hover:text-primary">
            Kalori
          </div>
          <div className="w-8 h-5 md:w-10 md:h-6 bg-gradient-primary rounded transition-transform duration-300 hover:scale-110"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;

