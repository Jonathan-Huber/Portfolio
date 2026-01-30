import About from "../components/About";
import ContactForm from "../components/Contact";
import Journey from "../components/Journey";
import ProjectGallery from "../components/ProjectGallery";
import SkillsCloud from "../components/SkillsCloud";

function Home() {
  return (
    <>
      {/* Section Mes projets */}
      <section
        id="projects"
        className="bg-gray-50 py-8 lg:py-20 lg:flex lg:items-center"
      >
        {/* Container */}
        <div className="container mx-auto px-6">
          <h2>Mes projets</h2>
          <ProjectGallery />
        </div>
      </section>

      {/* Section Mes compétences */}
      <section
        id="skills"
        className="bg-cyan-50 py-8 lg:py-20 lg:flex lg:items-center"
      >
        <div className="container text-center mx-auto px-6 lg:px-75 xl:px-100 2xl:px-125">
          <h2>Compétences</h2>
          <SkillsCloud />
        </div>
      </section>

      {/* Section A propos */}
      <section
        id="about"
        className="bg-gray-50 py-8 lg:py-20 lg:flex lg:items-center"
      >
        <div className="container mx-auto px-6">
          <h2>À propos de moi</h2>
          <About />
        </div>
      </section>

      {/* Section Mon parcours */}
      <section
        id="parcours"
        className="bg-cyan-50 py-8 lg:py-20 lg:flex lg:items-center"
      >
        <div className="container mx-auto px-6">
          <h2>Parcours</h2>
          <Journey />
        </div>
      </section>

      {/* Section Contact */}
      <section
        id="contact"
        className="bg-gray-50 py-8 lg:py-20 lg:flex lg:items-center"
      >
        <div className="container max-w-3xl mx-auto px-6">
          <h2>Contact</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

export default Home;
