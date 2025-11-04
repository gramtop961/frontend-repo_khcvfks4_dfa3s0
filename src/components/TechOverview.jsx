import React from 'react';
import { Mic2, Activity, Layers, Cpu } from 'lucide-react';

const steps = [
  {
    icon: <Mic2 className="h-5 w-5" />, 
    title: 'Signal Acquisition',
    desc: 'Surface EMG + piezo sensors capture subvocal micro‑vibrations around neck and jaw.',
  },
  {
    icon: <Activity className="h-5 w-5" />, 
    title: 'Feature Extraction',
    desc: 'Filtering and motion‑robust features isolate speech‑correlated components in realtime.',
  },
  {
    icon: <Layers className="h-5 w-5" />, 
    title: 'Classification & Mapping',
    desc: 'Neural nets map patterns to a trained set of silent commands or word units.',
  },
  {
    icon: <Cpu className="h-5 w-5" />, 
    title: 'Feedback Layer',
    desc: 'Outputs render as text, voice synthesis, or IoT control in under 200 ms.',
  },
];

const TechOverview = () => {
  return (
    <section id="technology" className="relative w-full bg-[#0a0f18] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-10">
          <h2 className="text-3xl font-semibold md:text-4xl">How It Works</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            From neck‑mounted sensors to realtime output — a streamlined, low‑latency pipeline designed for everyday use.
          </p>
        </header>

        <ol className="relative grid grid-cols-1 gap-5 md:grid-cols-2">
          {steps.map((s, i) => (
            <li key={i} className="group relative flex items-start gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5">
              <div className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 text-sky-300">
                {s.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-white/70">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <KPI value=">92%" label="Live demo accuracy (10 commands)" />
          <KPI value="<200 ms" label="Avg. latency end‑to‑end" />
          <KPI value="≈ S$150" label="Prototype component cost" />
        </div>
      </div>
    </section>
  );
};

const KPI = ({ value, label }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
    <div className="text-2xl font-semibold">{value}</div>
    <div className="mt-1 text-xs text-white/70">{label}</div>
  </div>
);

export default TechOverview;
