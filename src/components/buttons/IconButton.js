import React from 'react';
import './IconButton.scss';

function IconButton(props) {
    const { icon, onClick, invert } = props;

    return (
        <button className="icon-button" type="button" onClick={onClick}>
            <img className="icon-img" src={icon} />
            <img className={invert ? "icon-img shadow-invert" : "icon-img shadow"} src={icon} />
        </button>
    );
}

export default IconButton;