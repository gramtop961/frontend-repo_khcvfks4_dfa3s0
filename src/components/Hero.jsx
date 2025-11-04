import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Brain, MessageSquare } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0b0f1a] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that don't block the Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0f1a] via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pt-24 sm:pt-28 md:pt-32">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-medium text-white/90 ring-1 ring-white/20 backdrop-blur">
          <Brain size={14} /> Singapore • Neurotechnology
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Neural Drive
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400"> Silent-Speech Interface</span>
        </h1>
        <p className="max-w-2xl text-base text-white/80 md:text-lg">
          A non-invasive brain–computer interface that turns subvocal signals into
          real-time text, speech, and device control — designed for accessibility,
          speed, and everyday wear.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <a
            href="#technology"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-400"
          >
            <Rocket size={16} /> Explore the tech
          </a>
          <a
            href="#applications"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:bg-white/15"
          >
            <MessageSquare size={16} /> See use cases
          </a>
        </div>

        <div className="mt-10 grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3">
          <StatCard label="Latency" value="< 200 ms" />
          <StatCard label="Live commands" value="10" />
          <StatCard label="Prototype cost" value="≈ S$150" />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ label, value }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
    <div className="text-xs uppercase tracking-wide text-white/60">{label}</div>
    <div className="mt-1 text-xl font-semibold text-white">{value}</div>
  </div>
);

export default Hero;
