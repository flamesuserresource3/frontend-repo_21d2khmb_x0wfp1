import { ArrowLeft, ExternalLink } from 'lucide-react';

const content = {
  'orion-finance': {
    title: 'Orion Finance',
    subtitle: 'Building trust in fintech onboarding and transfers',
    roles: ['Product design', 'Research', 'Prototyping'],
    overview:
      'A mobile-first money app. I redesigned onboarding, KYC and transfer flows to increase completion and clarity while keeping it playful and human.',
  },
  'nova-health': {
    title: 'Nova Health',
    subtitle: 'Operational clarity for clinicians at scale',
    roles: ['Product design', 'Design systems'],
    overview:
      'A configurable dashboard for providers. The work focused on information hierarchy, bento navigation, and safe defaults for high‑stakes workflows.',
  },
  'cosmo-commerce': {
    title: 'Cosmo Commerce',
    subtitle: 'Conversion with personality in e‑commerce',
    roles: ['UX', 'Visual design', 'Motion'],
    overview:
      'I explored 3D product storytelling, progressive disclosure and performance‑minded layouts that increased add‑to‑cart by 14%.',
  },
};

export default function CaseStudy({ slug, onBack }) {
  const data = content[slug];
  if (!data) return null;

  return (
    <main className="min-h-screen w-full bg-[#0a0a0a] text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-4">
          <button onClick={onBack} className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/90 hover:bg-white/10">
            <ArrowLeft size={16} /> Back
          </button>
          <div className="ml-auto inline-flex items-center gap-3 text-white/70">
            <a href="#" className="inline-flex items-center gap-1 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-xs hover:bg-white/10">
              Live prototype <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </header>

      <section className="relative mx-auto max-w-4xl px-6 py-14">
        <h1 className="text-balance text-4xl font-semibold md:text-6xl">{data.title}</h1>
        <p className="mt-3 text-lg text-white/80">{data.subtitle}</p>

        <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-white/70">
          {data.roles.map((r) => (
            <span key={r} className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
              {r}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5">
            <h3 className="font-medium">Overview</h3>
            <p className="mt-2 text-white/75">{data.overview}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5">
            <h3 className="font-medium">Outcomes</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-white/75">
              <li>Reduced drop‑off across key flows</li>
              <li>Systemized components for speed</li>
              <li>Playful motion without sacrificing clarity</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          <div className="h-64 rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent)]" />
          <div className="h-64 rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent)]" />
          <div className="h-64 rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent)]" />
        </div>
      </section>
    </main>
  );
}
