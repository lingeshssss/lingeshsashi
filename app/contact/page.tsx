import type { Metadata } from "next";
import { Arrow, Eyebrow, PageIntro } from "@/components/ui";
import { CarFigure } from "@/components/car";
import { profile } from "@/lib/content";
import { carPhotos } from "@/lib/cars";
export const metadata: Metadata = {
  description:
    "Connect with Lingesh Sashi Kumar for internships, freelance websites, and collaboration.",
  title: "Contact",
  ...(process.env.SITE_URL ? { alternates: { canonical: "/contact" } } : {}),
};
export default function Contact() {
  return (
    <>
      <PageIntro number="05" title="Let’s connect" label="CONTACT">
        <p>
          A good conversation can lead to something great. I’d love to hear what
          you’re working on.
        </p>
      </PageIntro>
      <section className="section contact-grid">
        <div data-reveal-stagger>
          <Eyebrow>OPEN TO POSSIBILITIES</Eyebrow>
          <h2>
            Have an idea?
            <br />
            <span className="muted">Let’s explore it.</span>
          </h2>
          <p className="contact-copy">
            I’m interested in software engineering internships, freelance
            website work, and thoughtful collaborations across AI, cloud, and
            cybersecurity.
          </p>
          <p className="contact-copy">
            Send me an email to start a conversation, connect on LinkedIn, or
            explore my public work on GitHub.
          </p>
          <div className="actions">
            <a
              className="button primary"
              href={profile.linkedin!}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn <Arrow />
            </a>
          </div>
        </div>
        <div className="contact-links" data-reveal-stagger>
          <a href={`mailto:${profile.email}`}>
            <div>
              <span className="small-label">SAY HELLO</span>
              <h3>Email</h3>
              <p>{profile.email}</p>
            </div>
            <Arrow />
          </a>
          <a href={profile.linkedin!} target="_blank" rel="noopener noreferrer">
            <div>
              <span className="small-label">START A CONVERSATION</span>
              <h3>LinkedIn</h3>
              <p>Lingesh Sashi Kumar</p>
            </div>
            <Arrow />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <div>
              <span className="small-label">CODE & PROJECTS</span>
              <h3>GitHub</h3>
              <p>@lingeshssss</p>
            </div>
            <Arrow />
          </a>
          <a href={profile.youtube} target="_blank" rel="noopener noreferrer">
            <div>
              <span className="small-label">OFF THE SCREEN</span>
              <h3>YouTube</h3>
              <p>@2fast-m3 · Cars & technology</p>
            </div>
            <Arrow />
          </a>
          <div className="contact-location">
            <span className="status-dot" /> Studying at Rutgers University–New
            Brunswick
          </div>
        </div>
      </section>
      <CarFigure
        photo={carPhotos.rearThreeQuarter}
        index="06"
        sizes="(max-width: 700px) 100vw, 1150px"
        className="contact-figure"
        caption={`${carPhotos.rearThreeQuarter.label} — ${carPhotos.rearThreeQuarter.credit}`}
      />
    </>
  );
}
