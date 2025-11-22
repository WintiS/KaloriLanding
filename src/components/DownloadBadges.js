import React from 'react';

const DownloadBadges = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a
        href="https://apps.apple.com/us/app/kalori-ai-kalorické-tabulky/id6746693207"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-opacity hover:opacity-80"
      >
        <img
          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1609459200"
          alt="Download on the App Store"
          className="h-10 sm:h-12 w-auto"
        />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=cz.wintis.kalori"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-opacity hover:opacity-80"
      >
        <img
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          alt="Get it on Google Play"
          className="h-10 sm:h-12 w-auto"
        />
      </a>
    </div>
  );
};

export default DownloadBadges;

