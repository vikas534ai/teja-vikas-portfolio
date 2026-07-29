import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

const experiences = [
  {
    company: "Goldman Sachs",
    role: "Senior Java Full Stack Developer",
    period: "April 2025 – Present",
    location: "New York, NY",
    description:
      "Working on large-scale financial platform modernization and migration initiatives using Java, Spring Boot, React, microservices, REST APIs, messaging, AWS, and enterprise integration patterns."
  },
  {
    company: "DaVita HealthCare",
    role: "Senior Software Engineer",
    period: "June 2023 – March 2025",
    location: "Denver, CO",
    description:
      "Developed secure healthcare applications using Java, Spring Boot, React, Angular, MongoDB, Cassandra, REST services, and cloud-native development practices."
  },
  {
    company: "Morgan Stanley",
    role: "Software Engineer",
    period: "September 2021 – May 2023",
    location: "New York, NY",
    description:
      "Built enterprise financial applications using Java, Spring Data JPA, Hibernate, Angular, React, REST microservices, JMS, AWS, and Agile delivery practices."
  },
  {
    company: "Big Lots",
    role: "Java/J2EE Developer",
    period: "January 2020 – August 2021",
    location: "Columbus, OH",
    description:
      "Developed retail enterprise applications using Java, Spring MVC, JSP, JavaScript, jQuery, REST services, Oracle, and responsive frontend technologies."
  },
  {
    company: "App Labs",
    role: "Java/J2EE Developer",
    period: "July 2016 – November 2019",
    location: "Hyderabad, India",
    description:
      "Built Java enterprise applications using MVC architecture, JSP, JDBC, Oracle, REST and SOAP services, JavaScript, jQuery, AJAX, SQL, and PL/SQL."
  }
];

const skills = [
  {
    category: "Backend",
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
    category: "Frontend",
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
    category: "Cloud & DevOps",
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
    category: "Data & Messaging",
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
      "A secure banking application concept with customer onboarding, account management, transaction processing, authentication, audit logging, and administrative dashboards.",
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
      "An internal dashboard concept for monitoring large-scale data migration workflows, reconciliation results, processing failures, retries, and operational status.",
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
      "An AI-enabled engineering assistant concept for code explanation, documentation generation, API analysis, knowledge retrieval, and developer productivity.",
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
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">TV</div>

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
        <p className="eyebrow">Senior Software Engineer</p>

        <h1>Teja Vikas Donepudi</h1>

        <h2>Senior Java Full Stack Developer</h2>

        <p>
          Java • Spring Boot • React • AWS • Microservices • Kafka • Oracle • AI
        </p>

        <div className="buttons">
          <a href="resume.pdf" className="primary">
            Download Resume
          </a>

          <a href="#contact" className="secondary">
            Contact Me
          </a>
        </div>

        <div className="socials">
          <a
            href="https://github.com/vikas534ai"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/tejavikasd534"
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
      </motion.section>

      <motion.section
        id="about"
        className="section about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div className="section-heading">
          <p>About Me</p>
          <h2>Building secure and scalable applications</h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              I am a Senior Java Full Stack Developer with extensive experience
              designing and developing enterprise applications across financial
              services, healthcare, retail, and technology domains.
            </p>

            <p>
              My core expertise includes Java, Spring Boot, microservices,
              React, Angular, AWS, REST APIs, messaging systems, relational
              databases, DevOps, and cloud-native application development.
            </p>

            <p>
              I focus on building secure, maintainable, and high-performance
              software while collaborating with architects, product owners,
              QA engineers, DevOps teams, and business stakeholders.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <span>10+</span>
              <p>Years of Experience</p>
            </div>

            <div className="stat-card">
              <span>5</span>
              <p>Enterprise Organizations</p>
            </div>

            <div className="stat-card">
              <span>Full Stack</span>
              <p>Frontend to Cloud</p>
            </div>

            <div className="stat-card">
              <span>Agile</span>
              <p>Cross-Functional Delivery</p>
            </div>
          </div>
        </div>
      </motion.section>

      <section id="experience" className="section experience-section">
        <div className="section-heading">
          <p>Career Journey</p>
          <h2>Professional Experience</h2>
        </div>

        <div className="timeline">
          {experiences.map((experience, index) => (
            <motion.article
              className="timeline-item"
              key={experience.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
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
    </div>
  );
}

export default App;
