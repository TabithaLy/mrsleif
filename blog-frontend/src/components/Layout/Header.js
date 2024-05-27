import React, { useState, useEffect } from 'react';
import '../utils/main.css';
import blogHero from '../utils/images/blogHero.jpg';
import { Link } from 'react-router-dom';
import LogoutButton from '../Auth/LogoutButton';

import AtriaBloggerBadge from '../utils/images/AtriaBloggerBadge.png';
import netgalleyMember from '../utils/images/netgalleyMember.png';
import netgallyReviewer from '../utils/images/netgallyReviewer.png';
import reviews500 from '../utils/images/reviews500.png';
import top1goodreads from '../utils/images/top1goodreads.png';

function Header({ handleSearch, isLoggedIn, onLogout }) { // Receive cardContent as a prop

    const [searchQuery, setSearchQuery] = useState('');
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log("Token retrieved from localStorage:", token);
        console.log("isLoggedIn set to:", !!token);
    }, []);

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

                {/* Login, register, and logout buttons */}
                <div className="auth-buttons">
                    {!isLoggedIn && (
                        <>
                            <Link to="./Auth/LoginForm" className="auth-button">Login</Link>
                            <Link to="./Auth/RegisterForm" className="auth-button">Register</Link>
                        </>
                    )}
                    {isLoggedIn && <LogoutButton onLogout={onLogout} />}
                </div>

                {/* Create Post Link */}
                {isLoggedIn && (
                    <div className="center-container">
                        <Link to="/create-post" className="create-post-button">Create Post</Link>
                    </div>
                )}

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