import React from 'react';

import './Link.scss';

function Link(props) {
    const { active, title, onClick, fontSize } = props;

    return (
        <a className={active ? `active` : ''} style={{ fontSize: fontSize }} href="#" onClick={onClick}>{title}</a>
    );
}

export default Link;