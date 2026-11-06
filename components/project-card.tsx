type Project = {
  id: string;
  title: string;
  client: string;
  budget: string;
  status: string;
  description: string;
  skills: string[];
  matchScore: number;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:border-violet-500/70 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-violet-300">{project.client}</p>
          <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
        </div>
        <span className="rounded-full bg-violet-500/15 px-2.5 py-1 text-xs font-medium text-violet-300">{project.status}</span>
      </div>

      <p className="mt-4 text-slate-300">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.skills.map((skill) => (
          <span key={skill} className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1 text-[11px] text-slate-300">
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">Budget</p>
          <p className="font-semibold text-white">{project.budget}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-400">Match</p>
          <p className="font-semibold text-violet-300">{project.matchScore}%</p>
        </div>
      </div>

      <a href={`/projects/${project.id}`} className="mt-6 inline-flex rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500">
        View project
      </a>
    </article>
  );
}
