import type { Metadata } from "next";
import { PageIntro, Arrow } from "@/components/ui";
import { PrintButton } from "@/components/print-button";
import { experience, profile, projects } from "@/lib/content";
export const metadata: Metadata = {
  description:
    "Read Lingesh Sashi Kumar’s education, experience, projects, skills, and activities in an accessible profile summary.",
  title: "Résumé",
  ...(process.env.SITE_URL ? { alternates: { canonical: "/resume" } } : {}),
};
export default function Resume() {
  return (
    <>
      <PageIntro number="04" title="Résumé">
        <p>An at-a-glance view of my education, experience, and interests.</p>
      </PageIntro>
      <section className="resume-sheet">
        <div className="resume-header">
          <div>
            <h2>{profile.name}</h2>
            <p>Rutgers University–New Brunswick · Expected May 2030</p>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              github.com/lingeshssss <Arrow />
            </a>
          </div>
          <PrintButton />
        </div>
        <p className="editorial-note">
          Profile summary based on the background shared for this portfolio.
        </p>
        <div className="resume-row">
          <h3>Education</h3>
          <div>
            <h4>{profile.university}</h4>
            <p>
              First-year undergraduate · Expected graduation:{" "}
              {profile.graduation}
            </p>
            <p>
              Academic interests: computer science, IT, data science, AI/ML,
              software engineering, cloud computing, and cybersecurity.
            </p>
          </div>
        </div>
        <div className="resume-row">
          <h3>Experience</h3>
          <div>
            {experience.slice(0, 3).map((e) => (
              <article key={e.title}>
                <h4>
                  {e.title} · {e.organization}
                </h4>
                <p>{e.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="resume-row">
          <h3>Projects</h3>
          <div>
            <h4>{projects[0].title} · Student companion</h4>
            <p>{projects[0].summary}</p>
          </div>
        </div>
        <div className="resume-row">
          <h3>Technical toolkit</h3>
          <p>{profile.skills.join(" · ")}</p>
        </div>
        <div className="resume-row">
          <h3>Leadership & activities</h3>
          <div>
            {experience.slice(3).map((e) => (
              <article key={e.title}>
                <h4>{e.title}</h4>
                <p>{e.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
