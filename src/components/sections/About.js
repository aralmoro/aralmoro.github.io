import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import aboutPhoto from '../../assets/images/angela.png';
import koreaPhoto from '../../assets/images/korea.png';
import cambodiaPhoto from '../../assets/images/cambodia.png';
import thailandPhoto from '../../assets/images/thailand.png';
import taiwanPhoto from '../../assets/images/taiwan.png';
import './About.scss';

function About(props) {
    const { isActive } = props;

    useEffect(() => {
        if (isActive) {
            const aboutDiv = document.getElementsByClassName('about');
            aboutDiv[0].scrollTo(0, 0);
        }
    }, [isActive]);

    return (
        <div className="about">
            <Fade top cascade>
                <div className="about-main-content">
                    <div className="about-overlay">
                        <img className="about-photo" src={aboutPhoto} alt="my photo" />
                    </div>
                    <div className="about-description">
                        <p>I'm Angela Roscel Almoro, a software engineer with 5 years of experience in the industry. I studied BS Computer Science in University of the Philippines Los Baños and graduated Cum Laude. Someday, I want to create something using technology that will leave a significant impact in the world and will make it better.</p>
                        <br />
                        {/* <p>In my free time, I love watching KDramas, fulfilling my duties as Resident Representative in Animal Crossing and travelling in different countries. Here are some of my favorite travel photos 📷 </p> */}
                        <p>In my free time, I love watching KDramas, fulfilling my duties as Resident Representative in Animal Crossing and travelling in different countries. </p>
                    </div>
                </div>
            </Fade>
            {/* <div className="about-additional-content">
                <Fade right duration={1200}>

                    <div className="about-overlay first about-additional-photo">
                        <img className="about-photo" src={taiwanPhoto} alt="my photo" />
                        <span className="about-photo-description">Zhongshe Flower Market, Taichung, Taiwan</span>
                    </div>
                </Fade>


                <Fade right duration={1200}>
                    <div className="about-overlay second about-additional-photo">
                        <img className="about-photo" src={koreaPhoto} alt="my photo" />
                        <span className="about-photo-description">Bukchon Hanok Village, Seoul, South Korea</span>
                    </div>
                </Fade>


                <Fade right duration={1200}>

                    <div className="about-overlay third about-additional-photo">
                        <img className="about-photo" src={cambodiaPhoto} alt="my photo" />
                        <span className="about-photo-description">Angkor Wat, Siem Reap, Cambodia</span>
                    </div>
                </Fade>


                 <div className="about-overlay fourth">
                    <img className="about-photo" src={thailandPhoto} alt="my photo" />
                </div>
            </div> */}
        </div>
    )
}

export default About;