import Navbar from "../Components/Navbar";
import ImgUdit from "../Assets/Images/ugcanva.png";

let resumeLink = "https://drive.google.com/file/d/12JFRN77O2YwZTw99NzDPxwHz6IpLm3d_/view?usp=sharing"

export const Wave = () => {
  return (
    <div className="absolute lg:bottom-0  md:hidden lg:block w-screen overflow-hidden">
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x={48}
            y={0}
            fill="rgba(54, 69, 79,0.2)"
          />
          <use
            xlinkHref="#gentle-wave"
            x={48}
            y={2}
            fill="rgba(54, 69, 79,0.4)"
          />
          <use
            xlinkHref="#gentle-wave"
            x={48}
            y={2}
            fill="rgba(54, 69, 79,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x={48}
            y={4}
            fill="rgba(54, 69, 79,0.7)"
          />
          <use
            xlinkHref="#gentle-wave"
            x={48}
            y={6}
            fill="rgba(54, 69, 79,0.9)"
          />
        </g>
      </svg>
    </div>
  );
};

export default function Home() {
  return (
    <div
      className="flex flex-col bg-offWhite justify-between w-screen "
      id="home"
    >
      <Navbar />

      <div className="flex items-center">
        <section className="p-4 py-0 basis-3/5 flex flex-col gap-8 ml-24 mb-12 w-fit">
          <h1 className="Amulya-Bold sm:text-4xl md:text-7xl capitalize text-lightOrange tracking-wide max-w-fit selection:bg-charcoal">
            Hey, I'm
          </h1>
          <p className="Synonym-Reg text-9xl text-charcoal w-fit selection:bg-lightOrange">
            Udit Gogia
          </p>

          <a href={resumeLink}
            target="_blank"
            rel="noreferrer"
            className="bg-charcoal w-fit text-offWhite hover:bg-offWhite border-2 border-charcoal hover:text-charcoal transition-all px-10 text-xl rounded-lg py-3 font-semibold ">
            Resume
          </a>

        </section>

        <section className="basis-2/5 flex flex-col items-center">
          <img src={ImgUdit} alt="img-udit" width={"450px"} height={"450px"} />
        </section>


      </div>
      <section className="relative h-full">
        <Wave />
      </section>
    </div>
  );
}
