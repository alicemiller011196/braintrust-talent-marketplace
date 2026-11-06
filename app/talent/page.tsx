'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { mockTalent, mockProjects } from '@/data/mock-data';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { TalentCard } from '@/components/talent-card';
import { ProjectCard } from '@/components/project-card';

export default function HomePage() {
  const [featuredTalent, setFeaturedTalent] = useState(mockTalent);
  const [featuredProjects, setFeaturedProjects] = useState(mockProjects);

  useEffect(() => {
    const storedTalent = localStorage.getItem('talentProfiles');
    const storedProjects = localStorage.getItem('projectBoard');

    if (storedTalent) {
      try {
        setFeaturedTalent(JSON.parse(storedTalent));
      } catch {
        setFeaturedTalent(mockTalent);
      }
    }

    if (storedProjects) {
      try {
        setFeaturedProjects(JSON.parse(storedProjects));
      } catch {
        setFeaturedProjects(mockProjects);
      }
    }
  }, []);

  const trustStats = useMemo(
    () => [
      { value: '2,400+', label: 'Vetted specialists' },
      { value: '94%', label: 'Client satisfaction' },
      { value: '36h', label: 'Average time-to-match' },
      { value: '9.4k', label: 'Projects launched' }
    ],
    []
  );

  const steps = [
    { title: '1. Post a brief', body: 'Describe the outcome, constraints, and budget in minutes.' },
    { title: '2. Review matches', body: 'Filter by skills, availability, and proven track record.' },
    { title: '3. Launch and collaborate', body: 'Manage milestones, file feedback, and approvals in one place.' }
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-slate-100">
      <Navbar />
      <Hero />

      <section className="mx-auto max-w-7xl px-6 pb-8 pt-8">
        <div className="grid gap-6 md:grid-cols-4">
          {trustStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-center shadow-lg shadow-slate-950/30">
              <div className="text-3xl font-bold text-violet-300">{stat.value}</div>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-violet-300">Top talent</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Browse specialists hired by fast-moving teams</h2>
          </div>
          <Link href="/talent" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-violet-500 hover:text-white">
            Explore all talent
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredTalent.slice(0, 4).map((talent) => (
            <TalentCard key={talent.id} talent={talent} />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-violet-300">Trending projects</p>
              <h2 className="mt-2 text-3xl font-bold text-white">Match with work that fits your expertise or hiring goals</h2>
            </div>
            <Link href="/projects" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-violet-500 hover:text-white">
              View all projects
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-violet-300">How it works</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Everything you need to hire or get hired</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-violet-500/15 text-lg font-bold text-violet-200">
                {step.title.split('.')[0]}
              </div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-slate-300">{step.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
