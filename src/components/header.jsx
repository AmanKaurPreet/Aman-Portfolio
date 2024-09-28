


import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [shouldBlurHeader, setShouldBlurHeader] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 50) {
                setShouldBlurHeader(true);
            } else {
                setShouldBlurHeader(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleLinkClick = () => {
        setShowMenu(false); // Close the menu when a link is clicked
    };

    return (
        <header className={`header ${shouldBlurHeader ? "blur-header" : ""}`}>
            <nav className="nav container">
                <a href="#" className="nav__logo">Amanpreet <span>Kaur</span></a>

                <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link" onClick={handleLinkClick}>Home</a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link" onClick={handleLinkClick}>About</a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link" onClick={handleLinkClick}>Skills</a>
                        </li>
                        <li className="nav__item">
                            <a href="#certification" className="nav__link" onClick={handleLinkClick}>Certification</a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link" onClick={handleLinkClick}>Projects</a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link" onClick={handleLinkClick}>Contact</a>
                        </li>
                    </ul>

                    {/* close button */}
                    <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>

                {/* toggle button */}
                <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </nav>
        </header>
    );
}

export default Header;
