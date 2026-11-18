// TODO: replace the placeholder texts below with your own details.
const name = "Omer";
const role = "Aspiring Web Developer";
const about =
  "Hi, I'm Omer. I'm learning web development with Next.js and building my first projects. I enjoy turning ideas into simple, clean websites.";

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Git & GitHub"];

const projects = [
  {
    title: "Personal Portfolio",
    description: "This website, built with Next.js and Tailwind CSS.",
    href: "https://github.com/omerik0/protfolio-nextjs",
  },
  {
    title: "Project Two",
    description: "A short description of your next project goes here.",
    href: "#",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col gap-16 px-6 py-20 sm:px-16">
        <header className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            {name}
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">{role}</p>
        </header>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">About me</h2>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">{about}</p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">Skills</h2>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-black/[.08] px-4 py-1.5 text-sm text-zinc-700 dark:border-white/[.145] dark:text-zinc-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">Projects</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 rounded-xl border border-black/[.08] bg-white p-5 transition-colors hover:bg-black/[.03] dark:border-white/[.145] dark:bg-zinc-900 dark:hover:bg-zinc-800"
              >
                <h3 className="text-lg font-medium text-black dark:text-zinc-50">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">{project.description}</p>
              </a>
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">Contact</h2>
          <a
            href="https://github.com/omerik0"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-950 underline dark:text-zinc-50"
          >
            github.com/omerik0
          </a>
        </footer>
      </main>
    </div>
  );
}
