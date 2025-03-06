// import MyLogo from "./MyLogo";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import App from "../App";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// const imgObj = {
//   height: 50,
//   width: "auto",
//   alt: MysrcLogo,
//   klass: "nav-logo",
// };

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const clickFunction = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu toggled:", isMenuOpen);
  };

  const HandleNavOnclick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    clickFunction();
  };
  return (
    <>
      <div className={`topnav ${isMenuOpen ? "responsive" : ""}`} id="myTopnav">
        <Link to="/jamesfrvnc" className="active">
          Home
        </Link>
        <Link to="/pages/test">Roofing Workflow</Link>
        <a
          href="javascript:void(0);"
          className="icon"
          onClick={HandleNavOnclick}
        >
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </>
  );
}

export default Navbar;
