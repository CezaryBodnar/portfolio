import React from 'react'
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faProjectDiagram, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

export const Projects = ({ language }) => {

    return (
        <div id={'projects'} className="project-container">
            <Tabs>
                <TabList>
                    <div className="skills">
                        <Tab><span className="skill-item">{language === 'en' ? 'UI/UX Design' : 'UI/UX Design'}</span></Tab>
                        <Tab><span className="skill-item">{language === 'en' ? 'DTP Graphics' : 'Grafika DTP'}</span></Tab>
                        <Tab><span className="skill-item">{language === 'en' ? '2D Graphics' : 'Grafika 2D '}</span></Tab>
                        <Tab><span className="skill-item">Frontend Dev</span></Tab>
                        <Tab><span className="skill-item">{language === 'en' ? '3D Graphics' : 'Grafika 3D '}</span></Tab>
                        <Tab><span className="skill-item">{language === 'en' ? 'Drawing' : 'Rysowanie'}</span></Tab>
                    </div>
                </TabList>
                <TabPanel>
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
                </TabPanel>
                <TabPanel>
                    <div className="projects-content">
                        <div className="project-tile tile1">
                            <img className="project-image" src="/projects/otwarcie_stodoły.png " alt="" />

                            <div className="overlay">
                                <h1 style={{ margin: '0px', fontSize: "120%" }}>{language === 'en' ? 'Invitation to the opening of the barn' : 'Zaproszenie na otwarcie stodoły'}</h1>
                                <hr></hr>
                                <div className="attachment">
                                    <a id="my-anchor-element-left" href="https://drive.google.com/file/d/1nQqSJegYsZHWl4DYQyeN9sYQKWkO1DlT/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <span className="contact-icon"><FontAwesomeIcon icon={faSearch} size="2xs" /></span></a>
                                    <Tooltip anchorId="my-anchor-element-left" content="Zaproszenie wersja 1" place="bottom" style={{ backgroundColor: "rgb(227, 227, 227)", color: "rgb(28, 28, 28)", fontSize: "18px" }} />
                                    <a id="my-anchor-element-right" href="https://drive.google.com/file/d/1hoS8YLKGz8UT1cYvJxbXrVmLgZxF7KI5/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <span className="contact-icon"><FontAwesomeIcon icon={faSearch} size="2xs" /></span></a>
                                    <Tooltip anchorId="my-anchor-element-right" content="Zaproszenie wersja 2" place="bottom" style={{ backgroundColor: "rgb(227, 227, 227)", color: "rgb(28, 28, 28)", fontSize: "18px" }} />
                                </div>
                            </div>
                        </div>

                        <div className="project-tile tile2">
                            <img className="project-image" src="/projects/rollup_jezioromamry.png" alt="" />

                            <div className="overlay">
                                <h1 style={{ margin: '0px', fontSize: "120%" }}>{language === 'en' ? `Mamry's lake. Do you know that?` : 'Jezioro Mamry. Czy wiesz że?'}</h1>
                                <hr></hr>
                                <div className="attachment">
                                    <a id="my-anchor-element" href="https://drive.google.com/file/d/1aYNr4Ttoq8QJh2RLXT7b4P_H50nf-I_a/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <span className="contact-icon"><FontAwesomeIcon icon={faSearch} size="2xs" /></span></a>
                                    <Tooltip anchorId="my-anchor-element" content="Rollup pełna wersja" place="bottom" style={{ backgroundColor: "rgb(227, 227, 227)", color: "rgb(28, 28, 28)", fontSize: "18px" }} />
                                </div>
                            </div>
                        </div>

                        <div className="project-tile tile3">
                            <img className="project-image" src="/projects/wystawa_helwing.png" alt="" />

                            <div className="overlay">
                                <h1 style={{ margin: '0px', fontSize: "120%" }}>{language === 'en' ? `Helwing letter's exhibition` : 'Wystawa Listy Helwinga'}</h1>
                                <hr></hr>
                                <div className="attachment">
                                    <a id="my-anchor-element-helwing-left" href="https://drive.google.com/file/d/1dQCq-iCbjyEFfXEzkFta3mjuPR0lO0ev/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <span className="contact-icon"><FontAwesomeIcon icon={faSearch} size="2xs" /></span></a>
                                    <Tooltip anchorId="my-anchor-element-helwing-left" content="Katalog pełna wersja" place="bottom" style={{ backgroundColor: "rgb(227, 227, 227)", color: "rgb(28, 28, 28)", fontSize: "18px" }} />
                                    <a id="my-anchor-element-helwing-right" href="https://drive.google.com/file/d/1CXa6HiFOvbu4NYt0A59kwuTKpDU5AH9Z/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <span className="contact-icon"><FontAwesomeIcon icon={faSearch} size="2xs" /></span></a>
                                    <Tooltip anchorId="my-anchor-element-helwing-right" content="Plakat pełna wersja" place="bottom" style={{ backgroundColor: "rgb(227, 227, 227)", color: "rgb(28, 28, 28)", fontSize: "18px" }} />

                                </div>
                            </div>
                        </div>

                        <div className="project-tile tile4">
                            <img className="project-image" src="/projects/wystawa_kulesza.png" alt="" />

                            <div className="overlay">
                                <h1 style={{ margin: '0px', fontSize: "120%" }}>{language === 'en' ? `Exhibition Józef Kulesza's sculptures` : 'Wystawa rzeźby Józefa Kuleszy'}</h1>
                                <hr></hr>
                                <div className="attachment">
                                    <a id="my-anchor-element-kulesza-left" href="https://drive.google.com/file/d/1DjhQIgN0Cobwf3TYEbu6YMuBbSAhzlIp/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <span className="contact-icon"><FontAwesomeIcon icon={faSearch} size="2xs" /></span></a>
                                    <Tooltip anchorId="my-anchor-element-kulesza-left" content="Katalog pełna wersja" place="bottom" style={{ backgroundColor: "rgb(227, 227, 227)", color: "rgb(28, 28, 28)", fontSize: "18px" }} />
                                    <a id="my-anchor-element-kulesza-right" href="https://drive.google.com/file/d/1L_rYZbsO4ASw5u0IS83oLB-5teJQM-7_/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <span className="contact-icon"><FontAwesomeIcon icon={faSearch} size="2xs" /></span></a>
                                    <Tooltip anchorId="my-anchor-element-kulesza-right" content="Plakat pełna wersja" place="bottom" style={{ backgroundColor: "rgb(227, 227, 227)", color: "rgb(28, 28, 28)", fontSize: "18px" }} />

                                </div>
                            </div>
                        </div>


                        <div className="project-tile tile5">
                            <img className="project-image" src="/projects/wystawa_agaty.png" alt="" />

                            <div className="overlay">
                                <h1 style={{ margin: '0px', fontSize: "120%" }}>{language === 'en' ? 'Exhibition Agata Wiszniewska-Kubiszyn' : 'Wystawa Agaty Wiszniewskiej-Kubiszyn'}</h1>
                                <hr></hr>
                                <div className="attachment">

                                    <a id="my-anchor-element-agata-left" href="https://drive.google.com/file/d/14_y3FZxJKx9RSMFUipMbVK3DnRbKt-HV/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <span className="contact-icon"><FontAwesomeIcon icon={faSearch} size="2xs" /></span></a>
                                    <Tooltip anchorId="my-anchor-element-agata-left" content="Katalog pełna wersja" place="bottom" style={{ backgroundColor: "rgb(227, 227, 227)", color: "rgb(28, 28, 28)", fontSize: "18px" }} />
                                    <a id="my-anchor-element-agata-right" href="https://drive.google.com/file/d/1o13FXS7AZXW1rqL4kB98cfmKBH-DAoq3/view?usp=share_link" target="_blank" rel="noopener noreferrer">
                                        <span className="contact-icon"><FontAwesomeIcon icon={faSearch} size="2xs" /></span></a>
                                    <Tooltip anchorId="my-anchor-element-agata-right" content="Plakat pełna wersja" place="bottom" style={{ backgroundColor: "rgb(227, 227, 227)", color: "rgb(28, 28, 28)", fontSize: "18px" }} />
                                </div>
                            </div>
                        </div>

                        <div className="project-tile tile6">
                            <img className="project-image" src="/projects/ulotka_muzeum.png" alt="" />

                            <div className="overlay">
                                <h1 style={{ margin: '0px', fontSize: "120%" }}>{language === 'en' ? 'Flyer museum promotion' : 'Ulotka promocja Muzeum'}</h1>
                                <hr></hr>
                                <div className="attachment">
                                    <a id="my-anchor-element-ulotka-right" href="https://drive.google.com/file/d/1x3SLVkouRAYFd7jzvJ7ZL7hHmAnWn-3U/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <span className="contact-icon"><FontAwesomeIcon icon={faSearch} size="2xs" /></span></a>
                                    <Tooltip anchorId="my-anchor-element-ulotka-right" content="Ulotka pełna wersja" place="bottom" style={{ backgroundColor: "rgb(227, 227, 227)", color: "rgb(28, 28, 28)", fontSize: "18px" }} />
                                </div>
                            </div>
                        </div>

                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="gallery-content">
                        <img className="gallery-image-drawing" src="/images/mr_rekkles.jpg" alt="x" />
                        <img className="gallery-image-drawing" src="/images/infografika.jpg" alt="x" />
                        <img className="gallery-image-drawing" src="/images/jarmark.jpg" alt="x" />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="gallery-content">
                        <img className="gallery-image" src="/images/1.JPG" alt="" />
                        <img className="gallery-image" src="/images/2.JPG" alt="" />
                        <img className="gallery-image" src="/images/3.JPG" alt="" />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="gallery-content">
                        <img className="gallery-image" src="/images/czajniczek.png" alt="" />
                        <img className="gallery-image" src="/images/render.png" alt="" />
                        <img className="gallery-image" src="/images/akademiik render2.jpg" alt="" />
                        <img className="gallery-image" src="/images/1_piętro.jpg" alt="" />
                        <img className="gallery-image" src="/images/parter.jpg" alt="" />
                        <img className="gallery-image" src="/images/korytarz_poddasze.jpg" alt="" />
                        <img className="gallery-image" src="/images/pokój_poddasze.jpg" alt="" />
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="gallery-content">
                        <img className="gallery-image-drawing" src="/images/cezary-bodnar-13.jpg" alt="" />
                        <img className="gallery-image-drawing" src="/images/cezary-bodnar-12.jpg" alt="" />
                        <img className="gallery-image-drawing" src="/images/blond_with_bun_rys.jpg" alt="" />
                    </div>
                </TabPanel>


            </Tabs>
            {/*<h1 className="about-title" style={{ paddingTop: "120px" }}>{language === 'en' ? 'Projects' : 'Projekty'}</h1>*/}

        </div>
    )
}
