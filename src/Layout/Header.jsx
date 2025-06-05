import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IPAdress1 from '../images/ip.png'; // Adjust path if necessary

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const containerStyle = {
        backgroundColor: '#0A0A23',
        color: '#F0F0F0',
    };

    return (
        <header className="container">
            <div style={containerStyle} className="mt-1 rounded-pill">
                <div className="mb-2">
                    <div className="card-body">
                        <div className="container d-flex justify-content-between align-items-center">
                            <span>
                                <img src={IPAdress1} alt="Logo" style={{ height: '40px', marginRight: '1px' }} />
                            </span>
                            <h3 className="text-white mb-0"><strong>GET YOUR IP ADDRESS</strong></h3>

                            {/* Burger menu button */}
                            <button
                                className="navbar-toggler d-md-none"
                                type="button"
                                onClick={toggleMenu}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    outline: 'none',
                                    cursor: 'pointer',
                                }}
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            {/* Desktop menu */}
                            <ul className="list-inline mb-0 d-none d-md-flex align-items-center">
                                <li className="list-inline-item mx-3">
                                    <Link to="/" className="text-white text-decoration-none">Home</Link>
                                </li>
                                <li className="list-inline-item mx-3">
                                    <Link to="/About" className="text-white text-decoration-none">About us</Link>
                                </li>
                                <li className="list-inline-item mx-3">
                                    <Link to="/Support" className="text-white text-decoration-none">Support</Link>
                                </li>
                                <li className="list-inline-item mx-2">
                                    <a href="https://www.linkedin.com/in/fahad-alshwihani" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-linkedin text-white"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item mx-2">
                                    <a href="https://github.com/FahadAlshwihani" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-github text-white"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item mx-2">
                                    <a href="mailto:fhdalshammri34@gmail.com">
                                        <i className="bi bi-envelope text-white"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Mobile menu */}
                        {isMenuOpen && (
                            <ul className="list-unstyled mt-3 d-md-none" style={{ backgroundColor: '#0A0A23', borderRadius: '50px', padding: '15px' }}>
                                <li className="mb-3">
                                    <Link to="/" className="text-white text-decoration-none" onClick={() => setIsMenuOpen(false)}>Home</Link>
                                </li>
                                <li className="mb-3">
                                    <Link to="/About" className="text-white text-decoration-none" onClick={() => setIsMenuOpen(false)}>About us</Link>
                                </li>
                                <li className="mb-3">
                                    <Link to="/Support" className="text-white text-decoration-none" onClick={() => setIsMenuOpen(false)}>Support</Link>
                                </li>
                                <li className="mb-2 d-flex">
                                    <a href="https://www.linkedin.com/in/fahad-alshwihani" target="_blank" rel="noopener noreferrer" className="me-3">
                                        <i className="bi bi-linkedin text-white"></i>
                                    </a>
                                    <a href="https://github.com/FahadAlshwihani" target="_blank" rel="noopener noreferrer" className="me-3">
                                        <i className="bi bi-github text-white"></i>
                                    </a>
                                    <a href="mailto:fhdalshammri34@gmail.com">
                                        <i className="bi bi-envelope text-white"></i>
                                    </a>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            {/* Inline CSS for burger icon */}
            <style>{`
                .navbar-toggler-icon {
                    width: 25px;
                    height: 2px;
                    background-color: white;
                    position: relative;
                    display: block;
                }
                .navbar-toggler-icon::before,
                .navbar-toggler-icon::after {
                    content: '';
                    width: 25px;
                    height: 2px;
                    background-color: white;
                    position: absolute;
                    left: 0;
                    transition: all 0.3s;
                }
                .navbar-toggler-icon::before {
                    top: -8px;
                }
                .navbar-toggler-icon::after {
                    top: 8px;
                }
            `}</style>
        </header>
    );
};

export default Header;