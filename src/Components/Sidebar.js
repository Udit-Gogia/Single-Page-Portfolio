import IconGithub from "../Assets/Images/icons/icon-github.png";
import IconEmail from "../Assets/Images/icons/icon-email.png";
import IconHackerrank from "../Assets/Images/icons/icon-hackerrank.png";
import IconLinkedIn from "../Assets/Images/icons/icon-linkedin.png";
import IconInstagram from "../Assets/Images/icons/icon-instagram.png";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-2 items-center px-4 fixed my-4">
      <div className="h-[25vh] border-l-2 border-charcoal bg-offWhite p-[1px]"></div>
      <div className="flex flex-col gap-6 my-2">
        <img src={IconGithub} alt="icon-github" width={"40px"} />
        <img src={IconEmail} alt="icon-github" width={"40px"} />
        <img src={IconLinkedIn} alt="icon-github" width={"40px"} />
        <img src={IconInstagram} alt="icon-github" width={"40px"} />
        <img src={IconHackerrank} alt="icon-github" width={"40px"} />
      </div>
      <div className="h-[25vh] border-l-2 border-charcoal bg-offWhite p-[1px]"></div>
    </div>
  );
}
