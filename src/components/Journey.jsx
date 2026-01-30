const Journey = () => {
  const timelineData = [
    {
      title: "Magasinier",
      periode: "2006 - 2024",
      description:
        "18 ans d'expérience en gestion de stock et logistique. Rigueur, organisation et attention aux détails.",
      isActive: false,
    },
    {
      title: "Formation Intégrateur Web",
      periode: "2025 - 2026",
      description:
        "OpenClassrooms · HTML, CSS, JavaScript, React. Réalisation de projets concrets.",
      isActive: false,
    },
    {
      title: "Aujourd'hui",
      periode: "2026",
      description: "Intégrateur Web",
      isActive: true,
    },
  ];

  return (
    <>
      {/* Desktop - Timeline horizontale */}
      <div className="hidden md:flex items-start justify-between relative">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center text-center relative"
          >
            {/* Point avec animation ping */}
            <div className="relative mb-6 z-10 w-5 h-5 flex items-center justify-center">
              {/* Point fixe plus petit */}
              <div
                className={`w-3 h-3 rounded-full shadow-[0_0_0_4px_white,0_0_0_6px] ${
                  item.isActive
                    ? "bg-cyan-300 shadow-cyan-300"
                    : "bg-cyan-700 shadow-cyan-700"
                }`}
              ></div>

              {/* Effet ping par-dessus (seulement si actif) */}
              {item.isActive && (
                <div className="absolute inset-0 w-5 h-5 rounded-full bg-cyan-300 animate-ping"></div>
              )}
            </div>

            {/* Ligne vers le prochain élément */}
            {index < timelineData.length - 1 && (
              <div
                className={`absolute top-2.5 left-1/2 w-full h-0.5 z-0 ${
                  index === timelineData.length - 2
                    ? "bg-linear-to-r from-cyan-700 to-cyan-300"
                    : "bg-cyan-700"
                }`}
              ></div>
            )}

            {/* Contenu */}
            <div className="max-w-xs ">
              <h3>{item.title}</h3>
              <p>{item.periode}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile - Timeline verticale */}
      <div className="md:hidden space-y-8">
        {timelineData.map((item, index) => (
          <div key={index} className="flex gap-6">
            {/* Point + ligne */}
            <div className="flex flex-col items-center">
              <div className="relative z-10 w-5 h-5 flex items-center justify-center shrink-0">
                {/* Point fixe plus petit */}
                <div
                  className={`w-3 h-3 rounded-full shadow-[0_0_0_4px_white,0_0_0_6px] ${
                    item.isActive
                      ? "bg-cyan-400 shadow-cyan-400"
                      : "bg-cyan-700 shadow-cyan-700"
                  }`}
                ></div>

                {/* Effet ping par-dessus (seulement si actif) */}
                {item.isActive && (
                  <div className="absolute inset-0 w-5 h-5 rounded-full bg-cyan-400 animate-ping"></div>
                )}
              </div>

              {index < timelineData.length - 1 && (
                <div
                  className={`w-0.5 h-full mt-3 ${
                    index === timelineData.length - 2
                      ? "bg-linear-to-r from-cyan-700 to-cyan-400"
                      : "bg-cyan-700"
                  }`}
                ></div>
              )}
            </div>

            {/* Contenu */}
            <div className="flex-1 pb-8">
              <h3>{item.title}</h3>
              <p>{item.periode}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Journey;
