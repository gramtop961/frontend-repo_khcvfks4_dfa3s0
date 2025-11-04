import React from 'react';
import { Accessibility, Home, Headphones, Shield, Bot } from 'lucide-react';

const items = [
  {
    icon: <Accessibility className="h-5 w-5" />, 
    title: 'Assistive Communication',
    desc: 'ALS / stroke users regain a reliable channel for speech using subvocal intent.',
    tag: 'Healthcare',
  },
  {
    icon: <Home className="h-5 w-5" />, 
    title: 'Smart Home & Mobility',
    desc: 'Hands‑free control for lights, wheelchairs, and appliances — no wake words needed.',
    tag: 'IoT',
  },
  {
    icon: <Headphones className="h-5 w-5" />, 
    title: 'AR/VR & Work',
    desc: 'Private interaction in noisy or focus‑critical environments, even with masks.',
    tag: 'HCI',
  },
  {
    icon: <Shield className="h-5 w-5" />, 
    title: 'Industrial Safety',
    desc: 'Trigger silent alerts in restricted zones where speaking is unsafe or impossible.',
    tag: 'Safety',
  },
  {
    icon: <Bot className="h-5 w-5" />, 
    title: 'SDK & Integrations',
    desc: 'Developer APIs to embed silent‑speech control into apps, robots, and wearables.',
    tag: 'Developers',
  },
];

const Applications = () => {
  return (
    <section id="applications" className="relative w-full bg-[#060910] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-10">
          <h2 className="text-3xl font-semibold md:text-4xl">Applications</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Built for accessibility, designed for everyday tech — from hospitals to homes.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <article
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/40 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.4)]"
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs text-white/80 ring-1 ring-white/15">
                {item.icon}
                <span>{item.tag}</span>
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
