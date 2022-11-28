import ImgSML from "../Assets/Images/certificates/sml.png";
import ImgAWS from "../Assets/Images/certificates/aws.png";
import ImgRegex from "../Assets/Images/certificates/regex.png";
import ImgHr from "../Assets/Images/certificates/hr.png";
import ImgFcc from "../Assets/Images/certificates/fcc.png";

const certDetails = [
  {
    name: "AWS Cloud Operations",
    img: ImgAWS,
    link: "https://www.credly.com/badges/45e45cb5-f7d0-4653-ba4a-d1e0afba93ab/public_url",
  },
  {
    name: "MATLAB Reinforcement Learning",
    img: ImgSML,
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=5a740cee-a0b8-4a69-8605-e26a94561f49&",
  },
  {
    name: "FreeCodeCamp Responsive Web Design",
    img: ImgFcc,
    link: "https://www.freecodecamp.org/certification/udit_gogia/responsive-web-design",
  },
  {
    name: "Hackerrank Badges in C , C++ and Python",
    img: ImgHr,
    link: "https://www.hackerrank.com/udit_gogia?hr_r=1",
  },
  {
    name: "Hackerrank RegEx Module",
    img: ImgRegex,
  },
];

export const CertificateCard = ({ certImg, certName, certLink }) => {
  return (
    <div className="flex items-center w-screen even:flex-row-reverse justify-around">
      <img
        src={certImg}
        alt="certificate-img"
        style={{ minWidth: "40rem", width: "40rem" }}
        className="rounded-xl border-4 border-lightOrange hover:border-offWhite transition-all"
      />

      <a
        href={certLink}
        target="_blank"
        className="text-3xl text-offWhite tracking-wide pb-2 border-b-2 "
        rel="noreferrer"
      >
        {certName}
      </a>
    </div>
  );
};

export default function Certificate() {
  return (
    <div className=" py-16 bg-charcoal" id="certificate">
      <section className="">
        <h1 className=" Amulya-Bold sm:text-4xl md:text-7xl capitalize text-lightOrange tracking-wide max-w-fit selection:bg-lightOrange selection:text-charcoal mb-12 px-32">
          Certificates
        </h1>

        <div className="grid grid-cols-1 gap-12 my-8">
          {certDetails.map((cert, index) => {
            return (
              <CertificateCard
                key={index}
                certImg={cert.img}
                certName={cert.name}
                certLink={cert.link}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
