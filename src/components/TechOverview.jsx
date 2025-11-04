import React from 'react';
import { Cpu, Activity, Layers, Mic2 } from 'lucide-react';

const TechOverview = () => {
  return (
    <section id="technology" className="relative w-full bg-[#0b0f1a] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-3">
          <h2 className="text-3xl font-semibold md:text-4xl">Core Technology</h2>
          <p className="max-w-2xl text-white/70">
            Silent-speech sensing meets deep learning to map subvocal intent into
            realtime outputs — text, synthesized voice, or device control.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <TechCard
            icon={<Mic2 className="h-5 w-5" />}
            title="Signal Source"
            desc="Non-invasive surface sensors around neck and jaw capture micro-vibrations and EMG."
          />
          <TechCard
            icon={<Activity className="h-5 w-5" />}
            title="Acquisition"
            desc="High-sensitivity pipelines isolate speech-correlated motion from noise in realtime."
          />
          <TechCard
            icon={<Layers className="h-5 w-5" />}
            title="Feature + Mapping"
            desc="Neural networks learn patterns and classify to predefined commands or word sets."
          />
          <TechCard
            icon={<Cpu className="h-5 w-5" />}
            title="Feedback Layer"
            desc="Outputs render in under 200 ms as text, voice synthesis, or IoT control."
          />
        </div>
      </div>
    </section>
  );
};

const TechCard = ({ icon, title, desc }) => (
  <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 transition hover:border-sky-400/40">
    <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-sky-400/10 px-3 py-2 text-sky-300 ring-1 ring-sky-400/20">
      {icon}
      <span className="text-xs font-medium">{title}</span>
    </div>
    <p className="text-sm leading-relaxed text-white/70">{desc}</p>
  </div>
);

export default TechOverview;
