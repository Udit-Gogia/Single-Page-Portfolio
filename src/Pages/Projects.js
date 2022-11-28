import pdfCC from "../Assets/projectReport/CC.pdf";
import pdfCN from "../Assets/projectReport/cn.pdf";
import pdfDAA from "../Assets/projectReport/daa.pdf";
import pdfSEPM from "../Assets/projectReport/sepm.pdf";

const projDetails = [
  {
    name: "Computer Network ",
    link: pdfCN,
    title: "Network Design for Banks",
  },
  {
    name: "Software Engineering and Product Management",
    link: pdfSEPM,
    title: "GrubHub",
  },
  {
    name: "Computer Communication",
    link: pdfCC,
    title: "Office Network Management",
  },
  {
    name: "Design and Analysis of Algorithm ",
    link: pdfDAA,
    title: "Tic Tac Toe using Minimax algorithm",
  },
];

export const ProjectCard = ({ ProjTitle, ProjName, ProjSrc }) => {
  return (
    <div className="flex items-center w-screen even:flex-row-reverse justify-around">
      <iframe
        src={ProjSrc}
        width={600}
        height={500}
        className="rounded-xl border-4 border-charcoal hover:border-lightOrange"
        title={ProjName}
        frameBorder="0"
      ></iframe>

      <div className="basis-2/5 flex flex-col">
        <p className="text-3xl text-charcoal tracking-wide pb-2 underline text-center">
          {ProjTitle}
        </p>
        <p className="text-2xl text-charcoal tracking-wide pb-2 text-center">
          {ProjName}
        </p>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div className="py-12 bg-offWhite" id="projects">
      <section>
        <h1 className=" Amulya-Bold sm:text-4xl md:text-7xl capitalize text-lightOrange tracking-wide max-w-fit selection:bg-lightOrange selection:text-charcoal mb-12 px-32">
          Projects
        </h1>

        <div className="grid grid-cols-1 gap-12 my-8 px-12">
          {projDetails.map((proj, index) => {
            return (
              <ProjectCard
                key={index}
                ProjTitle={proj.title}
                ProjName={proj.name}
                ProjSrc={proj.link}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
