import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockProjects } from '@/data/mock-data';

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = mockProjects.find((item) => item.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050816] text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <nav className="mb-10 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">Braintrust</Link>
          <div className="flex gap-5 text-sm text-slate-300">
            <Link href="/talent">Talent</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1.6fr_0.8fr]">
          <section className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-medium text-violet-300">
                {project.status}
              </span>
              <span className="text-sm text-slate-400">{project.matchScore}% match</span>
            </div>

            <h1 className="text-4xl font-bold text-white">{project.title}</h1>
            <p className="mt-4 text-slate-300">{project.description}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-sm text-slate-300">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Client</p>
                <p className="mt-2 text-xl font-semibold text-white">{project.client}</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Budget</p>
                <p className="mt-2 text-xl font-semibold text-white">{project.budget}</p>
              </div>
            </div>
          </section>

          <aside className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-white">Apply to this project</h2>
            <div className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Rate</label>
                <input className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-violet-500" defaultValue="$120/hr" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Availability</label>
                <input className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-violet-500" defaultValue="Available in 2 weeks" />
              </div>
              <button className="w-full rounded-full bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500">
                Submit proposal
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
