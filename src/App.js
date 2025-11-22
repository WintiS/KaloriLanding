import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import ProblemStatement from './components/ProblemStatement';
import Experiences from './components/Experiences';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import BeforeAfter from './components/BeforeAfter';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Options from './components/Options';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen bg-white">
      <Header />
      <Hero />
      <Testimonials />
      <ProblemStatement />
      <Experiences />
      <HowItWorks />
      <CTA 
        title="Chcete přes všechny jíst normálně, ale nepřibrat?"
        description="Kalori vám pomůže jíst normálně a přitom mít kontrolu nad svou váhou. Vyzkoušejte to ještě dnes."
      />
      <BeforeAfter />
      <Features />
      <CTA 
        title="Toto všechno a ještě více, vás čeká uvnitř!"
        description="Vyzkoušejte Kalori na 7 dní zdarma a zjistěte, jak snadné může být sledování stravy."
      />
      <Options />
      <Benefits />
      <CTA 
        title="Stáhněte Kalori a získejte Vánoční 20% slevu!"
        description="Omezená nabídka! Stáhněte aplikaci nyní a získejte speciální vánoční slevu 20%."
      />
      <section className="px-4 py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-48 sm:h-64 md:h-96 bg-gray-200 rounded-lg mb-8"></div>
          <CTA 
            title="Jste připraven?"
            description="Začněte ještě dnes a získejte kontrolu nad svou stravou. Stáhněte Kalori nyní."
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
