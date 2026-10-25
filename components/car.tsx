import type { CSSProperties } from "react";
import { garage, type CarId, type CarProfile } from "@/lib/cars";
function Wheel({
  cx,
  radius,
  index,
}: {
  cx: number;
  radius: number;
  index: number;
}) {
  return (
    <g transform={`translate(${cx} 296)`}>
      <circle
        r={radius}
        pathLength={1}
        className="w-main"
        style={{ "--i": index } as CSSProperties}
      />
      <circle r={radius - 8} pathLength={1} className="w-secondary" />
      <g className="wheel-spin">
        <circle r={radius - 13} className="wheel-bounds" />
        {Array.from({ length: 5 }, (_, i) => (
          <path
            key={i}
            d={`M-4 -8 L-10 -${radius - 14} M4 -8 L10 -${radius - 14}`}
            transform={`rotate(${i * 72})`}
            className="w-detail"
            pathLength={1}
          />
        ))}
        <circle r={8} className="w-secondary" pathLength={1} />
      </g>
    </g>
  );
}
function Lines({ profile }: { profile: CarProfile }) {
  const { front, rear } = profile;
  const lower = ` L${front + 72} 302 A72 72 0 0 0 ${front - 72} 302 L${rear + 72} 302 A72 72 0 0 0 ${rear - 72} 302 L60 302`;
  return (
    <>
      <path d={profile.top + lower} pathLength={1} className="w-main" />
      <path d={profile.glass} pathLength={1} className="w-secondary" />
      {profile.details.map((d, i) => (
        <path
          key={d}
          d={d}
          pathLength={1}
          className={i === 3 ? "w-accent" : "w-detail"}
          style={{ "--i": i + 2 } as CSSProperties}
        />
      ))}
      <Wheel cx={rear} radius={profile.radius} index={12} />
      <Wheel cx={front} radius={profile.radius} index={13} />
    </>
  );
}
export function CarDrawing({
  model = "m8",
  id,
  hero = false,
  className = "",
}: {
  model?: CarId;
  id: string;
  hero?: boolean;
  className?: string;
}) {
  const profile = garage.find((c) => c.id === model)!;
  return (
    <div
      className={`car-drawing${hero ? " is-hero" : ""} ${className}`}
      data-model={profile.id}
      data-reveal={hero ? undefined : "line"}
      aria-hidden="true"
    >
      <div className="drawing-panel">
        <div className="drawing-stage">
          <svg
            className="drawing-base"
            viewBox="0 0 1000 400"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <Lines profile={profile} />
          </svg>
          <svg
            className="drawing-glow"
            viewBox="0 0 1000 400"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <defs>
              <linearGradient id={`car-${id}`}>
                <stop stopColor="var(--accent)" />
                <stop offset="1" stopColor="var(--signal)" />
              </linearGradient>
            </defs>
            <g stroke={`url(#car-${id})`}>
              <Lines profile={profile} />
            </g>
          </svg>
        </div>
        <div className="drawing-caption">
          <span>{profile.name}</span>
          <span>{profile.type}</span>
        </div>
      </div>
    </div>
  );
}
export function CarGallery() {
  return (
    <div className="garage-grid">
      {garage.slice(1).map((profile) => (
        <figure key={profile.id} className="garage-study">
          <CarDrawing model={profile.id} id={`garage-${profile.id}`} />
          <figcaption>
            <span className="small-label">STUDY {profile.mark}</span>
            <h3>{profile.name}</h3>
            <p>{profile.type}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
