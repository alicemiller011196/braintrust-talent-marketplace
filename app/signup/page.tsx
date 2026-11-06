import Link from 'next/link';

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6 py-12 text-slate-100">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-glow">
        <Link href="/" className="mb-6 block text-2xl font-bold text-white">Braintrust</Link>
        <h1 className="text-3xl font-bold text-white">Create your account</h1>
        <p className="mt-2 text-slate-400">Join as a client or hire expert talent.</p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Full name</label>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-violet-500" placeholder="Alex Morgan" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-violet-500" placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Account type</label>
            <select className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-violet-500">
              <option>Client</option>
              <option>Talent</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <input type="password" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-violet-500" placeholder="••••••••" />
          </div>
          <button className="w-full rounded-full bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500">
            Create account
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-400">
          Already have an account? <Link href="/login" className="text-violet-300">Log in</Link>
        </p>
      </div>
    </main>
  );
}
