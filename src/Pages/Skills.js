import IconC from "../Assets/Images/icons/skills/icon-c.png";
import IconCpp from "../Assets/Images/icons/skills/icon-cpp.png";
import IconCss from "../Assets/Images/icons/skills/icon-css.png";
import IconHtml from "../Assets/Images/icons/skills/icon-html.png";
import IconReact from "../Assets/Images/icons/skills/icon-jsx.png";
import IconMongoDB from "../Assets/Images/icons/skills/icon-mongodb.png";
import IconPython from "../Assets/Images/icons/skills/icon-python.png";
import IconSass from "../Assets/Images/icons/skills/icon-sass.png";
import IconTailwindCSS from "../Assets/Images/icons/skills/icon-tailwindcss.png";
import IconJavascript from "../Assets/Images/icons/skills/icon-js.png";
import IconExpress from "../Assets/Images/icons/skills/icon-express.png";
import IconBootstrap from "../Assets/Images/icons/skills/icon-bootstrap.png";
import IconBlo from "../Assets/Images/icons/skills/blob.png";
import IconTypeScript from "../Assets/Images/icons/skills/icons8-typescript-500.svg"

const skills = [
  {
    name: "HTML",
    icon: IconHtml,
  },
  {
    name: "CSS",
    icon: IconCss,
  },
  {
    name: "React",
    icon: IconReact,
  },

  {
    name: "TailWind CSS",
    icon: IconTailwindCSS,
  },
  {
    name: "Sass",
    icon: IconSass,
  },
  {
    name: "Javascript",
    icon: IconJavascript,
  },
  {
    name: "TypeScript",
    icon: IconTypeScript,
  },
  {
    name: "ExpressJS",
    icon: IconExpress,
  },
  {
    name: "MongoDB",
    icon: IconMongoDB,
  },
  {
    name: "C",
    icon: IconC,
  },
  {
    name: "C++",
    icon: IconCpp,
  },
  {
    name: "Python",
    icon: IconPython,
  },
];

const SkillCard = ({ skillName, img }) => {
  return (
    <div
      className="p-4 flex flex-col items-center justify-center gap-2"
      style={{
        backgroundImage: `url(${IconBlo})`,
        height: "15rem",
        backgroundRepeat: "no-repeat",
        backgroundSize: "17rem",
        backgroundPosition: "bottom",
      }}
    >
      <img
        src={img}
        alt="skill-img"
        width={"100px"}
        className="select-none pointer-events-none"
      />
      <p className="text-offWhite text-lg Synonym-Reg selection:bg-offWhite selection:text-charcoal">
        {skillName}
      </p>
    </div>
  );
};

export default function Skills() {
  return (
    <div
      className="flex flex-col bg-offWhite justify-between pt-16 pb-28"
      id="skills"
    >
      <section className="px-32 py-2">
        <h1 className="Amulya-Bold sm:text-4xl md:text-7xl capitalize text-lightOrange tracking-wide max-w-fit selection:bg-lightOrange selection:text-charcoal">
          My Skills
        </h1>

        <div className="grid grid-cols-4 ">
          {skills.map((skill, index) => {
            return (
              <SkillCard key={index} skillName={skill.name} img={skill.icon} />
            );
          })}
        </div>
      </section>
    </div>
  );
}
