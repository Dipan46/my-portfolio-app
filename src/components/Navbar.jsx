import React from "react";
import styles from "./Navbar.module.css";

import signImage from "../../assets/Image/Sign2.png";
import homeIcon from "../../assets/icon/house3.png";
import aboutIcon from "../../assets/icon/about3.png";
import projectIcon from "../../assets/icon/project3.png";
import photoIcon from "../../assets/icon/camera3.png";
import contactIcon from "../../assets/icon/contact3.png";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div>
                <img
                    className={styles.navImg}
                    src={signImage}
                    alt="img"
                    loading="lazy"
                />
            </div>
            <ul>
                <li>
                    <a href="#home">
                        <img
                            src={homeIcon}
                            alt="home"
                            className={styles.navIcoH}
                            loading="lazy"
                        />
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <img
                            src={aboutIcon}
                            alt="about"
                            className={styles.navIcoA}
                            loading="lazy"
                        />
                        About
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        <img
                            src={projectIcon}
                            alt="project"
                            className={styles.navIcoP}
                            loading="lazy"
                        />
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#photo">
                        <img
                            src={photoIcon}
                            alt="photo"
                            className={styles.navIcoP}
                            loading="lazy"
                        />
                        Photos
                    </a>
                </li>
                <li>
                    <a href="#footer">
                        <img
                            src={contactIcon}
                            alt="contact"
                            className={styles.navIcoC}
                            loading="lazy"
                        />
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
