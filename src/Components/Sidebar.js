import IconGithub from "../Assets/Images/icons/icon-github.png";
import IconEmail from "../Assets/Images/icons/icon-email.png";
import IconLinkedIn from "../Assets/Images/icons/icon-linkedin.png";
import IconInstagram from "../Assets/Images/icons/icon-instagram.svg";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-2 items-center px-4 fixed my-[6vh]">
      <div className="h-[25vh] border-l-2 border-charcoal bg-offWhite p-[1px]"></div>
      <div className="flex flex-col gap-6 my-2">
        <a
          href="https://github.com/Udit-Gogia"
          target="_blank"
          rel="noreferrer"
        >
          <img src={IconGithub} alt="icon-github" width={"40px"} />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&to=gogiaudit17@gmail.com&tf=cm"
          target="_blank"
          rel="noreferrer"
        >
          <img src={IconEmail} alt="icon-email" width={"40px"} />
        </a>
        <a
          href="https://www.linkedin.com/in/udit-gogia/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={IconLinkedIn} alt="icon-linkedin" width={"40px"} />
        </a>
        <a
          href="https://www.instagram.com/udit_gogia/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={IconInstagram} alt="icon-instagram" width={"40px"} />
        </a>
      </div>
      <div className="h-[25vh] border-l-2 border-charcoal bg-offWhite p-[1px]"></div>
    </div>
  );
}
