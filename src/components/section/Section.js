import React from 'react';
import "./Section.scss";

function Section(props) {

    const { name, children, color, isActive } = props;

    return (
        <section className={isActive ? "section section-active" : "section"}>
            <span className="section-title">{name === "home" ? '' : name}</span>
            {children}
        </section >

    )
}

export default Section;