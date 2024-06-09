// src/components/ThankYou.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';

const ThankYou = () => (
    <section className="thankyou">
        <div className="container">
            <h1>Thank You!</h1>
            <p>Your message has been received. We will get back to you shortly.</p>
            <Link to="/" className="button">Return to Home</Link>
        </div>
    </section>
);

export default ThankYou;
