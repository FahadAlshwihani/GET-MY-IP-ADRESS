import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const containerStyle = {
    backgroundColor: '#0A0A23',
    color: '#F0F0F0',
    padding: '20px',
    accentColor: '#FF00FF',
    secondaryAccentColor: '#00FFFF',
};

const FindMyip = () => {
    const [ipAddress, setIpAddress] = useState('');

    // Fetch the IP address from the API
    const fetchIP = async () => {
        try {
            const response = await fetch('https://api.ipify.org');
            const data = await response.text();
            setIpAddress(data);
        } catch (error) {
            console.error('Failed to fetch IP:', error);
        }
    };

    useEffect(() => {
        fetchIP();
    }, []);

    // Handle copying the IP address to the clipboard
    const handleCopyIp = () => {
        navigator.clipboard.writeText(ipAddress)
            .then(() => {
                toast.success('IP Address copied to clipboard!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                toast.error('Failed to copy IP address.');
            });
    };

    return (
        <>
            <ToastContainer />
            <div className="container">
                <div className="row mt-5 d-flex justify-content-center">
                    <div className="col-sm-7">
                        <div className="card rounded-pill">
                            <div className="card-header rounded-pill">
                                <div className="card-body">
                                    <div style={containerStyle} className="rounded-pill">
                                        <h2 style={{ textAlign: 'center' }}><strong>Your IP Address is:</strong></h2>
                                    </div>
                                    <h2
                                        className='mt-3'
                                        style={{ textAlign: 'center', cursor: 'pointer' }}
                                        onClick={handleCopyIp}
                                    >
                                        {ipAddress}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FindMyip;
