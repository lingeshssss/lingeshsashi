import Link from "next/link";
import { projects, profile } from "@/lib/content";
export function Arrow() {
  return (
    <svg
      className="arrow-icon"
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M5 19 19 5M5 5h14v14" />
    </svg>
  );
}
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span />
      {children}
    </p>
  );
}
export function PageIntro({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="page-intro">
      <Eyebrow>
        {number} / {title}
      </Eyebrow>
      <h1>
        {title}
        <span className="accent">.</span>
      </h1>
      <div className="intro-copy">{children}</div>
    </section>
  );
}
export function ProjectVisual({
  project = projects[0],
}: {
  project?: (typeof projects)[number];
}) {
  const market = project.slug === "marketpilot-ai";
  return (
    <div
      className={market ? "project-visual market-visual" : "project-visual"}
      role="img"
      aria-label={`${project.title} editorial artwork, not an application screenshot`}
    >
      <span className="visual-index">
        {market ? "AI EXPLORATION / 002" : "FULL-STACK APPLICATION / 001"}
      </span>
      <div className="campus-mark">
        {market ? (
          <>
            m<span>p</span>
          </>
        ) : (
          <>
            c<span>o</span>
          </>
        )}
      </div>
      <div className="visual-bottom">
        <span>{project.title}</span>
        <span>{market ? "DATA → INSIGHT" : "STUDENT LIFE, CONNECTED"}</span>
      </div>
    </div>
  );
}
export function ProjectCard({
  project = projects[0],
}: {
  project?: (typeof projects)[number];
}) {
  return (
    <Link href={"/projects/" + project.slug} className="project-card">
      <ProjectVisual project={project} />
      <div className="project-meta">
        <div>
          <p className="small-label">
            {project.category} <span> / </span> {project.label}
          </p>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p className="project-stack">{project.technologies.join(" · ")}</p>
        </div>
        <span className="circle-arrow">
          <Arrow />
        </span>
      </div>
    </Link>
  );
}
export function Connect() {
  return (
    <section className="connect" data-reveal>
      <div>
        <Eyebrow>GOOD THINGS START WITH A CONVERSATION</Eyebrow>
        <h2>
          Let’s build something
          <br />
          <span className="muted">worth making.</span>
        </h2>
      </div>
      <Link className="button primary" href="/contact">
        Get in touch <Arrow />
      </Link>
    </section>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <Link href="/" className="wordmark">
          lsk<span>.</span>
        </Link>
        <p>Curiosity. Craft. Forward motion.</p>
        <div>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <Arrow />
            </a>
          )}
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub <Arrow />
          </a>
          <a href={profile.youtube} target="_blank" rel="noopener noreferrer">
            YouTube <Arrow />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Lingesh Sashi Kumar</span>
        <span>Built with intention.</span>
      </div>
    </footer>
  );
}
