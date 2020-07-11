import React from 'react';
import Background from '../background/Background';
import "./Section.scss";
import { lerp } from '../../utils/math';

function Section(props) {

    const { name, children, color1, color2, isActive } = props;

    const computeShadowColor = () => {
        const h1 = color1;
        const s1 = 96;
        const l1 = 80;

        const h2 = color2;
        const s2 = 96;
        const l2 = 80;

        let t = 0.5;
        const h = lerp(h1, h2, t);
        const s = lerp(s1, s2, t);
        const l = lerp(l1, l2, t);

        return `hsl(${h},${s}%,${l}%)`;
    }

    return (
        <section className={isActive ? "section section-active" : "section"}>
            <div className="canvas-container">
                <Background color1={color1} color2={color2} />
            </div>
            <span className="section-title" style={{ textShadow: `-3px 2px ${computeShadowColor()}` }}>{name === "home" ? '' : name}</span>
            {children}
        </section >

    )
}

export default Section;