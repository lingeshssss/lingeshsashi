import Link from "next/link";
import {
  Arrow,
  ContourRule,
  Eyebrow,
  ProjectCard,
  SectionHead,
} from "@/components/ui";
import { CarDrawing } from "@/components/car";
import { experience, profile, projects } from "@/lib/content";
export default function Home() {
  const work = experience.filter((e) => e.section === "work" && e.dates);
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="hero-name">
            <span>Lingesh</span> <span>Sashi Kumar</span>
          </p>
          <h1 id="hero-heading">
            <span className="mask-line">
              <span>Building useful software.</span>
            </span>{" "}
            <span className="mask-line">
              <span className="muted">Exploring what’s next.</span>
            </span>
          </h1>
          <div className="hero-lede">
            <p className="hero-description">
              I’m a Computer Science and Data Science student at{" "}
              {profile.university}, interested in software engineering, AI,
              cloud computing, and cybersecurity. This portfolio is about the
              software I build and the interests that shape me.
            </p>
            <div className="actions">
              <Link href="/projects" className="button primary">
                View Projects <Arrow />
              </Link>
              <Link href="/resume" className="button secondary">
                View Résumé <Arrow />
              </Link>
            </div>
          </div>
        </div>
        <CarDrawing model="m8" id="hero" hero className="hero-figure" />
        <dl className="hero-specs">
          <div>
            <dt>Studying</dt>
            <dd>{profile.university}</dd>
          </div>
          <div>
            <dt>Degree</dt>
            <dd>B.S. CS&DS · Expected {profile.graduation}</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Software · AI · Cloud · Security</dd>
          </div>
          <div>
            <dt>Internships</dt>
            <dd>NJCCIC · Codestax</dd>
          </div>
        </dl>
      </section>
      <section className="section home-work" aria-labelledby="work-heading">
        <div className="section-top">
          <SectionHead index="§ 01" label="SELECTED WORK" id="work-heading">
            Ideas with a purpose.
          </SectionHead>
          <Link className="text-link" href="/projects">
            All projects <Arrow />
          </Link>
        </div>
        <div className="project-rows" data-reveal-stagger>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              variant="row"
            />
          ))}
        </div>
      </section>
      <section
        className="section home-overview"
        aria-labelledby="overview-heading"
      >
        <SectionHead
          index="§ 02"
          label="EXPERIENCE & TOOLKIT"
          id="overview-heading"
        >
          Curious by nature. <span className="muted">Hands-on by choice.</span>
        </SectionHead>
        <div className="overview-grid">
          <div>
            <h3 className="column-label">Experience</h3>
            <ol className="spec-list" data-reveal-stagger>
              {work.map((e) => (
                <li key={e.organization}>
                  <span className="spec-key">{e.dates}</span>
                  <span className="spec-value">
                    <strong>{e.title}</strong>
                    <span>{e.organization}</span>
                  </span>
                </li>
              ))}
            </ol>
            <Link href="/experience" className="text-link">
              Full experience <Arrow />
            </Link>
          </div>
          <div>
            <h3 className="column-label">Technical skills</h3>
            <dl className="skill-groups" data-reveal-stagger>
              {profile.skillGroups.map((group) => (
                <div key={group.title}>
                  <dt>{group.title}</dt>
                  <dd>
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <section className="home-finale" aria-labelledby="finale-heading">
        <CarDrawing model="gt3-rs" id="finale" className="finale-figure" />
        <div className="finale-copy" data-reveal-stagger>
          <Eyebrow>GOOD THINGS START WITH A CONVERSATION</Eyebrow>
          <h2 id="finale-heading">
            Let’s build something <span className="muted">worth making.</span>
          </h2>
          <p>
            I’m open to software engineering internships, freelance website
            work, and thoughtful collaborations.
          </p>
          <div className="actions">
            <Link className="button primary" href="/contact">
              Get in touch <Arrow />
            </Link>
            <a className="text-link" href={`mailto:${profile.email}`}>
              {profile.email} <Arrow />
            </a>
          </div>
        </div>
        <ContourRule />
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: profile.name,
            sameAs: [profile.github, profile.youtube, profile.linkedin],
            affiliation: {
              "@type": "CollegeOrUniversity",
              name: profile.university,
            },
          }),
        }}
      />
    </>
  );
}
