import React from 'react';

import samsungLogo from '../../assets/images/samsung-logo.png';
import stratpointLogo from '../../assets/images/stratpoint-logo.png';
import calcmenuLogo from '../../assets/images/calcmenu-logo.jpg';
import './WorkExperience.scss';

function WorkExperience() {

    const roleCard = (role) => {
        return (
            <div>
                <img className="logo" src={role.logo} alt="logo" />
                <div>{role.title}</div>
                <div>{role.time}</div>
                <div>{role.company}</div>
                <div>
                    {
                        role.tech.map(item => <span>{item}</span>)
                    }
                </div>
            </div>
        )
    }

    const roles = [
        { title: 'Software Engineer', time: 'October 2018 - Present', company: 'Samsung Research and Development Institute Philippines', logo: samsungLogo, tech: ['React', 'VueJS', 'Angular'] },
        { title: 'Senior Software Engineer', time: 'March - October 2018', company: 'Stratpoint Technologies, Inc.', logo: stratpointLogo, tech: ['Android', 'React', 'ReactNative'] },
        { title: 'Junior Software Engineer', time: 'August 2015 - March 2018', company: 'Stratpoint Technologies, Inc.', logo: stratpointLogo, tech: ['Android', 'React', 'ReactNative'] },
        { title: 'Programmer Intern', time: 'April - May 2014', company: 'Calcmenu Philippines, Inc', logo: calcmenuLogo, tech: ['NodeJS', 'Socket.io'] }
    ];

    return (
        <div className="work">
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
    )
}

export default WorkExperience;