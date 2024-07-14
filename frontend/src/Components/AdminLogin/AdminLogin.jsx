import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';
import axios from 'axios';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/login', { email, password });
            console.log(response.data);
            // Handle successful login, e.g., redirect to dashboard
            navigate('/dashboard'); // Replace with your actual path
        } catch (err) {
            console.error(err.response.data);
            setError(err.response?.data?.error || "An error occurred. Please try again."); // Use a fallback error message
        }
    };

    return (
        <div className="ad-log-container">
            <div className="ad-log-header">
                <div className="ad-log-text">Admin Login</div>
                <div className="underline"></div>
            </div>
            <form className="ad-log-inputs" onSubmit={handleLogin}>
                <div className="ad-log-input">
                    <AccountCircleIcon fontSize="large" style={{ marginRight: '10px' }} />
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="ad-log-input">
                    <LockIcon fontSize="large" style={{ marginRight: '10px' }} />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && (
                    <div className="invalid-login">
                        {error}
                    </div>
                )}
                <div className="submit-container">
                    <button type="submit" className="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default AdminLogin;
