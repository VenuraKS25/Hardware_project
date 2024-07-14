import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TitleBar.css';
import logo from '../Assests/logo.png';

const Titlebar = () => {
    const location = useLocation();

    // Determine button text and link based on the current route
    const buttonText = location.pathname === '/' ? 'Admin Login' : 'Back to Home';
    const buttonLink = location.pathname === '/'  ? '/admin-login' : '/';

    return (
        <nav>
            <Link to="/user-portal">
                <img className='logo' src={logo} alt="UoM Logo" />
            </Link>
            <ul>
                <li className="title-bar-btn-container">
                    <Link to={buttonLink} style={{ color: 'inherit', textDecoration: 'none' }}>
                        <button className='title-bar-btn'>{buttonText}</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Titlebar;
