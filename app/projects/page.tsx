import type { Metadata } from "next";
import { Connect, PageIntro } from "@/components/ui";
import { ProjectCollection } from "@/components/project-collection";
export const metadata: Metadata = {
  description:
    "Explore CampusOS and the practical problems behind Lingesh’s project ideas.",
  title: "Projects",
  ...(process.env.SITE_URL ? { alternates: { canonical: "/projects" } } : {}),
};
export default function Projects() {
  return (
    <>
      <PageIntro number="02" title="Work & explorations">
        <p>
          Practical ideas, thoughtfully explored.
          <br />A growing collection of things I’m thinking about and building.
        </p>
      </PageIntro>
      <section className="section projects-section">
        <ProjectCollection />
        <p className="editorial-note">
          Each project page distinguishes its proposed direction from
          independently reviewed functionality.
        </p>
      </section>
      <Connect />
    </>
  );
}
