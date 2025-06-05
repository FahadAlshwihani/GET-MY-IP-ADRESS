import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainLayout from './Layout/MainLayout';
import AboutUs from './Components/AboutUs';
import Support from './Components/Support';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/support" element={<Support />} />
            </Routes>
        </Router>
    );
}

export default App;