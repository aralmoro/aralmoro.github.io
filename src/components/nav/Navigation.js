import React from 'react';
import './Navigation.scss';
import Link from '../link/Link';
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
                        <IconButton icon={CloseIcon} onClick={handleClose} invert size={40} />
                    </div>
                    <ul className="navigation-list">
                        {
                            sections.map((section) => {
                                return (
                                    <li>
                                        <Link active={currentPage === section.index} title={section.name} onClick={() => handleClickNav(section.index)} fontSize={40} />
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