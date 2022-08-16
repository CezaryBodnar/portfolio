import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

function Nav({ language, setLanguage }) {
    const [openMenu, setOpenMenu] = useState(false);


    return (
        <>
            <nav id={'nav'} className="navbar">
                <Link to="/">
                    <span className="nav-logo-text">Cezary Bodnar</span>
                </Link>
                <div className="menu-icon" onClick={() => setOpenMenu(!openMenu)}>
                    <i className={openMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className="nav-links">
                    <HashLink smooth to="/#projects">
                        <li>{language === 'en' ? 'Projects' : 'Projekty'}</li>
                    </HashLink>
                    <HashLink smooth to="/#about">
                        <li>{language === 'en' ? 'About me' : 'O mnie'}</li>
                    </HashLink>
                    <HashLink smooth to="/#contact">
                        <li>{language === 'en' ? 'Contact' : 'Kontakt'}</li>
                    </HashLink>

                    <img className="language" src="/images/polski.png" alt="" onClick={() => setLanguage('pl')} />
                    <img className="language" src="/images/angielski.png" alt="" onClick={() => setLanguage('en')} />

                </ul>


            </nav>
            <div className="nav-hidden" style={{ display: openMenu ? 'block' : 'none' }}>
                <ul className="active">
                    <HashLink smooth to="/#projects">
                        <li>{language === 'en' ? 'Projects' : 'Projekty'}</li>
                    </HashLink>
                    <HashLink smooth to="/#about">
                        <li>{language === 'en' ? 'About me' : 'O mnie'}</li>
                    </HashLink>
                    <HashLink smooth to="/#contact">
                        <li>{language === 'en' ? 'Contact' : 'Kontakt'}</li>
                    </HashLink>
                </ul>
            </div>
        </>
    )
}

export default Nav
