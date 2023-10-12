import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <a href="#" className="logo">
        phishy
      </a>

      <ul className="nav-menu">
        <li>
          <a className="nav-button" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="nav-button" href="#">
            Simulations
          </a>
        </li>
        <li>
          <a className="nav-button" href="#">
            Learn
          </a>
        </li>
        <li>
          <a className="nav-button" href="#">
            Documentation
          </a>
        </li>
        <li>
          <a className="nav-button" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
