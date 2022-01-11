import React, { useState } from 'react';
import Card from '../Components/Card';
import './pages.css';

// based on https://www.youtube.com/watch?v=WkREeDy2WQ4
// and https://www.youtube.com/watch?v=mBaMq1DphRs

function Projects(){

    const [toggleState, setToggleState] = useState(0);
    // let tabIndicator = document.getElementsByClassName("tab-indicator")[0];

    const toggleTab = (index) => {
        setToggleState(index);

        // console.log(tabIndicator);

        // if not defined, define it (happens the first time)
        // if (tabIndicator) {
        //     tabIndicator.style.left = `calc(calc(100% / 3) * ${index})`;
        // }
        // else {
        //     tabIndicator = document.getElementsByClassName("tab-indicator")[0];
        //     tabIndicator.style.left = `calc(calc(100% / 3) * ${index})`;
        // }
    }
 
    return(
        <div className="projects-container">
            <div className="tabs">
                <div className="tab-header">

                    <div className={toggleState === 0 ? "active" : ""} onClick={() => toggleTab(0)}>
                        <h4>Code</h4>
                    </div>

                    <div className={toggleState === 1 ? "active" : ""} onClick={() => toggleTab(1)}>
                        <h4>About</h4>

                    </div>

                    <div className={toggleState === 2 ? "active" : ""} onClick={() => toggleTab(2)}>
                        <h4>Services</h4>
                    </div>

                    {/* <div className="animation start-home"></div> */}

                </div>
                {/* <div className="tab-indicator"></div> */}
                <div className="tab-body">

                    <div className={toggleState === 0 ? "active" : ""}>
                        <Card
                        title='Unlimited Games'
                        imageUrl='https://media.tenor.com/images/45fdee1a1a48fdfeb599eb17c05de45c/tenor.gif'
                        HowItWorks='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        Tools='C++, Python'
                        Link='https://media.tenor.com/images/45fdee1a1a48fdfeb599eb17c05de45c/tenor.gif'
                        LinkText='Link Here'
                        />
                    </div>

                    <div className={toggleState === 1 ? "active" : ""}>
                        <h2>This is about section</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
                    </div>

                    <div className={toggleState === 2 ? "active" : ""}>
                        <h2>This is services section</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
                    </div>


                </div>

            </div>
        </div>
    );
}

export default Projects;