import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogContainer from "./components/Layout/BlogContainer";
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
// import LogoutButton from './components/Auth/LogoutButton.js';

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    const handleLogin = (token) => {
        // Handle login logic here, such as storing the token in local storage
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
        console.log('Logged in with token:', token);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };


    return (
        <Router>
            <Routes>
                <Route path="/Auth/LoginForm" element={<LoginForm onLogin={handleLogin} />} />
                <Route path="/Auth/RegisterForm" element={<RegisterForm />} />
                <Route path="/" element={<BlogContainer isLoggedIn={isLoggedIn} onLogout={handleLogout} />} />
            </Routes>
        </Router>
    );
}

export default App;
