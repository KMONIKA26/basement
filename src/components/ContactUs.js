import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // You can also use the `react-bootstrap-icons` package.

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Home Theater",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");  // Basic form submission handling
  };

  return (
    <>
    <header className="about-header text-center py-5" style={{ backgroundImage: 'url("./1804.jpg")', backgroundSize: 'cover' }}>
    <h1>Contact US</h1>
  </header>
    <div id="contact-us" className="contact-us py-5">
      <Container>
        <Row className="text-center py-5">
          <Col md={12}>
            <h2>We'd Love to Hear From You</h2>
            <p>Fill out the form below and we will get back to you as soon as possible!</p>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formProjectType">
                <Form.Label>Project Type</Form.Label>
                <Form.Control
                  as="select"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                >
                  <option>Home Theater</option>
                  <option>Living Room</option>
                  <option>Home Gym</option>
                  <option>Kitchen</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>

          <Col md={6}>
            <h3>Contact Information</h3>
            <p>
              <strong>Address:</strong> 123 Basement Blvd, Suite 100, Your City, State, Zip
            </p>
            <p>
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p>
              <strong>Email:</strong> contact@yourcompany.com
            </p>

            <h4>Follow Us</h4>
            <div className="d-flex justify-content-start">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaFacebook size={30} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaInstagram size={30} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default ContactUs;
