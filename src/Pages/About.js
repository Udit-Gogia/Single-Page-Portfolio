import IconEducation from "../Assets/Images/icons/icon-education.png";
import IconCode from "../Assets/Images/icons/icon-code.png";
import IconExplore from "../Assets/Images/icons/icon-explore.png";
import ImgAboutMe from "../Assets/Images/aboutMe.webp"
import IconGrow from "../Assets/Images/icons/icon-grow.png";
import IconAim from "../Assets/Images/icons/icon-goal.png";

const AboutSelf = ({ desc, icon }) => {
  return (
    <div className="flex gap-4 items-center">
      <img
        src={icon}
        alt="icon-aboutSelf"
        width="50px"
        className="select-none pointer-events-none"
      />
      <p className="text-offWhite Synonym-Reg  text-xl tracking-wide selection:bg-offWhite selection:text-charcoal">
        {desc}
      </p>
    </div>
  );
};

export default function About() {
  return (
    <div className="bg-charcoal py-28" id="about">
      <section className="px-32 flex flex-col gap-10 ">
        <h1 className="Amulya-Bold sm:text-4xl md:text-7xl capitalize text-lightOrange tracking-wide max-w-fit selection:bg-lightOrange selection:text-charcoal">
          About Me
        </h1>
        <div className="flex w-full justify-between items-center">
          <section className="basis-2/3 flex flex-col gap-10">
            <AboutSelf
              icon={IconEducation}
              desc={
                "I'm graduate in Computer Science and Engineering with specialization in AI-ML from SRMIST KTR."

              }
            />
            <AboutSelf
              icon={IconCode}
              desc={
                "My experience includes 2+ years of MERN-Stack Development and a variety of projects."
              }
            />
            <AboutSelf
              icon={IconExplore}
              desc={
                "Currently, I'm diving deep into JavaScript frameworks, further refining my skills for modern dev technologies."
              }
            />
            <AboutSelf
              icon={IconGrow}
              desc={
                "Having worked and grown as a developer since 2020, You could say I'm a dedicated and innovative."
              }
            />

            <AboutSelf
              icon={IconAim}
              desc={
                "Beyond coding, I'm passionate about crafting user-friendly and visually appealing experiences through UI/UX design."
              }
            />

          </section>
          <img src={ImgAboutMe} alt="img-aboutMe" width={"350"} height={"300 "} />
        </div>

      </section>
    </div>
  );
}
