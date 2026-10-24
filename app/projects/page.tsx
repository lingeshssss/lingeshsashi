import type { Metadata } from "next";
import { Connect, PageIntro } from "@/components/ui";
import { ProjectCollection } from "@/components/project-collection";
export const metadata: Metadata = {
  description:
    "Explore CampusOS and MarketPilot AI, projects spanning full-stack development and AI-assisted market analysis.",
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
          Implementation details come from my résumé. Each project page
          identifies the scope of its public preview and independent review.
        </p>
      </section>
      <Connect />
    </>
  );
}
