import Button from "./Button";

// Hero.jsx
function Hero() {
  return (
    <section className="min-h-screen bg-cyan-50 py-8 flex items-center">
      {/* Container */}
      <div className="container mx-auto px-6 xl:px-48 pt-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between text-center lg:text-left">
          {/* Texte */}
          <div className="lg:w-1/2">
            <h1 className="lg:text-7xl">Jonathan Huber</h1>
            <div className="w-12 h-1 bg-cyan-600 my-2 mx-auto lg:mx-0 rounded-full"></div>
            <p className="subtitle">Intégrateur web / Front-end</p>
            <p>
              Passionné par le front-end, je crée des sites modernes et
              performants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 px-10 md:px-0 justify-center lg:justify-start">
              <Button href="#projects" variant="primary">
                Voir mes projets
              </Button>
              <Button href="#contact" variant="secondary">
                Me contacter
              </Button>
            </div>
          </div>

          {/* Avatar / Illustration */}
          <div className="md:w-1/2 mb-6 lg:mb-0 flex justify-center lg:justify-end">
            <img
              src="/images/avatar-480.webp"
              srcSet="/images/avatar-320.webp 320w, /images/avatar-480.webp 480w, /images/avatar-750.webp 750w"
              sizes="(min-width: 768px) 288px, 256px"
              alt="Illustration Jonathan Huber"
              className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover ring-4 ring-black/20"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
