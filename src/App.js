import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Github from "./components/Github";
import EducationTimeline from "./components/EducationTimeline";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <EducationTimeline />
      <Github />
      <Contact />
    </>
  );
}
export default App;