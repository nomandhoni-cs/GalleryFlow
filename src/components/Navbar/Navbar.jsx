import { FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-image">
          <img src={logo} alt="GalleryFlow Logo" />
        </div>
        <div className="logo-title">GalleryFlow</div>
      </div>
      <a
        href="https://github.com/nomandhoni-cs/GalleryFlow"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <FaGithub className="github-icon" />
        <span className="link-text">GitHub</span>
      </a>
    </nav>
  );
};

export default Navbar;
