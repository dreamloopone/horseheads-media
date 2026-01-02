import { useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Capabilities from './components/Capabilities';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <Portfolio />
      <Services />
      <Capabilities />
      <Contact />
    </div>
  );
}

export default App;
