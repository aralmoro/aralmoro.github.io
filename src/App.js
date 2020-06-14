import React, { useState } from "react";
import { hot } from "react-hot-loader";

import Header from './components/header/Header';
import Navigation from './components/nav/Navigation';
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
        { index: 0, name: "home", content: <Banner />, color: 'bisque' },
        { index: 1, name: "skills", content: <Projects />, color: 'lightblue' },
        { index: 2, name: "work", content: <WorkExperience />, color: 'lightcoral' },
        { index: 3, name: "about me", content: <About />, color: 'teal' },
        { index: 4, name: "contact me", content: <Contact />, color: 'palegreen' }
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const [isNavActive, setNavActive] = useState(false);

    const changePage = (index) => {
        setCurrentPage(index);
    }

    const toggleNav = () => {
        setNavActive(!isNavActive);
    }

    return (
        <div className="App">
            <Header toggleNav={toggleNav} sections={sections} currentPage={currentPage} setCurrentPage={changePage} />
            <Navigation toggleNav={toggleNav} active={isNavActive} sections={sections} currentPage={currentPage} setCurrentPage={changePage} />
            {/* <Pager currentPage={currentPage} pages={sections}></Pager> */}
            <div className="sections-container">
                {
                    sections.map((section, index) => {
                        return (
                            <Section name={section.name} color={section.color} isActive={currentPage === index}>
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