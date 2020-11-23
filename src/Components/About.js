import React from 'react'
import './About.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { motion } from "framer-motion"

export const About = ({ language }) => {
    return (
        <div id={'about'} className="about-container">
            <h1 className="about-title">{language === 'en' ? 'About me' : 'O mnie'}</h1>

            <div className="about-content">
                <img className="about-image" src="profilowe.jpg" alt="" />

                <div className="about-text">
                    {language === 'en' ? 'My name is Cezary Bodnar, I am a graduate of the State University of Applied Sciences in Elbląg, from which I obtained the research results of an applied computer science engineer in the specialty of computer graphics and multimedia. For several years, I have been gaining experience in multimedia specializations, which I have learned mainly on my own through guides and courses on the Internet, and over the years of study in a technical college and university. I can fluently use web design, graphics and video software. I am a person with a cheerful disposition. An individualist by nature, but I can adapt to working in a group. When I work on projects or new drawings, I am systematic and try to get the last button done. Thanks to my personal commitment, I believe that I could strengthen your staff.' : 'Nazywam się Cezary Bodnar, jestem absolwentem PWSZ w Elblągu, w której uzyskałem tytuł inżyniera informatyki stosowanej w  specjalności grafika komputerowa i multimedia. Od paru lat nabieram doświadczenia w specjalnościach multimedialnych, których uczyłem się głównie we własnym zakresie poprzez poradniki i kursy w Internecie oraz na przestrzeni lat nauki w technikum oraz na studiach. Potrafię biegle posługiwać się programami do tworzenia projektów stron internetowych, obróbki grafiki i wideo. Jestem osobą o pogodnym usposobieniu. Z natury indywidualista, lecz potrafię przystosować się do pracy w grupie. Kiedy pracuje przy projektach lub nowych rysunkach, jestem systematyczny oraz staram się dopiąć wszystko na ostatni guzik. Dzięki osobistemu zaangażowaniu, wierzę, iż mógłbym wzmocnić Państwa kadrę.'}
                    <motion.button whileHover={{ backgroundColor: "rgb(40, 40, 40)" }} className="cvButton">
                        <a href="https://drive.google.com/file/d/1z3ZySmw-ftSE6IoH4p_cO62IRMvET-2p/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-download"></i>{language === 'en' ? 'My CV' : 'Moje CV'}</a>
                    </motion.button>
                </div>

            </div>
            <hr></hr>
            <h3 className="about-other">{language === 'en' ? 'Other skills' : 'Inne umiejętności'}</h3>

            <Tabs>
                <TabList>
                    <div className="skills">
                        <Tab><span className="skill-item">Frontend dev</span></Tab>
                        <Tab><span className="skill-item">{language === 'en' ? '3D Graphics' : 'Grafika 3D '}</span></Tab>
                        <Tab><span className="skill-item">{language === 'en' ? 'Drawing' : 'Rysowanie'}</span></Tab>
                    </div>
                </TabList>
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
        </div>
    )
}
