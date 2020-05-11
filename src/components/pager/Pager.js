import React from 'react';
import './Pager.scss';

function Pager(props) {
    const { currentPage, pages } = props;
    return (
        <div className="pager">
            <ul className="pager-dots">
                {
                    pages.map((page, i) => {
                        return (
                            <li><div className={currentPage === i ? 'filled' : ''}></div></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Pager;