import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import your custom CSS file for styling
import resumePDF from '../files/SuriyaResume.pdf'

function Navbar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
        setIsMenuOpen(!isMenuOpen);
    };

    const downloadResume = () => {
        // Use the imported resumePDF as the download URL
        const link = document.createElement('a');
        link.href = resumePDF;
        link.setAttribute('download', true);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    

    return (
        <nav className="navbar navbar-expand-sm navbar-light">
            <div className="container custom-container">
                <Link to="/" className="navbar-brand">Suriya M</Link>
                <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    )}
                </button>

                <div className={`collapse navbar-collapse justify-content-end ${isCollapsed ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            {/* Add onClick event to trigger resume download */}
                            <Link to="#" className="nav-link" onClick={downloadResume}>Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
