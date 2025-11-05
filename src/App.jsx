import Header from "./components/layouts/Header.jsx";
import Footer from "./components/layouts/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Projects from "./components/sections/Projects.jsx";
import Skills from "./components/sections/Skills.jsx";
import Experience from "./components/sections/Experience.jsx";
import Education from "./components/sections/Education.jsx";
import Certifications from "./components/sections/Certifications.jsx";
import Contact from "./components/sections/Contact.jsx";

const App = () => {
  return (
    <div className="App">
      <Header />

      {/* Main content */}
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
