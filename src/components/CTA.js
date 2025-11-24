import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CTA = ({ title, description, showBadges = true, variant = 'default', highlightWords = [] }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  // Helper function to highlight words in text
  const highlightText = (text, wordsToHighlight, isTitle = false) => {
    if (!wordsToHighlight || wordsToHighlight.length === 0 || !text) {
      return text;
    }

    // Create a regex pattern that matches any of the highlight words (case-insensitive)
    const pattern = new RegExp(
      `(${wordsToHighlight.map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
      'gi'
    );

    const parts = text.split(pattern);
    
    return parts.map((part, index) => {
      // Check if this part matches any of the highlight words (case-insensitive)
      const isMatch = wordsToHighlight.some(
        word => part.toLowerCase() === word.toLowerCase()
      );
      
      if (isMatch) {
        if (isTitle) {
          // For title: underline with green
          return (
            <span key={index} className="underline decoration-primary decoration-2 underline-offset-4">
              {part}
            </span>
          );
        } else {
          // For description: make bold
          return (
            <strong key={index} className="font-bold">
              {part}
            </strong>
          );
        }
      }
      return part;
    });
  };

  const isChristmas = variant === 'christmas';
  const hasBox = variant === 'default' || isChristmas;
  const boxClasses = hasBox 
    ? isChristmas
      ? 'bg-gradient-to-br from-red-50 via-white to-red-50 rounded-2xl p-8 md:p-10 lg:p-12 shadow-2xl border-2 border-red-200 relative overflow-hidden'
      : 'bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-8 md:p-10 lg:p-12 shadow-2xl relative overflow-hidden'
    : 'p-0';

  return (
    <section className={`px-4 py-12 md:py-16 `}>
      <div className="max-w-2xl mx-auto">
        {variant === 'default' ? (
          <div
            ref={ref}
            className={`bg-gradient-to-r from-primary-light via-primary-light to-primary-light rounded-2xl p-[3px] transition-all duration-400 relative ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-[0.97]'
            }`}
            style={{
              boxShadow: isVisible 
                ? '0 18px 55px -20px rgba(142, 240, 169, 0.45), 0 18px 55px -20px rgba(107, 224, 140, 0.35), 0 18px 55px -20px rgba(79, 199, 111, 0.25)'
                : 'none'
            }}
          >
            {/* Subtle glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-light via-primary-light to-primary rounded-2xl blur opacity-25 animate-pulse pointer-events-none"></div>
            <div className={`${boxClasses} text-center relative`}>
              {title && (
                <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight relative z-10 text-gray-900`}>
                  {title.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {highlightText(line, highlightWords, true)}
                      {index < title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h2>
              )}
              {description && (
                <p className={`text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed relative z-10 text-gray-700`}>
                  {highlightText(description, highlightWords, false)}
                </p>
              )}
              {showBadges && (
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
                        className="h-[47px] sm:h-[54px] w-auto rounded-lg"
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
                        className="h-[60px] sm:h-[80px] w-auto rounded-lg"
                      />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div
            ref={ref}
            className={`${boxClasses} text-center transition-all duration-400 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-[0.97]'
            }`}
          >
            {/* Christmas Decorations */}
            {isChristmas && (
              <>
                {/* Twinkling Lights */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute top-6 right-8 w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute top-8 left-12 w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                <div className="absolute top-10 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
                <div className="absolute bottom-4 left-8 w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                <div className="absolute bottom-6 right-12 w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
                <div className="absolute bottom-8 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-10 right-6 w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Gift Boxes */}
                <div className="absolute top-2 right-2 w-8 h-8 md:w-10 md:h-10 opacity-20">
                  <div className="w-full h-full bg-red-500 rounded transform rotate-12"></div>
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-yellow-400"></div>
                </div>
                <div className="absolute bottom-2 left-2 w-6 h-6 md:w-8 md:h-8 opacity-20">
                  <div className="w-full h-full bg-green-500 rounded transform -rotate-12"></div>
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-yellow-400"></div>
                </div>
                
                {/* Candles */}
                <div className="absolute top-0 left-1/4 w-1 h-12 md:h-16 bg-gradient-to-b from-red-400 to-red-600 opacity-30 rounded-t"></div>
                <div className="absolute top-0 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                <div className="absolute top-0 right-1/4 w-1 h-12 md:h-16 bg-gradient-to-b from-green-400 to-green-600 opacity-30 rounded-t"></div>
                <div className="absolute top-0 right-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Snowflakes */}
                <div className="absolute top-4 left-1/3 text-white text-xl opacity-40 animate-pulse" style={{ animationDelay: '0.2s' }}>❄</div>
                <div className="absolute top-8 right-1/3 text-white text-lg opacity-40 animate-pulse" style={{ animationDelay: '0.6s' }}>❄</div>
                <div className="absolute bottom-4 left-1/2 text-white text-xl opacity-40 animate-pulse" style={{ animationDelay: '0.4s' }}>❄</div>
              </>
            )}
            {title && (
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight relative z-10 ${
                isChristmas ? 'text-red-700' : 'text-gray-900'
              }`}>
                {isChristmas && <span className="text-2xl md:text-3xl mr-2">🎄</span>}
                {title.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {highlightText(line, highlightWords, true)}
                    {index < title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
                {isChristmas && <span className="text-2xl md:text-3xl ml-2">🎁</span>}
              </h2>
            )}
            {description && (
              <p className={`text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed relative z-10 ${
                isChristmas ? 'text-gray-800' : 'text-gray-700'
              }`}>
                {highlightText(description, highlightWords, false)}
              </p>
            )}
            {showBadges && (
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
                      className="h-[47px] sm:h-[52px] w-auto rounded-lg"
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
                      className="h-[60px] sm:h-[68px] w-auto rounded-lg"
                    />
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;

