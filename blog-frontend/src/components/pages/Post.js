import React, { useState, useRef } from 'react';
import '../utils/main.css';
import { generateAmazonLink } from '../utils/generateAmazonLink';
import { generateBarnesNobleLink } from '../utils/generateBarnesNobleLink';

export default function Post(props) {

    const { card } = props;

    const amazonLink = generateAmazonLink(card.title, card.author);
    const barnesNobleLink = generateBarnesNobleLink(card.title, card.author);

    const [isExpanded, setIsExpanded] = useState(false);
    const expandedCardRef = useRef(null);

    const toggleDetails = () => {
        setIsExpanded(!isExpanded);
    };

    // Function to handle closing the expanded card
    const closeExpandedCard = () => {
        setIsExpanded(false);
    };

    if (!card) {
        return <div>No data available</div>;
    }

    return (
        <div className="carousel-container">
            <div className="card-wrapper">
                <button className="button" onClick={toggleDetails}>
                    <img src={card.image} alt={card.title} className="card-image" />
                </button>
                {isExpanded && (
                    <div className="expanded-card-overlay" ref={expandedCardRef}>
                        {/* Exit button */}
                        <button className="exit-button" onClick={closeExpandedCard}>X</button>
                        <div className="expanded-card">
                            <h2>{card.title}</h2>
                            <h3>{card.author}</h3>
                            <h3>{card.publisher}</h3>
                            <img src={card.imageS} alt="Sinopsis" />
                            <p>{card.sinopsis}</p>
                            <img src={card.imageR} alt="Review" />
                            <p>{card.review}</p>
                            <h3>{card.cliffhanger}</h3>
                            <h2>{card.fangs}</h2>
                            <div className="purchase-links">
                                <a href={amazonLink} target="_blank" rel="noopener noreferrer" className="purchase-link">Amazon</a>
                                <a href={barnesNobleLink} target="_blank" rel="noopener noreferrer" className="purchase-link">Barnes & Noble</a>
                            </div>
                            <p>{card.date}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}