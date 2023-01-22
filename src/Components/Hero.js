import React from 'react'
import './Hero.css'
import { motion } from "framer-motion"

export const Hero = ({ language }) => {

    return (
        <div className="hero-container">

            <div className="hero-title">
                {/* <motion.h1 initial={{ opacity: 0, y: 140 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, type: "tween" }} className="main-title">{language === 'en' ? `Hello, I'm Czarek` : 'Cześć, jestem Czarek.'}</motion.h1>
                <motion.h2 initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, type: "tween" }} className="under-title">{language === 'en' ? `Hello, I'm a Graphic Designer focused on creating simple and functional interfaces.` : 'Cześć, jestem grafikiem komputerowym, skupionym na tworzeniu prostych oraz funkcjonalnych projektów.'}</motion.h2>*/}
            </div>
            {/* <hr></hr> */}
        </div>
    )
}
