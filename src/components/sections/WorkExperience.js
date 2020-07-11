import React, { useEffect } from 'react';

import samsungLogo from '../../assets/images/samsung-logo.png';
import stratpointLogo from '../../assets/images/stratpoint-logo.png';
import calcmenuLogo from '../../assets/images/calcmenu-logo.jpg';
import grommetLogo from '../../assets/images/grommet-logo.png';
import ceosLogo from '../../assets/images/ceos-logo.png';
import './WorkExperience.scss';

function WorkExperience(props) {
    const { isActive } = props;

    useEffect(() => {
        if (isActive) {
            const workDiv = document.getElementsByClassName('work');
            workDiv[0].scrollTo(0, 0);
        }
    }, [isActive]);

    const roleCard = (role) => {
        return (
            <div className="work-item">
                <div className="time">{role.time}</div>
                <div className="title">{role.title}</div>
                <div className="company">{role.company}</div>
                <div>
                    {
                        role.tech.map(item => <span className="pill">{item}</span>)
                    }
                </div>
                <div className="logo-container">
                    <img className="logo" src={role.logo} alt="logo" />
                </div>
            </div>
        )
    }

    const roles = [
        { title: 'Software Engineer', time: 'October 2018 - Present', company: 'Samsung Research and Development Institute Philippines', logo: samsungLogo, tech: ['React', 'VueJS', 'Angular'] },
        { title: 'Software Engineer', time: 'June 2015 - September 2018', company: 'Stratpoint Technologies, Inc.', logo: stratpointLogo, tech: ['Android', 'React', 'React Native'] },
        { title: 'Freelance Mobile Developer', time: 'October - December 2018', company: 'Grommet Technologies', logo: grommetLogo, tech: ['React Native'] },
        { title: 'Freelance Android Developer', time: 'March - December 2017', company: 'CEOS Technosolutions', logo: ceosLogo, tech: ['Android'] },
        { title: 'Programmer Intern', time: 'April - May 2014', company: 'Calcmenu Philippines, Inc', logo: calcmenuLogo, tech: ['NodeJS', 'Socket.io'] }
    ];

    return (
        <div className="work">
            <div className="work-content">
                <ul>
                    {
                        roles.map(role => {
                            return (
                                <li>{roleCard(role)}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default WorkExperience;