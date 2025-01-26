import React from 'react';
import { Carousel } from 'react-bootstrap';
import './RangeOfServices.css';  // Import custom CSS file

const RangeOfServices = () => {
    return (
        <div>
          {/* Statistics Section */}
          <div className="stats-section text-white text-center py-4">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <h2>2789</h2>
                  <p>Completed Basements</p>
                </div>
                <div className="col-md-3">
                  <h2>53</h2>
                  <p>Team Members</p>
                </div>
                <div className="col-md-3">
                  <h2>250+</h2>
                  <p>5 Star Reviews</p>
                </div>
                <div className="col-md-3">
                  <h2>22</h2>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
    
          {/* Video Section */}
          <div className="video-section text-center position-relative">
            <img
              src="./livingroom.jpeg"
              alt="Placeholder"
              className="img-fluid" style={{height:'100vh'}}
            />

          </div>
    
       {/* Cities We Serve Section - 3 Images per Slide */}
      <div className="cities-section text-white text-center py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">Cities We Serve</h2>
          <Carousel>
            {/* Slide 1 */}
            <Carousel.Item>
              <div className="row">
                <div className="col-md-4">
                  <div className="city-card">
                    <img
                      src="https://placehold.co/400x300"
                      alt="Fort Collins"
                      className="img-fluid"
                    />
                    <div className="city-caption">
                      <h3>FORT COLLINS</h3>
                      <p>COLORADO</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="city-card">
                    <img
                      src="https://placehold.co/400x300"
                      alt="Berthoud"
                      className="img-fluid"
                    />
                    <div className="city-caption">
                      <h3>BERTHOUD</h3>
                      <p>COLORADO</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="city-card">
                    <img
                      src="https://placehold.co/400x300"
                      alt="Arvada"
                      className="img-fluid"
                    />
                    <div className="city-caption">
                      <h3>ARVADA</h3>
                      <p>COLORADO</p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
              <div className="row">
                <div className="col-md-4">
                  <div className="city-card">
                    <img
                      src="https://placehold.co/400x300"
                      alt="Boulder"
                      className="img-fluid"
                    />
                    <div className="city-caption">
                      <h3>BOULDER</h3>
                      <p>COLORADO</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="city-card">
                    <img
                      src="https://placehold.co/400x300"
                      alt="Denver"
                      className="img-fluid"
                    />
                    <div className="city-caption">
                      <h3>DENVER</h3>
                      <p>COLORADO</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="city-card">
                    <img
                      src="https://placehold.co/400x300"
                      alt="Longmont"
                      className="img-fluid"
                    />
                    <div className="city-caption">
                      <h3>LONGMONT</h3>
                      <p>COLORADO</p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default RangeOfServices;
