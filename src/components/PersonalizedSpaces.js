import React, { useState } from "react";
import './PersonalizedSpaces.css';  // Import custom styles for the "Why Choose Us" section
import FreeConsultationModal from "./FreeConsultationModal"; // Import the modal component

const PersonalizedSpaces= () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  return (
    <div className='pSection'>
      {/* Hero Section */}
      <div className="hero-section text-white text-center d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url("./6163.jpg")' }}>
        <div className="hero-content">
          <h1 className="fw-bold">IN 6–8 WEEKS, FINISH YOUR BASEMENT</h1>
          <p>
          The average basement is completed by MyCompany in 6–8 weeks, depending on how complicated the project is!
          </p>
          <button className="btn btn-hero mt-3" onClick={() => setShowModal(true)}>Start Your Basement</button>
        </div>
      </div>

      {/* Personalized Spaces Section */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="video-wrapper position-relative">
              {/* Dummy Placeholder Video */}
              <img
                            src="./custom.jpeg"
                            alt="kitchen"
                            className="img-fluid"
                        />
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold">Customized Areas</h2>
            <p>
            Let's say you are prepared to move forward with your new basement finish or renovation. If so, we encourage you to collaborate with our skilled basement remodelers to create a solution that maximizes your available space. We are committed to offering basement renovations that let you make any kind of space in your house, from game rooms and movie theaters to additional bedrooms to accommodate your expanding family. We can construct a basement that will improve your quality of life. We move swiftly to reduce any interruptions to your regular routine.
            </p>
            <button className="btn btn-outline-dark mt-3 mb-3" onClick={() => setShowModal(true)}>
              Start Your Basement
            </button>
          </div>
        </div>
      </div>
      <FreeConsultationModal show={showModal} onHide={() => setShowModal(false)} />

    </div>
  );
};

export default PersonalizedSpaces;
