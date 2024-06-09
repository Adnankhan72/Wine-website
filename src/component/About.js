// src/components/About.js
import React from 'react';
import './About.css';
import adnan3 from './image/adnan3.jpg';

const About = () => (
    <>
        <section className="hero">
            <div className="hero-content">
                <h1 id="about">About Us</h1>
                <p>Learn more about our company and team.</p>
            </div>
        </section>

        <section className="about">
            <div className="container">
                <h2>Our Mission</h2>
                <p>We aim to provide exceptional service and bring innovative solutions to our clients.</p>

                <h2>Our Team</h2>
                <div className="team">
                    <div className="team-member">
                        <img src={adnan3} alt="Adnan Khan" />
                        <h3>Adnan Khan</h3>
                        <p>CEO</p>
                    </div>
                    <div className="team-member">
                        <img src={adnan3} alt="John Smith" />
                        <h3>John Smith</h3>
                        <p>Software Developer</p>
                    </div>
                    <div className="team-member">
                        <img src={adnan3} alt="Johnson" />
                        <h3>Johnson</h3>
                        <p>Marketing Head</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="contact-info">
            <div className="container">
                <h2>Contact Information</h2>
                <p>Email: <a href="mailto:adnankhan958975@gmail.com">adnankhan958975@gmail.com</a></p>
                <p>Phone: <a href="tel:+919589750311">+91 9589750311</a></p>
                <p>Address: 123 Main Street, Anytown, INDIA</p>
            </div>
        </section>
    </>
);

export default About;
