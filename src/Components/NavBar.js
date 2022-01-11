import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './style.css';

// based on https://www.youtube.com/watch?v=gXkqy0b4M5g
// with help from https://ibaslogic.com/how-to-add-hamburger-menu-in-react/


function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = document.querySelectorAll('.nav-links li');

    const handleMenuToggle = () => {
        // menu options animation
        console.log(menuOpen);
        navLinks.forEach((link, index) => {
            console.log('in for loop');
            if (menuOpen) {
                link.style.animation = '';
                console.log('poggers?');
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                console.log(index);
            }
        });

        // open the menu
        setMenuOpen(menuOpen => !menuOpen);
    };

    return(
        <nav>
            <div className="logo">
                <h4>Feras Khemakhem</h4>
            </div>
            <ul className={`${menuOpen ? "nav-active" : ""} nav-links`}>
                <li>
                    <Link to="/my-website/about" className="link">About</Link>
                </li>
                <li>
                    <Link to="/my-website/resume" className="link">Resume</Link>
                </li>
                <li>
                    <Link to="/my-website/projects" className="link">Projects</Link>
                </li>
            </ul>
            <button className={`burger ${menuOpen ? "toggle" : ""}`} onClick={handleMenuToggle}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </button>
        </nav>
        
    );
}

export default NavBar;