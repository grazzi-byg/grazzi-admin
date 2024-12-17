import { useState } from "react";
import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <h1>GRAZZI</h1>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
        <ul className="menu-list">
          <li>
            <Link to="/" className="menu-link">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/products" className="menu-link">
              Productos
            </Link>
          </li>
          <li>
            <Link to="/general" className="menu-link">
              General
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
