import { Navigate, useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import projects from "../data/projects";
import Button from "../components/Button";
import Carousel from "../components/Carousel";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <Navigate to="*" replace />;
  }

  const images = [project.cover, ...(project.gallery || [])];

  return (
    <div className="container mx-auto py-20 lg:py-28 px-4 2xl:px-10">
      <div className="flex justify-center mb-12">
        <Button
          onClick={() => navigate(-1)}
          size="sm"
          className=""
          aria-label="Retour à la page précédente"
        >
          Retour
        </Button>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-center lg:text-start">{project.title}</h1>

          <div className="w-12 h-1 bg-cyan-600 mx-auto lg:mx-0 rounded-full"></div>

          {project.description.long.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          {project.context && (
            <div>
              <h2 className="sr-only">Contexte</h2>
              <p className="italic border-l-4 border-cyan-600 pl-4">
                {project.context}
              </p>
            </div>
          )}
        </div>

        {/* Carrousel + stack + boutons */}
        <div className="flex-1 lg:w-1/2 flex flex-col gap-6">
          <Carousel images={images} projectTitle={project.title} />
          {/* Stack */}
          {project.stack?.length > 0 && (
            <div>
              <h2 className="sr-only">Technologies utilisées</h2>
              <ul className="flex flex-wrap justify-center gap-2">
                {project.stack.map((tech, i) => (
                  <li
                    key={i}
                    className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Boutons */}
          <div className="flex justify-center gap-2">
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
    </div>
  );
}
