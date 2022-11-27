import Navbar from "../Components/Navbar";
import ImgUdit from "../Assets/Images/udit.png";

export const Wave = () => {
  return (
    <div className="relative lg:bottom-36 w-screen overflow-hidden">
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
    <div className="flex flex-col bg-offWhite justify-between h-screen w-screen ">
      <Navbar />

      <section className="flex flex-col">
        <div className="flex items-center">
          <section className="p-4 basis-3/5 flex flex-col gap-4 ml-48 mb-40 w-fit">
            <h1 className="Amulya-Bold sm:text-4xl md:text-7xl capitalize text-lightOrange tracking-wide max-w-fit lg:ml-6">
              Hey, I'm
            </h1>
            <p className="Synonym-Reg text-9xl text-charcoal w-fit lg:ml-4">
              Udit Gogia
            </p>
          </section>

          <section className="basis-2/5 flex flex-col items-center">
            <img
              src={ImgUdit}
              alt="img-udit"
              width={"400px"}
              height={"400px"}
            />
          </section>
        </div>
        <section>
          <Wave />
        </section>
      </section>
    </div>
  );
}
