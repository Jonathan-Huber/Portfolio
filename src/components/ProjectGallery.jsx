import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

function ProjectGallery() {
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7 items-stretch">
      {sortedProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectGallery;
