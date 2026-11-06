'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { mockProjects } from '@/data/mock-data';
import { ProjectCard } from '@/components/project-card';

export default function ProjectsPage() {
  const [projects, setProjects] = useState(mockProjects);
  const [form, setForm] = useState({
    title: '',
    client: '',
    budget: '$15k - $25k',
    description: '',
    skills: 'Product, Design, AI'
  });

  useEffect(() => {
    const stored = localStorage.getItem('projectBoard');
    if (stored) {
      try {
        setProjects(JSON.parse(stored));
      } catch {
        setProjects(mockProjects);
      }
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newProject = {
      id: `p${Date.now()}`,
      title: form.title || 'New product sprint',
      client: form.client || 'New client',
      budget: form.budget,
      status: 'Open',
      description: form.description || 'We are building a new opportunity for a cross-functional team.',
      skills: form.skills.split(',').map((skill) => skill.trim()).filter(Boolean),
      matchScore: 92
    };

    const updated = [newProject, ...projects];
    setProjects(updated);
    localStorage.setItem('projectBoard', JSON.stringify(updated));
    setForm({ title: '', client: '', budget: '$15k - $25k', description: '', skills: 'Product, Design, AI' });
  };

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

        <div className="mb-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-300">Open opportunities</p>
            <h1 className="mt-3 text-4xl font-bold text-white">Projects looking for specialized talent</h1>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-white">Post a new project</h2>
            <div className="mt-5 space-y-4">
              <input
                value={form.title}
                onChange={(event) => setForm({ ...form, title: event.target.value })}
                placeholder="Project title"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-violet-500"
              />
              <input
                value={form.client}
                onChange={(event) => setForm({ ...form, client: event.target.value })}
                placeholder="Client name"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-violet-500"
              />
              <input
                value={form.budget}
                onChange={(event) => setForm({ ...form, budget: event.target.value })}
                placeholder="Budget"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-violet-500"
              />
              <textarea
                value={form.description}
                onChange={(event) => setForm({ ...form, description: event.target.value })}
                rows={4}
                placeholder="Describe the brief"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-violet-500"
              />
              <input
                value={form.skills}
                onChange={(event) => setForm({ ...form, skills: event.target.value })}
                placeholder="Skills (comma separated)"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-violet-500"
              />
              <button className="w-full rounded-full bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500">
                Add project
              </button>
            </div>
          </form>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
