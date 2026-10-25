import type { Metadata } from "next";
import { Connect, PageIntro, SectionHead } from "@/components/ui";
import { experience } from "@/lib/content";
export const metadata: Metadata = {
  description:
    "An overview of Lingesh’s cybersecurity, client website, AI workshop, and leadership experience.",
  title: "Experience",
  ...(process.env.SITE_URL ? { alternates: { canonical: "/experience" } } : {}),
};
const groups = [
  ["work", "§ 01", "PROFESSIONAL", "Professional work"],
  ["community", "§ 02", "VOLUNTEERING", "Volunteering"],
  ["leadership", "§ 03", "LEADERSHIP & ACTIVITIES", "Leadership & activities"],
] as const;
export default function Experience() {
  return (
    <>
      <PageIntro number="03" title="Learning by doing" label="EXPERIENCE">
        <p>
          Across technology, entrepreneurship, and community. Experiences that
          shape how I approach the next challenge.
        </p>
      </PageIntro>
      {groups.map(([key, index, label, title]) => (
        <section
          key={key}
          className="section timeline-section"
          aria-labelledby={`${key}-heading`}
        >
          <SectionHead index={index} label={label} id={`${key}-heading`}>
            {title}
          </SectionHead>
          <div className="timeline" data-reveal-stagger>
            {experience
              .filter((e) => e.section === key)
              .map((e) => (
                <article key={e.title}>
                  <span className="timeline-number">
                    {String(experience.indexOf(e) + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="small-label">
                      {e.type} / {e.organization}
                    </p>
                    <h3>{e.title}</h3>
                    {e.dates && <p className="experience-dates">{e.dates}</p>}
                    <p>{e.description}</p>
                  </div>
                </article>
              ))}
          </div>
        </section>
      ))}
      <Connect />
    </>
  );
}
