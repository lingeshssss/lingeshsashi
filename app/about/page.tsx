import type { Metadata } from "next";
import { Connect, PageIntro, Eyebrow, Arrow } from "@/components/ui";
import { profile, biography } from "@/lib/content";
export const metadata: Metadata = {
  description:
    "Meet Lingesh Sashi Kumar, a Rutgers student interested in software, AI, cybersecurity, and entrepreneurship.",
  title: "About",
  ...(process.env.SITE_URL ? { alternates: { canonical: "/about" } } : {}),
};
export default function About() {
  return (
    <>
      <PageIntro number="01" title="A little about me">
        <p>
          A student mindset. An engineer’s curiosity.
          <br />
          An appetite for what comes next.
        </p>
      </PageIntro>
      <section className="story-grid section">
        <div className="type-portrait">
          <span>THE PERSON BEHIND THE PIXELS</span>
          <div>
            Learn.
            <br />
            Make.
            <br />
            <em>Repeat.</em>
          </div>
          <span>LINGESH SASHI KUMAR / RUTGERS</span>
        </div>
        <div className="prose">
          <Eyebrow>CURIOUS, IN MORE THAN ONE DIRECTION</Eyebrow>
          <h2>
            I like understanding
            <br />
            how things work.
          </h2>
          {biography.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
      <section className="section interests">
        <Eyebrow>OFF THE SCREEN</Eyebrow>
        <h2>More than a browser tab.</h2>
        <div className="interest-grid">
          <div>
            <span>01 / CARS</span>
            <h3>Engineering in motion.</h3>
            <p>
              Cars bring together design, technology, and personality. I share
              that interest on my automotive YouTube channel.
            </p>
            <a
              className="text-link"
              href={profile.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              @2fast-m3 <Arrow />
            </a>
          </div>
          <div>
            <span>02 / MUSIC</span>
            <h3>A different kind of rhythm.</h3>
            <p>
              Music is one of the interests I come back to outside of technology
              and coursework.
            </p>
          </div>
          <div>
            <span>03 / ENTREPRENEURSHIP</span>
            <h3>Ideas into action.</h3>
            <p>
              I’m interested in the process of making something useful and
              finding the people it can help.
            </p>
          </div>
        </div>
      </section>
      <Connect />
    </>
  );
}
