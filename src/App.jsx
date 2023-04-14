import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import SingleProject from "./pages/SingleProject";
import Projects from "./pages/Projects";
import Navbar from './components/Navbar'
import Error from "./pages/Error";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:projectId" element={<SingleProject />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <div>Our footer</div>
    </div>
  );
}

export default App;
