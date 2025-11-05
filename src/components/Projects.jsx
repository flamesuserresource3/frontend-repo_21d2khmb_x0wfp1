import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    slug: 'orion-finance',
    title: 'Orion Finance',
    tag: 'Fintech • Mobile',
    blurb: 'Onboarding and money movement flows with high trust UX.',
    gradient: 'from-fuchsia-500 via-purple-500 to-cyan-400',
  },
  {
    slug: 'nova-health',
    title: 'Nova Health',
    tag: 'Healthcare • Platform',
    blurb: 'Clinical dashboard with bento navigation and data viz.',
    gradient: 'from-emerald-400 via-teal-400 to-cyan-400',
  },
  {
    slug: 'cosmo-commerce',
    title: 'Cosmo Commerce',
    tag: 'E‑commerce • Web',
    blurb: 'High-converting product pages with playful 3D moments.',
    gradient: 'from-amber-400 via-rose-400 to-fuchsia-500',
  },
];

function ProjectCard({ item, onOpen }) {
  return (
    <button
      onClick={() => onOpen(item.slug)}
      className="group relative flex h-72 w-full items-end overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:scale-[1.01] hover:border-white/20 hover:bg-white/10"
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 blur-3xl`} />
      <div className="pointer-events-none absolute inset-px rounded-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_40%)]" />
      <div className="relative z-10 flex w-full items-end justify-between">
        <div>
          <div className="mb-2 inline-flex rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur">
            {item.tag}
          </div>
          <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
          <p className="mt-1 text-white/75">{item.blurb}</p>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white/90 backdrop-blur transition group-hover:translate-x-1 group-hover:-translate-y-1">
          <ArrowUpRight size={20} />
        </div>
      </div>
    </button>
  );
}

export default function Projects({ onOpenCase }) {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24 text-white">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-semibold">Selected Work</h2>
          <p className="mt-2 text-white/70">Three deep dives into product thinking and craft.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ProjectCard item={projects[0]} onOpen={onOpenCase} />
        <div className="grid gap-6">
          <ProjectCard item={projects[1]} onOpen={onOpenCase} />
          <ProjectCard item={projects[2]} onOpen={onOpenCase} />
        </div>
      </div>
    </section>
  );
}
