import React from 'react';
import constructionIcon from '../../assets/images/under-construction.svg';
import './Projects.scss'

function Projects() {
    return (
        <div className="project">
            <img src={constructionIcon} attr="https://www.flaticon.com/authors/freepik" />
            Oops! This page is a work in progress
        </div>
    )
}

export default Projects;