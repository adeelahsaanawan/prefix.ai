import React from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Features } from './components/Features';
import { DataSection } from './components/DataSection';
import { HowItWorks } from './components/HowItWorks';
import { MarketOpportunity } from './components/MarketOpportunity';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { ParallaxBackground } from './components/ParallaxBackground';

function App() {
  return (
    <div className="min-h-screen bg-charcoal relative">
      <ParallaxBackground />
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="problem">
        <Problem />
      </section>
      <section id="solution">
        <Solution />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="data">
        <DataSection />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="market">
        <MarketOpportunity />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;