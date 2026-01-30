function About() {
  return (
    <div className="flex flex-col lg:flex-row lg:px-20 items-center">
      <div className="relative z-20 lg:w-1/2 bg-cyan-700 text-white p-3 md:p-10 -rotate-2 shadow-md rounded-lg xl:mt-20">
        <p className="text-white">
          Après 18 ans comme magasinier, j'ai choisi de me reconvertir dans le
          web. Aujourd'hui, je suis intégrateur web et j'aime transformer des
          maquettes en interfaces claires, performantes et intuitives, sur
          mobile comme sur desktop.
        </p>
        <p className="text-white">
          HTML, CSS, JavaScript et React sont mes outils pour créer des projets
          fonctionnels et soignés.
        </p>
        <p className="text-white mb-0">
          Ma reconversion m'a apporté rigueur, organisation et persévérance, des
          qualités que j'applique à chaque projet.
        </p>
      </div>
      <div className="relative z-10 lg:h-155 lg:w-1/2 bg-cyan-200 text-white p-10 rotate-6 shadow-md rounded-lg xl:mt-20"></div>
    </div>
  );
}

export default About;
