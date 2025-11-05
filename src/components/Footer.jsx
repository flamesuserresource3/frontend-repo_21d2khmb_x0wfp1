export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold">Let’s build something delightful</h3>
            <p className="mt-1 text-white/70">Available for freelance projects and full‑time roles.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@yourname.com"
              className="rounded-xl border border-white/15 bg-white px-5 py-3 font-medium text-black shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset,0_12px_40px_-12px_rgba(255,255,255,0.5)] transition hover:-translate-y-0.5"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/15"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-10 text-sm text-white/50">© {new Date().getFullYear()} Your Name</div>
      </div>
    </footer>
  );
}
