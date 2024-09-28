import React from "react";
import { skillsNames } from "./SkillsNames";

function Skills() {
    return (
        <section className="skills section" id ="skills">
            <div className="skills__container container grid">
                <div className="skills__data">
                    <h3 className="section__subtitle">
                        Core <span> Proficiencies</span>
                    </h3>

                    <h2 className="section__title">
                        Expertise
                    </h2>

                    <p className="skills__description">
                        "I possess a comprehensive set of skills and hands-on experience
                        required to conceptualize, develop, and deliver projects tailored
                        to your needs. Explore the projects I have undertaken to witness my capabilities firsthand."
                    </p>
                    <a href="#projects" className="button">See Projects</a>
                </div>
                <div className="skills__content">
                    <ol className="skills__list">
                        {skillsNames.map((itm, index) => (
                            <li key={index} className="skills__item">{itm}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default Skills;