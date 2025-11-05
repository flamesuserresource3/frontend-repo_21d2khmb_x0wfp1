import { useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const pressedRef = useRef(new Map());
  const [, force] = useState(0);

  const keyFor = (obj) => obj?.uuid || obj?.id || obj?.name || Math.random().toString(36);

  const handleMouseDown = (e) => {
    const obj = e?.target;
    if (!obj) return;
    const k = keyFor(obj);
    if (!pressedRef.current.has(k)) {
      pressedRef.current.set(k, {
        sx: obj.scale?.x ?? 1,
        sy: obj.scale?.y ?? 1,
        sz: obj.scale?.z ?? 1,
        py: obj.position?.y ?? 0,
      });
    }
    // Apply a subtle press effect: shrink + slight downward nudge
    const s = 0.9;
    if (obj.scale) {
      obj.scale.x *= s;
      obj.scale.y *= s;
      obj.scale.z *= s;
    }
    if (obj.position) obj.position.y -= 0.5;
    // re-render overlay labels if any
    force((n) => n + 1);
  };

  const handleMouseUp = (e) => {
    const obj = e?.target;
    if (!obj) return;
    const k = keyFor(obj);
    const orig = pressedRef.current.get(k);
    if (orig) {
      if (obj.scale) {
        obj.scale.x = orig.sx;
        obj.scale.y = orig.sy;
        obj.scale.z = orig.sz;
      }
      if (obj.position) obj.position.y = orig.py;
      pressedRef.current.delete(k);
      force((n) => n + 1);
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/fcD-iW8YZHyBp1qq/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
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
          Tap the keyboard — keys "press" down when you click them.
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
