import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useHistory for redirecting
import './SceduleConsultation.css';  // Import custom CSS for styling

const ScheduleConsultation = () => {
    return (
        <div className="bg-dark text-light py-5">
            <div className="container">
                {/* Top Row */}
                <div className="row mb-5">
                    <div className="col-md-4 mb-2">
                        <div className="hover-down position-relative">
                            <img
                                src="./6163.jpg"
                                alt="Express Basements"
                                className="img-fluid"
                            />
                            <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                                {/* <h5 className="fw-bold">EXPRESS BASEMENTS</h5> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2">
                        <div className="hover-down position-relative">
                            <img
                                src="./modern-urban-gym.jpg"
                                alt="Custom Basements"
                                className="img-fluid"
                            />
                            <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                                {/* <h5 className="fw-bold">CUSTOM BASEMENTS</h5> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2">
                        <div className="hover-down position-relative">
                            <img
                                src="./2149500595.jpg"
                                alt="Remodeling"
                                className="img-fluid"
                            />
                            <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                                {/* <h5 className="fw-bold">REMODELING</h5> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Title Section */}
                <div className="text-center mb-5">
                <h2 className="fw-bold mb-4">
                    MyCompany transforms unfinished basements into amazing spaces!
                    </h2>
                </div>

                {/* Middle Content Row */}
                <div className="row mb-5">
                    <div className="col-md-4 mb-2">
                        <p>
                        An unfinished basement is unused space that you could be enjoying. MyCompany Basements can change your downstairs into a new guest bedroom for your favorite visitors, a movie theater for fun movie nights with popcorn, or a wet bar for cocktails with friends in approximately 40 days. Your home's worth will skyrocket, and your family will thank you!
                        </p>
                    </div>
                    <div className="col-md-4 mb-4 hover-overlay mb-2">
                        <img
                            src="./kitchen.jpeg"
                            alt="kitchen"
                            className="img-fluid"
                        />
                        <p className="text-container">Kitchen</p>
                    </div>
                    <div className="col-md-4 mb-4 hover-overlay mb-2">
                        <img
                            src="./modern-urban-gym.jpg"
                            alt="GYM"
                            className="img-fluid"
                        />
                        <p className="text-container">GYM</p>
                    </div>
                    <div className="col-md-4 hover-overlay mb-2">
                        <img
                            src="2149500595.jpg"
                            alt="Theater"
                            className="img-fluid"
                        />
                        <p className="text-container">Theater</p>
                    </div>
                    <div className="col-md-4 hover-overlay mb-2">
                        <img
                            src="./storage.jpeg"
                            alt="Storage"
                            className="img-fluid"
                        />
                        <p className="text-container">Storage</p>
                    </div>
                    <div className="col-md-4 hover-overlay mb-2">
                        <img
                            src="./livingroom.jpeg"
                            alt="Living Room"
                            className="img-fluid"
                        />
                        <p className="text-container">Living Room</p>
                    </div>
                    <div className="col-md-4 hover-overlay mb-2">
                        <img
                            src="./bar.jpeg"
                            alt="Bar"
                            className="img-fluid"
                        />
                        <p className="text-container">Bar</p>
                    </div>
                    <div className="col-md-4 hover-overlay mb-2">
                        <img
                            src="./office.jpeg"
                            alt="office"
                            className="img-fluid"
                        />
                        <p className="text-container">Office</p>
                    </div>
                    <div className="col-md-4 hover-overlay mb-2">
                        <img
                            src="./custom.jpeg"
                            alt="Custom design"
                            className="img-fluid"
                        />
                        <p className="text-container">Custom Design</p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <p>
                            You can rely on the staff at MyCompany Basements for inspiration when searching for a basement finish in Colorado. You will be inspired and enthralled by our extensive portfolio of finished work, which offers insights into the potential of your basement renovation.
                            </p>
                        </div>
                        <div className="col-md-12">
                            <p>
                            We move swiftly to give you the completed area that will enhance your standard of living. For additional information regarding our basement finishing, give our staff a call at (303) 23456.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center mt-4">
                    <button className="btn btn-transparent">See More</button>
                </div>

            </div>
        </div>
    );
}

export default ScheduleConsultation;
