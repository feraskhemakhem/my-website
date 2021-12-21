import React from 'react';
import './pages.css';
import Me from '../assets/me.jpg';

function Home(){
    return(
        <div className="home">
            <div className="hometext">
                <h1 className="hometitle">About Me</h1>
                <ul className="ulist">
                    <li>
                        <p className="aboutitem">
                            Howdy! My name is Feras Khemakhem and I'm currently a Master's students at 
                            Texas A&M University (Whoop!). I revel in sharing things I enjoy with people.
                            This drives my passion in Computer Graphics and Game Development, as an avid
                            gamer.
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
                </ul>
            </div>
            <div className="homeimage">
                <img src={Me} alt="Me Graduating Undergrad"/>
            </div>
        </div>
    );
}

export default Home;