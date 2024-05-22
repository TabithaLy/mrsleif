import React, { useState } from 'react';
import './utils/main.css';
import Header from './Header';
import Home, { cardContent } from './pages/Home';
import Footer from './Footer';
import fangsReview from './utils/images/fangsReview.jpg';

export default function BlogContainer() {

    const [filteredContent, setFilteredContent] = useState(cardContent);

    const handleSearch = (searchQuery) => {

        const filteredResults = cardContent.filter((card) => {
            // Implement search logic here
            return (
                card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                card.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                card.publisher.toLowerCase().includes(searchQuery.toLowerCase()) ||
                card.fangs.toLowerCase().includes(searchQuery.toLowerCase())
            );

        });
        setFilteredContent(filteredResults);
    };

    return (
        <div>
            {/* Main content */}
            <div className="whole-page">
                <Header handleSearch={handleSearch} />
                <Home cardContent={filteredContent} />
                <div className="link-container">
                    <a href="https://www.mrsleifs.com/2022/" target="_blank" rel="noopener noreferrer">
                        For posts older than 2023, visit Mrs. Leif's Original Blog
                    </a>
                </div>
                <Footer />
            </div>
            {/* Left image */}
            <img src={fangsReview} alt="Left" className='left-image' />
        </div>
    );
}