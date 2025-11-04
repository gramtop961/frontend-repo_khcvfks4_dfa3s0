import React from 'react';
import { Home, Shield, Headphones, Accessibility, Bot } from 'lucide-react';

const Applications = () => {
  const items = [
    {
      icon: <Accessibility className="h-5 w-5" />,
      title: 'Assistive Communication',
      desc: 'ALS and stroke users regain hands-free, silent communication using subvocal intent.',
      tag: 'Healthcare',
    },
    {
      icon: <Home className="h-5 w-5" />,
      title: 'Smart Home & Mobility',
      desc: 'Control lights, wheelchairs, and appliances with silent commands — no wake words.',
      tag: 'IoT',
    },
    {
      icon: <Headphones className="h-5 w-5" />,
      title: 'AR/VR & Work',
      desc: 'Low-noise interaction for headsets and focused environments, even with masks.',
      tag: 'HCI',
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'Industrial Safety',
      desc: 'Trigger alerts silently in restricted zones where speech is unsafe or impossible.',
      tag: 'Safety',
    },
    {
      icon: <Bot className="h-5 w-5" />,
      title: 'SDK & Integrations',
      desc: 'Developer APIs to embed silent-speech control into apps, robotics, or wearables.',
      tag: 'Developers',
    },
  ];

  return (
    <section id="applications" className="relative w-full bg-[#070b13] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-3">
          <h2 className="text-3xl font-semibold md:text-4xl">Applications</h2>
          <p className="max-w-2xl text-white/70">
            From hospitals to homes, Neural Drive enables private, hands-free control
            in places where voice or touch fall short.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/40 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.4)]"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs text-white/80 ring-1 ring-white/15">
                {item.icon}
                <span>{item.tag}</span>
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
