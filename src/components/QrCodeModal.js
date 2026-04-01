import React from 'react';
import { createPortal } from 'react-dom';

const APP_STORE_URL = 'https://apps.apple.com/us/app/kalori-ai-kalorické-tabulky/id6746693207';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=cz.wintis.kalori';

const QrCodeModal = ({ isOpen, onClose, title = 'Naskenuj a stáhni Kalori' }) => {
  if (!isOpen) return null;

  const appStoreQr = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(APP_STORE_URL)}`;
  const googlePlayQr = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(GOOGLE_PLAY_URL)}`;

  const modalContent = (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200 max-w-3xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors duration-150 p-2"
          aria-label="Close QR code modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">{title}</h3>
        <p className="text-sm md:text-base text-gray-600 text-center mb-6">
          Jsi na PC nebo tabletu? Otevři foťák v telefonu a naskenuj QR kód.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-gray-200 p-4 flex flex-col items-center hover:shadow-md transition-shadow duration-200"
          >
            <img src={appStoreQr} alt="QR kód pro App Store" className="w-44 h-44 md:w-52 md:h-52" loading="lazy" />
            <span className="mt-3 font-semibold text-gray-900">App Store</span>
          </a>
          <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-gray-200 p-4 flex flex-col items-center hover:shadow-md transition-shadow duration-200"
          >
            <img src={googlePlayQr} alt="QR kód pro Google Play" className="w-44 h-44 md:w-52 md:h-52" loading="lazy" />
            <span className="mt-3 font-semibold text-gray-900">Google Play</span>
          </a>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default QrCodeModal;
