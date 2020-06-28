import React from 'react';
import Background from '../background/Background';
import "./Section.scss";

function Section(props) {

    const { name, children, color, isActive } = props;

    return (
        <section className={isActive ? "section section-active" : "section"}>
            <div className="canvas-container">
                <Background />
            </div>
            <span className="section-title">{name === "home" ? '' : name}</span>
            {children}
        </section >

    )
}

export default Section;