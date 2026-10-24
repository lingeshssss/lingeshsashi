"use client";
import { useState } from "react";
import { ProjectCard } from "./ui";
import { projects } from "@/lib/content";
export function ProjectCollection() {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];
  const shown = projects.filter(
    (project) => filter === "All" || project.category === filter,
  );
  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects">
        {categories.map((label) => (
          <button
            key={label}
            aria-pressed={filter === label}
            onClick={() => setFilter(label)}
          >
            {label}{" "}
            <span>
              {String(
                projects.filter(
                  (project) => label === "All" || project.category === label,
                ).length,
              ).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {shown.length} {shown.length === 1 ? "project" : "projects"} shown
      </p>
      <div className="project-collection" data-reveal-stagger>
        {shown.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
