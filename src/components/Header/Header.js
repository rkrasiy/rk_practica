import React from 'react';
import "./Header.css";
import logo from "../../assets/images/logo.svg";
import {Link} from 'react-router-dom'
const Header = (props) => {
    return (
    <header className="Header">
        <div className="column">
            <img src={logo} className="logo" alt="logo"/>
            <div className="column">Dashboard</div>
        </div>
        <nav>
            <Link to="/login">Log out</Link>
            <Link to="/dashboard">Panel</Link>
        </nav>
    </header>
    )
}

export default Header