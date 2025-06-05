import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FindMyip from '../Components/FindMyip'; // Adjust path if necessary
import IpLocation from '../Components/IpLocation'; // Corrected casing
import Home from '../Components/Home'; // Adjust path if necessary

const MainLayout = () => {
    const containerStyle = {
        backgroundColor: '#0A0A23', // Deep Navy
        color: '#F0F0F0', // Light Gray
        padding: '20px',
        accentColor: '#FF00FF', // Magenta
        secondaryAccentColor: '#00FFFF', // Aqua
    };

    return (
        <Routes>
            <Route path="/findmyip" element={<FindMyip />} />
            <Route path="/iplocation" element={<IpLocation />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default MainLayout;