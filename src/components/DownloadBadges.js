import React from 'react';

const DownloadBadges = () => {
  return (
    <div className="flex flex-row gap-1 justify-center items-center">
      <a
        href="https://apps.apple.com/us/app/kalori-ai-kalorické-tabulky/id6746693207"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-all duration-200 hover:scale-[1.02] hover:shadow-lg rounded-lg"
      >
        <img
          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1609459200"
          alt="Download on the App Store"
          className="h-[48px] sm:h-[60px] w-auto rounded-lg"
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
          className="h-[70px] sm:h-[88px] w-auto rounded-lg"
        />
      </a>
    </div>
  );
};

export default DownloadBadges;

