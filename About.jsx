import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { Link } from 'react-router-dom';
import image from '../assests/My.png'; // Adjust the path as necessary
const visionItems = [
  { icon: '🌟', title: 'Innovation', desc: 'Creative tech solutions' },
  { icon: '📈', title: 'Growth', desc: 'Constant learning path' },
  { icon: '🤝', title: 'Collaboration', desc: 'Team-driven mindset' },
  { icon: '🚀', title: 'Scalability', desc: 'Build for the future' },
  { icon: '🧠', title: 'Problem Solving', desc: 'Efficient & effective' }
];



const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200); // Simulate page loading
  }, []);

  return (
    <section className={`about-modern-layout ${loading ? 'loading' : ''}`}>
      <div className="moving-lines"></div>

      <motion.h1
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        top-margin="70px"
      >
        About <span className="vision-highlight">Me</span>
      </motion.h1>
      

      <p className="section-subtitle">Creating meaningful digital experiences through innovation and collaboration.</p>

      <div className="content-flex-container">
        {/* LEFT CARD */}
        <motion.div
          className="left-card"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="hexagon-image">
            <img src={image }alt="Raasi Gunnala" />
          </div>

          <div className="highlighted-text">
            <p>Empowering software with purpose</p>
          </div>

          <div className="bio-text">
            <h2>Raasi Gunnala</h2>
            <p className="note">
              Full-Stack Developer | Java, Spring Boot, React, AWS<br />
              I craft intuitive UIs, scalable backends, and cloud-native apps.
            </p>
          </div>

          
<div className="button-group">
  <Link to="/spa#skills" className="button-64"><span className="text">Skills</span></Link>
  <Link to="/spa#projects" className="button-64"><span className="text">Projects</span></Link>
  <Link to="/spa#academics" className="button-64"><span className="text">Academics</span></Link>
</div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          className="right-card"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="vision-heading">My <span className="vision-highlight">Vision</span></h2>
          <div className="vision-items">
            {visionItems.map((item, index) => (
              <div className="vision-item" key={index}>
                <div className="vision-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
