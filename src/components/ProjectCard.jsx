import Button from "./Button";

export default function ProjectCard({ project }) {
  return (
    <div className="card">
      {/* Image principale */}
      <div className="relative">
        <img
          src={project.cover.src}
          srcSet={project.cover.srcSet}
          sizes={project.cover.sizes}
          alt={project.cover.alt}
          className="w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-black/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-black/10 to-transparent"></div>
      </div>

      {/* Contenu */}
      <div className="p-4 flex flex-col flex-1">
        <h3>{project.title}</h3>
        <p>{project.description.short}</p>

        {/* Boutons conditionnels */}
        <div className="mt-auto flex gap-2">
          {project.repoLink && (
            <Button variant="secondary" size="sm" href={project.repoLink}>
              Voir sur GitHub
            </Button>
          )}
          {project.liveLink && (
            <Button variant="primary" size="sm" href={project.liveLink}>
              Voir le site
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
