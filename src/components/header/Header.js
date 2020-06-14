import React from 'react';
import IconButton from '../buttons/IconButton';

import './Header.scss';
import MenuIcon from '../../assets/icons/arrows_hamburger.svg';

function Header(props) {

    const { toggleNav, sections, currentPage, setCurrentPage } = props;

    const handleClickMenu = () => {
        toggleNav();
    }

    return (
        <header className="header">
            <div className="header-title">{'<3'}</div>
            <IconButton className="header-btn" icon={MenuIcon} onClick={handleClickMenu} size={40} />
            {/* <nav>
                <ul>
                    {
                        sections.map((section) => {
                            return (
                                <li>
                                    <a className={currentPage === section.index ? 'active' : ''} href="#" onClick={() => setCurrentPage(section.index)}>{section.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav> */}
        </header>
    )
}

export default Header;