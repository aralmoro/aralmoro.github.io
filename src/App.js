import React, { useState } from "react";
import { hot } from "react-hot-loader";

import Header from './components/header/Header';
import Section from './components/section/Section';
import Footer from './components/footer/Footer';
import Pager from './components/pager/Pager';
import Banner from './components/sections/Banner';
import Projects from './components/sections/Projects';
import WorkExperience from './components/sections/WorkExperience';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

import "./assets/styles/appStyles.scss";

function App() {
    const sections = [
        { index: 0, name: "intro", content: <Banner />, color: 'bisque' },
        { index: 1, name: "projects", content: <Projects />, color: 'lightblue' },
        { index: 2, name: "work", content: <WorkExperience />, color: 'lightcoral' },
        { index: 3, name: "about me", content: <About />, color: 'teal' },
        { index: 4, name: "contact me", content: <Contact />, color: 'palegreen' }
    ];

    const [currentPage, setCurrentPage] = useState(0);

    const changePage = (index) => {
        setCurrentPage(index);
    }

    return (
        <div className="App">
            <Header sections={sections} currentPage={currentPage} setCurrentPage={changePage} />
            {/* <Pager currentPage={currentPage} pages={sections}></Pager> */}
            <div className="sections-container" style={{ transform: `translateX(calc(-100vw * ${currentPage}))` }}>
                {
                    sections.map(section => {
                        return (
                            <Section name={section.name} color={section.color}>
                                {section.content}
                            </Section>
                        );
                    })
                }
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default hot(module)(App);