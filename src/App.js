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
import Options from './components/Options';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen bg-white">
      <Header />
      <div className="pt-16 md:pt-20">
        <div id="hero">
          <Hero />
        </div>
      <Testimonials />
      <ProblemStatement />
      <Experiences />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <CTA 
        title="Chcete přes svátky jíst normálně, ale nepřibrat?"
        description="Pak si stáhněte Kalori zdarma a&nbsp;začněte ještě dnes!"
        highlightWords={["nepřibrat", "zdarma", "dnes!"]}
      />
      <BeforeAfter />
      <div id="features">
        <Features />
      </div>
      <CTA 
        title="Toto všechno a&nbsp;ještě více, vás čeká uvnitř!"
        description=""
        variant="no-box"
      />
      <CTA 
        title="Vyzkoušejte Kalori na 7&nbsp;dní&nbsp;zdarma"
        description="Pokud se vám nebude líbit, neplatíte nic, ale my věříme, že si Kalori zamilujete :)"
        variant="default"
        highlightWords={["zdarma", "neplatíte nic", "zamilujete"]}
      />
      <div id="options">
        <Options />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <CTA 
        title="Stáhněte Kalori a&nbsp;získejte Vánoční slevu 20%"
        description="Ušetřete čas a&nbsp;mějte přehled o&nbsp;jídle už dnes! Vánoční sleva platí jen do 31.12."
        variant="christmas"
        highlightWords={["dnes!", "31.12.", "sleva"]}
      />
      <div id="about-us">
        <AboutUs imageUrl="/assets/vitek.jpeg" />
      </div>
     
      <CTA 
        title="Jste připraveni?"
        description="Vyzkoušejte Kalori zdarma ještě dnes! Pokud se vám nebude líbit, nic neplatíte :)"
        variant="default"
        highlightWords={["zdarma", "nic neplatíte"]}
      />
      </div>
      <Footer />
    </div>
  );
}

export default App;
