import Link from 'next/link';
import { mockTalent } from '@/data/mock-data';
import { TalentCard } from '@/components/talent-card';

export default function TalentPage() {
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

        <div className="mb-10 rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Talent marketplace</p>
          <h1 className="mt-3 text-4xl font-bold text-white">Find vetted specialists for your next engagement</h1>
          <div className="mt-6 flex flex-wrap gap-3">
            {['Product', 'Design', 'Engineering', 'AI', 'Marketing', 'Operations'].map((tag) => (
              <span key={tag} className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-sm text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mockTalent.map((talent) => (
            <TalentCard key={talent.id} talent={talent} />
          ))}
        </div>
      </div>
    </main>
  );
}
