import React from 'react';
import './pages.css';
import Me from '../assets/me.jpg';

function about(){
    return(
        <div className="about">
            <div className="abouttext">
                <h1 className="abouttitle">Howdy! I'm Feras</h1>
                <ul className="ulist">
                    <li>
                        <p className="aboutitem">
                            Howdy! My name is Feras Khemakhem and I'm currently a Master's students at 
                            Texas A&M University (Whoop!). I revel in sharing things I enjoy with people.
                            As an avid gamer, this drives my passion in Computer Graphics and Game Development.    
                        </p>                    
                    </li>
                    <li>
                        <p className="aboutitem">
                            I am currently seeking out an early career fulltime position related to Game
                            Development, Computer Graphics, or Software Engineering. My more recent experience
                            ranges from developing games to image processing and things related to the rendering
                            pipeline. I also hold experience with Machine Learning through coursework and research,
                            as well as Operating Systems concepts through my teaching assistantships and coursework.
                        </p>                    
                    </li>
                    <li>
                        <p className="aboutitem">
                            My time outside of school consists of exercising, programming games and useful projects
                            (like <a href="https://github.com/feraskhemakhem/MatchMaker" target="_blank" rel="noopener noreferrer">discord bots for my community</a>),
                            building <a href="google.com" target="_blank" rel="noopener noreferrer">mechanical keyboards</a>,
                            and playing video games.
                        </p>                    
                    </li>
                    <li>
                        <p className="aboutitem">
                            My goal with this website is to give you an insight into what I'm up to and what I have to
                            show to those interested. This includes projects that I am currently working on or have
                            completed, as well as my resume.
                        </p>                    
                    </li>
                </ul>
            </div>
            <div className="aboutimage">
                <img src={Me} alt="Me Graduating Undergrad"/>
            </div>
        </div>
    );
}

export default about;