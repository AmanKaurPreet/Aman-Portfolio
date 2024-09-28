

import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/header';
import Main from './components/main';
import About from './components/About';
import Skills from './components/Skills';
import Service from './components/Services';
import Certifications from './components/certifications';
import Project from './components/Projects';
import Contact from './components/contacts';
import Footer from './components/footer';
import { FaArrowUp } from "react-icons/fa";
import ScrollReveal from 'scrollreveal';
import ThemeToggle from './components/theme.toggle';
import './App.css';


function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY >= 350);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute("id");
      const sectionsClass = document.querySelector(`nav .nav__menu a[href*=${sectionId}]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (sectionsClass) sectionsClass.classList.add("active-link");
      } else {
        if (sectionsClass) sectionsClass.classList.remove("active-link");
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    // Initialize ScrollReveal with default settings
    const sr = ScrollReveal({
      distance: '50px',
      duration: 2000,
      easing: 'cubic-bezier(0.5, 0, 0.5, 1)',
      origin: 'bottom',
    });

    // Reveal elements
    sr.reveal('.headline', {
      origin: 'top',
      distance: '20px',
      duration: 1000,
      delay: 300,
    });

    sr.reveal('.fade-up', {
      origin: 'bottom',
      distance: '30px',
      duration: 1000,
      delay: 500,
    });

    sr.reveal('.fade-left', {
      origin: 'left',
      distance: '50px',
      duration: 1200,
      delay: 300,
    });

    // Cleanup ScrollReveal (optional)
    return () => {
      sr.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="App">
         <ThemeToggle />
      {isVisible && (
        <div id="scroll-up">
          <a href='#top' className='scrollup'>
            <FaArrowUp />
          </a>
        </div>
      )}
      <Header className="top" />
      <Main />
      <About />
      <Skills />
      {/* <Service/> */}
      <Certifications/>
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true
})

sr.reveal(`.home__data,.home__social`)
sr.reveal(`.home__image`, { origin: "bottom" })





