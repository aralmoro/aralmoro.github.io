import React from 'react';
import aboutPhoto from '../../assets/images/angela.png';
import './About.scss';

function About() {
    return (
        <div className="about">
            <img className="about-photo" src={aboutPhoto} alt="my photo" />
            <p>I'm Angela Roscel Almoro, a software engineer.</p>
            <p>My ultimate career goal is to create something using technology that will leave a significant impact in the world and will make it better. In my free time, I love travelling in different countries, watching KDramas, and playing Animal Crossing.</p>
        </div>
    )
}

export default About;