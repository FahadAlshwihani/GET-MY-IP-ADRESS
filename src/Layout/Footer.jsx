import React from 'react';

const Footer = () => {
    const containerStyle = {
        backgroundColor: '#0A0A23',
        color: '#F0F0F0',
    };

    return (
        <footer className="container">
            <div className="card rounded-pill mt-3" style={containerStyle}>
                <div className="card-header rounded-pill">
                    <div className="card-body">
                        <div className="container d-flex justify-content-between align-items-center">
                            <p className="text-white mb-0">© GET YOUR IP ADDRESS by <strong>ENG.FAHAD</strong>. All rights reserved.</p>
                            <ul className="list-inline mb-0">
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
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;