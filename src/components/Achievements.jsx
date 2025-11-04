import React from 'react';
import { Award, Target, Star, Coins } from 'lucide-react';

const Achievements = () => {
  return (
    <section className="relative w-full bg-[#0a0f18] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-10">
          <h2 className="text-3xl font-semibold md:text-4xl">Milestones & Recognition</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Awards, clinical partners, and a clear path to compliant deployment.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Highlight
            icon={<Star className="h-5 w-5" />}
            title="Key Results"
            bullets={[
              '10 silent commands with >92% accuracy (live demos)',
              'Average latency under 200 ms',
              'Prototype cost under S$150',
            ]}
          />
          <Highlight
            icon={<Award className="h-5 w-5" />}
            title="Awards"
            bullets={[
              'Batey Grand Champion 2024',
              'APAC Champion – Startup Star Global 2025',
              'Top 3 – SSG Finals 2025 • Shenzhen',
              'Featured at SWITCH 2025',
            ]}
          />
          <Highlight
            icon={<Target className="h-5 w-5" />}
            title="Clinical & Regulatory"
            bullets={[
              'Trials with TTSH, NHG; early collab with SingHealth',
              'HSA Class A/B medical device pathway (SG)',
            ]}
          />
          <Highlight
            icon={<Coins className="h-5 w-5" />}
            title="Funding"
            bullets={[
              'S$200k+ in awards and support',
              'Raising S$450k seed (2025) for trials & manufacturing',
            ]}
          />
        </div>

        <CTA />
      </div>
    </section>
  );
};

const Highlight = ({ icon, title, bullets }) => (
  <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5">
    <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs text-white/80 ring-1 ring-white/15">
      {icon}
      <span className="font-medium">{title}</span>
    </div>
    <ul className="space-y-2 text-sm text-white/75">
      {bullets.map((b, i) => (
        <li key={i}>• {b}</li>
      ))}
    </ul>
  </div>
);

const CTA = () => (
  <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 md:flex-row">
    <div>
      <h3 className="text-xl font-semibold">Asia‑first, human‑centric deployment</h3>
      <p className="mt-1 text-sm text-white/70">Lightweight wearable • Under 1‑minute setup • Priced for accessibility</p>
    </div>
    <a
      href="#contact"
      className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-400"
    >
      Get in touch
    </a>
  </div>
);

export default Achievements;
