import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Gallery App | Unsplash API</span>
            </div>
        </nav>
    );
}

export default Header;