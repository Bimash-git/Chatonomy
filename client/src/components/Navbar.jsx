import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    Chatonomyyy
                </div>
                <div className='nav-elements'>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
