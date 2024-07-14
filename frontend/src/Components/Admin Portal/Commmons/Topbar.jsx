import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.png';
import './Topbar.css';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';

const Topbar = () => {
  const user = {
    name: 'Admin',
    department: 'University of Moratuwa',
  };

  return (
    <nav className="navbar navbar-expand-lg adminPanelContainer">
      <NavLink className="navbar-brand" to="/dashboard">
        <img src={logo} alt="UoM Logo" className="adminPanelLogo" />
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
        <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/dashboard">Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/visitor-registration">Visitor Registration</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/visitor-history">Visitor History</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/how-to-use">How to Use</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/add-map">Add a Map</NavLink>
          </li>
        </ul>
        <div className="navbar-text userInfo ml-auto">
          <div className="userDetails">
            <div className="userDetail">
              <PersonOutlinedIcon className="icon" />
              <span>{user.name}</span>
            </div>
            <div className="userDetail">
              <AssuredWorkloadIcon className="icon" />
              <span>{user.department}</span>
            </div>
          </div>
          <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
            <button className='btn adminPanelBtn'>Log Out</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
