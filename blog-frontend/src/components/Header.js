import React, { useState } from 'react';
import './utils/main.css';
import blogHero from './utils/images/blogHero.jpg';

import AtriaBloggerBadge from './utils/images/AtriaBloggerBadge.png';
import netgalleyMember from './utils/images/netgalleyMember.png';
import netgallyReviewer from './utils/images/netgallyReviewer.png';
import reviews500 from './utils/images/reviews500.png';
import top1goodreads from './utils/images/top1goodreads.png';

function Header({ handleSearch }) { // Receive cardContent as a prop

    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchQuery);
    };

    return (
        <div>
            {/* Header image */}
            <img alt="MrsLeif's Two Fangs About It" src={blogHero} width="100%"></img>
            <div className="home-container">
                <form onSubmit={handleSubmit} className="search">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleChange}
                        placeholder="Search..."
                        className="search-bar"
                    />
                    <button type="submit" className="search-button">Search</button>
                </form>

                {/* Badges row */}
                <div className="badges-row">
                    <img src={AtriaBloggerBadge} alt="Atria Blogger" className="badge" />
                    <img src={top1goodreads} alt="Top 1 goodreads" className="badge" />
                    <img src={reviews500} alt="500 Reviews" className="badge" />
                    <img src={netgalleyMember} alt="Netgalley Member" className="badge" />
                    <img src={netgallyReviewer} alt="Netgalley Reviewer" className="badge" />
                </div>
            </div>
        </div>
    );
}

export default Header;