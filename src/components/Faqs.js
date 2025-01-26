import React, { useState } from 'react';
import './Faqs.css';  // Import custom CSS for styling

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);  // Track which FAQ is open

    const faqs = [
        {
            question: "What remodeling services do you offer?",
            answer: "We offer a wide range of remodeling services including kitchen, bathroom, living room, basement, and whole-home remodeling."
        },
        {
            question: "How long does a remodeling project take?",
            answer: "The duration of a project depends on the scope and size. Typically, smaller projects can take a few weeks, while large-scale remodels may take several months."
        },
        {
            question: "Do you provide free estimates?",
            answer: "Yes, we offer free consultations and estimates to understand your needs and budget."
        },
        {
            question: "Do you handle permits for remodeling projects?",
            answer: "Yes, we handle the necessary permits for all remodeling projects to ensure compliance with local building codes."
        },
        {
            question: "Can I stay in my home during the remodel?",
            answer: "In most cases, you can remain in your home. However, if the remodel affects major areas of the house, we may suggest temporary accommodations."
        },
        {
            question: "What is the cost of a typical remodeling project?",
            answer: "Costs vary based on the type of remodeling project, materials used, and size. We will provide a detailed estimate after our consultation."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);  // Toggle visibility of the answer
    };

    return (
        <section id="faqs" className="py-5 bg-light">
            <div className="container">
                <h2 className="display-4 mb-5 text-center">FAQs About Our Home Remodeling Services</h2>
                <div className="row">
                    {faqs.map((faq, index) => (
                        <div key={index} className="col-md-12 mb-4">
                            <div className="card border-light">
                                <div
                                    className="card-header bg-primary text-white p-3 cursor-pointer"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h5 className="mb-0">{faq.question}</h5>
                                </div>
                                {openIndex === index && (
                                    <div className="card-body bg-light p-3">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faqs;
