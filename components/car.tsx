import type { CSSProperties } from "react";
import { car, drawings } from "@/lib/cars";
type View = keyof typeof drawings;
// Callout markers for the annotated About drawing, in the drawing's own
// coordinate space; numbers match the rows of the design-mapping table.
const callouts = [
  { n: "01", x: 600, y: 262, label: "Silhouette" },
  { n: "02", x: 600, y: 622, label: "Body lines" },
  { n: "03", x: 1085, y: 512, label: "Lighting" },
];
// Original line drawings traced from the owner's reference photos. The hero
// variant draws itself once on load (CSS only); others draw as they scroll
// into view. Lines rest fully drawn, so nothing depends on the animation.
export function CarDrawing({
  view,
  index,
  hero = false,
  annotate = false,
  className = "",
}: {
  view: View;
  index: string;
  hero?: boolean;
  annotate?: boolean;
  className?: string;
}) {
  const drawing = drawings[view];
  return (
    <figure
      className={`car-drawing is-${view}${hero ? " is-hero" : ""} ${className}`}
      data-reveal={hero ? undefined : "line"}
    >
      <div className="drawing-panel">
        <svg
          viewBox={drawing.viewBox}
          role="img"
          aria-label={`Line drawing of the ${car.name}, ${drawing.label.toLowerCase()} view${annotate ? ", with numbered callouts for the silhouette, body lines, and headlights" : ""}`}
        >
          {drawing.paths.map((path, i) => (
            <path
              key={path.d}
              d={path.d}
              pathLength={1}
              className={
                path.accent
                  ? "accent-line"
                  : path.detail
                    ? "detail-line"
                    : undefined
              }
              style={{ "--i": i } as CSSProperties}
            />
          ))}
          {annotate &&
            callouts.map((c) => (
              <g key={c.n} className="callout">
                <circle cx={c.x} cy={c.y} r={22} />
                <text x={c.x} y={c.y} dy="0.36em" textAnchor="middle">
                  {c.n}
                </text>
              </g>
            ))}
        </svg>
      </div>
      <figcaption>
        <span>FIG. {index}</span>
        <span>
          {drawing.label} — line drawing traced from a reference photo
        </span>
      </figcaption>
    </figure>
  );
}
