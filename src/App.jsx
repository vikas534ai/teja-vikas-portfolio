import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

function App() {
  return (
    <div className="app">

      <nav className="navbar">
        <div className="logo">
          TV
        </div>

        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <h1>
          Teja Vikas Donepudi
        </h1>

        <h2>
          Senior Java Full Stack Developer
        </h2>

        <p>
          Java • Spring Boot • React • AWS • Microservices • Kafka • Oracle • AI
        </p>

        <div className="buttons">

          <a
            href="resume.pdf"
            className="primary"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="secondary"
          >
            Contact Me
          </a>

        </div>

        <div className="socials">

          <a href="https://github.com/vikas534ai">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/tejavikasd534">
            <FaLinkedin />
          </a>

          <a href="mailto:vikas534ai@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </motion.section>

    </div>
  );
}

export default App;
