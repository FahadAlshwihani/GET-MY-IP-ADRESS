import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header' ; // Import Header component
import FindMyip from '../Components/FindMyip'; // Adjust path if necessary
import IpLocation from '../Components/IpLocation'; // Corrected casing
import Footer from '../Layout/Footer' ; // Import Footer component

const Home = () => {
    const containerStyle = {
        backgroundColor: '#0A0A23', // Deep Navy
        color: '#F0F0F0', // Light Gray
        padding: '20px',
        accentColor: '#FF00FF', // Magenta
        secondaryAccentColor: '#00FFFF', // Aqua
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div>
                <header>
                    <Header />
                </header>

                <main>
                   <div>
                        <FindMyip />
                        <IpLocation />
                        <div className="row mt-2 d-flex justify-content-center">
                            <div className="col-sm-8">
                                <div className="card-body rounded mt-1">
                                    <div style={containerStyle} className="m-1">
                                        <h1 className="d-flex justify-content-start m-5"><strong>What Is My IP Address?</strong></h1>
                                        <p className="d-flex justify-content-start m-5"><small>Your IP (Internet Protocol) address is a unique number assigned to your device when you connect to the internet. It acts like a digital address that allows websites, services, and devices to locate and communicate with you.</small></p>
                                        <br /><p className="border-bottom"></p>
                                        <h1 className="d-flex justify-content-start m-5"><strong>There are two main types of IP addresses:</strong></h1>
                                        <p className="d-flex justify-content-start m-5"><i className="bi bi-caret-right"></i><small>IPv4: The most common format (e.g., 192.168.1.1)</small></p>
                                        <p className="d-flex justify-content-start m-5"><i className="bi bi-caret-right"></i>IPv6: A newer, longer format for a growing number of devices (e.g., 2001:0db8:85a3::8a2e:0370:7334)</p>
                                        <br /><p className="border-bottom"></p>
                                        <h1 className="d-flex justify-content-start m-5"><strong>Why Do You Need to Know Your IP?</strong></h1>
                                        <p className="d-flex justify-content-start m-5"><i className="bi bi-caret-right"></i>Troubleshooting network issues</p>
                                        <p className="d-flex justify-content-start m-5"><i className="bi bi-caret-right"></i>Setting up remote access</p>
                                        <p className="d-flex justify-content-start m-5"><i className="bi bi-caret-right"></i>Configuring firewalls or VPNs</p>
                                        <p className="d-flex justify-content-start m-5"><i className="bi bi-caret-right"></i>Understanding your online privacy</p>
                                    </div>
                                    <div className="row-sm-9 mt-3 d-flex justify-content-center">
                                        <div className="col">
                                            <div className="card rounded-">
                                                <div className="card-header rounded-">
                                                    <div className="card-body">
                                                        <br /><h5>Developed with <small><i className="bi bi-heart-fill" style={{ color: 'red' }}></i></small> by <strong>ENG.FAHAD </strong>Follow me on social media to keep up to date!</h5><br />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <footer>
                     <div className="d-flex justify-content-center mt-2">
                    <small><button className="btn btn-primary back-to-top" onClick={scrollToTop}>Back to Top</button></small>
                </div>
                    <Footer />
                </footer>
            </div>
        </>
    );
}

export default Home;