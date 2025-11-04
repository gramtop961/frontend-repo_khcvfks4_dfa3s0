import React from 'react';
import { Shield, Cpu, Activity, Sparkles } from 'lucide-react';

const points = [
  {
    title: 'Non‑invasive & wearable',
    desc: 'Comfortable daily use. No surgery, no gels, no lab setup.',
    icon: Shield,
  },
  {
    title: 'Real‑time latency',
    desc: '< 200 ms from intent to action with on‑edge processing.',
    icon: Activity,
  },
  {
    title: 'Signal intelligence',
    desc: 'Robust feature extraction and mapping tuned to each user.',
    icon: Cpu,
  },
  {
    title: 'Delightful UX',
    desc: 'Fast onboarding, adaptive prompts, and accessible controls.',
    icon: Sparkles,
  },
];

export default function Differentiation() {
  return (
    <section id="differentiation" className="relative w-full py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_70%_90%,rgba(168,85,247,0.12),transparent_40%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Why Neural Drive</h2>
          <p className="mt-3 text-white/70">
            Compared to vision‑only, eye‑tracking, or bulky EMG systems, Neural Drive keeps the hardware light and the
            interaction effortless.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
          {points.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur transition hover:border-white/20 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_20px_60px_-20px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3 ring-1 ring-white/15">
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-white/70">{desc}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
          <p className="text-sm text-white/70">
            Results vs. baselines: latency, accuracy, onboarding speed, device comfort — plotted across user cohorts.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Metric label="Latency" value="< 200 ms" />
            <Metric label="Commands" value="10 live" />
            <Metric label="Setup" value="< 60 s" />
            <Metric label="Comfort" value="All‑day" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs uppercase tracking-wide text-white/60">{label}</div>
      <div className="mt-1 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}
