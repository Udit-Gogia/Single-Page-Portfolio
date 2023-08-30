export default function Navbar() {

  return (
    <nav className="p-4 fixed w-full z-10  flex justify-center gap-10 bg-offWhite">
      <a href="#about" className="nav-option">
        About
      </a>
      <a href="#skills" className="nav-option">
        Skills
      </a>

      <a href="#certificate" className="nav-option">
        Certificates
      </a>
      <a href="#projects" className="nav-option">
        Projects
      </a>
    </nav>
  );
}
