import Link from "next/link";
import Image from "next/image";
import { projects, profile } from "@/lib/content";
import { roofline } from "@/lib/cars";
type Project = (typeof projects)[number];
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
      <span className="m-stripe" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      {children}
    </p>
  );
}
// A proportion-preserving profile used as a quiet section rule.
export function ContourRule({ intro = false }: { intro?: boolean }) {
  return (
    <svg
      className={intro ? "contour-rule is-intro" : "contour-rule"}
      data-reveal={intro ? undefined : "line"}
      aria-hidden="true"
      focusable="false"
      viewBox={roofline.viewBox}
      preserveAspectRatio="xMidYMid meet"
    >
      <path d={roofline.path} pathLength={1} />
    </svg>
  );
}
export function SectionHead({
  index,
  label,
  id,
  children,
}: {
  index: string;
  label: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <header className="section-head" data-reveal-stagger>
      <p className="section-marker">
        <span className="section-index">{index}</span>
        <span>{label}</span>
      </p>
      <h2 id={id}>{children}</h2>
    </header>
  );
}
export function PageIntro({
  number,
  title,
  label,
  children,
}: {
  number: string;
  title: string;
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="page-intro">
      <div className="page-intro-meta">
        <span className="page-index" aria-hidden="true">
          {number}
        </span>
        <Eyebrow>{label ?? title}</Eyebrow>
      </div>
      <h1>
        <span className="mask-line">
          <span>
            {title}
            <span className="accent">.</span>
          </span>
        </span>
      </h1>
      <div className="intro-copy">{children}</div>
      <ContourRule intro />
    </section>
  );
}
export function ProjectVisual({
  project = projects[0],
  sizes = "(max-width: 700px) 100vw, 50vw",
  decorative = false,
}: {
  project?: Project;
  sizes?: string;
  decorative?: boolean;
}) {
  if (project.screenshot)
    return (
      <div className="project-visual has-screenshot">
        <Image
          src={project.screenshot}
          alt={decorative ? "" : (project.screenshotAlt ?? "")}
          width={1440}
          height={1000}
          sizes={sizes}
        />
      </div>
    );
  return (
    <div
      className="project-visual"
      {...(decorative
        ? { "aria-hidden": true }
        : {
            role: "img",
            "aria-label": `${project.title} typographic artwork; no public screenshot is available`,
          })}
    >
      <span className="visual-index">{project.category.toUpperCase()}</span>
      <span className="visual-mark" aria-hidden="true">
        {project.title}
      </span>
      <span className="visual-bottom">{project.technologies.join(" · ")}</span>
    </div>
  );
}
export function ProjectCard({
  project = projects[0],
  index = 0,
  variant = "grid",
}: {
  project?: Project;
  index?: number;
  variant?: "grid" | "row";
}) {
  return (
    <Link
      href={"/projects/" + project.slug}
      className={`project-card is-${variant}`}
    >
      <span className="project-number" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
      <ProjectVisual
        project={project}
        decorative
        sizes={
          variant === "row"
            ? "(max-width: 700px) 100vw, 40vw"
            : "(max-width: 700px) 100vw, 50vw"
        }
      />
      <div className="project-meta">
        <p className="small-label">
          {project.category} <span> / </span> {project.label}
        </p>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-stack">{project.technologies.join(" · ")}</p>
      </div>
      <span className="circle-arrow">
        <Arrow />
      </span>
    </Link>
  );
}
export function Connect() {
  return (
    <section className="connect" data-reveal-stagger>
      <div>
        <Eyebrow>GOOD THINGS START WITH A CONVERSATION</Eyebrow>
        <h2>
          Let’s build something
          <br />
          <span className="muted">worth making.</span>
        </h2>
      </div>
      <div className="actions">
        <Link className="button primary" href="/contact">
          Get in touch <Arrow />
        </Link>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <Link href="/" className="wordmark">
          LSK
          <span className="m-stripe" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
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
        <span>
          Independent personal site. Not affiliated with any vehicle
          manufacturer.
        </span>
      </div>
    </footer>
  );
}
