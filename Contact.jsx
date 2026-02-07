import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from './Footer';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // You can integrate with EmailJS, Formspree, or custom backend here
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-wrapper">
      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      <div className="contact-content">
        {/* Contact Info */}
        <motion.div
          className="contact-info glass-card"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Let's Connect</h2>
          <p><FaEnvelope /> raasi.dev@example.com</p>
          <p><FaPhoneAlt /> +1 (123) 456-7890</p>
          <p><FaMapMarkerAlt /> Dallas, TX</p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="contact-form glass-card"
          onSubmit={handleSubmit}
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">Send Message</button>
        </motion.form>
        <Footer />
      
      </div>
    </section>
   
  );
};

export default Contact;
