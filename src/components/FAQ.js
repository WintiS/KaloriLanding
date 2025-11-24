import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import DownloadBadges from './DownloadBadges';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const faqs = [
    {
      question: "Pro koho je kalori ideální",
      answer: "Kalori je ideální pro každého, kdo chce jednoduše sledovat svou stravu. Ať už chcete hubnout, přibrat, nebo si jen udržet zdravou váhu, Kalori vám pomůže dosáhnout vašich cílů bez složitého počítání kalorií."
    },
    {
      question: "Jak přesný je Odhad kalorií?",
      answer: "Naše AI technologie využívá pokročilé algoritmy pro rozpoznávání jídla a výpočet kalorií. Přesnost se pohybuje kolem 85-95% v závislosti na kvalitě fotografie a typu jídla. Pro nejpřesnější výsledky doporučujeme pořídit jasnou fotografii jídla."
    },
    {
      question: "Jak se liší od jiných kalorických tabulek?",
      answer: "Kalori je jedinečné tím, že stačí vyfotit jídlo a AI automaticky spočítá kalorie, bílkoviny, sacharidy a tuky. Nemusíte ručně zadávat ingredience nebo hledat v tabulkách. Je to rychlé, jednoduché a intuitivní."
    },
    {
      question: "Pomůže mi Kalori zhubnout?",
      answer: "Ano! Kalori vám pomůže sledovat příjem kalorií a živin, což je klíčové pro úspěšné hubnutí. Díky přehlednému zobrazení vašeho jídelníčku můžete snadno kontrolovat, zda jste v kalorickém deficitu potřebném pro hubnutí."
    },
    {
      question: "Strhne mi to peníze ve zkušebním období?",
      answer: "Ne, během 7denní zkušební doby vám nebudou strženy žádné peníze. Můžete aplikaci vyzkoušet zdarma a pokud se vám nebude líbit, jednoduše zrušíte předplatné před koncem zkušební doby."
    },
    {
      question: "Nestáhne si to peníze bez mého vědomí?",
      answer: "Ne, Kalori nikdy nestrhne peníze bez vašeho souhlasu. Před koncem zkušební doby vás upozorníme a můžete se rozhodnout, zda chcete pokračovat v předplatném. Všechny platby jsou transparentní a můžete je kdykoli zrušit."
    },
    {
      question: "Musím si jídlo vážit a vědět přesné ingredience",
      answer: "Ne! To je právě výhoda Kalori. Stačí vyfotit jídlo a AI automaticky rozpozná ingredience a spočítá nutriční hodnoty. Nemusíte nic vážit ani zadávat ručně - stačí jedna fotka."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-12 md:py-16 bg-gradient-to-b from-transparent to-green-50">
      <div className="max-w-3xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-10 text-center">
            Často se nás ptáte
          </h2>
          
          <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                >
                  <span className="text-base md:text-lg font-semibold text-gray-900 pr-4 flex-1">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 md:w-6 md:h-6 text-gray-600 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 md:px-6 pb-4 md:pb-5 pt-0">
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <DownloadBadges />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

