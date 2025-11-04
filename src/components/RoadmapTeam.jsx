import React from 'react';
import { Target, Rocket, Award, Users, Star } from 'lucide-react';

const roadmap = [
  { q: 'Q1', year: '2025', title: 'Prototype v2', detail: 'Refined sensor array, latency tuning, mobile SDK.' },
  { q: 'Q2', year: '2025', title: 'Closed pilots', detail: 'Assistive comms and hands‑free ops pilots.' },
  { q: 'Q3', year: '2025', title: 'Beta platform', detail: 'Dev portal, APIs, real‑time streaming.' },
  { q: 'Q4', year: '2025', title: 'Regulatory prep', detail: 'Clinical study design and submission groundwork.' },
];

const team = [
  { name: 'Ava Chen', role: 'Neuro ML', note: 'BCI decoding & adaptive models', icon: Star },
  { name: 'Rahul Mehta', role: 'Hardware', note: 'Wearable sensors & embedded', icon: Star },
  { name: 'Maya Tan', role: 'Product', note: 'UX research & accessibility', icon: Star },
];

export default function RoadmapTeam() {
  return (
    <section id="roadmap" className="relative w-full py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(56,189,248,0.1),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Roadmap */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Roadmap</h2>
          <p className="mt-3 text-white/70">Clear milestones toward a production‑ready silent‑speech interface.</p>
        </div>

        <ol className="mx-auto mt-10 max-w-4xl">
          {roadmap.map((step, idx) => (
            <li key={idx} className="group relative grid grid-cols-[1rem,1fr] items-start gap-6 py-4">
              <div className="relative flex h-full w-4 items-center justify-center">
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
                <div className="relative z-10 h-3 w-3 rounded-full bg-gradient-to-tr from-cyan-400 to-violet-500 ring-2 ring-[#070a12]" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition group-hover:border-white/20">
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span>{step.q} • {step.year}</span>
                  <Target size={16} className="text-white/60" />
                </div>
                <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                <p className="mt-1 text-white/70">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Team */}
        <section id="team" className="mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-semibold sm:text-3xl">Team</h3>
            <p className="mt-3 text-white/70">Multidisciplinary builders across neuro ML, wearables, and product.</p>
          </div>
          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 text-center backdrop-blur">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                  <m.icon size={20} className="text-white" />
                </div>
                <h4 className="mt-3 text-lg font-semibold">{m.name}</h4>
                <p className="text-sm text-white/70">{m.role}</p>
                <p className="mt-1 text-xs text-white/60">{m.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Investor CTA */}
        <section id="investors" className="mt-16">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-sky-500/10 to-violet-500/10 p-8 text-center backdrop-blur">
            <div className="mx-auto w-fit rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/15">
              Building the future of silent‑speech
            </div>
            <h3 className="mt-4 text-2xl font-semibold">Investor resources</h3>
            <p className="mt-2 text-white/70">Brief deck, technical notes, and pilot plans available on request.</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                <Award size={16} /> One‑pager
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-400"
              >
                <Rocket size={16} /> Deck link
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
