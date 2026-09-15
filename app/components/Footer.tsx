export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-10 text-sm text-slate sm:flex-row sm:items-center sm:justify-between">
        <p>Built with Next.js and Tailwind CSS.</p>
        <p className="font-mono">
          Last deployed{" "}
          <time dateTime={new Date().toISOString().slice(0, 10)}>
            {new Date().toLocaleDateString("en-AU", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
        </p>
      </div>
    </footer>
  );
}
