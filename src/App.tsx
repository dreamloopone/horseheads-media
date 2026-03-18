import { useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import ClientLogos from './components/ClientLogos';
import ROISection from './components/ROISection';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-black">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <Services />
      <ClientLogos />
      <ROISection />
      <Portfolio />
      <Contact />
      <footer className="bg-black border-t border-white/10 py-6 text-center">
        <p className="text-white/40 font-mono text-xs tracking-wider">
          © 2026 Horseheads Media, LLC. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
