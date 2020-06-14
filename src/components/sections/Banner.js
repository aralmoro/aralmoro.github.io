import React from 'react';
import WaveEmoji from '../../assets/images/wave-hand-emoji.png'
import "./Banner.scss";

function Banner() {
    return (
        <div className="banner">
            <div className="banner-text">
                <h1>Hello! <img className="banner-icon" src={WaveEmoji} /></h1>
                <h1>I'm Angela,</h1>
                <h2>Software engineer</h2>
                <h2>from the Philippines.</h2>
            </div>
        </div>
    )
}

export default Banner;