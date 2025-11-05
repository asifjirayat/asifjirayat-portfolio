import { useEffect } from "react";
import Hero from "../components/sections/Hero.jsx";
import About from "../components/sections/About.jsx";
import Projects from "../components/sections/Projects.jsx";
import Skills from "../components/sections/Skills.jsx";
import Experience from "../components/sections/Experience.jsx";
import Certifications from "../components/sections/Certifications.jsx";
import Education from "../components/sections/Education.jsx";
import Contact from "../components/sections/Contact.jsx";

const Homepage = () => {
  useEffect(() => {
    document.title = "Asif Jirayat - UI/UX Designer & Developer";
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <Education />
      <Contact />
    </>
  );
};

export default Homepage;
