 import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaAws,
  FaBars,
  FaEnvelope,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaMapMarkerAlt,
  FaReact,
  FaTimes
} from "react-icons/fa";

const experiences = [
  {
    company: "Goldman Sachs",
    role: "Senior Java Full Stack Developer",
    period: "April 2025 – Present",
    location: "New York, NY",
    description:
      "Contributing to large-scale financial platform modernization and migration initiatives using Java, Spring Boot, React, microservices, REST APIs, enterprise messaging, AWS and secure integration patterns."
  },
  {
    company: "DaVita HealthCare",
    role: "Senior Software Engineer",
    period: "June 2023 – March 2025",
    location: "Denver, CO",
    description:
      "Developed secure healthcare applications using Java, Spring Boot, React, Angular, MongoDB, Cassandra, REST services and cloud-native engineering practices."
  },
  {
    company: "Morgan Stanley",
    role: "Software Engineer",
    period: "September 2021 – May 2023",
    location: "New York, NY",
    description:
      "Built enterprise financial applications using Java, Spring Data JPA, Hibernate, Angular, React, REST microservices, JMS, AWS and Agile delivery practices."
  },
  {
    company: "Big Lots",
    role: "Java/J2EE Developer",
    period: "January 2020 – August 2021",
    location: "Columbus, OH",
    description:
      "Developed retail enterprise applications using Java, Spring MVC, JSP, JavaScript, jQuery, REST services, Oracle and responsive frontend technologies."
  },
  {
    company: "App Labs",
    role: "Java/J2EE Developer",
    period: "July 2016 – November 2019",
    location: "Hyderabad, India",
    description:
      "Built enterprise Java applications using MVC architecture, JSP, JDBC, Oracle, REST and SOAP services, JavaScript, jQuery, AJAX, SQL and PL/SQL."
  }
];

const skills = [
  {
    category: "Backend Engineering",
    description:
      "Secure APIs, distributed services and enterprise application development.",
    items: [
      "Java 8/11/17",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Microservices"
    ]
  },
  {
    category: "Frontend Development",
    description:
      "Responsive and maintainable interfaces for enterprise applications.",
    items: [
      "React",
      "Angular",
      "JavaScript",
      "TypeScript",
      "Redux",
      "HTML5",
      "CSS3",
      "Bootstrap"
    ]
  },
  {
    category: "Cloud and DevOps",
    description:
      "Cloud infrastructure, containerization and automated software delivery.",
    items: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "Terraform",
      "SonarQube",
      "Maven"
    ]
  },
  {
    category: "Data and Messaging",
    description:
      "Reliable persistence, asynchronous communication and data processing.",
    items: [
      "Oracle",
      "MongoDB",
      "Cassandra",
      "SQL",
      "PL/SQL",
      "Apache Kafka",
      "IBM MQ",
      "JMS"
    ]
  }
];

const projects = [
  {
    title: "Digital Banking Platform",
    description:
      "A secure banking application concept featuring customer onboarding, account management, transaction processing, authentication, audit logging and administrative dashboards.",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Kafka",
      "AWS"
    ]
  },
  {
    title: "Enterprise Migration Dashboard",
    description:
      "An operational dashboard for monitoring large-scale data migration workflows, reconciliation results, processing failures, retries and system health.",
    technologies: [
      "React",
      "Spring Boot",
      "REST APIs",
      "Oracle",
      "JMS",
      "Docker"
    ]
  },
  {
    title: "AI Developer Assistant",
    description:
      "An AI-enabled engineering assistant for code explanation, documentation generation, API analysis, enterprise knowledge retrieval and developer productivity.",
    technologies: [
      "Java",
      "Python",
      "React",
      "RAG",
      "LLM APIs",
      "AWS"
    ]
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        pageHeight > 0 ? (scrollTop / pageHeight) * 100 : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="background-effects" aria-hidden="true">
        <div className="background-orb orb-one" />
        <div className="background-orb orb-two" />
        <div className="background-grid" />
      </div>

      <nav className="navbar">
        <div className="navbar-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            TV
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul
            className={
              menuOpen ? "nav-links nav-links-open" : "nav-links"
            }
          >
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>

            <li>
              <a href="#experience" onClick={closeMenu}>
                Experience
              </a>
            </li>

            <li>
              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="availability-badge">
                <span className="availability-dot" />
                Open to senior software engineering opportunities
              </div>

              <p className="hero-eyebrow">
                SENIOR JAVA FULL STACK DEVELOPER
              </p>

              <h1>
                Building reliable software for
                <span> complex enterprise systems.</span>
              </h1>

              <p className="hero-description">
                I am Teja Vikas Donepudi, a senior software engineer
                with more than 10 years of experience building secure,
                scalable applications across financial services,
                healthcare, retail and technology.
              </p>

              <div className="hero-actions">
                <a href="#experience" className="primary-button">
                  Explore my work
                  <FaArrowRight />
                </a>

                <a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  className="secondary-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  View résumé
                </a>
              </div>

              <div className="hero-socials">
                <a
                  href="https://github.com/vikas534ai"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/tejavikasd534/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:vikas534ai@gmail.com"
                  aria-label="Send an email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>

            <motion.aside
              className="hero-profile-card"
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
            >
              <div className="profile-card-header">
                <div className="profile-monogram">TV</div>

                <div>
                  <h2>Teja Vikas Donepudi</h2>
                  <p>Senior Software Engineer</p>
                </div>
              </div>

              <div className="profile-location">
                <FaMapMarkerAlt />
                Harrison, New Jersey
              </div>

              <div className="profile-divider" />

              <p className="profile-summary">
                Developing enterprise platforms with modern Java,
                cloud-native architecture and responsive frontend
                applications.
              </p>

              <div className="profile-technologies">
                <div className="technology-row">
                  <span className="technology-icon">
                    <FaJava />
                  </span>

                  <div>
                    <strong>Backend Engineering</strong>
                    <p>Java, Spring Boot and microservices</p>
                  </div>
                </div>

                <div className="technology-row">
                  <span className="technology-icon">
                    <FaReact />
                  </span>

                  <div>
                    <strong>Frontend Development</strong>
                    <p>React, Angular and TypeScript</p>
                  </div>
                </div>

                <div className="technology-row">
                  <span className="technology-icon">
                    <FaAws />
                  </span>

                  <div>
                    <strong>Cloud and DevOps</strong>
                    <p>AWS, Docker, Kubernetes and CI/CD</p>
                  </div>
                </div>
              </div>

              <div className="profile-card-footer">
                <span className="status-indicator" />
                Available for opportunities
              </div>
            </motion.aside>
          </div>
        </section>

        <section
          className="credibility-strip"
          aria-label="Career highlights"
        >
          <div className="credibility-container">
            <div className="credibility-item">
              <strong>10+</strong>
              <span>Years of experience</span>
            </div>

            <div className="credibility-item">
              <strong>5</strong>
              <span>Enterprise organizations</span>
            </div>

            <div className="credibility-item">
              <strong>Full Stack</strong>
              <span>Frontend to cloud</span>
            </div>

            <div className="credibility-item">
              <strong>FinTech</strong>
              <span>Enterprise specialization</span>
            </div>
          </div>
        </section>

        <motion.section
          id="about"
          className="section about-section"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-heading">
            <p>About Me</p>
            <h2>Engineering secure and scalable applications</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I am a Senior Java Full Stack Developer with extensive
                experience designing and developing enterprise
                applications across financial services, healthcare,
                retail and technology.
              </p>

              <p>
                My expertise includes Java, Spring Boot,
                microservices, React, Angular, AWS, REST APIs,
                messaging systems, relational databases, DevOps and
                cloud-native application development.
              </p>

              <p>
                I focus on building secure, maintainable and
                high-performance software while collaborating with
                architects, product owners, QA engineers, DevOps
                teams and business stakeholders.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <span>10+</span>
                <p>Years of software engineering experience</p>
              </div>

              <div className="stat-card">
                <span>5</span>
                <p>Enterprise organizations supported</p>
              </div>

              <div className="stat-card">
                <span>Full Stack</span>
                <p>Frontend, backend, cloud and data</p>
              </div>

              <div className="stat-card">
                <span>Agile</span>
                <p>Cross-functional enterprise delivery</p>
              </div>
            </div>
          </div>
        </motion.section>

        <section
          id="experience"
          className="section experience-section"
        >
          <div className="section-heading">
            <p>Career Journey</p>
            <h2>Professional Experience</h2>
          </div>

          <div className="timeline">
            {experiences.map((experience, index) => (
              <motion.article
                className="timeline-item"
                key={`${experience.company}-${experience.period}`}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -35 : 35
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6 }}
              >
                <div className="timeline-dot" />

                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3>{experience.company}</h3>
                      <h4>{experience.role}</h4>
                    </div>

                    <div className="experience-meta">
                      <span>{experience.period}</span>
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <p>{experience.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <p>Technical Expertise</p>
            <h2>Technologies used to deliver enterprise software</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <motion.article
                className="skill-card"
                key={skillGroup.category}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08
                }}
              >
                <p className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3>{skillGroup.category}</h3>
                <p className="skill-description">
                  {skillGroup.description}
                </p>

                <div className="skill-tags">
                  {skillGroup.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="section projects-section"
        >
          <div className="section-heading">
            <p>Selected Work</p>
            <h2>Featured engineering projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1
                }}
              >
                <div className="project-card-top">
                  <div className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <FaArrowRight />
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="contact-label">Let&apos;s Connect</p>

            <h2>Looking for an experienced full-stack engineer?</h2>

            <p>
              I am open to senior software engineering opportunities
              involving Java, Spring Boot, React, microservices, AWS,
              cloud platforms, enterprise modernization and
              AI-enabled application development.
            </p>

            <div className="contact-actions">
              <a
                href="mailto:vikas534ai@gmail.com"
                className="primary-button"
              >
                <FaEnvelope />
                Send Email
              </a>

              <a
                href="https://www.linkedin.com/in/tejavikasd534/"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                <FaLinkedin />
                View LinkedIn
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <a href="#home" className="footer-logo">
            TV
          </a>

          <p>
            © {new Date().getFullYear()} Teja Vikas Donepudi. Built
            with React and Vite.
          </p>

          <div className="footer-links">
            <a
              href="https://github.com/vikas534ai"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/tejavikasd534/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:vikas534ai@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
