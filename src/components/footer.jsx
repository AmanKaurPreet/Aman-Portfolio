import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
function Footer() {
    return(
    <footer className="footer">
        <div className="footer__container container grid">
            <div>
                <h1 className="footer__title">
                    Amanpreet <span>Kaur</span>
                </h1>
                <h2 className="footer__education">
                    Full-Stack Web Developer
                </h2>
            </div>
            <div className="footer__social">
                <a href="https://github.com/AmanKaurPreet/" target="_blank" className="footer__social-link">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/amankaur2707" target="_blank" className="footer__social-link">
                   <FaLinkedin />
                </a>
                <a href="mailto:amanjpkaur@gmail.com" target="_blank" className="footer__social-link">
                    <BiLogoGmail />
                </a>
            </div>
            <span className="footer__copy">
                Copyright &#169; 2024 Amanpreet Kaur. All Rights Reserved.
            </span>
        </div>
    </footer>
    )
}

export default Footer;