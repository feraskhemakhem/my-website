import React from 'react';
import './style.css';
import GHBlack from '../assets/GitHub-Black.png';
import LInWhite from '../assets/In-White-34.png';
import ItchBlack from '../assets/itchio-black.svg';
import EmailBlack from '../assets/email-black.svg';

// based on https://www.youtube.com/watch?v=gXkqy0b4M5g
// with help from https://ibaslogic.com/how-to-add-hamburger-menu-in-react/


function FootBar() {
    return(
        <footer>
            <div className="footer">
                <ul className="list">
                    <li>
                        <a href="https://github.com/feraskhemakhem" target="_blank" rel="noopener noreferrer">
                            <img src={GHBlack} alt="github logo" style={{width: '1.5rem'}}/>   
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/feraskhemakhem/"  target="_blank" rel="noopener noreferrer">
                            <img src={LInWhite} alt="github logo" style={{width: '1.45rem', filter: 'invert(100%)'}}/>   
                        </a>
                    </li>
                    <li>
                        <a href="mailto:feraskhemakhem@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src={EmailBlack} alt="github logo" style={{width: '1.8rem'}}/>   
                        </a>
                    </li>
                    <li>
                        <a href="https://itch.io/" target="_blank" rel="noopener noreferrer">
                            <img src={ItchBlack} alt="github logo" style={{width: '1.6rem'}}/>   
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
        
    );
}

export default FootBar;