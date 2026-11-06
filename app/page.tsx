import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { TalentCard } from '@/components/talent-card';
import { ProjectCard } from '@/components/project-card';
import { mockTalent, mockProjects } from '@/data/mock-data';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-slate-100">
      <Navbar />
      <Hero />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-violet-300">Top talent</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Browse specialists hired by fast-moving teams</h2>
          </div>
          <Link href="/talent" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-violet-500 hover:text-white">
            Explore all talent
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {mockTalent.slice(0, 4).map((talent) => (
            <TalentCard key={talent.id} talent={talent} />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-violet-300">Trending projects</p>
              <h2 className="mt-2 text-3xl font-bold text-white">Client needs that deserve your attention</h2>
            </div>
            <Link href="/projects" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-violet-500 hover:text-white">
              View all projects
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {mockProjects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 md:grid-cols-3">
          {[
            { title: '2.4k+', label: 'Vetted professionals' },
            { title: '94%', label: 'Client satisfaction' },
            { title: '36 hrs', label: 'Average time to first match' }
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <div className="text-3xl font-bold text-violet-300">{item.title}</div>
              <p className="mt-2 text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
