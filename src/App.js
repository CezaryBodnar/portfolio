import React, { useState, useEffect } from 'react';
import { Hero } from './Components/Hero';
import { About } from './Components/About';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import Nav from './Components/Nav'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import './Components/MediaQuery.css';

function App() {
  const [project1, setProject1] = useState(false);
  const [project2, setProject2] = useState(false);
  const [project3, setProject3] = useState(false);
  const [project4, setProject4] = useState(false);
  const [project5, setProject5] = useState(false);
  const [project6, setProject6] = useState(false);

  const [language, setLanguage] = useState('pl');

  useEffect(() => {
    if (project1) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [project1]);

  useEffect(() => {
    if (project2) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [project2]);

  useEffect(() => {
    if (project3) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [project3]);

  useEffect(() => {
    if (project4) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [project4]);

  useEffect(() => {
    if (project5) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [project5]);

  useEffect(() => {
    if (project6) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [project6]);

  return (
    <Router>
      <div className="App">
        <Nav language={language} setLanguage={setLanguage} />
        <Hero language={language} />
        <Projects language={language} project1={project1} setProject1={setProject1}
          project2={project2} setProject2={setProject2}
          project3={project3} setProject3={setProject3}
          project4={project4} setProject4={setProject4}
          project5={project5} setProject5={setProject5}
          project6={project6} setProject6={setProject6} />
        <About language={language} />
        <Contact language={language} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
