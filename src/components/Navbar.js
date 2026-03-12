
import ThemeToggle from "./ThemeToggle";

const Navbar=()=>  {
   return (
    <nav className="navbar">
      <h2 className="logo-navbarname">MyPortfolio</h2>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#github">GitHub</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <ThemeToggle/>
    </nav>
  );
  };

export default Navbar;
