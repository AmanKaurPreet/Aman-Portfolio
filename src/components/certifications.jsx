import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "July 2024",
      url: "https://www.udemy.com/certificate/UC-661101db-f7ba-4314-8f57-05098879a67c/"
    },
    {
      title: "Complete JavaScript Course- Zero to Expert",
      issuer: "Udemy",
      date: "August 2024",
      url: "https://www.udemy.com/certificate/UC-499c1138-476a-42bb-9ce3-a9e168b24387/"
    },
    {
      title: "React Certification",
      issuer: "Udemy",
      date: "March 2024",
      url: "https://www.udemy.com/certificate/UC-772a1315-e32e-41dc-b894-2984e444521a/"
    }
  ];


  const Certifications = () => {
    return (
      <section className="certifications" id = "certification">
         <div className="about__container container grid">
         <div className="certificate__data">
        <h2 className="certifications__title">My <span>Certifications</span></h2>
        <p className="certifications__summary">
        Here are some of the certifications I have achieved, demonstrating my expertise and commitment to continuous learning in the field of full-stack web development.
        </p>
        </div>
        <div className="certifications__list">
          {certifications.map((cert, index) => (
            <div key={index} className="certification__card">
              <h3 className="certification__title">{cert.title}</h3>
              <p className="certification__issuer">{cert.issuer}</p>
              <p className="certification__date">{cert.date}</p>
              <a href={cert.url} className="certification__link" target="_blank" rel="noopener noreferrer">
                View Certification    <FaExternalLinkAlt />
              </a>
            </div>

          ))}
        </div>
        </div>
      </section>
    );
  };
  

export default Certifications;