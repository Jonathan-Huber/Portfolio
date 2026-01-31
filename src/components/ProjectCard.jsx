import Button from "./Button";

export default function ProjectCard({ project }) {
  return (
    <div className="card group">
      {/* Image principale */}
      <div className="relative">
        <img
          src={project.cover.src}
          width={project.cover.width}
          height={project.cover.height}
          srcSet={project.cover.srcSet}
          sizes={project.cover.sizes}
          alt={project.cover.alt}
          className="w-full object-cover"
          loading="lazy"
        />

        {/* Overlay en bas avec effet dégradé */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-black/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-black/10 to-transparent"></div>
      </div>

      {/* Contenu */}
      <div className="p-2 flex flex-col flex-1 sm:p-4">
        <h3>{project.title}</h3>
        <p>{project.description.short}</p>

        <div className="mt-auto flex gap-2">
          <Button
            variant="primary"
            size="sm"
            href={`/projects/${project.slug}`}
            className="transition-transform duration-200 group-hover:scale-105 group-hover:shadow-md"
          >
            + info
          </Button>
          {/* Boutons conditionnels */}
          {project.liveLink && (
            <Button variant="secondary" size="sm" href={project.liveLink}>
              Voir le site
            </Button>
          )}
          {project.repoLink && (
            <Button variant="secondary" size="sm" href={project.repoLink}>
              Voir sur GitHub
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
