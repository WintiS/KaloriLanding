import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Domů', href: '#hero' },
  { label: 'Jak to funguje', href: '#how-it-works' },
  { label: 'Funkce', href: '#features' },
  { label: 'Možnosti', href: '#options' },
  { label: 'FAQ', href: '#faq' },
  { label: 'O nás', href: '#about-us' }
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenPopup = () => {
    setShowPopup(true);
    setIsMenuOpen(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white border-b border-gray-200'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center gap-4 w-full">
            <a href="#hero" className="flex items-center gap-2 md:gap-3">
              <img
                src="/android-chrome-192x192.png"
                alt="Kalori Logo"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
              />
              <div className="text-lg md:text-xl font-bold text-gray-900 transition-colors duration-200 hover:text-primary">
                Kalori
              </div>
            </a>
            <div className="flex items-center gap-3 ml-auto">
              <nav className="hidden md:flex items-center gap-6 text-sm lg:text-base text-gray-700 font-medium">
                {navLinks.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    className="transition-colors duration-200 hover:text-primary"
                  >
                    {label}
                  </a>
                ))}
              </nav>
              <button
                onClick={handleOpenPopup}
                className="px-4 py-2 md:px-5 md:py-2.5 bg-gradient-primary text-white font-semibold rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-lg text-sm md:text-base"
              >
                Stáhnout
              </button>
              <button
                onClick={toggleMenu}
                className="inline-flex md:hidden items-center justify-center p-2 rounded-lg border border-gray-200 text-gray-700 transition-all duration-200 hover:bg-gray-50"
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="max-w-6xl mx-auto px-4 pb-4">
              <nav className="flex flex-col gap-4 py-4 text-base font-medium text-gray-900">
                {navLinks.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={handleLinkClick}
                    className="py-2 rounded-lg px-2 transition-colors duration-200 hover:bg-gray-50"
                  >
                    {label}
                  </a>
                ))}
              </nav>
              <button
                onClick={handleOpenPopup}
                className="w-full px-4 py-3 bg-gradient-primary text-white font-semibold rounded-xl transition-all duration-200 hover:scale-[1.01] hover:shadow-lg"
              >
                Stáhnout aplikaci
              </button>
            </div>
          </div>
        )}
      </header>

      {showPopup && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-200"
          onClick={handleClosePopup}
        >
          <div
            className="bg-white rounded-2xl p-8 md:p-10 lg:p-12 shadow-xl border border-gray-200 max-w-2xl w-full relative transform transition-all duration-200 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-150 p-2"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Content */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight text-gray-900">
                Stáhni si Kalori
              </h2>
              <p className="text-base md:text-lg lg:text-xl mb-2 md:mb-4 leading-relaxed text-gray-700">
                Za pár minut už můžeš mít přehled o tom, co jíš, <b>bez tabulek</b>.
              </p>
              <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-gray-700 font-bold">
                Stačí fotka.
              </p>
              <div className="transition-all duration-400 delay-150 flex justify-center">
                <div className="flex flex-row gap-0 items-center">
                  <a
                    href="https://apps.apple.com/us/app/kalori-ai-kalorické-tabulky/id6746693207"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-all duration-200 hover:scale-[1.02] hover:shadow-lg rounded-lg"
                  >
                    <img
                      src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1609459200"
                      alt="Download on the App Store"
                      className="h-[47px] sm:h-[60px] w-auto rounded-lg"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=cz.wintis.kalori"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-all duration-200 hover:scale-[1.02] hover:shadow-lg rounded-lg"
                  >
                    <img
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                      alt="Get it on Google Play"
                      className="h-[60px] sm:h-[88px] w-auto rounded-lg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

