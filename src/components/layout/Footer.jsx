import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='navbar fixed-bottom bg-light'>
            <div className="footer">
                {""}
                Ruggeri Juan | &copy; {new Date().getFullYear()}{""}
            </div>
        </footer>
    );
}

export default Footer;