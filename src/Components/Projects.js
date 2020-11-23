import React from 'react'
import { Modal } from './Modal'
import { Modal2 } from './Modal'
import { Modal3 } from './Modal'
import { Modal4 } from './Modal'
import { Modal5 } from './Modal'
import { Modal6 } from './Modal'
import './Projects.css'


export const Projects = ({ language, project1, setProject1,
    project2, setProject2,
    project3, setProject3,
    project4, setProject4,
    project5, setProject5,
    project6, setProject6, }) => {

    const closeModalHandler1 = () => setProject1(false);
    const closeModalHandler2 = () => setProject2(false);
    const closeModalHandler3 = () => setProject3(false);
    const closeModalHandler4 = () => setProject4(false);
    const closeModalHandler5 = () => setProject5(false);
    const closeModalHandler6 = () => setProject6(false);

    return (
        <div id={'projects'} className="project-container">

            <h1 className="about-title" style={{ paddingTop: "120px" }}>{language === 'en' ? 'Projects' : 'Projekty'}</h1>
            <div className="projects-content">
                <div className="project-tile tile1">
                    <img className="project-image" src="/projects/ciastkarnia_projekt.png" alt="" />

                    <div className="overlay" /* onClick={() => setProject1(true)} */>
                        <h1 style={{ margin: '0px', fontSize: "120%" }}>{language === 'en' ? `Monika's confectionery` : 'Ciastkarnia Moniki'}</h1>
                        <hr></hr>
                        <span style={{ marginBottom: "50px", fontSize: "115%" }}>{language === 'en' ? 'Website design' : 'Projekt strony internetowej'}</span>
                        <a href="https://xd.adobe.com/view/239f6898-3f14-4963-4a54-831663d98fd0-55ae/" target="_blank" rel="noopener noreferrer">
                            <span className="contact-icon"><i className="fas fa-project-diagram"></i></span></a>
                    </div>
                </div>
                <div className="project-tile tile2">
                    <img className="project-image" src="/projects/infospot_projekt.png" alt="" />

                    <div className="overlay" /* onClick={() => setProject2(true)} */>
                        <h1 style={{ margin: '0px', fontSize: "120%" }}>{language === 'en' ? 'Infospot' : 'Infospot'}</h1>
                        <hr></hr>

                        <span style={{ marginBottom: "50px", fontSize: "115%" }}>{language === 'en' ? 'Project of interface element' : 'Projekt elementu interfejsu'}</span>
                        <a href="https://cezarybodnar813283.invisionapp.com/prototype/ckborxwn1001hob01tfbkx51s/play" target="_blank" rel="noopener noreferrer">
                            <span className="contact-icon"><i className="fas fa-project-diagram"></i></span></a>
                    </div>

                </div>
                <div className="project-tile tile3">
                    <img className="project-image" src="/projects/budowlanka_projekt.png" alt="" />

                    <div className="overlay" /* onClick={() => setProject3(true)} */>
                        <h1 style={{ margin: '0px', fontSize: "120%" }}>{language === 'en' ? 'Builder website' : 'Strona budowlana'}</h1>
                        <hr></hr>
                        <span style={{ marginBottom: "50px", fontSize: "115%" }}>{language === 'en' ? 'Website design' : 'Projekt strony internetowej'}</span>
                        <a href="https://cezarybodnar813283.invisionapp.com/prototype/ckgzatvr900613401kt8bi1wm/play" target="_blank" rel="noopener noreferrer">
                            <span className="contact-icon"><i className="fas fa-project-diagram"></i></span></a>
                    </div>
                </div>
                <div className="project-tile tile4">
                    <img className="project-image" src="/projects/filtrowanie_projekt.png" alt="" />

                    <div className="overlay" /* onClick={() => setProject4(true)} */>
                        <h1 style={{ margin: '0px', fontSize: "120%" }}>{language === 'en' ? 'Filters & Sorting' : 'Filtrowanie&sortowanie'}</h1>
                        <hr></hr>
                        <span style={{ marginBottom: "50px", fontSize: "115%" }}>{language === 'en' ? 'Project of interface elements' : 'Projekt elementów interfejsu'}</span>
                        <a href="https://cezarybodnar813283.invisionapp.com/prototype/ckhv4ivop00b1cs01ucl6yuja/play" target="_blank" rel="noopener noreferrer">
                            <span className="contact-icon"><i className="fas fa-project-diagram"></i></span></a>
                    </div>
                </div>
                {/*                 <div className="project-tile tile5">
                    <img className="project-image" src="krul.jpg" alt="" />

                    <div className="overlay" onClick={() => setProject5(true)}>
                        <h1 style={{ margin: '0px' }}>{language === 'en' ? 'Project 5' : 'Projekt 5'}</h1>
                        <hr></hr>
                        <span style={{ marginBottom: "50px" }}>{language === 'en' ? 'Project of interface element' : 'Projekt elementu interfejsu'}</span>
                    </div>
                </div> */}
                {/*                 <div className="project-tile tile6">
                    <img className="project-image" src="pomaranczarka.jpg" alt="" />

                    <div className="overlay" onClick={() => setProject6(true)}>
                        <h1 style={{ margin: '0px' }}>{language === 'en' ? 'Project 6' : 'Projekt 6'}</h1>
                        <hr></hr>
                        <span style={{ marginBottom: "50px" }}>{language === 'en' ? 'Project of interface element' : 'Projekt elementu interfejsu'}</span>
                    </div>
                </div> */}
            </div>

            <Modal closeProject1={closeModalHandler1} language={language} project1={project1} />
            <Modal2 closeProject2={closeModalHandler2} language={language} project2={project2} />
            <Modal3 closeProject3={closeModalHandler3} language={language} project3={project3} />
            <Modal4 closeProject4={closeModalHandler4} language={language} project4={project4} />
            <Modal5 closeProject5={closeModalHandler5} language={language} project5={project5} />
            <Modal6 closeProject6={closeModalHandler6} language={language} project6={project6} />
        </div>
    )
}
