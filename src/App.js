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
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen bg-white">
      <Header />
      <div className="pt-16 md:pt-20">
        <Hero />
      <Testimonials />
      <ProblemStatement />
      <Experiences />
      <HowItWorks />
      <CTA 
        title="Chcete přes svátky jíst normálně, ale nepřibrat?"
        description="Pak si stáhněte Kalori zdarma a začněte ještě dnes!"
      />
      <BeforeAfter />
      <Features />
      <CTA 
        title="Toto všechno a ještě více, vás čeká uvnitř!"
        description=""
        variant="no-box"
      />
      <CTA 
        title="Vyzkoušejte Kalori na 7 dní zdarma"
        description="Pokud se vám nebude líbit, neplatíte nic, ale my věříme, že si Kalori zamilujete :)"
        variant="default"
      />
      <Options />
      <FAQ />
      <CTA 
        title="Stáhněte Kalori a získejte Vánoční slevu 20%"
        description="Ušetřete čas a mějte přehled o jídle už dnes! Vánoční sleva platí jen do 20.12."
        variant="christmas"
      />
      <AboutUs />
     
      <CTA 
        title="Jste připraveni?"
        description="Vyzkoušejte Kalori zdarma ještě dnes! Pokud se vám nebude líbit, nic neplatíte :)"
      />
      </div>
      <Footer />
    </div>
  );
}

export default App;
