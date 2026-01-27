import ProjectGallery from "../components/ProjectGallery";

function Home() {
  return (
    <>
      {/* Section Mes projets */}
      <section
        id="projects"
        className="bg-gray-50 py-8 lg:py-12 lg:flex lg:items-center"
      >
        {/* Container */}
        <div className="container mx-auto px-6">
          <h2>Mes projets</h2>
          <ProjectGallery />
        </div>
      </section>
    </>
  );
}

export default Home;
