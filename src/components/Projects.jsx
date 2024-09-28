import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function Project() {
    return (
        <section className="projects section" id="projects">

                    <h3 className="section__subtitle">
                        My <span>Jobs</span>
                    </h3>

                    <h2 className="section__title">
                        Recent Projects
                    </h2>
                
                <div className="projects__container container grid">
                <article className="projects__card">
                    <img src="project-img-1.jpg" alt="projects image" className="">
                    </img>
                    <div className="projects__model">
                        <span className="projects__subtitle">To_Do App</span>
                        <h2 className="projects__title">TaskMaster</h2>

                        <a href="https://github.com/AmanKaurPreet/To-Do_App.git" className="projects__button">
                            View Demo <FaExternalLinkAlt />

                        </a>
                    </div>
                </article>




                <article className="projects__card">
                    <img src="project-img-2.jpg" alt="projects image" className="">
                    </img>
                    <div className="projects__model">
                        <span className="projects__subtitle">SamsungClone</span>
                        <h2 className="projects__title">SamsungSiteClone</h2>

                        <a href="https://github.com/AmanKaurPreet/SamsungSiteClone.git" className="projects__button">
                            View Demo <FaExternalLinkAlt />

                        </a>
                    </div>
                </article>


                <article className="projects__card">
                    <img src="project-img-3.jpg" alt="projects image" className="">
                    </img>
                    <div className="projects__model">
                        <span className="projects__subtitle">Weather App</span>
                        <h2 className="projects__title">ClimateForecast</h2>

                        <a href="https://github.com/AmanKaurPreet/Weather-App.git" className="projects__button">
                            View Demo <FaExternalLinkAlt />

                        </a>
                    </div>
                </article>



                <article className="projects__card">
                    <img src="project-img-4.jpg" alt="projects image" className="">
                    </img>
                    <div className="projects__model">
                        <span className="projects__subtitle">Movie Database project</span>
                        <h2 className="projects__title">CinemaHub</h2>

                        <a href="https://github.com/AmanKaurPreet/CinemaHub.git" className="projects__button">
                            View Demo <FaExternalLinkAlt />

                        </a>
                    </div>
                </article>



                <article className="projects__card">
                    <img src="project-img-5.jpg" alt="projects image" className="">
                    </img>
                    <div className="projects__model">
                        <span className="projects__subtitle">EventPlanner Pro</span>
                        <h2 className="projects__title">EventOrganizer</h2>

                        <a href="https://github.com/AmanKaurPreet/EventOrganizer.git" className="projects__button">
                            View Demo <FaExternalLinkAlt />

                        </a>
                    </div>
                </article>



                <article className="projects__card">
                    <img src="project-img-6.jpg" alt="projects image" className="">
                    </img>
                    <div className="projects__model">
                        <span className="projects__subtitle">TaskSync Pro</span>
                        <h2 className="projects__title">TaskNavigator </h2>

                        <a href="https://github.com/AmanKaurPreet/TaskSync-Pro.git" className="projects__button">
                            View Demo <FaExternalLinkAlt />

                        </a>
                    </div>
                </article>



            </div>
        </section>
    )
}

export default Project;