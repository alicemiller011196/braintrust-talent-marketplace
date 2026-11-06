export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-16">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-violet-300">
            Trusted by product teams
          </div>
          <h1 className="mt-6 max-w-xl text-5xl font-black leading-tight text-white md:text-6xl">
            Hire talent. Collaborate effortlessly.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Build your team with vetted experts, launch faster, and manage client work in one transparent workspace.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/signup" className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500">
              Hire top talent
            </a>
            <a href="/talent" className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-violet-500 hover:text-white">
              Explore talent
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-10 text-sm text-slate-400">
            <div>
              <div className="text-2xl font-bold text-white">2500+</div>
              <div>specialists</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">89%</div>
              <div>repeat clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">4.9/5</div>
              <div>average rating</div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-glow">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Client workspace</p>
                <h3 className="mt-2 text-2xl font-bold text-white">AI onboarding sprint</h3>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-300">Open</span>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Shortlist</span>
                  <span className="text-violet-300">12 candidates</span>
                </div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Interviews</span>
                  <span className="text-violet-300">4 scheduled</span>
                </div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Budget</span>
                  <span className="text-violet-300">$18k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
