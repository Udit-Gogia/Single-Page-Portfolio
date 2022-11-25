import Navbar from "../Components/Navbar";
import ImgUdit from "../Assets/Images/udit.png";
import ImgBlob from "../Assets/Images/blob.png";
export const Wave = () => {
  return (
    <div>
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
            y={4}
            fill="rgba(54, 69, 79,0.8)"
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

export const OrangeBlob = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="absolute top-6">
        <img src={ImgUdit} alt="img-udit" width={"1300px"} height={"1300px"} />
      </div>

      <div className="">
        <img src={ImgBlob} alt="img-udit" width={"400px"} height={"400px"} />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col bg-offWhite justify-between h-screen ">
      <Navbar />
      <div className="flex m-4 gap-4 my-8 items-center w-screen h-screen">
        <div className="p-4 basis-3/5 flex flex-col gap-4">
          <h1 className="Amulya-Bold text-7xl capitalize text-lightOrange tracking-wide">
            Hey, I'm
          </h1>
          <p className="Synonym-Reg text-9xl text-charcoal">Udit Gogia</p>
        </div>

        <div className="p-4 basis-2/5">
          <OrangeBlob />
        </div>
      </div>
      <Wave />
    </div>
  );
}
