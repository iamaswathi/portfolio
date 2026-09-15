
import Image from "next/image";
import aboutme from "../assets/aswathi.jpeg";
const skills = [
  "Angular",
  "React",
  "TypeScript",
  "C# / .NET",
  "AWS",
  "Accessibility (WCAG)",
  "Performance profiling",
  "CI/CD",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="font-display text-3xl text-paper sm:text-4xl">About</h1>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start">
        <div className="order-2 max-w-none text-paper md:order-1">
          <p>
            I&apos;m a senior frontend developer who cares most about the parts
            of an interface people never consciously notice — the frame that
            doesn&apos;t drop, the focus ring that&apos;s exactly where you
            expect it, the state update that doesn&apos;t cascade into ten
            unrelated re-renders.
          </p>
          <p className="mt-4">
            Most of my experience is in Angular and React, building and
            maintaining production interfaces that need to hold up under real
            data volume — not just look good in a demo. I&apos;ve spent time on
            both sides of the stack, which makes me a better frontend engineer:
            understanding what the API and infrastructure actually cost makes
            it easier to design UI that works with them, not against them.
          </p>
          <p className="mt-4">I&apos;m now deliberately deepening that backend 
            and cloud experience — from GraphQL and REST integrations to GCP data 
            pipelines — to grow from frontend specialist into full stack engineer, 
            owning systems end-to-end rather than just the UI layer on top of them.</p>
          <p className="mt-4">
            Outside of shipping features, I care about maintainability — code
            that the next person (often me, six months later) can read,
            extend, and trust.
          </p>

        </div>
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="aboutMeImgContainer h-80 w-80 overflow-hidden rounded-full">
            <Image
              src={aboutme}
              alt="Portrait of Aswathi"
              className="aboutMeImg h-full w-full object-cover"
              width={aboutme.width}
              height={aboutme.height}
            />
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-line pt-10">
        <p className="font-mono text-xs text-slate">Skills</p>
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
      </div>
    </div>
  );
}
