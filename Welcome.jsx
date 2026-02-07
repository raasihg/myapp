import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, Home, Folder, Code2, Briefcase, Mail, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./Welcome.css";

const backgroundImages = [
  "url('/images/bg1.jpg')",
  "url('/images/bg2.jpg')",
  "url('/images/bg3.jpg')"
];

const navLinks = [
  { to: "/", icon: <Home />, label: "Home" },
  { to: "/about", icon: <User />, label: "About" },
  { to: "/spa", icon: <Code2 />, label: "Skills" },
  { to: "/experience", icon: <Briefcase />, label: "Experience" },
  { to: "/spa", icon: <Folder />, label: "Projects" },
  { to: "/contact", icon: <Mail />, label: "Contact" },
];

const quotes = [
  "Crafting clean code with passion.",
  "Turning ideas into digital reality.",
  "Design. Develop. Deploy. Repeat.",
  "Simplicity is the soul of efficiency.",
  "Innovation through code."
];

const Welcome = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(bgInterval);
  }, []);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(quoteInterval);
  }, []);

  // Auto scroll after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="welcome-container">
      {/* Backgrounds */}
      {backgroundImages.map((bg, i) => (
        <div
          key={i}
          className={`bg-image ${i === bgIndex ? "show" : ""}`}
          style={{ backgroundImage: bg }}
        />
      ))}

      {/* Moving lines */}
      <div className="animated-line horizontal" />
      <div className="animated-line vertical" />

      {/* Floating faded icons */}
      {Array.from({ length: 12 }).map((_, i) => (
        <Star
          key={i}
          className="floating-icon"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Floating Squares and Triangles */}
      {Array.from({ length: 8 }).map((_, i) => {
        const isSquare = i % 2 === 0;
        const style = {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${8 + Math.random() * 4}s`,
        };
        return (
          <span
            key={`shape-${i}`}
            className={`floating-shape ${isSquare ? "square" : "triangle"}`}
            style={style}
          />
        );
      })}

      <div className="welcome-grid">
        {/* Image container (background image set in CSS) */}
        <div className="image-container" />

        {/* Centered text */}
        <div className="center-content">
          <motion.h1 className="main-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            Hi, Welcome to My Portfolio
          </motion.h1>
          <motion.p
            className="sub-text"
            key={quoteIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {quotes[quoteIndex]}
          </motion.p>

          <motion.button
            className="lets-go"
            whileHover={{ scale: 1.1 }}
            onClick={() => setShowMenu(!showMenu)}
          >
            LET’S GO
          </motion.button>

          {/* Circular nav icons */}
          <AnimatePresence>
            {showMenu && (
              <motion.div
                className="icon-buttons"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                {navLinks.map((link, i) => (
                  <motion.div
                    key={i}
                    className="circle-button"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link to={link.to} title={link.label}>
                      {link.icon}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
