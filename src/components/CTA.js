import React from 'react';
import DownloadBadges from './DownloadBadges';

const CTA = ({ title, description, showBadges = true }) => {
  return (
    <section className="px-4 py-12 md:py-16 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-100 rounded-lg p-6 md:p-8 lg:p-12 text-center">
          {title && (
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6">
              {description}
            </p>
          )}
          {showBadges && <DownloadBadges />}
        </div>
      </div>
    </section>
  );
};

export default CTA;

