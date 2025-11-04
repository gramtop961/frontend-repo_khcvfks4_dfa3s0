import React from 'react';
import Hero from './components/Hero';
import TechOverview from './components/TechOverview';
import Applications from './components/Applications';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0f1a] font-inter antialiased">
      <Hero />
      <TechOverview />
      <Applications />
      <Achievements />

      <footer id="contact" className="border-t border-white/10 bg-[#070b13] py-12 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h4 className="text-lg font-semibold">Neural Drive</h4>
              <p className="mt-1 text-sm text-white/70">
                Singapore • Silent-Speech Interface (SSI) — brain–computer interface for everyone.
              </p>
            </div>
            <div className="flex gap-3 text-sm text-white/70">
              <a href="#technology" className="hover:text-white">Technology</a>
              <span className="text-white/30">•</span>
              <a href="#applications" className="hover:text-white">Applications</a>
              <span className="text-white/30">•</span>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
          <p className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} Neural Drive — All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
