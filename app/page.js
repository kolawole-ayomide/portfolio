import Image from "next/image";
import { experience, profile, projects, smallerBuilds, stack } from "../data/content";

export default function Home() {
  return (
    <div className="shell">
      <header className="side">
        <div>
          <Image
            className="avatar"
            src="/ayyy.jpeg"
            alt="Portrait of Kolawole Ayomide Oluwatayo"
            width={72}
            height={72}
            priority
          />
          <h1 className="name">Kolawole Ayomide Oluwatayo</h1>
          <p className="role">
            Full-stack developer building web products with Next.js, Node and TypeScript.
          </p>
          <nav className="nav" aria-label="Sections">
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
            <a href="#builds">Builds</a>
            <a href="#stack">Stack</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="actions">
          <a className="btn primary" href={`mailto:${profile.email}`}>Email me</a>
          <a className="btn" href={profile.github}>GitHub</a>
        </div>
      </header>

      <main className="main">
        <p className="intro">
          I build the whole product: the interface people use and the API and database behind it.
        </p>

        <section id="experience">
          <h2>Experience</h2>
          <ol className="jobs">
            {experience.map((j) => (
              <li key={j.company} className="job">
                <div className="job-head">
                  <h3>{j.company}</h3>
                  <span className="job-period">{j.period}</span>
                </div>
                <p className="job-role">{j.role} · {j.location}</p>
                <ul>
                  {j.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section id="work">
          <h2>Selected work</h2>
          {projects.map((p) => (
            <article className="project" key={p.title}>
              {p.image && (
                <Image
                  className="shot"
                  src={p.image}
                  alt={`Screenshot of ${p.title}`}
                  width={1200}
                  height={750}
                />
              )}
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <ul className="tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="links">
                {p.live && <a href={p.live}>Live site</a>}
                {p.docs && <a href={p.docs}>API docs</a>}
                {p.links.map((l) => (
                  <a key={l.href} href={l.href}>{l.label}</a>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section id="builds">
          <h2>Smaller builds</h2>
          <ul className="builds">
            {smallerBuilds.map((b) => (
              <li key={b.title}>
                <a href={b.href}>
                  <span className="build-title">{b.title}</span>
                  <span className="build-summary">{b.summary}</span>
                  <span className="build-tags">{b.tags.join(", ")}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="stack">
          <h2>Stack</h2>
          <dl className="stack">
            {stack.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contact" className="contact">
          <h2>Contact</h2>
          <p>Open to full-stack roles and freelance projects. The quickest way to reach me is email.</p>
          <div className="actions">
            <a className="btn primary" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="btn" href={profile.linkedin}>LinkedIn</a>
          </div>
        </section>
      </main>
    </div>
  );
}