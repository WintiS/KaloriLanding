import React, { useState } from 'react';
import { logEvent } from 'firebase/analytics';
import { analyticsPromise } from '../firebase';
import QrCodeModal from './QrCodeModal';

const DownloadBadges = () => {
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  const trackClick = (label) =>
    analyticsPromise.then((analytics) => {
      if (!analytics) return;
      logEvent(analytics, 'cta_click', { label });
    });

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-row gap-1 justify-center items-center">
          <a
            href="https://apps.apple.com/us/app/kalori-ai-kalorické-tabulky/id6746693207"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-all duration-200 hover:scale-[1.02] hover:shadow-lg rounded-lg"
            onClick={() => trackClick('hero_app_store_badge')}
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
            onClick={() => trackClick('hero_google_play_badge')}
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="h-[70px] sm:h-[88px] w-auto rounded-lg"
            />
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsQrModalOpen(true);
            trackClick('hero_pc_tablet_qr');
          }}
          className="inline-flex items-center justify-center min-h-[52px] px-6 py-3 rounded-xl border border-primary/30 bg-primary/10 text-base md:text-lg font-semibold text-gray-900 hover:bg-primary/20 hover:border-primary/50 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Jsem na PC / tabletu
        </button>
      </div>

      <QrCodeModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
      />
    </>
  );
};

export default DownloadBadges;

