import React from 'react';
import './card.css';

// based on https://www.youtube.com/watch?v=Q3I_NwaCZI8

function Card({title, imageUrl, HowItWorks, Tools, Link, LinkText}) {
    return(
        <div className="card-container">
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-content">
                <div className="image-container">
                    <img src={imageUrl} alt=''/>
                </div>
                <div className="card-body">
                    <p>{HowItWorks}</p><br/>
                    <div className="tools-link">
                        <div className="card-tools">
                            <h5>Tools:</h5>
                            <p>{Tools}</p>
                        </div>
                        <a href={Link} target="_blank" rel="noopener noreferrer">{LinkText}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;