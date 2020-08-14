import React from 'react';

import './Link.scss';

function Link(props) {
    const { active, title, onClick, fontSize, href, dark } = props;

    return (
        <a className={active ? `active` : dark ? 'dark' : ''} style={{ fontSize: fontSize }} href={href ? href : "#"} onClick={onClick}>{title}</a>
    );
}

export default Link;