import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import {
  Arrow,
  Connect,
  ContourRule,
  Eyebrow,
  ProjectVisual,
} from "@/components/ui";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return {
    title: p?.title ?? "Project not found",
    description: p?.summary,
    ...(process.env.SITE_URL
      ? { alternates: { canonical: `/projects/${slug}` } }
      : {}),
  };
}
export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  const number = String(projects.indexOf(p) + 1).padStart(2, "0");
  const sections = [
    ["The problem", p.problem],
    ["What I built", p.built],
    ["Key features", null],
    ["Technical approach", p.approach],
    ["Outcomes & evidence", p.outcome],
  ] as const;
  return (
    <>
      <section className="page-intro detail-intro">
        <Link href="/projects" className="text-link back-link">
          ← All projects
        </Link>
        <div className="page-intro-meta">
          <span className="page-index" aria-hidden="true">
            {number}
          </span>
          <Eyebrow>
            {p.label} / {p.category}
          </Eyebrow>
        </div>
        <h1>
          <span className="mask-line">
            <span>
              {p.title}
              <span className="accent">.</span>
            </span>
          </span>
        </h1>
        <p className="intro-copy">{p.summary}</p>
        {p.demo && (
          <a
            className="button primary project-demo"
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit {p.title} <Arrow />
          </a>
        )}
        <ContourRule intro />
      </section>
      <figure className="project-figure" data-reveal="mask">
        <ProjectVisual project={p} sizes="(max-width: 700px) 100vw, 1150px" />
        <figcaption>
          {p.screenshot
            ? "CampusOS public sign-in page. Authenticated app features are outside the scope of this preview."
            : "Typographic artwork. The deployment is access-restricted, so no public screenshot is shown."}
        </figcaption>
      </figure>
      <section className="section detail-body">
        <aside>
          <dl className="spec-table" data-reveal-stagger>
            <div>
              <dt>Role</dt>
              <dd>{p.role}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{p.year}</dd>
            </div>
            <div>
              <dt>Technologies</dt>
              <dd>{p.technologies.join(" · ")}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{p.label}</dd>
            </div>
          </dl>
        </aside>
        <div className="case-study">
          {sections.map(([heading, body], i) => (
            <section key={heading} data-reveal-stagger>
              <p className="section-marker">
                <span className="section-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{heading.toUpperCase()}</span>
              </p>
              {i === 0 ? (
                <h2>
                  {p.slug === "campus-os"
                    ? "More room for college."
                    : "From market data to insight."}
                </h2>
              ) : (
                <h2>{heading}</h2>
              )}
              {body ? (
                <p>{body}</p>
              ) : (
                <ul>
                  {p.scope.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <p className="project-evidence">{p.note}</p>
        </div>
      </section>
      <Connect />
    </>
  );
}
