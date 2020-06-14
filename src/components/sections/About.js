import React from 'react';
import aboutPhoto from '../../assets/images/angela.png';
import acLogo from '../../assets/images/animal-crossing-logo.jpg';
import './About.scss';

function About() {
    return (
        <div className="about">
            <div className="about-main-content">
                <div className="about-overlay">
                    <img className="about-photo" src={aboutPhoto} alt="my photo" />
                </div>
                <div className="about-description">
                    <p>{`I'm Angela Roscel Almoro, a software engineer with 5 years of experience in the industry. I studied BS Computer Science in University of the Philippines Los Baños and graduated Cum Laude.`}</p>
                    <br />
                    <p>My ultimate career goal is to create something using technology that will leave a significant impact in the world and will make it better. In my free time, I love travelling in different countries, watching KDramas, and fulfilling my duties as Resident Representative in Animal Crossing.</p>
                </div>
            </div>
            <div className="about-additional-content">
                <div className="about-overlay first">
                    <img className="about-photo" src={acLogo} alt="my photo" />
                </div>

                <div className="about-overlay second">
                    <img className="about-photo" src={acLogo} alt="my photo" />
                </div>

                <div className="about-overlay third">
                    <img className="about-photo" src={acLogo} alt="my photo" />
                </div>

                <div className="about-overlay fourth">
                    <img className="about-photo" src={acLogo} alt="my photo" />
                </div>
            </div>
        </div>
    )
}

export default About;