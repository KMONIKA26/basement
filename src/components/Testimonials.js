import React from 'react';
import './Testimonials.css'; // Import custom styles for testimonials

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            photo: "https://placehold.co/100", // Replace with real image URL
            text: "The team did an amazing job remodeling our kitchen! The project was completed on time, and the quality exceeded our expectations. Highly recommend them!",
        },
        {
            name: "Jane Smith",
            photo: "https://placehold.co/100", // Replace with real image URL
            text: "We couldn't be happier with the new look of our bathroom! The attention to detail was exceptional, and the whole process was stress-free.",
        },
        {
            name: "Michael Brown",
            photo: "https://placehold.co/100", // Replace with real image URL
            text: "Our living room remodel was a game-changer! The team was professional, efficient, and really listened to our needs. We love the new space!",
        },
    ];

    return (
        <section id="testimonials" className="py-5 bg-light">
            <div className="container text-center">
            <h2 className="fw-bold mb-4">What our customers says</h2>
                <div className="row">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card shadow-sm border-light">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <img
                                            src={testimonial.photo}
                                            alt={testimonial.name}
                                            className="rounded-circle"
                                            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                        />
                                        <div className="ms-3">
                                            <h5 className="card-title mb-0">{testimonial.name}</h5>
                                        </div>
                                    </div>
                                    <p className="card-text">{testimonial.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
