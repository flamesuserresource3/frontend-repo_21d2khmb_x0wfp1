import { useEffect, useMemo, useState } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import Footer from './components/Footer';

function getSlugFromHash() {
  const hash = window.location.hash || '';
  const match = hash.match(/^#\/case\/([A-Za-z0-9-]+)/);
  return match ? match[1] : '';
}

export default function App() {
  const [slug, setSlug] = useState(() => (typeof window !== 'undefined' ? getSlugFromHash() : ''));

  useEffect(() => {
    const onHashChange = () => setSlug(getSlugFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const openCase = (s) => {
    window.location.hash = `#/case/${s}`;
  };
  const backHome = () => {
    window.location.hash = '';
  };

  const isCase = useMemo(() => Boolean(slug), [slug]);

  if (isCase) {
    return <CaseStudy slug={slug} onBack={backHome} />;
  }

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a]">
      <Hero />
      <Projects onOpenCase={openCase} />
      <Footer />
    </div>
  );
}
