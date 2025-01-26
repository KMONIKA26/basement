import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import './OtherServices.css'
const OtherServices = () => {
  // Sample services with placeholder images and description text
  const services = [
    { 
      title: "Custom Basement Designs", 
      image: "./custom.jpeg", 
      description: "Our experts will help design a basement that matches your unique style and needs. From floor plans to furniture placement, we’ve got you covered."
    },
    { 
      title: "Home Theater Setup", 
      image: "./2149500595.jpg", 
      description: "Enjoy the ultimate home theater experience with custom audio and video solutions, comfortable seating, and stunning visuals."
    },
    { 
      title: "Home Gym Solutions", 
      image: "./modern-urban-gym.jpg", 
      description: "Build the perfect fitness space with customized equipment, flooring, and layout that suits your workout needs."
    },
    { 
      title: "Kitchen Remodels", 
      image: "./kitchen.jpeg", 
      description: "Create your dream kitchen with modern appliances, smart storage solutions, and elegant countertops."
    },
    { 
      title: "Living Room Makeovers", 
      image: "./livingroom.jpeg", 
      description: "Reimagine your living room with stylish furniture, lighting, and layout that will enhance the comfort and functionality of your space."
    },
    { 
      title: "Storage Solutions", 
      image: "storage.jpeg", 
      description: "Maximize your space with custom shelving, cabinetry, and creative storage ideas for your basement."
    },
    { 
      title: "Office Spaces", 
      image: "./office.jpeg", 
      description: "Transform your basement into a productive home office with ergonomic furniture, proper lighting, and soundproofing."
    },
    { 
      title: "Bar & Entertainment Areas", 
      image: "./bar.jpeg", 
      description: "Create the ultimate entertainment area with a custom bar, game room, or lounge area for hosting guests and having fun."
    }
  ];

  return (
    <div className="service-page">
      {/* Top Section with fixed background */}
      <div className="service-header" style={{ backgroundImage: 'url("./1804.jpg")' }}>
        <div className="overlay">
          <Container className="d-flex align-items-center justify-content-start text-left text-white">
            <Row>
              <Col md={6} className="mt-4">
                <h1>Transform Your Basement into a Dream Space</h1>
                <p>
                  Whether you're looking to add a cozy home theater, a home gym, or a custom entertainment area,
                  our experts will work with you to create a basement that meets your vision and needs.
                </p>
                <Button variant="light" className="mt-4" href="#services">
                  Start Your Project
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* Services Section */}
      <Container id="services" className="py-5">
        <Row>
          {services.map((service, index) => (
            <Col key={index} md={4} className="mb-4">
              <div className="service-card">
                <img src={service.image} alt={service.title} className="img-fluid" />
                <h3 className="mt-3">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OtherServices;
