import React from 'react'
import { HashLink } from 'react-router-hash-link';
import './Footer.css';
import { motion } from "framer-motion"

export const Footer = () => {

    return (

        <footer>
            <div className="container">
                <span className="back-to-top">
                    <HashLink smooth to="/#nav">
                        <motion.i whileHover={{ y: -7, scale: 1.2 }} className="fa fa-angle-up" style={{ fontSize: "26px", color: "white", padding: '10px' }} />
                    </HashLink>
                </span>
                <div className="socials">
                    <span className="social-links"><a href="https://github.com/CezaryBodnar" target="_blank" rel="noopener noreferrer">
                        <motion.i whileHover={{ scale: 1.3 }} className="fab fa-github"></motion.i></a>
                    </span>
                    <span className="social-links"><a href="https://www.linkedin.com/in/czarek-bodnar-7b3b521b0/" target="_blank" rel="noopener noreferrer">
                        <motion.i whileHover={{ scale: 1.3 }} className="fab fa-linkedin"></motion.i></a>
                    </span>
                    <span className="social-links"><a href="https://www.artstation.com/simipro" target="_blank" rel="noopener noreferrer">
                        <motion.i whileHover={{ scale: 1.3 }} className="fab fa-artstation"></motion.i></a>
                    </span>
                </div>
                <hr></hr>
                <span style={{ fontSize: "14px", marginTop: "20px" }}>Copyright © 2022 Cezary Bodnar</span>
            </div>
        </footer>
    )
}
