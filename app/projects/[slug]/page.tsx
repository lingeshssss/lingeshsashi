import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import { Arrow, Connect, Eyebrow, ProjectVisual } from "@/components/ui";
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
  return (
    <>
      <section className="page-intro">
        <Link href="/projects" className="text-link">
          ← All projects
        </Link>
        <div className="detail-heading">
          <Eyebrow>
            {p.label} / {p.category}
          </Eyebrow>
          <h1>
            {p.title}
            <span className="accent">.</span>
          </h1>
          <p className="intro-copy">{p.summary}</p>
          {p.demo && (
            <a
              className="button primary project-demo"
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit CampusOS <Arrow />
            </a>
          )}
        </div>
      </section>
      <ProjectVisual />
      <figure className="project-screenshot">
        <Image
          src="/campusos-sign-in.webp"
          alt="CampusOS public sign-in page, with a green introductory panel and email and Google sign-in options"
          width={1440}
          height={1000}
          sizes="(max-width: 700px) 100vw, 1100px"
        />
        <figcaption>
          CampusOS public sign-in page. Authenticated app features are outside
          the scope of this preview.
        </figcaption>
      </figure>
      <section className="section detail-body">
        <aside>
          <p className="small-label">PROJECT TYPE</p>
          <p>Student companion</p>
          <p className="small-label">DOCUMENTATION</p>
          <p>Public entry page reviewed</p>
          <p className="small-label">VISUAL</p>
          <p>Concept artwork</p>
        </aside>
        <div className="prose">
          <Eyebrow>THE OPPORTUNITY</Eyebrow>
          <h2>
            A little less friction.
            <br />
            More room for college.
          </h2>
          <p>{p.problem}</p>
          <h3>Areas to explore</h3>
          <ul>
            {p.scope.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <h3>Where it stands</h3>
          <p>{p.note}</p>
          <p>
            Technical approach, lessons learned, and outcomes will be added
            alongside supporting source material. The artwork above is an
            editorial illustration of the idea.
          </p>
        </div>
      </section>
      <Connect />
    </>
  );
}
