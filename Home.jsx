import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Home.css';

function Home() {
  const [currentText, setCurrentText] = useState("Welcome to my portfolio");

  useEffect(() => {
    const texts = [
      "Welcome to my portfolio",
      "I am passionate about development",
      "I love my life",
    ];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setCurrentText(texts[index]);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="home-container">
      {/* First Container with Changing Text */}
      <div className="background-container">
        <motion.div
          className="animated-lines"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </motion.div>

        <motion.h1
          className="dynamic-text"
          key={currentText}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          {currentText}
        </motion.h1>
      </div>

      {/* Second Container with Profile and Content */}
      <motion.section
        id="home"
        className="home-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="profile-area">
          <motion.img
            src="/assests/Profile.png"
            alt="Raasi Gunnala"
            className="main-profile-pic"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>

        <motion.div className="content-box">
          <h1>
            Hello, I’m <span className="highlight">Raasi Gunnala</span>
          </h1>
          <p>
            <span className="highlight">Full Stack Java Developer</span>
            <br />
            Java | Spring Boot | React | Node.js | TypeScript
            <br />
            REST APIs | MongoDB | SQL | DevOps | Docker | AWS
          </p>

          <motion.button
            className="lets-go-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Let’s Go
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Home;
