import { useState } from 'react'
 
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import SingleProject from './pages/SingleProject';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:projectId" element={<SingleProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
