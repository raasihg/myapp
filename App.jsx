import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import './App.css';

// Components
import Navbar from './Navbar';
import About from './About';
import Experience from './Experience';
import SkillsProjectsAcademicsPage from './SkillsProjectsAcademicsPage';
import Welcome from './welcome';
import Contact from './Contact';

// App content component so we can use useLocation
function AppContent() {
const location = useLocation();

return (
<>
<Navbar />
<Routes>
  <Route path="/" element={<Welcome />} />
  <Route path="/about" element={<About />} />
  <Route path="/experience" element={<Experience />} />
  <Route path="/spa" element={<SkillsProjectsAcademicsPage />} />
  <Route path="/Contact" element={<Contact />} />
</Routes>
</>
);
}

export default function App() {
return ( <Router> <ScrollToTop /> <AppContent /> </Router>
);
} 
