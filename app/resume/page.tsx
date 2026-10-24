import type { Metadata } from "next";
import { PageIntro, Arrow } from "@/components/ui";
import { PrintButton } from "@/components/print-button";
import { certifications, experience, profile, projects } from "@/lib/content";
export const metadata: Metadata = {
  description:
    "Lingesh Sashi Kumar’s education, internships, projects, technical skills, and Microsoft certifications.",
  title: "Résumé",
  ...(process.env.SITE_URL ? { alternates: { canonical: "/resume" } } : {}),
};
export default function Resume() {
  return (
    <>
      <PageIntro number="04" title="Résumé">
        <p>Education, practical experience, and a growing technical toolkit.</p>
      </PageIntro>
      <section className="resume-sheet">
        <div className="resume-header">
          <div>
            <h2>{profile.name}</h2>
            <p>
              {profile.university} · Expected {profile.graduation}
            </p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <Arrow />
              </a>{" "}
              ·{" "}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <Arrow />
              </a>
            </p>
          </div>
          <div className="resume-actions print-control">
            <a className="button primary" href={profile.resumePdf} download>
              Download Résumé <Arrow />
            </a>
            <PrintButton />
          </div>
        </div>
        <div className="resume-row">
          <h3>Education</h3>
          <div>
            <h4>{profile.university}</h4>
            <p>
              {profile.school} · {profile.degree}
            </p>
            <p>Expected graduation: {profile.graduation}</p>
            <article>
              <h4>{profile.highSchool.name}</h4>
              <p>
                {profile.highSchool.qualification} · {profile.highSchool.year}
              </p>
            </article>
          </div>
        </div>
        <div className="resume-row">
          <h3>Experience</h3>
          <div>
            {experience
              .filter((e) => e.section === "work")
              .map((e) => (
                <article key={e.organization}>
                  <h4>{e.title}</h4>
                  <p className="resume-position">
                    {e.organization}
                    {e.dates && ` · ${e.dates}`}
                  </p>
                  <ul>
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
          </div>
        </div>
        <div className="resume-row">
          <h3>Projects</h3>
          <div>
            {projects.map((p) => (
              <article key={p.slug}>
                <h4>
                  {p.title} · {p.year}
                </h4>
                <p>{p.technologies.join(" · ")}</p>
                <p>{p.built}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="resume-row">
          <h3>Technical skills</h3>
          <div>
            {profile.skillGroups.map((group) => (
              <article key={group.title}>
                <h4>{group.title}</h4>
                <p>{group.items.join(" · ")}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="resume-row">
          <h3>Certifications</h3>
          <div>
            <p className="credential-source">
              Status and dates from the supplied Microsoft credential record.
            </p>
            {certifications.map((c) => (
              <article className="credential" key={c.name}>
                <h4>{c.name}</h4>
                <p>
                  <span
                    className={`credential-status ${c.status.toLowerCase()}`}
                  >
                    {c.status}
                  </span>{" "}
                  · Earned {c.earned}
                  {c.expires && ` · Expires ${c.expires}`}
                </p>
              </article>
            ))}
            <a
              className="text-link credential-record"
              href={profile.credentialsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft credential profile <Arrow />
            </a>
          </div>
        </div>
        <div className="resume-row">
          <h3>Leadership & community</h3>
          <div>
            {experience
              .filter((e) => e.section !== "work")
              .map((e) => (
                <article key={e.organization}>
                  <h4>
                    {e.title} · {e.organization}
                  </h4>
                  {e.dates && <p>{e.dates}</p>}
                  <ul>
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
