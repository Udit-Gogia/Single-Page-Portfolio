import IconGithub from "../Assets/Images/icons/icon-github.png";
import IconEmail from "../Assets/Images/icons/icon-email.png";
import IconHackerrank from "../Assets/Images/icons/icon-hackerrank.png";
import IconLinkedIn from "../Assets/Images/icons/icon-linkedin.png";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-2 items-center px-4 fixed my-4">
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
          href="https://mail.google.com/mail/u/0/?fs=1&to=ug3827@srmist.edu.in&tf=cm"
          target="_blank"
          rel="noreferrer"
        >
          <img src={IconEmail} alt="icon-github" width={"40px"} />
        </a>
        <a
          href="https://www.linkedin.com/in/udit-gogia/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={IconLinkedIn} alt="icon-github" width={"40px"} />
        </a>
        <a
          href="https://www.hackerrank.com/udit_gogia"
          target="_blank"
          rel="noreferrer"
        >
          <img src={IconHackerrank} alt="icon-github" width={"40px"} />
        </a>
      </div>
      <div className="h-[25vh] border-l-2 border-charcoal bg-offWhite p-[1px]"></div>
    </div>
  );
}
