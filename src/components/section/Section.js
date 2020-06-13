import React from 'react';
import "./Section.scss";

function Section(props) {

    const { name, children, color } = props;

    return (
        <section className="section">
            <span className="section-title">{name === "home" ? '' : name}</span>
            {children}
        </section >

    )
}

export default Section;