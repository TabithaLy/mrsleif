import React from 'react';
import { useNavigate  } from 'react-router-dom';

const LogoutButton = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        onLogout();
        navigate('/');
    };

    return (
        <button className="logout-button" onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton;