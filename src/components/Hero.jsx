import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient glows - don't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/80 backdrop-blur">
          Product Designer • Portfolio 2025
        </span>
        <h1 className="text-balance font-semibold leading-tight text-white drop-shadow-sm [text-shadow:0_2px_24px_rgba(0,0,0,0.3)] md:text-7xl text-5xl">
          Designing playful, modern experiences
        </h1>
        <p className="mt-4 max-w-2xl text-white/80 md:text-lg">
          I blend systems thinking with delightful micro-interactions to craft products people love.
        </p>
        <div className="mt-10 flex items-center gap-4">
          <a href="#projects" className="group rounded-xl bg-white px-5 py-3 font-medium text-black shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset,0_12px_40px_-12px_rgba(255,255,255,0.5)] transition transform-gpu hover:-translate-y-0.5">
            View Work
          </a>
          <a href="#contact" className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/15">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
