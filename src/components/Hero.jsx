import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full bg-[#070a12] text-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.12),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-grid-white/[0.04] [mask-image:linear-gradient(to_bottom,transparent,black,black)]" />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center gap-10 px-6 py-10">
        {/* Headline */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/15 backdrop-blur">
            <Sparkles size={14} /> Singapore • Neurotechnology
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Neural Drive
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400">Silent‑Speech Interface</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/80 md:text-lg">
            Wearable, non‑invasive interface that translates subvocal intent into text, speech, or control — set up in under a minute.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#differentiation"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-400"
            >
              <Rocket size={16} /> Explore more
            </a>
            <a
              href="#investors"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Investor deck
            </a>
          </div>
        </div>

        {/* Interactive Spline in a centered glass card */}
        <div className="relative w-full max-w-5xl">
          <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur md:h-[520px]">
            <Spline
              scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* light gradient edges that don't block interactions */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#070a12] via-transparent to-transparent" />
          </div>
        </div>

        {/* Quick facts */}
        <div className="mx-auto grid w-full max-w-3xl grid-cols-3 gap-3">
          <Fact label="Latency" value="< 200 ms" />
          <Fact label="Commands" value="10 live" />
          <Fact label="Setup" value="< 60 s" />
        </div>
      </div>
    </section>
  );
};

const Fact = ({ label, value }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
    <div className="text-xs uppercase tracking-wide text-white/60">{label}</div>
    <div className="mt-1 text-lg font-semibold text-white">{value}</div>
  </div>
);

export default Hero;
