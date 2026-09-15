import Link from "next/link";

const focus = [ "JavaScript", "TypeScript", "Angular", "React", "Next.js",  ".Net", "Performance", "Accessibility", "AWS", "Code Review", "Write clean and maintainable code"];

const featured = [
  {
    slug: "live-market-dashboard",
    title: "Live market dashboard",
    summary:
      "A real-time table handling thousands of ticking price updates without dropping frames.",
    stack: "Angular · Signals · WebSocket",
  },
  {
    slug: "teamsync",
    title: "TeamSync",
    summary:
      "A collaborative kanban board with live multi-user editing and optimistic updates.",
    stack: "React · Redux Toolkit · Node",
  },
  {
    slug: "recipe-finder",
    title: "Recipe finder",
    summary:
      "A fully keyboard-navigable, screen-reader-tested search app — WCAG AA throughout.",
    stack: "Next.js · Tailwind · axe-core",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="grid gap-10 py-20 sm:grid-cols-[1.2fr_0.8fr] sm:py-28">
        <div>
          <h1 className="font-display text-4xl leading-tight text-paper sm:text-5xl">
            Ten years deep in frontend. Building the other half now!
          </h1>
          <p className="mt-6 max-w-prose text-slate">
            I'm Aswathi, a Senior Frontend Developer expanding into 
            Full-Stack development — pairing a decade of interface 
            and state-architecture expertise with growing backend 
            and cloud experience across .NET, Node, and GCP.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/projects"
              className="rounded-sm bg-brass px-5 py-2.5 text-sm font-medium text-ink no-underline hover:bg-paper"
            >
              See the work
            </Link>
            <Link
              href="/contact"
              className="rounded-sm border border-line px-5 py-2.5 text-sm font-medium text-paper no-underline hover:border-brass"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="self-start sm:justify-self-end">
          <p className="font-mono text-xs text-slate">currently focused on</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {focus.map((item) => (
              <li
                key={item}
                className="rounded-sm border border-line px-3 py-1 font-mono text-xs text-paper"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-2xl text-paper">Selected work</h2>
          <Link href="/projects" className="text-sm text-slate">
            All projects
          </Link>
        </div>

        <ul className="mt-8 divide-y divide-line border-y border-line">
          {featured.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects#${project.slug}`}
                className="group flex flex-col gap-1 py-6 no-underline sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <h3 className="font-display text-xl text-paper group-hover:text-brass">
                    {project.title}
                  </h3>
                  <p className="mt-1 max-w-prose text-sm text-slate">
                    {project.summary}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-xs text-slate sm:pl-6">
                  {project.stack}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
