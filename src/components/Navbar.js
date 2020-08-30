import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <div>OLI</div>
            <div>VER</div>
          </Link>
        </div>
        <nav>
          <Link to="/projects">PROJECTOS</Link>
          <Link to="/contact">CONTACTO</Link>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
