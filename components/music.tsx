import type { CSSProperties } from "react";
import type { Album } from "@/lib/content";
// Decorative graphics only: no audio, no controls. Markup is deterministic so
// server and client output always match.
function step(i: number): CSSProperties {
  return { "--i": i } as CSSProperties;
}
const bars = Array.from({ length: 56 }, (_, i) => {
  const wave =
    Math.abs(Math.sin(i * 0.42)) * 0.55 + Math.abs(Math.sin(i * 1.7)) * 0.3;
  return Math.round((0.15 + wave) * 100) / 100;
});
export function Waveform() {
  return (
    <svg
      className="waveform"
      aria-hidden="true"
      focusable="false"
      viewBox={`0 0 ${bars.length * 6} 60`}
      preserveAspectRatio="none"
    >
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * 6}
          y={60 - h * 60}
          width="3"
          height={h * 60}
          rx="1.5"
          style={step(i)}
        />
      ))}
    </svg>
  );
}
const pattern = [
  ["HATS", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]],
  ["SNARE", [4, 12]],
  ["KICK", [0, 3, 7, 10, 11]],
  ["808", [0, 3, 7, 10, 14]],
] as const;
export function StepSequencer() {
  return (
    <figure className="sequencer">
      <div className="sequencer-grid" aria-hidden="true">
        {pattern.map(([label, on]) => (
          <div className="sequencer-row" key={label}>
            <span>{label}</span>
            <div>
              {Array.from({ length: 16 }, (_, i) => (
                <i
                  key={i}
                  className={(on as readonly number[]).includes(i) ? "on" : ""}
                  style={step(i)}
                />
              ))}
            </div>
          </div>
        ))}
        <span className="sequencer-playhead" />
      </div>
      <figcaption>
        FIG. 02 — A sixteen-step drum pattern, drawn as an illustration. It is
        decorative and does not play audio.
      </figcaption>
    </figure>
  );
}
export function AlbumIndex({ albums }: { albums: Album[] }) {
  return (
    <ol className="album-index" data-reveal-stagger>
      {albums.map((album, i) => (
        <li key={album.title}>
          <span className="album-number">{String(i + 1).padStart(2, "0")}</span>
          <cite>{album.title}</cite>
          <span className="album-meta">
            {album.credit} · {album.year}
          </span>
        </li>
      ))}
    </ol>
  );
}
export function AlbumSleeves({ albums }: { albums: Album[] }) {
  return (
    <ol className="album-sleeves" data-reveal-stagger>
      {albums.map((album) => (
        <li key={album.title}>
          <div className="sleeve">
            <span className="sleeve-year">{album.year}</span>
            <cite>
              {album.title}
              {album.short && (
                <span className="sleeve-short"> ({album.short})</span>
              )}
            </cite>
            <span className="sleeve-credit">{album.credit}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}
