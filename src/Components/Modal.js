import React from 'react';
import './Modal.css';

export const Modal = ({ closeProject1, language, project1 }) => {

    return (
        <div className="modal-wrapper" style={{ opacity: project1 ? '1' : '0', pointerEvents: project1 ? 'auto' : 'none' }}>
            <div className="modal-content">
                <button className="backButton" onClick={closeProject1}><i className="fas fa-chevron-left"></i></button>
                <h1 className="about-title">{language === 'en' ? 'Project 1' : 'Projekt 1'}</h1>
                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>
                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>

                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>

                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>
            </div>
            {project1 ? <div onClick={closeProject1} className="back-drop"></div> : null}
        </div>
    )
};

export const Modal2 = ({ closeProject2, language, project2 }) => {

    return (
        <div className="modal-wrapper" style={{ opacity: project2 ? '1' : '0', pointerEvents: project2 ? 'auto' : 'none' }}>
            <div className="modal-content">
                <button className="backButton" onClick={closeProject2}><i className="fas fa-chevron-left"></i></button>
                <h1 className="about-title">{language === 'en' ? 'Project 2' : 'Projekt 2'}</h1>
                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>
                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>

                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>

                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>
            </div>
            {project2 ? <div onClick={closeProject2} className="back-drop"></div> : null}
        </div>
    )
};

export const Modal3 = ({ closeProject3, language, project3 }) => {

    return (
        <div className="modal-wrapper" style={{ opacity: project3 ? '1' : '0', pointerEvents: project3 ? 'auto' : 'none' }}>
            <div className="modal-content">
                <button className="backButton" onClick={closeProject3}><i className="fas fa-chevron-left"></i></button>
                <h1 className="about-title">{language === 'en' ? 'Project 3' : 'Projekt 3'}</h1>
                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>
                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>

                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>

                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>
            </div>
            {project3 ? <div onClick={closeProject3} className="back-drop"></div> : null}
        </div>
    )
};

export const Modal4 = ({ closeProject4, language, project4 }) => {

    return (
        <div className="modal-wrapper" style={{ opacity: project4 ? '1' : '0', pointerEvents: project4 ? 'auto' : 'none' }}>
            <div className="modal-content">
                <button className="backButton" onClick={closeProject4}><i className="fas fa-chevron-left"></i></button>
                <h1 className="about-title">{language === 'en' ? 'Project 4' : 'Projekt 4'}</h1>
                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>
                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>

                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>

                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>
            </div>
            {project4 ? <div onClick={closeProject4} className="back-drop"></div> : null}
        </div>
    )
};

export const Modal5 = ({ closeProject5, language, project5 }) => {

    return (
        <div className="modal-wrapper" style={{ opacity: project5 ? '1' : '0', pointerEvents: project5 ? 'auto' : 'none' }}>
            <div className="modal-content">
                <button className="backButton" onClick={closeProject5}><i className="fas fa-chevron-left"></i></button>
                <h1 className="about-title">{language === 'en' ? 'Project 5' : 'Projekt 5'}</h1>
                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>
                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>

                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>

                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>
            </div>
            {project5 ? <div onClick={closeProject5} className="back-drop"></div> : null}
        </div>
    )
};

export const Modal6 = ({ closeProject6, language, project6 }) => {

    return (
        <div className="modal-wrapper" style={{ opacity: project6 ? '1' : '0', pointerEvents: project6 ? 'auto' : 'none' }}>
            <div className="modal-content">
                <button className="backButton" onClick={closeProject6}><i className="fas fa-chevron-left"></i></button>
                <h1 className="about-title">{language === 'en' ? 'Project 6' : 'Projekt 6'}</h1>
                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>
                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>

                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>

                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}> <img src="krul.jpg" alt="" /></b></div>
            </div>
            {project6 ? <div onClick={closeProject6} className="back-drop"></div> : null}
        </div>
    )
};