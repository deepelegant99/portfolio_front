import { Link } from "react-router-dom";
import React from "react";
const Navbar = () => {
  return (
    // <div>
    //   <Link to="/">Home</Link>
    //   <Link to="aboutme"> About Me</Link>
    //   <Link to="projects">Projects</Link>
    // </div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="aboutme">About Me</Link>
        </li>
        <li>
          <Link to="projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
