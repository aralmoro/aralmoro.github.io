import React, { useEffect } from 'react';
import acIsland from '../../assets/images/ac-island.png';
import './Projects.scss'

function Projects(props) {
    const { isActive } = props;

    useEffect(() => {
        if (isActive) {
            const projectDiv = document.getElementsByClassName('project');
            projectDiv[0].scrollTo(0, 0);
        }
    }, [isActive]);

    const projs = [
        { title: 'aralmoro portfolio', year: '2020', img: '', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus varius ante, sit amet molestie diam commodo eget. Donec dui ipsum, euismod vitae nibh vel, hendrerit lobortis eros. Quisque ut risus ut nulla ultrices feugiat. Nulla eu nunc eget dolor ullamcorper blandit vitae sit amet sem. Integer enim urna, pharetra sed magna id, egestas sodales purus. Proin convallis facilisis porttitor. Nam ante arcu, condimentum eget aliquam eu, hendrerit eu dui. ', tech: ['React', 'Webpack', 'Canvas'] },
        { title: '15 Puzzle', year: '2018', img: '', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus varius ante, sit amet molestie diam commodo eget. Donec dui ipsum, euismod vitae nibh vel, hendrerit lobortis eros. Quisque ut risus ut nulla ultrices feugiat. Nulla eu nunc eget dolor ullamcorper blandit vitae sit amet sem. Integer enim urna, pharetra sed magna id, egestas sodales purus. Proin convallis facilisis porttitor. Nam ante arcu, condimentum eget aliquam eu, hendrerit eu dui. ', tech: ['VanillaJS'] },
        { title: 'MovLancer', year: '2018', img: '', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus varius ante, sit amet molestie diam commodo eget. Donec dui ipsum, euismod vitae nibh vel, hendrerit lobortis eros. Quisque ut risus ut nulla ultrices feugiat. Nulla eu nunc eget dolor ullamcorper blandit vitae sit amet sem. Integer enim urna, pharetra sed magna id, egestas sodales purus. Proin convallis facilisis porttitor. Nam ante arcu, condimentum eget aliquam eu, hendrerit eu dui. ', tech: ['Android'] },
        { title: 'EE Quizzer', year: '2017', img: '', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus varius ante, sit amet molestie diam commodo eget. Donec dui ipsum, euismod vitae nibh vel, hendrerit lobortis eros. Quisque ut risus ut nulla ultrices feugiat. Nulla eu nunc eget dolor ullamcorper blandit vitae sit amet sem. Integer enim urna, pharetra sed magna id, egestas sodales purus. Proin convallis facilisis porttitor. Nam ante arcu, condimentum eget aliquam eu, hendrerit eu dui. ', tech: ['Android'] },
        { title: 'TouchDB', year: '2015', img: '', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus varius ante, sit amet molestie diam commodo eget. Donec dui ipsum, euismod vitae nibh vel, hendrerit lobortis eros. Quisque ut risus ut nulla ultrices feugiat. Nulla eu nunc eget dolor ullamcorper blandit vitae sit amet sem. Integer enim urna, pharetra sed magna id, egestas sodales purus. Proin convallis facilisis porttitor. Nam ante arcu, condimentum eget aliquam eu, hendrerit eu dui. ', tech: ['Android'] }
    ];

    const renderItem = (item) => {
        return (
            <div className="project-item">
                <div className="img-overlay">
                    <img className="project-img" src={acIsland} alt="project screenshot" />
                </div>
                <div className="project-info">
                    <h2>{item.title}</h2>
                    <p className="subtitle">{item.year}</p>
                    <p>{item.description}</p>
                    <div>
                        {
                            item.tech.map(item => <span className="pill">{item}</span>)
                        }
                    </div>
                </div>
            </div >
        )
    };

    return (
        <div className="project">
            {/* <img src={constructionIcon} attr="https://www.flaticon.com/authors/freepik" />
            Oops! This page is a work in progress */}
            <p className="intro">While most of the projects I've worked on belong to companies I've worked with, <br />I'd like to share a few of the projects I developed in my free time. 👩‍💻 </p>
            <ul className="project-list">
                {
                    projs.map((item, i) => {
                        return <li key={i} className="list-item">{renderItem(item)}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Projects;