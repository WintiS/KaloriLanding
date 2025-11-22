import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl md:text-2xl font-bold text-gray-900">Kalori</div>
          <div className="w-10 h-6 md:w-12 md:h-8 bg-primary rounded"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;

