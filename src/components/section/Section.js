import React from 'react';
import Background from '../background/Background';
import "./Section.scss";

function Section(props) {

    const { name, children, color1, color2, isActive } = props;

    return (
        <section className={isActive ? "section section-active" : "section"}>
            <div className="canvas-container">
                <Background color1={color1} color2={color2} />
            </div>
            <span className="section-title">{name === "home" ? '' : name}</span>
            {children}
        </section >

    )
}

export default Section;