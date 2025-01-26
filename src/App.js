import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/OtherServices';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HeroSection />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<AboutUs/>} />
                <Route path="/contact" element={<ContactUs/>} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
