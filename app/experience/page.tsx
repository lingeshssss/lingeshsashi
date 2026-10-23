import type { Metadata } from "next";
import { Connect, PageIntro, Eyebrow } from "@/components/ui";
import { experience } from "@/lib/content";
export const metadata: Metadata = {
  description:
    "An overview of Lingesh’s cybersecurity, client website, AI workshop, and leadership experience.",
  title: "Experience",
  ...(process.env.SITE_URL ? { alternates: { canonical: "/experience" } } : {}),
};
export default function Experience() {
  return (
    <>
      <PageIntro number="03" title="Learning by doing">
        <p>
          Across technology, entrepreneurship, and community.
          <br />
          Experiences that shape how I approach the next challenge.
        </p>
      </PageIntro>
      <section className="section timeline-section">
        <div>
          <Eyebrow>EXPERIENCE & INVOLVEMENT</Eyebrow>
          <p className="muted">A thematic overview of my background.</p>
        </div>
        <div className="timeline">
          {experience.map((e, i) => (
            <article key={e.title}>
              <span className="timeline-number">0{i + 1}</span>
              <div>
                <p className="small-label">
                  {e.type} / {e.organization}
                </p>
                <h2>{e.title}</h2>
                <p>{e.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Connect />
    </>
  );
}
