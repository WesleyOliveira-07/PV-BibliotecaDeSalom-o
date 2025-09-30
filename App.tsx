
import React from 'react';
import Header from './components/Header';
import Mechanism from './components/Mechanism';
import LearningGrid from './components/LearningGrid';
import Benefits from './components/Benefits';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Summary from './components/Summary';
import FinalCta from './components/FinalCta';

const App: React.FC = () => {
  return (
    <div className="bg-[#f8fafc] font-sans text-[#272524]">
      <Header />
      <main className="px-4">
        <Mechanism />
        <LearningGrid />
        <Benefits />
        <Comparison />
        <Testimonials />
        <Pricing />
        <Faq />
        <Summary />
      </main>
      <FinalCta />
      <div className="fixed bottom-4 right-4 z-50">
        <a href="#" className="bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-[#128C7E] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </a>
      </div>
    </div>
  );
};

export default App;
