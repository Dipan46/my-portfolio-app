import React from "react";
import styles from "./Footer.module.css";
import girhub from "../assets/icon/girhub.png";
import linkedin from "../assets/icon/linkedin.png";
import instagram from "../assets/icon/instagram.png";
import gmail from "../assets/icon/gmail.png";

function Footer() {
    return (
        <footer id="footer" className={styles.footerSection}>
            <section id="contact" className={styles.contact}>
                <div className={styles.social}>
                    <a target="_blank" href="https://github.com/Dipan46">
                        <img
                            className={styles.fLogo}
                            src={girhub}
                            alt="GitHub"
                            loading="lazy"
                        />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/dipan-basak-616952219/"
                    >
                        <img
                            className={styles.fLogo}
                            src={linkedin}
                            alt="LinkidIn"
                            loading="lazy"
                        />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.instagram.com/how_notto_edit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    >
                        <img
                            className={styles.fLogo}
                            src={instagram}
                            alt="instagram"
                            loading="lazy"
                        />
                    </a>
                    <a target="_blank" href="mailto:dipaneducation46@gmail.com">
                        <img
                            className={styles.fLogo}
                            src={gmail}
                            alt="e-mail"
                            loading="lazy"
                        />
                    </a>
                </div>
            </section>
            <p className={styles.footerText}>©Dipan46</p>
        </footer>
    );
}

export default Footer;
