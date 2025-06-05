import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
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
    fontFamily: 'Arial, sans-serif'
  };

  const mapStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '12px',
    marginTop: '20px',
  };

  // Default center coordinates (Example: New York City)
  const center = {
    lat: 40.7128,
    lng: -74.0060,
  };
  

  const buttonStyle = {
    padding: '10px 25px',
    borderRadius: '25px',
    border: 'none',
    backgroundColor: '#FF00FF', // using accentColor from style
    color: '#F0F0F0',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'block',
    margin: '0 auto',
  };

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div style={containerStyle}>
      <button onClick={toggleMap} style={buttonStyle}>
        {showMap ? 'Hide Map' : 'SHOW ON MAP'}
      </button>

      {showMap && (
        <LoadScript googleMapsApiKey="AIzaSyAOEn22BmaLt8GOckWmyTcVS54R-CCT8vU">
          <GoogleMap mapContainerStyle={mapStyle} center={center} zoom={12}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
};

export default Map;