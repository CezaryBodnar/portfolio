import React from 'react'
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faProjectDiagram, faSearch } from '@fortawesome/free-solid-svg-icons'


export const Projects = ({ language }) => {

    return (
        <div id={'projects'} className="project-container">

            {/*<h1 className="about-title" style={{ paddingTop: "120px" }}>{language === 'en' ? 'Projects' : 'Projekty'}</h1>*/}
            <div className="projects-content">
                <div className="project-tile tile1">
                    <img className="project-image" src="/projects/muzeum.png " alt="" />

                    <div className="overlay">
                        <h1 style={{ margin: '0px', fontSize: "120%" }}>{language === 'en' ? 'Redesign of Museum website' : 'Redesign strony Muzeum'}</h1>
                        <hr></hr>
                        <span style={{ marginBottom: "50px", fontSize: "115%" }}>{language === 'en' ? 'Project of redesign Museum of Folk Culture in Węgorzewo' : 'Projekt redesignu strony Muzeum Kultury Ludowej w Węgorzewie'}</span>
                        <div className="attachment">
                            <a href="https://drive.google.com/file/d/1VaQtw0Vpn1gf6MXymtI9XQDgQPSz2wzr/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <span className="contact-icon"><FontAwesomeIcon icon={faSearch} size="2xs" /></span></a>
                            <a href="https://www.figma.com/proto/qEJT1akhEdf0vJkC54b10Y/Projekt-muzeum?node-id=1%3A2&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer">
                                <span className="contact-icon"><FontAwesomeIcon icon={faProjectDiagram} size="2xs" /></span></a>
                        </div>
                    </div>
                </div>

                <div className="project-tile tile2">
                    <img className="project-image" src="/projects/jezioromamry.png" alt="" />

                    <div className="overlay">
                        <h1 style={{ margin: '0px', fontSize: "120%" }}>{language === 'en' ? `Mamry's lake. Do you know that?` : 'Jezioro Mamry. Czy wiesz że?'}</h1>
                        <hr></hr>
                        <span style={{ marginBottom: "50px", fontSize: "115%" }}>{language === 'en' ? 'Website design' : 'Projekt strony internetowej'}</span>
                        <div className="attachment">
                            <a href="https://drive.google.com/file/d/1DnIY7qUU5R6Zd6lzzbZmZx82aLJr78eK/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <span className="contact-icon"><FontAwesomeIcon icon={faSearch} size="2xs" /></span></a>
                            <a href="https://www.figma.com/proto/e6Ma4MqvfSBrJGAqTf9qwf/Jezioro-Mamry?page-id=0%3A1&node-id=1%3A2&viewport=428%2C456%2C0.38&scaling=min-zoom&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer">
                                <span className="contact-icon"><FontAwesomeIcon icon={faProjectDiagram} size="2xs" /></span></a>
                        </div>
                    </div>
                </div>

                <div className="project-tile tile3">
                    <img className="project-image" src="/projects/lol_thumbnail.png" alt="" />

                    <div className="overlay">
                        <h1 style={{ margin: '0px', fontSize: "120%" }}>{language === 'en' ? `Challenger project` : 'Challenger project'}</h1>
                        <hr></hr>
                        <span style={{ marginBottom: "50px", fontSize: "115%" }}>{language === 'en' ? 'League of legends website design - user profile, challenges' : 'Projekt strony League of legends - profil użytkownika, wyzwania'}</span>
                        <div className="attachment">
                            <a href="https://drive.google.com/file/d/11_agGgMS-FzuPH2McHM2jeiI0YgBh_Q5/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <span className="contact-icon"><FontAwesomeIcon icon={faSearch} size="2xs" /></span></a>
                            <a href="https://www.figma.com/proto/sPvraIlwKFUtODHE9rRPEB/Challenger-Project?page-id=0%3A1&node-id=2%3A3&viewport=902%2C274%2C0.49&scaling=contain&starting-point-node-id=2%3A3" target="_blank" rel="noopener noreferrer">
                                <span className="contact-icon"><FontAwesomeIcon icon={faProjectDiagram} size="2xs" /></span></a>
                        </div>
                    </div>
                </div>

                <div className="project-tile tile4">
                    <img className="project-image" src="/projects/ciastkarnia_thumbnail.png" alt="" />

                    <div className="overlay">
                        <h1 style={{ margin: '0px', fontSize: "120%" }}>{language === 'en' ? `Monika's confectionery` : 'Ciastkarnia Moniki'}</h1>
                        <hr></hr>
                        <span style={{ marginBottom: "50px", fontSize: "115%" }}>{language === 'en' ? 'Website design' : 'Projekt strony internetowej'}</span>
                        <div className="attachment">
                            <a href="https://drive.google.com/file/d/1akOfoaw6PBhxZ6G3J3izO9gPQF1Jrl_W/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <span className="contact-icon"><FontAwesomeIcon icon={faSearch} size="2xs" /></span></a>
                            <a href="https://xd.adobe.com/view/239f6898-3f14-4963-4a54-831663d98fd0-55ae/" target="_blank" rel="noopener noreferrer">
                                <span className="contact-icon"><FontAwesomeIcon icon={faProjectDiagram} size="2xs" /></span></a>
                        </div>
                    </div>
                </div>

                <div className="project-tile tile5">
                    <img className="project-image" src="/projects/infospot_thumbnail.png" alt="" />

                    <div className="overlay">
                        <h1 style={{ margin: '0px', fontSize: "120%" }}>{language === 'en' ? 'Infospot, settings, tab' : 'Infospot, Okno ustawień, zakładka'}</h1>
                        <hr></hr>

                        <span style={{ marginBottom: "50px", fontSize: "115%" }}>{language === 'en' ? 'Project of interface element' : 'Projekt elementu interfejsu'}</span>
                        <div className="attachment">
                            <a href="https://drive.google.com/file/d/1ma8nSXdwXFfsnkMH3QmZ-pf8LjDkiNfZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <span className="contact-icon"><FontAwesomeIcon icon={faSearch} size="2xs" /></span></a>

                        </div>
                    </div>
                </div>

                <div className="project-tile tile6">
                    <img className="project-image" src="/projects/budowlanka_thumbnail.png" alt="" />

                    <div className="overlay">
                        <h1 style={{ margin: '0px', fontSize: "120%" }}>{language === 'en' ? 'Builder website' : 'Strona budowlana'}</h1>
                        <hr></hr>
                        <span style={{ marginBottom: "50px", fontSize: "115%" }}>{language === 'en' ? 'Website design' : 'Projekt strony internetowej'}</span>
                        <div className="attachment">
                            <a href="https://drive.google.com/file/d/1oC8mY8fwFy_nE8erAhJL1kmF6Ss3945P/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <span className="contact-icon"><FontAwesomeIcon icon={faSearch} size="2xs" /></span></a>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
