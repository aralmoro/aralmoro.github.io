import React from 'react';
import './IconButton.scss';

function IconButton(props) {
    const { icon, onClick, invert, disabled, size } = props;

    return (
        <button className="icon-button" style={{ width: size, height: size, pointerEvents: disabled ? 'none' : 'auto' }} type="button" onClick={disabled ? '' : onClick}>
            <img className="icon-img" style={{ width: size, height: size }} src={icon} />
            <img className={invert ? "icon-img shadow-invert" : "icon-img shadow"} style={{ width: size, height: size }} src={icon} />
        </button>
    );
}

export default IconButton;