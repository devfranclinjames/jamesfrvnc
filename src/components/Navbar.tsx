import { useState } from "react";
import { NavLink } from "react-router-dom"; // Changed from Link to NavLink

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`topnav ${isMenuOpen ? "responsive" : ""}`} id="myTopnav">
      <NavLink
        to="/jamesfrvnc"
        className={({ isActive }) => (isActive ? "active" : "")}
        end // Ensures active state only for exact match
        onClick={closeMenu}
      >
        Home
      </NavLink>
      <NavLink
        to="/pages/test"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={closeMenu}
      >
        GHL Funnel Framework
      </NavLink>
      <a
        href="#"
        className="icon"
        onClick={(e) => {
          e.preventDefault();
          toggleMenu();
        }}
      >
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}

export default Navbar;
