import Link from 'next/link';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-white">Braintrust</Link>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <Link href="/talent" className="transition hover:text-white">Talent</Link>
          <Link href="/projects" className="transition hover:text-white">Projects</Link>
          <Link href="/dashboard" className="transition hover:text-white">Dashboard</Link>
          <Link href="/login" className="transition hover:text-white">Login</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-violet-500 hover:text-white">
            Log in
          </Link>
          <Link href="/signup" className="rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500">
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
}
