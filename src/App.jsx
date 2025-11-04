import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Differentiation from './components/Differentiation';
import RoadmapTeam from './components/RoadmapTeam';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#070a12] font-inter antialiased">
      <Navbar />
      <Hero />
      <Differentiation />
      <RoadmapTeam />

      <footer className="border-t border-white/10 bg-[#060910] py-12 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h4 className="text-lg font-semibold">Neural Drive</h4>
          <p className="mt-1 text-sm text-white/70">Singapore • Silent‑Speech Interface — human‑centric neurotech.</p>
          <nav className="mt-4 flex items-center justify-center gap-3 text-sm text-white/70">
            <a href="#differentiation" className="hover:text-white">Differentiation</a>
            <span className="text-white/30">•</span>
            <a href="#roadmap" className="hover:text-white">Roadmap</a>
            <span className="text-white/30">•</span>
            <a href="#team" className="hover:text-white">Team</a>
            <span className="text-white/30">•</span>
            <a href="#investors" className="hover:text-white">Investors</a>
          </nav>
          <p className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} Neural Drive — All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
