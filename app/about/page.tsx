import type { Metadata } from "next";
import { Connect, PageIntro, Eyebrow, Arrow } from "@/components/ui";
import {
  AlbumIndex,
  AlbumCovers,
  StepSequencer,
  Waveform,
} from "@/components/music";
import { biography, interests, music } from "@/lib/content";
export const metadata: Metadata = {
  description:
    "Meet Lingesh Sashi Kumar, a Rutgers student interested in software, AI, cybersecurity, music production, cars, and entrepreneurship.",
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
        <div className="type-portrait" data-reveal>
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
        <div className="prose" data-reveal-stagger>
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
      <section className="section music" aria-labelledby="music-heading">
        <div className="music-heading" data-reveal>
          <Eyebrow>02 / ON REPEAT</Eyebrow>
          <h2 id="music-heading">
            A different kind
            <br />
            <span className="muted">of rhythm.</span>
          </h2>
          <p>{music.intro}</p>
        </div>
        <div className="music-feature" data-reveal>
          <div className="music-artist">
            <p className="small-label">FAVORITE ARTIST</p>
            <h3 className="artist-name">{music.favorite.artist}</h3>
            <Waveform />
            <p>{music.favorite.note}</p>
          </div>
          <AlbumIndex albums={music.favorite.albums} />
        </div>
        <p className="also-enjoy" data-reveal>
          <span className="small-label">ALSO IN ROTATION</span>
          <span>
            I also enjoy{" "}
            {music.alsoEnjoy.map((name, i) => (
              <span key={name}>
                <strong>{name}</strong>
                {i < music.alsoEnjoy.length - 2
                  ? ", "
                  : i === music.alsoEnjoy.length - 2
                    ? ", and "
                    : "."}
              </span>
            ))}
          </span>
        </p>
        <div className="music-drake">
          <div className="music-artist" data-reveal>
            <p className="small-label">FAVORITE PROJECTS</p>
            <h3 className="artist-name">{music.drake.artist}</h3>
            <p>{music.drake.note}</p>
          </div>
          <AlbumCovers albums={music.drake.albums} />
        </div>
        <p className="artwork-credit">
          Album artwork © the respective artists and labels, shown to identify
          each release. For All the Dogs is pictured with its Scary Hours
          Edition cover.
        </p>
      </section>
      <section
        className="section production"
        aria-labelledby="production-heading"
      >
        <div data-reveal-stagger>
          <Eyebrow>03 / MAKING BEATS</Eyebrow>
          <h2 id="production-heading">
            Same instinct,
            <br />
            <span className="muted">different medium.</span>
          </h2>
          {music.production.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="inspirations">
            <span className="small-label">PRODUCERS I LEARN FROM</span>
            <span>{music.production.inspirations.join(" · ")}</span>
          </p>
        </div>
        <div data-reveal>
          <StepSequencer />
        </div>
      </section>
      <section
        className="section interests"
        aria-labelledby="interests-heading"
      >
        <Eyebrow>04 / OFF THE SCREEN</Eyebrow>
        <h2 id="interests-heading">More than a browser tab.</h2>
        <div className="interest-list" data-reveal-stagger>
          {interests.map((interest, i) => (
            <div key={interest.label}>
              <span className="interest-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="small-label">{interest.label}</p>
                <h3>{interest.title}</h3>
                <p>{interest.body}</p>
                {interest.link && (
                  <a
                    className="text-link"
                    href={interest.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {interest.link.label} <Arrow />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Connect />
    </>
  );
}
