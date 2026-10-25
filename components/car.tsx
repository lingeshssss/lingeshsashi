import Image from "next/image";
import type { CSSProperties } from "react";
import { carPhotos, heroContour } from "@/lib/cars";
type Photo = (typeof carPhotos)[keyof typeof carPhotos];
// Homepage reveal: contour lines traced from this photo draw in, a shutter
// slides away to uncover the car, then the lines fade. CSS-only, runs once,
// and the photo is fully visible without animation or JavaScript.
export function HeroFigure() {
  const photo = carPhotos.frontThreeQuarter;
  return (
    <figure className="hero-figure">
      <div className="hero-frame">
        <Image
          src={photo.src}
          alt={photo.alt}
          sizes="(max-width: 700px) 100vw, 62vw"
          loading="eager"
          fetchPriority="high"
          placeholder="blur"
        />
        <span className="hero-shutter" aria-hidden="true" />
        <svg
          className="hero-contour"
          aria-hidden="true"
          focusable="false"
          viewBox={`0 0 ${heroContour.width} ${heroContour.height}`}
        >
          {heroContour.paths.map((d, i) => (
            <path
              key={d}
              d={d}
              pathLength={1}
              style={{ "--i": i } as CSSProperties}
            />
          ))}
        </svg>
      </div>
      <figcaption>
        <span>FIG. 01</span>
        <span>{photo.label} — the reference car for this portfolio</span>
      </figcaption>
    </figure>
  );
}
export function CarFigure({
  photo,
  index,
  sizes,
  className = "",
  caption,
  decorative = false,
}: {
  photo: Photo;
  index: string;
  sizes: string;
  className?: string;
  caption?: React.ReactNode;
  decorative?: boolean;
}) {
  return (
    <figure className={`car-figure ${className}`} data-reveal="mask">
      <div className="car-frame">
        <Image
          src={photo.src}
          alt={decorative ? "" : photo.alt}
          sizes={sizes}
          placeholder="blur"
        />
      </div>
      <figcaption>
        <span>FIG. {index}</span>
        <span>{caption ?? photo.label}</span>
      </figcaption>
    </figure>
  );
}
