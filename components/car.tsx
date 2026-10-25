import type { CSSProperties } from "react";
import {
  drawings,
  wheelSpokes,
  type DrawingItem,
  type Wheel,
} from "@/lib/cars";
type View = keyof typeof drawings;
function Item({ item, i }: { item: DrawingItem; i: number }) {
  const style = { "--i": i } as CSSProperties;
  if ("ellipse" in item) {
    const [cx, cy, rx, ry, angle] = item.ellipse;
    return (
      <ellipse
        cx={cx}
        cy={cy}
        rx={rx}
        ry={ry}
        transform={`rotate(${angle} ${cx} ${cy})`}
        pathLength={1}
        className={`w-${item.weight}`}
        style={style}
      />
    );
  }
  return (
    <path
      d={item.d}
      pathLength={1}
      className={`w-${item.weight}`}
      style={style}
    />
  );
}
// Spokes live in unit-circle space inside the fitted rim ellipse, so the
// scroll-linked spin rotates them correctly in perspective.
function WheelFace({ wheel, i }: { wheel: Wheel; i: number }) {
  return (
    <g
      transform={`translate(${wheel.cx} ${wheel.cy}) rotate(${wheel.angle}) scale(${wheel.rx} ${wheel.ry})`}
    >
      <g className="wheel-spin">
        <circle r={1} className="wheel-bounds" />
        <path
          d={wheelSpokes}
          pathLength={1}
          className="w-detail"
          style={{ "--i": i } as CSSProperties}
        />
        <circle
          r={0.2}
          pathLength={1}
          className="w-detail"
          style={{ "--i": i } as CSSProperties}
        />
      </g>
    </g>
  );
}
function Lines({ view }: { view: View }) {
  const drawing = drawings[view];
  return (
    <>
      {drawing.items.map((item, i) => (
        <Item key={i} item={item} i={i} />
      ))}
      {drawing.wheels.map((wheel, i) => (
        <WheelFace key={i} wheel={wheel} i={drawing.items.length + i} />
      ))}
    </>
  );
}
// Decorative line drawing of the car. A second layer in the M tricolor
// follows the pointer (wired in MotionController); scroll-linked motion and
// the hero draw-in live in CSS and are skipped for reduced motion.
export function CarDrawing({
  view,
  id,
  hero = false,
  className = "",
}: {
  view: View;
  id: string;
  hero?: boolean;
  className?: string;
}) {
  const drawing = drawings[view];
  return (
    <div
      className={`car-drawing is-${view}${hero ? " is-hero" : ""} ${className}`}
      data-reveal={hero ? undefined : "line"}
      aria-hidden="true"
    >
      <div className="drawing-panel">
        <div className="drawing-stage">
          <svg className="drawing-base" viewBox={drawing.viewBox}>
            <Lines view={view} />
          </svg>
          <svg className="drawing-glow" viewBox={drawing.viewBox}>
            <defs>
              <linearGradient id={`m-${id}`} x1="0" x2="1" y1="0" y2="0">
                <stop offset="0" style={{ stopColor: "var(--m1)" }} />
                <stop offset="0.5" style={{ stopColor: "var(--m2)" }} />
                <stop offset="1" style={{ stopColor: "var(--m3)" }} />
              </linearGradient>
            </defs>
            <g stroke={`url(#m-${id})`}>
              <Lines view={view} />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
