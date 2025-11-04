import React, { useEffect, useState } from 'react';
import { Home, Layers, Target, Users, Coins } from 'lucide-react';

const links = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'differentiation', label: 'Differentiation', icon: Layers },
  { id: 'roadmap', label: 'Roadmap', icon: Target },
  { id: 'team', label: 'Team', icon: Users },
  { id: 'investors', label: 'Investors', icon: Coins },
];

export default function Navbar() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.1 }
    );

    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#070a12]/70 backdrop-blur-md">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
      <nav className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-4">
          <a href="#hero" className="text-white">
            <span className="text-sm font-semibold tracking-wide text-white/70">Neural</span>
            <span className="ml-1 text-sm font-semibold text-white">Drive</span>
          </a>
          <ul className="hidden gap-1 md:flex">
            {links.map(({ id, label, icon: Icon }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
                      isActive
                        ? 'bg-white/10 text-white ring-1 ring-white/20'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon size={16} className={isActive ? 'text-white' : 'text-white/70 group-hover:text-white'} />
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="#investors"
            className="hidden rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-400 md:inline-block"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
