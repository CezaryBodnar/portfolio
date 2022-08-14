import React from 'react'
import './Contact.css'

export const Contact = ({ language }) => {
    return (
        <div id={'contact'} className="contact-container">
            <h1 className="about-title">{language === 'en' ? 'Contact' : 'Kontakt'}</h1>
            <div className="contact-right-text">
                <div className="email">
                    <span className="contact-icon"><i style={{ cursor: 'default' }}></i><img className="icons" src="/mail.svg" alt="" /></span>
                    <span className="title-bold">E-mail:</span>

                    <span className="text-medium"><a href="mailto:cezary.bodnar@gmail.com">cezary.bodnar@gmail.com</a></span>
                </div>
                <div className="phone">
                    <span className="contact-icon"><i style={{ cursor: 'default' }}></i> <img className="icons" src="/smartphone.svg" alt="" /></span>
                    <span className="title-bold">{language === 'en' ? 'Phone:' : 'Telefon:'}</span>
                    <span className="text-medium">{language === 'en' ? '+48 697 142 005' : '697 142 005'}</span>
                </div>

            </div>

            {/*                <form className="contact-form">
                    <input className="contact-name" type="text" placeholder="Imie i nazwisko" />
                    <input className="contact-name" type="email" placeholder="E-mail" />
                    <textarea className="contact-textarea" name="" id="" cols="30" rows="10" placeholder="Treść wiadomości ..."></textarea>
                    <button className="sendBtn">Wyślij</button>
                </form> */}

        </div>
    )
}
