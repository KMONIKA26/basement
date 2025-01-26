import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <section className="services">
            <h2>Our Services</h2>
            <div className="services-grid">
                <div className="service-item">
                    <h3>Kitchen Remodeling</h3>
                    <p>Transform your kitchen with modern designs.</p>
                </div>
                <div className="service-item">
                    <h3>Bathroom Remodeling</h3>
                    <p>Create a relaxing space with a new bathroom design.</p>
                </div>
                <div className="service-item">
                    <h3>Room Additions</h3>
                    <p>Expand your home with beautiful room additions.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
