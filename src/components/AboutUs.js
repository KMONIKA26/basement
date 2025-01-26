import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FreeConsultationModal from "./FreeConsultationModal"; // Import the modal component

const AboutUs = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  return (
    <div className="about-us">
      <header className="about-header text-center text-white py-5" style={{ backgroundImage: 'url("./modern-urban-gym.jpg")', backgroundSize: 'cover' }}>
        <h1>Transforming Basements into Dream Spaces</h1>
      </header>

      <Container className="py-5">
        <Row>
          <Col md={12}>
            <h2 className="text-center">Your Trusted Basement Remodeling Experts</h2>
            <p>
              At [Your Company Name], we specialize in creating functional, stylish, and personalized basement spaces. From cozy home theaters to fully finished living areas, our team of experienced professionals ensures that every project exceeds expectations. We take pride in using high-quality materials, expert craftsmanship, and a keen eye for design.
            </p>
          </Col>
        </Row>

        <Row className="py-4">
          <Col md={12}>
            <h3 className="text-center">Our Mission</h3>
            <p className="text-center">
              Our mission is simple: to transform your basement into a space that fits your needs and lifestyle. We work closely with our clients to understand their vision and deliver innovative, durable, and aesthetically pleasing results.
            </p>
          </Col>
        </Row>

        <Row className="py-4">
          <Col md={12}>
            <h3 className="text-center">Why Choose Us?</h3>
            <ul className="list-unstyled text-center">
              <li><strong>Expert Designers</strong>: Our team is made up of talented designers who stay ahead of industry trends.</li>
              <li><strong>Quality Workmanship</strong>: We focus on perfection and attention to detail, ensuring your project is built to last.</li>
              <li><strong>Custom Solutions</strong>: From design to completion, every basement is customized to meet your unique requirements.</li>
              <li><strong>Affordable Pricing</strong>: We believe in providing excellent value without compromising on quality.</li>
              <li><strong>Customer Satisfaction</strong>: Our clients are at the heart of everything we do – we make sure you're thrilled with the final result.</li>
            </ul>
          </Col>
        </Row>

        <Row className="py-4 text-center">
          <Col>
            <Button variant="primary" href="#contact-us" onClick={() => setShowModal(true)}>Get Your Free Consultation</Button>
          </Col>
        </Row>

      {/* Modal for Free Consultation Form */}
      <FreeConsultationModal show={showModal} onHide={() => setShowModal(false)} />
      </Container>
    </div>
  );
};

export default AboutUs;
