import { Link } from "react-router-dom";
import React from "react";
const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="aboutme"> About Me</Link>
      <Link to="projects">Projects</Link>
      
    </div>
  );
};

export default Navbar;
 