import React from 'react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-100 to-gray-200 border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Logo and Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 md:gap-3 mb-4">
              <img
                src="/android-chrome-192x192.png"
                alt="Kalori Logo"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
              />
              <div className="text-xl md:text-2xl font-bold text-gray-900">
                Kalori
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Jedna fotka, 10 vteřin. Přehled o jídle po celý den.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Rychlé odkazy</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-sm text-gray-600 hover:text-primary transition-colors duration-200 text-left"
                >
                  Domů
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-sm text-gray-600 hover:text-primary transition-colors duration-200 text-left"
                >
                  Funkce
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-sm text-gray-600 hover:text-primary transition-colors duration-200 text-left"
                >
                  Jak to funguje
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-sm text-gray-600 hover:text-primary transition-colors duration-200 text-left"
                >
                  Často kladené otázky
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about-us')}
                  className="text-sm text-gray-600 hover:text-primary transition-colors duration-200 text-left"
                >
                  O nás
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Právní informace</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://doc-hosting.flycricket.io/kalori-privacy-policy/3bb2f1ea-86ea-4584-8a0d-e866860eb03f/privacy"
                  className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  Zásady ochrany osobních údajů
                </a>
              </li>
              <li>
                <a
                  href="https://doc-hosting.flycricket.io/kalori-terms-of-use/b4789876-1e91-4ff4-8d05-8acbcd1dd21b/terms"
                  className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  Podmínky používání
                </a>
              </li>
              
            </ul>
          </div>

          {/* Contact/Download */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Stáhnout aplikaci</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://apps.apple.com/us/app/kalori-ai-kalorické-tabulky/id6746693207"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-all duration-200 hover:scale-[1.02] "
              >
                <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1609459200"
                  alt="Download on the App Store"
                  className="h-[45px] w-auto"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=cz.wintis.kalori"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-all duration-200 hover:scale-[1.02] -ml-[10px]"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-[60px] w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 text-center md:text-left">
              &copy; {new Date().getFullYear()} Kalori. Všechna práva vyhrazena.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm">
              <a
                href="https://doc-hosting.flycricket.io/kalori-privacy-policy/3bb2f1ea-86ea-4584-8a0d-e866860eb03f/privacy"
                className="text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Ochrana osobních údajů
              </a>
              <a
                href="https://doc-hosting.flycricket.io/kalori-terms-of-use/b4789876-1e91-4ff4-8d05-8acbcd1dd21b/terms"
                className="text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Podmínky používání
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

