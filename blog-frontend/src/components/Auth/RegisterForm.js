import React, { useState } from 'react';

const RegisterForm = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Send registration request to the backend
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            // Check if the registration was successful
            if (response.ok) {
                alert('Registration successful! You can now login.');
                // You can optionally redirect the user to the login page
            } else {
                // Handle registration error
                alert('Registration failed. Please try again with a different username.');
            }
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle network or server errors
            alert('Registration failed. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='form-container'>
            <h2>Register</h2>
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
            <button className='submit-button' type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;