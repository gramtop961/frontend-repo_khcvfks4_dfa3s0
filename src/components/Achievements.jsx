import React from 'react';
import { Award, Star, Target, Coins } from 'lucide-react';

const Achievements = () => {
  return (
    <section className="relative w-full bg-[#0b0f1a] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-3">
          <h2 className="text-3xl font-semibold md:text-4xl">Milestones & Recognition</h2>
          <p className="max-w-2xl text-white/70">
            Built in Singapore with a mission for accessibility — backed by awards,
            clinical partners, and a rigorous roadmap to medical compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card
            icon={<Award className="h-5 w-5" />}
            title="Awards"
            items={[
              'Batey Grand Champion 2024 (Singapore National Innovation Challenge)',
              'APAC Champion – Startup Star Global 2025 (Shenzhen)',
              'Top 3 Finalist – Startup Star Global Finals 2025',
              'Featured at SWITCH 2025 • Sands Convention Centre',
            ]}
          />
          <Card
            icon={<Target className="h-5 w-5" />}
            title="Clinical & Regulatory"
            items={[
              'Trials with TTSH, NHG, and early collaboration with SingHealth',
              'Regulatory pathway: HSA Class A/B medical device (SG)',
              'Assistive trials targeting users with speech/motor impairments',
            ]}
          />
          <Card
            icon={<Star className="h-5 w-5" />}
            title="Key Results"
            items={[
              '10 silent commands trained with >92% accuracy in live demos',
              'Average latency under 200 ms',
              'Prototype cost under S$150',
            ]}
          />
          <Card
            icon={<Coins className="h-5 w-5" />}
            title="Funding & Goals"
            items={[
              'Raised/awarded S$200k+ regionally',
              'Raising S$450k seed round (2025)',
              'Scaling trials, firmware, local manufacturing',
            ]}
          />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 md:flex-row">
          <div>
            <h3 className="text-xl font-semibold">Asia-first, human-centric deployment</h3>
            <p className="mt-1 text-sm text-white/70">
              Lightweight wearable, <span className="text-white">under 1-minute setup</span>, priced for
              mass accessibility — not just labs.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-400"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

const Card = ({ icon, title, items }) => (
  <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5">
    <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs text-white/80 ring-1 ring-white/15">
      {icon}
      <span className="font-medium">{title}</span>
    </div>
    <ul className="space-y-2 text-sm text-white/75">
      {items.map((it, i) => (
        <li key={i} className="leading-relaxed">• {it}</li>
      ))}
    </ul>
  </div>
);

export default Achievements;
