import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Send login request to the backend
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            // Check if the login was successful
            if (response.ok) {
                // Retrieve the JWT token from the response
                const { token } = await response.json();
                // Store the token in localStorage
                localStorage.setItem('token', token);
                // Pass the token to the parent component for handling
                onLogin(token);
                // Redirect the user to the home page
                navigate('/');
            } else {
                // Handle login error
                alert('Invalid username or password');
            }
        } catch (error) {
            console.error('Login failed:', error);
            // Handle network or server errors
            alert('Login failed. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='form-container'>
            <h2>Login</h2>
            <input className='input-field'
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input className='input-field'
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className='submit-button' type="submit">Login</button>
        </form>
    );
};

export default LoginForm;