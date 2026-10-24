import Link from "next/link";
import { Arrow, Connect, Eyebrow, ProjectCard } from "@/components/ui";
import { profile } from "@/lib/content";
function EngineeringVisual() {
  return (
    <div
      className="engineering"
      role="img"
      aria-label="Abstract engineering dial expressing curiosity and forward motion"
    >
      <div className="drawing-grid" />
      <span className="drawing-label top">FIG. 01 — ALWAYS EXPLORING</span>
      <div className="dial">
        <div className="dial-ring" />
        <div className="dial-inner" />
        <div className="dial-cross horizontal" />
        <div className="dial-cross vertical" />
        <div className="dial-orbit" />
        <div className="dial-center">
          lsk
          <span>
            <Arrow />
          </span>
        </div>
        <span className="dial-point" />
      </div>
      <div className="drawing-bottom">
        <span>
          40.5008° N<br />
          74.4474° W
        </span>
        <span>IDEAS → IMPACT</span>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <Eyebrow>STUDENT. DEVELOPER. ALWAYS CURIOUS.</Eyebrow>
          <p className="hero-name">Hi, I’m Lingesh Sashi Kumar.</p>
          <h1>
            Building useful
            <br />
            software.
            <br />
            <span className="muted">
              Exploring
              <br />
              what’s next.
            </span>
          </h1>
          <p className="hero-description">
            A Rutgers student bringing curiosity to software, AI, and
            entrepreneurship. I like turning practical problems into thoughtful
            digital experiences.
          </p>
          <div className="actions">
            <Link href="/projects" className="button primary">
              View Projects <Arrow />
            </Link>
            <Link href="/resume" className="button secondary">
              View Résumé <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <EngineeringVisual />
      </section>
      <div className="identity-strip">
        <span>
          <span className="status-dot" /> Rutgers University–New Brunswick
        </span>
        <span>CLASS OF 2030</span>
        <span>SOFTWARE · AI · CLOUD · SECURITY</span>
      </div>
      <section className="section">
        <div className="section-heading">
          <div>
            <Eyebrow>01 / SELECTED EXPLORATIONS</Eyebrow>
            <h2>Ideas with a purpose.</h2>
          </div>
          <Link className="text-link" href="/projects">
            Explore projects <Arrow />
          </Link>
        </div>
        <div className="featured-grid">
          <ProjectCard />
          <aside className="project-aside">
            <svg
              className="large-asterisk"
              aria-hidden="true"
              width="58"
              height="58"
              viewBox="0 0 64 64"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M32 3v58M3 32h58M11 11l42 42M11 53l42-42" />
            </svg>
            <h3>
              Practical problems.
              <br />
              New possibilities.
            </h3>
            <p>
              My interests sit where useful software meets everyday life. From
              student tools to client websites, I’m drawn to things people can
              actually use.
            </p>
            <Link href="/about" className="text-link">
              A little more about me <Arrow />
            </Link>
          </aside>
        </div>
      </section>
      <section className="section approach">
        <div>
          <Eyebrow>02 / HOW I THINK</Eyebrow>
          <h2>
            Curious by nature.
            <br />
            <span className="muted">Hands-on by choice.</span>
          </h2>
          <Link href="/experience" className="text-link">
            My experience <Arrow />
          </Link>
        </div>
        <div className="strength-list">
          {[
            [
              "01",
              "Build with purpose",
              "Experience creating client websites and exploring practical tools for student life.",
            ],
            [
              "02",
              "Keep learning",
              "Interests spanning AI, cloud computing, and cybersecurity, with internship experience at NJCCIC.",
            ],
            [
              "03",
              "Share what you know",
              "Helping teach generative AI workshops and bringing people together through engineering.",
            ],
          ].map(([n, t, d]) => (
            <div key={n}>
              <span>{n}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="tool-strip">
        <span>A GROWING TOOLKIT</span>
        <p>{profile.skills.join("   /   ")}</p>
      </div>
      <Connect />
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
