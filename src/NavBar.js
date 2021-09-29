import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return(
        <ul>
            <li>
                <Link to="/my-website/">Home</Link>
            </li>
            <li>
                <Link to="/my-website/resume">Resume</Link>
            </li>
            <li>
                <Link to="/my-website/projects">Projects</Link>
            </li>
        </ul>
    );
}

export default NavBar;