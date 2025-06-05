import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const IpLocation = () => {
    const [location, setLocation] = useState({ lat: 0, lng: 0 });
    const [ipAddress, setIpAddress] = useState('');
    const [geoInfo, setGeoInfo] = useState({});
    const [showInfo, setShowInfo] = useState(false);
    const [showMap, setShowMap] = useState(false);

    const containerStyle = {
        backgroundColor: '#0A0A23',
        color: '#F0F0F0',
        padding: '20px',
        accentColor: '#FF00FF',
        secondaryAccentColor: '#00FFFF',
        borderRadius: '12px',
        maxWidth: '800px',
        margin: '20px auto',
        fontFamily: 'Montserrat, sans-serif'
    };

    const mapStyle = {
        width: '100%',
        height: '400px',
        borderRadius: '100px',
        marginTop: '10px',
    };

    const center = {
        lat: location.lat,
        lng: location.lng,
    };

    const buttonStyle = {
        padding: '10px 25px',
        borderRadius: '25px',
        border: 'none',
        backgroundColor: '#FF00FF',
        color: '#F0F0F0',
        fontSize: '16px',
        cursor: 'pointer',
        display: 'block',
        margin: '0 auto',
    };

    const toggleMap = () => {
        setShowMap(!showMap);
    };

    useEffect(() => {
        getVisitorIP();
    }, []);

    const getVisitorIP = async () => {
        try {
            const response = await fetch(`https://api.ipify.org`);
            const data = await response.text();
            setIpAddress(data);
        } catch (error) {
            console.error('Failed to fetch IP:', error);
        }
    };

    const fetchIPInfo = async () => {
        try {
            const response = await fetch(`https://ipapi.co/${ipAddress}/json/`);
            const data = await response.json();
            setGeoInfo(data);
            setLocation({ lat: data.latitude, lng: data.longitude });
            setShowInfo(true);
        } catch (error) {
            console.error('Failed to fetch location info:', error);
        }
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                toast.success(`${text} copied to clipboard!`, {
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
                toast.error('Failed to copy text.');
            });
    };

    return (
        <>
            <ToastContainer />
            <div className="container">
                <div className="row mt-2 d-flex justify-content-center">
                    <div className="col-sm-8">
                        <div className="card rounded-pill">
                            <div className="card-header rounded-pill">
                                <div className="card-body">
                                    <div style={containerStyle} className="rounded-pill m-4">
                                        <label className="d-flex justify-content-center">
                                            <h2><strong><i className="bi bi-globe m-1 "></i>Your IP information</strong></h2>
                                        </label>
                                    </div>
                                    <div className="form-area text-center mt-3">
                                        <span className="input-group-text rounded-pill">
                                            <i className="bi bi-globe m-3"></i>
                                            <input type="text" className="form-control" placeholder="Enter IP Address" value={ipAddress} />
                                        </span>
                                        <button className="btn btn-primary m-4 rounded-pill" onClick={!showInfo ? fetchIPInfo : () => setShowInfo(false)}>
                                            {showInfo ? 'Hide Info' : 'Get Info'}
                                        </button>
                                    </div>
                                    {showInfo && Object.keys(geoInfo).length > 0 && (
                                        <div className="result text-center">
                                            {Object.entries(geoInfo).map(([key, value]) => (
                                                <div key={key} onClick={() => handleCopy(value)} style={{ cursor: 'pointer' }}>
                                                    <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}<br />
                                                </div>
                                            ))}
                                            <div className="rounded-pill m-5">
                                                <div style={containerStyle}>
                                                    <button onClick={toggleMap} style={buttonStyle}>
                                                        {showMap ? 'HIDE MAP' : 'SHOW ON MAP'}
                                                    </button>
                                                    {showMap && (
                                                        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                                                            <GoogleMap mapContainerStyle={mapStyle} center={center} zoom={12}>
                                                                <Marker position={center} />
                                                            </GoogleMap>
                                                        </LoadScript>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IpLocation;