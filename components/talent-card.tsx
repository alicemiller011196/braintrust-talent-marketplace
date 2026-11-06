type Talent = {
  id: string;
  name: string;
  role: string;
  location: string;
  rate: number;
  rating: number;
  skills: string[];
  availability: string;
  intro: string;
};

export function TalentCard({ talent }: { talent: Talent }) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900 p-5 shadow-lg shadow-slate-950/30 transition hover:border-violet-500/70 hover:-translate-y-1">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 font-bold text-white">
          {talent.name.charAt(0)}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{talent.name}</h3>
          <p className="text-sm text-slate-400">{talent.role}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
        <span>{talent.location}</span>
        <span>★ {talent.rating}</span>
      </div>

      <p className="mt-4 text-sm text-slate-300">{talent.intro}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {talent.skills.map((skill) => (
          <span key={skill} className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1 text-[11px] text-slate-300">
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4">
        <div>
          <p className="text-xs text-slate-400">From</p>
          <p className="font-semibold text-white">${talent.rate}/hr</p>
        </div>
        <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs text-emerald-300">{talent.availability}</span>
      </div>
    </article>
  );
}
