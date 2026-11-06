import Link from 'next/link';
import { mockProjects } from '@/data/mock-data';
import { ProjectCard } from '@/components/project-card';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <nav className="mb-10 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">Braintrust</Link>
          <div className="flex gap-5 text-sm text-slate-300">
            <Link href="/talent">Talent</Link>
            <Link href="/projects" className="text-violet-300">Projects</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>
        </nav>

        <div className="mb-10 rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Open opportunities</p>
          <h1 className="mt-3 text-4xl font-bold text-white">Projects looking for specialized talent</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
