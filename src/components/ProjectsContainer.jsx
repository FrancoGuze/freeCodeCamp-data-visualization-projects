import { useMemo } from "react";
import { projects } from "../projects.js";
import { ProjectCard } from "./ProjectCard.jsx";

export const ProjectsContainer = ({ lang }) => {
  const resolvedLang = useMemo(() => (lang === "en" ? "en" : "es"), [lang]);

  return (
    <div className="projects-grid">
      {projects.map((project) => {
        const localized = project[resolvedLang] ?? project.en;

        return (
          <ProjectCard
            key={project.repo ?? localized.title}
            img={project.img}
            repo={project.repo}
            title={localized.title}
            description={localized.description}
          />
        );
      })}
    </div>
  );
};
