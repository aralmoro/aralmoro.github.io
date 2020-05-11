import React from 'react';
import './Header.scss';

function Header(props) {

    const { sections, currentPage, setCurrentPage } = props;

    return (
        <header className="header">
            <div className="header-title">logo hir</div>
            <nav>
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
            </nav>
        </header>
    )
}

export default Header;