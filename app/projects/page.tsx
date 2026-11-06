'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { mockTalent } from '@/data/mock-data';
import { TalentCard } from '@/components/talent-card';

export default function TalentPage() {
  const [search, setSearch] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('All');
  const [talent, setTalent] = useState(mockTalent);

  useEffect(() => {
    const stored = localStorage.getItem('talentProfiles');
    if (stored) {
      try {
        setTalent(JSON.parse(stored));
      } catch {
        setTalent(mockTalent);
      }
    }
  }, []);

  const skillOptions = useMemo(() => {
    const options = new Set<string>();
    talent.forEach((person) => person.skills.forEach((skill) => options.add(skill)));
    return ['All', ...Array.from(options)];
  }, [talent]);

  const filteredTalent = talent.filter((person) => {
    const matchesSkill = selectedSkill === 'All' || person.skills.includes(selectedSkill);
    const matchesSearch =
      person.name.toLowerCase().includes(search.toLowerCase()) ||
      person.role.toLowerCase().includes(search.toLowerCase()) ||
      person.skills.some((skill) => skill.toLowerCase().includes(search.toLowerCase()));

    return matchesSkill && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#050816] text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <nav className="mb-10 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">Braintrust</Link>
          <div className="flex gap-5 text-sm text-slate-300">
            <Link href="/talent" className="text-violet-300">Talent</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>
        </nav>

        <div className="mb-8 rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-violet-300">Talent marketplace</p>
          <h1 className="mt-3 text-4xl font-bold text-white">Find vetted specialists for your next engagement</h1>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search talent, expertise, or role"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-violet-500"
            />
            <select
              value={selectedSkill}
              onChange={(event) => setSelectedSkill(event.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-violet-500"
            >
              {skillOptions.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredTalent.map((person) => (
            <TalentCard key={person.id} talent={person} />
          ))}
        </div>
      </div>
    </main>
  );
}
