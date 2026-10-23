import Link from "next/link";
import { Eyebrow } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="not-found">
      <Eyebrow>404 / A SMALL DETOUR</Eyebrow>
      <h1>
        Off the map.
        <br />
        <span className="muted">Back on track.</span>
      </h1>
      <p>This page doesn’t exist. Let’s get you somewhere useful.</p>
      <Link href="/" className="button primary">
        Back to home →
      </Link>
    </section>
  );
}
