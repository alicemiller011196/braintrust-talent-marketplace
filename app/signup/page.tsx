'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('session', JSON.stringify({ email, loggedIn: true }));
    window.location.href = '/dashboard';
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6 py-12 text-slate-100">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-glow">
        <Link href="/" className="mb-6 block text-2xl font-bold text-white">Braintrust</Link>
        <h1 className="text-3xl font-bold text-white">Welcome back</h1>
        <p className="mt-2 text-slate-400">Log in to manage talent and client projects.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-violet-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-violet-500"
              placeholder="••••••••"
            />
          </div>
          <button className="w-full rounded-full bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500">
            Sign in
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-400">
          Need an account? <Link href="/signup" className="text-violet-300">Create one</Link>
        </p>
      </div>
    </main>
  );
}
