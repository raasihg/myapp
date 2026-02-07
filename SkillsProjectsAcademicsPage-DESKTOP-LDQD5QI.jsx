import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SkillsProjectsAcademicsPage.css';
import {
  SiJavascript, SiReact, SiRedux, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiMongodb, SiSpring,
  SiPython, SiGit, SiDocker, SiMysql, SiPostgresql, SiCpp, SiJava
} from 'react-icons/si';



const skills = [
  { name: 'Java', icon: <SiJava />, level: 95 },
  { name: 'JavaScript', icon: <SiJavascript />, level: 95 },
  { name: 'React.js', icon: <SiReact />, level: 92 },
  { name: 'Redux', icon: <SiRedux />, level: 90 },
  { name: 'HTML5', icon: <SiHtml5 />, level: 98 },
  { name: 'CSS3', icon: <SiCss3 />, level: 96 },
  { name: 'Node.js', icon: <SiNodedotjs />, level: 88 },
  { name: 'Express.js', icon: <SiExpress />, level: 85 },
  { name: 'MongoDB', icon: <SiMongodb />, level: 83 },
  { name: 'Spring Boot', icon: <SiSpring />, level: 87 },
  { name: 'Python', icon: <SiPython />, level: 90 },
  { name: 'Git', icon: <SiGit />, level: 95 },
  { name: 'Docker', icon: <SiDocker />, level: 80 },
  { name: 'SQL', icon: <SiMysql />, level: 85 },
  { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80 },
  { name: 'C++', icon: <SiCpp />, level: 80 },
];

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Responsive portfolio with animations and transitions.',
    tech: 'React, CSS3, Framer Motion, JavaScript, Vite, Git'
  },
  {
    title: 'Oil Price Prediction',
    description: 'ML model forecasting oil prices using global data.',
    tech: 'Python, Pandas, Scikit-learn, NumPy, Jupyter'
  },
  {
    title: 'Restaurant DBMS',
    description: 'Role-based full-stack system for restaurant ops.',
    tech: 'Java, Spring Boot, MySQL, REST API, Maven'
  },
  {
    title: 'Network Simulation Tool',
    description: 'Visualized network traffic and routing algorithms.',
    tech: 'Java, JavaFX, Multithreading, OOP'
  },
  {
    title: 'Java Cryptography Toolkit',
    description: 'AES/RSA encryption suite with secure key handling.',
    tech: 'Java, AES, RSA, Bouncy Castle, Maven'
  }
];

const academics = [
  {
    degree: "Master’s in Computer & Info Science",
    university: 'Western Illinois University',
    year: '2023',
    details: 'Specialized in software engineering, databases, ML.'
  },
  {
    degree: "Bachelor’s in Computer Science",
    university: 'Anurag College of Engineering',
    year: '2020',
    details: 'Programming, OS, networks, DS.'
  }
];

const SkillsProjectsAcademicsPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleNextClick = () => {
    const sections = ['#skills', '#projects', '#academics'];
    const current = sections.findIndex(id => location.hash === id || window.location.hash === id);
    const nextId = sections[(current + 1) % sections.length];
    const nextSection = document.querySelector(nextId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', nextId);
    }
  };

  return (
    <div className="spa-container">
      {/* SKILLS */}
      <section id="skills" className="section">
        <section className="section-title-wrapper">
          <h2 className="section-title">Professional Skills</h2>
        </section>
        <div className="skills-buttons-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-button-wrapper">
              <button className="skill-button">
                <div className="icon-name">
                  <div className="icon" title={`Proficiency: ${skill.level}%`}>
                    {skill.icon}
                  </div>
                  <div>{skill.name}</div>
                </div>
                <div className="progress-container">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${skill.level}%`, "--progress-width": `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="percentage-text">{skill.level}</div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <section className="section-title-wrapper">
          <h2 className="section-title">Projects Showcase</h2>
        </section>
        <div className="ag-format-container">
          <div className="ag-courses_box">
            {projects.map((project, index) => (
              <div className="ag-courses_item" key={index}>
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>
                  <div className="ag-courses-item_title">{project.title}</div>
                  <div className="ag-courses-item_date-box">
                    Description: <span className="ag-courses-item_date">{project.description}</span><br />
                    Stack: <span className="ag-courses-item_date">{project.tech}</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMICS */}
      <section id="academics" className="section">
        <section className="section-title-wrapper">
          <h2 className="section-title">Academics</h2>
        </section>
        <div className="ag-format-container">
          <div className="ag-courses_box">
            {academics.map((item, index) => (
              <div className="ag-courses_item" key={index}>
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>
                  <div className="ag-courses-item_title">{item.degree}</div>
                  <div className="ag-courses-item_date-box">
                    {item.university} ({item.year})<br />
                    <span className="ag-courses-item_date">{item.details}</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT BUTTON */}
      <div className="next-button-wrapper">
        <button className="cta" onClick={handleNextClick} aria-label="Next Section">
          <svg className="arrow" viewBox="0 0 24 24">
            <polyline points="8 4 16 12 8 20" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SkillsProjectsAcademicsPage;
