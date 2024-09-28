import React from "react";

import { FaLayout , FaPenNib } from "react-icons/fa";
function Service() {
    return (
        <section className="services section" id="services">


            <h3 className="section__subtitle">
                My <span>Services</span>
            </h3>
            <h2 className="section__title">
                Services Offered
            </h2>
          
            <div className="services__container container grid">
                <article className="services__card">
                    {/* services__icon add class with icon */}
                    {/* <FaLayout /> */}
                    <h2 className="services__title">
                        Web Developer
                    </h2>
                    <p className="services__description">
                    designing and developing websites, creating custom web applications tailored to client needs, ensuring websites are responsive and user-friendly across devices, and providing ongoing maintenance and support to keep websites secure and optimized.
                    </p>
                </article>

                <article className="services__card">
                    {/* services__icon add class with icon */}
                    <h2 className="services__title">  Database Management </h2>
                        <p className="services__description">
                        Designing and implementing efficient databases (SQL or NoSQL) to store and retrieve data securely, ensuring optimal performance and scalability
                        </p>
                
                </article>

                <article className="services__card">
                    {/* services__icon add class with icon */}
                    {/* <FaPenNib className="services__icon"/> */}
                    <h2 className="services__title">  API Integration </h2>
                        <p className="services__description">
                        Integrating third-party APIs (Application Programming Interfaces) to enhance functionality, such as payment gateways, social media logins, or data analytics services, to enrich user experiences and expand application capabilities.
                        </p>
                
                </article>


            </div>
        </section>
    )
}
export default Service;