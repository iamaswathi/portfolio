const skills = [
  "JavaScript",
  "TypeScript",
  "Angular (2–19)",
  "React / React Native",
  "Next.js",
  "RxJs / NgRx / Redux",
  "GraphQL / REST",
  ".NET / Java / Node.js",
  "AWS / GCP",
  "TailwindCSS / PrimeNG",
  "Vitest/ Jasmine / Karma / Jest",
  "CI/CD"
];

type Role = {
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
};

const experience: Role[] = [
  {
    title: "Senior Frontend Developer",
    company: "Insurance Australia Group (IAG)",
    location: "Melbourne, Australia",
    dates: "Sep 2025 – Present",
    bullets: [
      "Built the AI Agent Chat UI, using RxJs to stream real-time LLM responses from Gemini 2.5 agents, reducing perceived latency for domain-specific assistant workflows.",
      "Introduced NgRx across the Nexus frontend modules, improving state consistency and long-term scalability.",
      "Delivered permission-aware Latest Release Updates and Admin Panel features, and stabilised critical user journeys by resolving UAT defects pre-release.",
    ],
  },
  {
    title: "Independent Consultant & Technical Upskilling",
    company: "Self-directed",
    location: "Sydney, Australia",
    dates: "Jul 2021 – Aug 2025",
    bullets: [
      "Architected a cross-platform fintech app in React Native for goal-based savings, including a loans feature tied to specific goals.",
      "Built a multi-account bank transaction tracker using React, TypeScript and Redux to deepen modern state management expertise.",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "Servcorp",
    location: "Sydney, Australia",
    dates: "Dec 2020 – Jun 2021",
    bullets: [
      "Upgraded legacy components to Angular 11, improving performance by 25%.",
      "Integrated CyberSource and Zuora payment gateways, cutting payment failures by 15%.",
      "Partnered with UX on an interface revamp that lifted user satisfaction score by 15%.",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "Fidelity Information Services",
    location: "Bangalore, India",
    dates: "Dec 2016 – Feb 2020",
    bullets: [
      "Built reusable Angular components and a centralised NgRx store, cutting new-feature development time by 20% and API calls by 20%.",
      "Reduced frontend bugs by 40% by introducing rigorous unit testing with Jasmine and Karma.",
      "Led a responsive design framework with Angular Material and Bootstrap, increasing mobile engagement by 25%.",
      "Global finalist, FIS InnovateIN48 2019 hackathon; recipient of multiple 'Make a Difference' awards.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Exilant Technologies",
    location: "Bangalore, India",
    dates: "Aug 2012 – Dec 2016",
    bullets: [
      "Built cross-browser UIs across concurrent client projects using HTML5, CSS3, JavaScript and Sencha Touch.",
      "Sole owner of a major iOS project, migrating it to the latest OS version and resolving outstanding bugs.",
    ],
  },
];
export default function ResumePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-baseline">
        <h1 className="font-display text-3xl text-paper sm:text-4xl">
          Resume
        </h1>
        <a
          href="/resume.pdf"
          download
          className="rounded-sm bg-brass px-5 py-2.5 text-sm font-medium text-ink no-underline hover:bg-paper"
        >
          Download PDF
        </a>
      </div>

      {/* Summary */} 
      <p className="mt-8 max-w-prose text-paper">
        Full stack developer with 10+ years building high-performance,
        scalable web and mobile products across fintech and enterprise.
        Currently building AI-driven frontend modules at IAG — real-time LLM
        chat streaming, NgRx architecture, and AI Agent Chat UIs integrated
        with GCP data pipelines and Gemini 2.5.
      </p>

      {/* Experience */} 
      <section className="mt-14 border-t border-line pt-10">
        <h2 className="font-mono text-xs text-slate">Experience</h2>
        <div className="mt-6 flex flex-col gap-10">
          {experience.map((role) => (
            <div key={`${role.company}-${role.dates}`}>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="font-display text-lg text-paper">
                  {role.title}
                </h3>
                <span className="shrink-0 font-mono text-xs text-slate sm:pl-6">
                  {role.dates}
                </span>
              </div>
              <p className="text-sm text-slate">{role.company}, {role.location}</p>
              <ul className="mt-3 flex flex-col gap-1.5 text-paper">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="pl-4 -indent-4">
                    – {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}  
      <section className="mt-14 border-t border-line pt-10">
        <h2 className="font-mono text-xs text-slate">Skills</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-sm border border-line px-3 py-1 font-mono text-xs text-paper"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Education */} 
      <section className="mt-14 border-t border-line pt-10">
        <h2 className="font-mono text-xs text-slate">Education</h2>
        <div className="mt-4">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="font-display text-lg text-paper">
                    Bachelor of Engineering in Computer Science
                </h3>
                <span className="shrink-0 font-mono text-xs text-slate sm:pl-6">
                    2008-2012
                </span>
            </div>
            <p className="text-sm text-slate">Periyar Maniammai University, Thanjavur, India</p>
        </div>
      </section>
    </div>
  );
}