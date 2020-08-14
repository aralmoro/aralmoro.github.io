import React, { useEffect } from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import acIsland from '../../assets/images/ac-island.png';
import portfolio from '../../assets/images/portfolio.png';
import puzzle from '../../assets/images/puzzle.png';
import touchDB from '../../assets/images/touchDB.png';
import eeReviewer from '../../assets/images/ee-reviewer.jpg';
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
        { title: 'aralmoro.github.io', year: '2020', img: portfolio, description: 'A product of too much time in quarantine due to Covid-19. This website showcases my projects, work experiences and a little personal info for anyone curious about me.', tech: ['React', 'Webpack', 'Canvas'] },
        { title: 'Sliding Puzzle', year: '2018', img: puzzle, description: 'A simple sliding puzzle that consists numbered square titles in random order with 1 missing tile. The goal of the puzzle is to place the tiles in order by sliding the titles using the empty space. This game also has 8 and 15 puzzle mode.', tech: ['VanillaJS'] },
        { title: 'EE Quizzer', year: '2017', img: eeReviewer, description: 'An android application that contains lessons and quizzes about Electrical Engineering I made for EE friends.', tech: ['Android'] },
        { title: 'TouchDB', year: '2015', img: touchDB, description: 'The first ever Android application I created way back in college. This app aims to teach students the basics of database by visualizing database and interacting with it using touch gestures.', tech: ['Android'] }
    ];

    const renderItem = (item, i) => {
        return (
            <Fade left={i % 2 === 0} right={i % 2 !== 0}>
                <div className="project-item">
                    <div className="img-overlay">
                        <img className="project-img" src={item.img} alt="project screenshot" />
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
            </Fade>
        )
    };

    return (
        <div className="project">
            {/* <img src={constructionIcon} attr="https://www.flaticon.com/authors/freepik" />
            Oops! This page is a work in progress */}
            <Slide top>
                <p className="intro">While most of the projects I've worked on belong to companies I've worked with, <br />I'd like to share a few of the projects I developed in my own time. 👩‍💻 </p>
            </Slide>
            <ul className="project-list">
                {
                    projs.map((item, i) => {
                        return <li key={i} className="list-item">{renderItem(item, i)}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Projects;