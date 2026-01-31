const skillsData = [
  {
    name: "JavaScript",
    level: 4,
    color: "bg-yellow-400 text-gray-800",
    rotate: "rotate-0",
  },
  {
    name: "React",
    level: 4,
    color: "bg-cyan-700 text-white",
    rotate: "-rotate-2",
  },
  {
    name: "Redux",
    level: 3,
    color: "bg-purple-700 text-white",
    rotate: "rotate-2",
  },
  {
    name: "Tailwind",
    level: 3,
    color: "bg-slate-900 text-sky-400",
    rotate: "-rotate-3",
  },
  {
    name: "React Router",
    level: 4,
    color: "bg-red-700 text-white",
    rotate: "rotate-3",
  },
  {
    name: "Sass",
    level: 4,
    color: "bg-pink-600 text-white",
    rotate: "-rotate-1",
  },
  {
    name: "CSS",
    level: 5,
    color: "bg-cyan-700 text-white",
    rotate: "rotate-1",
  },
  {
    name: "Git",
    level: 4,
    color: "bg-orange-700 text-white",
    rotate: "rotate-0",
  },
  {
    name: "HTML",
    level: 5,
    color: "bg-orange-600 text-white",
    rotate: "-rotate-2",
  },
  {
    name: "Figma",
    level: 4,
    color: "bg-amber-700 text-white",
    rotate: "rotate-0",
  },
  {
    name: "API",
    level: 4,
    color: "bg-gray-700 text-white",
    rotate: "-rotate-3",
  },
  {
    name: "Swagger",
    level: 2,
    color: "bg-green-700 text-white",
    rotate: "rotate-1",
  },
];

function SkillsCloud() {
  return (
    <>
      {skillsData.map((skill, i) => {
        // Taille du texte selon le niveau
        const sizeClass =
          skill.level === 5
            ? "text-3xl"
            : skill.level === 4
              ? "text-xl"
              : skill.level === 3
                ? "text-lg"
                : "text-sm";

        return (
          <span
            key={i}
            className={`${sizeClass} ${skill.color} ${skill.rotate} px-3 py-1 rounded-md font-semibold shadow-sm inline-block m-2`}
          >
            {skill.name}
          </span>
        );
      })}
    </>
  );
}

export default SkillsCloud;
