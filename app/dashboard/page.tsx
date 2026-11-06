'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import { mockProjects } from '@/data/mock-data';

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<any>(null);
  const [form, setForm] = useState({ rate: '$120/hr', availability: 'Available in 2 weeks', cover: 'I can help deliver this sprint quickly. I have strong product and platform experience.' });

  useEffect(() => {
    const stored = localStorage.getItem('projectBoard');
    const list = stored ? JSON.parse(stored) : mockProjects;
    const found = list.find((item: any) => item.id === params.id);
    setProject(found || mockProjects.find((item) => item.id === params.id) || null);
  }, [params.id]);

  if (!project) {
    notFound();
  }

  const handleApply = () => {
    const key = 'proposals';
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    const next = [{ ...form, projectId: project.id, projectTitle: project.title, submittedAt: new Date().toISOString() }, ...existing];
    localStorage.setItem(key, JSON.stringify(next));
    alert('Proposal submitted successfully.');
  };

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
              <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-medium text-violet-300">{project.status}</span>
              <span className="text-sm text-slate-400">{project.matchScore}% match</span>
            </div>

            <h1 className="text-4xl font-bold text-white">{project.title}</h1>
            <p className="mt-4 text-slate-300">{project.description}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.skills.map((skill: string) => (
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
                <input
                  value={form.rate}
                  onChange={(event) => setForm({ ...form, rate: event.target.value })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-violet-500"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Availability</label>
                <input
                  value={form.availability}
                  onChange={(event) => setForm({ ...form, availability: event.target.value })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-violet-500"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Cover note</label>
                <textarea
                  value={form.cover}
                  onChange={(event) => setForm({ ...form, cover: event.target.value })}
                  rows={5}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-violet-500"
                />
              </div>
              <button onClick={handleApply} className="w-full rounded-full bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500">
                Submit proposal
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
