export default function Navbar() {
  return (
    <div className="p-4 bg-offWhite flex justify-center gap-10">
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
    </div>
  );
}
