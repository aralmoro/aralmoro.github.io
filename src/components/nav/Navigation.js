import React from 'react';
import './Navigation.scss';
import IconButton from '../buttons/IconButton';
import CloseIcon from '../../assets/icons/arrows_circle_remove.svg';

function Navigation(props) {
    const { active, toggleNav, sections, currentPage, setCurrentPage } = props;

    const handleClose = () => {
        toggleNav();
    }

    const handleClickNav = (index) => {
        setCurrentPage(index);
        handleClose();
    }

    return (
        <div className={active ? "navigation navigation-active" : "navigation"}>
            <div className="background" />
            <nav className="navigation-container">
                <div className="navigation-content">
                    <div className="close-btn-container">
                        <IconButton icon={CloseIcon} onClick={handleClose} invert />
                    </div>
                    <ul className="navigation-list">
                        {
                            sections.map((section) => {
                                return (
                                    <li>
                                        <a className={currentPage === section.index ? 'active' : ''} href="#" onClick={() => handleClickNav(section.index)}>{section.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;