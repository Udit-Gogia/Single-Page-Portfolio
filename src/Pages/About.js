import IconEducation from "../Assets/Images/icons/icon-education.png";
import IconCode from "../Assets/Images/icons/icon-code.png";
import IconExplore from "../Assets/Images/icons/icon-explore.png";
import IconUg from "../Assets/Images/icons/ug.png";
import IconGrow from "../Assets/Images/icons/icon-grow.png";
import IconAim from "../Assets/Images/icons/icon-goal.png";

const AboutSelf = ({ desc, icon }) => {
  return (
    <div className="flex gap-4 items-center">
      <img
        src={icon}
        alt="icon-aboutSelf"
        width="50px"
        className="select-none"
      />
      <p className="text-offWhite Synonym-Reg  text-xl tracking-wide selection:bg-offWhite selection:text-charcoal">
        {desc}
      </p>
    </div>
  );
};

export default function About() {
  return (
    <div className="bg-charcoal  py-20">
      <section className="px-32 flex flex-col gap-10 ">
        <h1 className="Amulya-Bold sm:text-4xl md:text-7xl capitalize text-lightOrange tracking-wide max-w-fit selection:bg-lightOrange selection:text-charcoal">
          About Me
        </h1>

        <AboutSelf
          icon={IconEducation}
          desc={
            "I am junior year student with majors in CSE AI-ML in SRMIST KTR."
          }
        />
        <AboutSelf
          icon={IconCode}
          desc={
            "My experience includes 2 years of Full-Stack Development and a variety of projects along with an Intership in NextJS."
          }
        />
        <AboutSelf
          icon={IconExplore}
          desc={
            "Learning and exploring Javascript Frameworks such as ExpressJS"
          }
        />
        <AboutSelf
          icon={IconGrow}
          desc={
            "Having worked and grown as a web developer since 2020, I am passionate about the programming and development professions."
          }
        />
        <AboutSelf
          icon={IconUg}
          desc={
            "The qualities I would describe myself as are dedicated , enthusiastic and innovative."
          }
        />
        <AboutSelf
          icon={IconAim}
          desc={
            "In addition to improving and achieving excellence in Web-Development, I am interested in exploring the vast field of Blockchain."
          }
        />
      </section>
    </div>
  );
}
