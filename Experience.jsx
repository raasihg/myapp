// Advanced Experience Page in JSX for Portfolio
import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaDownload } from "react-icons/fa";
import "./Experience.css";
import profileImage from "/assests/nd.png";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Best Buy",
    duration: "Nov 2024 – Present",
    skills: ["Java 21", "Spring Boot", "AWS", "React", "Terraform", "Cypress"],
    points: [
      "Spearheaded scalable backend services using Java 21, Spring Boot, and AWS Lambda for processing retail transactions across North America.",
      "Developed secure microservices architecture using API Gateway, IAM roles, and SQS/SNS for real-time order and notification processing.",
      "Integrated PostgreSQL, MongoDB, and Elasticsearch to support advanced query operations and real-time customer insights.",
      "Engineered CI/CD pipelines with Terraform and Jenkins, enabling automated infrastructure provisioning and reducing deployment time by 40%.",
      "Led observability efforts using Grafana, Prometheus, and AWS CloudWatch, resulting in 22% faster incident response.",
      "Conducted in-depth code reviews and mentoring sessions, enhancing team skillsets and codebase maintainability."
    ]
  },
  {
    title: "Full Stack Developer",
    company: "FINRA",
    duration: "Dec 2023 – Oct 2024",
    skills: ["React", "Spring Boot", "Next.js", "OAuth2", "Terraform", "Docker"],
    points: [
      "Directed cloud migration strategy for legacy fintech applications, transitioning to AWS ECS and microservices architecture.",
      "Built resilient REST/SOAP APIs in Spring Boot integrated with SQL Server, MongoDB, and Elasticsearch for large-scale financial datasets.",
      "Refactored and enhanced the frontend using React.js, Redux, and Next.js, resulting in 25% faster page loads and improved accessibility.",
      "Led pod-wide adoption of Agile with sprint OKRs, daily scrums, velocity tracking, and sprint demos."
    ]
  },
  {
    title: "Software Developer",
    company: "Nitya Software Solutions Inc.",
    duration: "Jan 2019 – Dec 2021",
    skills: ["Node.js", "React", "MongoDB", "GraphQL", "GitHub Actions"],
    points: [
      "Built secure and performant REST and GraphQL endpoints for dynamic, schema-driven dashboard queries.",
      "Automated builds and deployments using GitHub Actions with linting, test coverage reporting, and zero-downtime deployments.",
      "Led feature demos to internal stakeholders, translating technical outcomes into business value for decision-makers."
    ]
  }
];

const cardVariants = {
  offscreen: { opacity: 0, y: 30 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.2, duration: 0.6 }
  }
};

export default function Experience() {
  return (
    <div className="experience-page">
      <aside className="sidebar">
        <div className="triangle-image-container">
          <img src={profileImage} alt="Raasi Gunnala" className="profile-pic-triangle" />
        </div>

        <motion.a
          href="/resume.pdf"
          download
          className="btn-resume"
          aria-label="Download Resume PDF"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <FaDownload /> Download Resume
        </motion.a>
      </aside>

      <main className="experience-grid">
        {experiences.map((exp, i) => (
          <motion.article
            key={i}
            className="e-card"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.6 }}
            variants={cardVariants}
          >
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>

            <div className="e-card-content">
              <h2>{exp.title}</h2>
              <h3>{exp.company}</h3>
              <div className="duration">
                <FaClock className="icon" />
                <time>{exp.duration}</time>
              </div>

              <div className="skills-badges">
                {exp.skills.map((skill, idx) => (
                  <span className="badge" key={idx}>{skill}</span>
                ))}
              </div>

              <ul>
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </main>
    </div>
  );
}
