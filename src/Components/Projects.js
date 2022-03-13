import React from 'react'
import './Projects.css'


export const Projects = ({ language }) => {

    return (
        <div id={'projects'} className="project-container">

            <h1 className="about-title" style={{ paddingTop: "120px" }}>{language === 'en' ? 'Projects' : 'Projekty'}</h1>
            <div className="projects-content">
                <div className="project-tile tile1">
                    <img className="project-image" src="/projects/muzeum.png " alt="" />

                    <div className="overlay">
                        <h1 style={{ margin: '0px', fontSize: "120%" }}>{language === 'en' ? 'Redesign of Museum website' : 'Redesign strony Muzeum'}</h1>
                        <hr></hr>
                        <span style={{ marginBottom: "50px", fontSize: "115%" }}>{language === 'en' ? 'Project of redesign Museum of Folk Culture in Węgorzewo' : 'Projekt redesignu strony Muzeum Kultury Ludowej w Węgorzewie'}</span>
                        <a href="https://www.figma.com/proto/qEJT1akhEdf0vJkC54b10Y/Projekt-muzeum?node-id=1%3A2&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer">
                            <span className="contact-icon"><i className="fas fa-project-diagram"></i></span></a>
                    </div>
                </div>
                <div className="project-tile tile2">
                    <img className="project-image" src="/projects/infospot_projekt.png" alt="" />

                    <div className="overlay">
                        <h1 style={{ margin: '0px', fontSize: "120%" }}>{language === 'en' ? 'Infospot' : 'Infospot'}</h1>
                        <hr></hr>

                        <span style={{ marginBottom: "50px", fontSize: "115%" }}>{language === 'en' ? 'Project of interface element' : 'Projekt elementu interfejsu'}</span>
                        <a href="https://www.figma.com/proto/qEJT1akhEdf0vJkC54b10Y/Projeng-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer">
                            <span className="contact-icon"><i className="fas fa-project-diagram"></i></span></a>
                    </div>

                </div>
                <div className="project-tile tile3">
                    <img className="project-image" src="/projects/budowlanka_projekt.png" alt="" />

                    <div className="overlay">
                        <h1 style={{ margin: '0px', fontSize: "120%" }}>{language === 'en' ? 'Builder website' : 'Strona budowlana'}</h1>
                        <hr></hr>
                        <span style={{ marginBottom: "50px", fontSize: "115%" }}>{language === 'en' ? 'Website design' : 'Projekt strony internetowej'}</span>
                        <a href="https://cezarybodnar813283.invisionapp.com/prototype/ckgzatvr900613401kt8bi1wm/play" target="_blank" rel="noopener noreferrer">
                            <span className="contact-icon"><i className="fas fa-project-diagram"></i></span></a>
                    </div>
                </div>
                <div className="project-tile tile4">
                    <img className="project-image" src="/projects/ciastkarnia_projekt.png" alt="" />

                    <div className="overlay">
                        <h1 style={{ margin: '0px', fontSize: "120%" }}>{language === 'en' ? `Monika's confectionery` : 'Ciastkarnia Moniki'}</h1>
                        <hr></hr>
                        <span style={{ marginBottom: "50px", fontSize: "115%" }}>{language === 'en' ? 'Website design' : 'Projekt strony internetowej'}</span>
                        <a href="https://xd.adobe.com/view/239f6898-3f14-4963-4a54-831663d98fd0-55ae/" target="_blank" rel="noopener noreferrer">
                            <span className="contact-icon"><i className="fas fa-project-diagram"></i></span></a>
                    </div>

                </div>
            </div>
        </div>
    )
}
