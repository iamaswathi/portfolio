const links = [
  { label: "Email", value: "inboxaswathi", href: "mailto:inboxaswathi@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/iamaswathi", href: "https://www.linkedin.com/in/aswathi-prakash/" },
  { label: "GitHub", value: "github.com/iamaswathi", href: "https://github.com/iamaswathi/" },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="font-display text-3xl text-paper sm:text-4xl">
        Get in touch
      </h1>
      <p className="mt-4 max-w-prose text-slate">
        Open to senior frontend roles and interesting contract work. The
        fastest way to reach me is email.
      </p>

      <ul className="mt-10 divide-y divide-line border-y border-line">
        {links.map((link) => (
          <li key={link.label} className="flex items-baseline justify-between py-4">
            <span className="font-mono text-xs text-slate">{link.label}</span>
            <a href={link.href} className="text-paper">
              {link.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
