import Link from 'next/link';

export default function DashboardPage() {
  const stats = [
    { label: 'Active projects', value: '18' },
    { label: 'Shortlists', value: '7' },
    { label: 'New proposals', value: '12' },
    { label: 'Win rate', value: '68%' }
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <nav className="mb-10 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">Braintrust</Link>
          <div className="flex gap-5 text-sm text-slate-300">
            <Link href="/talent">Talent</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/dashboard" className="text-violet-300">Dashboard</Link>
          </div>
        </nav>

        <div className="mb-10 rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Dashboard</p>
          <h1 className="mt-3 text-4xl font-bold text-white">Client workspace</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="mt-3 text-3xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-white">Recent activity</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li className="rounded-xl border border-slate-800 bg-slate-950 p-4">New proposal from Maya Patel for AI onboarding build.</li>
              <li className="rounded-xl border border-slate-800 bg-slate-950 p-4">Aisha Chen shared the latest product concept deck.</li>
              <li className="rounded-xl border border-slate-800 bg-slate-950 p-4">Sprint review scheduled for Thursday at 2:00 PM.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-white">Pipeline</h2>
            <div className="mt-6 space-y-4">
              {['Shortlist', 'Interviewing', 'Offer stage', 'Hired'].map((step, index) => (
                <div key={step} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <span>{step}</span>
                  <span className="text-violet-300">{[5, 3, 2, 1][index]} roles</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
