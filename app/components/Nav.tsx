import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];
export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background">
      <nav className="mx-auto flex max-w-5xl flex-col items-start gap-2 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm text-paper no-underline hover:text-brass"
        >
          <Image
            src={logo}
            alt=""
            width={30}
            height={30}
            className="h-15 w-15 rounded-full object-cover"
          />
          <span>Aswathi Prakash</span>
        </Link>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-slate no-underline hover:text-brass"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
