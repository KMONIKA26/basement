import React from 'react';
import ScheduleConsultation from './ScheduleConsultation';
import Testimonials from './Testimonials'; // Import the Testimonials component
import PersonalizedSpaces from './PersonalizedSpaces';
import RemodelingProcess from './RemodelingProcess';
import RangeOfServices from './RangeOfServices';
const HeroSection = () => {

    return (
        <>
        <section className="hero-section text-light" style={{ position: 'relative', height: 'auto' }}>
            <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./interior-apartment-design.jpg" className="d-block w-100" alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Modern Interior Designs</h1>
                            <p>Bring luxury to you with our expert designs.</p>
                            <a href="/services" className="btn btn-warning btn-lg">Get Started</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./22023.jpg" className="d-block w-100" alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Expand Your Living Space</h1>
                            <p>We create beautiful room additions tailored to your needs.</p>
                            <a href="/services" className="btn btn-warning btn-lg">Explore More</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./modern-urban-gym.jpg" className="d-block w-100" alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Your Dream GYM Awaits</h1>
                            <p>Transform your GYM into a beautiful space.</p>
                            <a href="/services" className="btn btn-warning btn-lg">Get Started</a>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
        <ScheduleConsultation/>
        <PersonalizedSpaces/>
        <RemodelingProcess/>
        <RangeOfServices/>
        <Testimonials/>
        {/* 
        <Faqs/> */}
        </>
        
    );
};

export default HeroSection;
