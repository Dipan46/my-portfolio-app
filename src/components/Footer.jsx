import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer id="footer" className={styles.footerSection}> {/* Added a class for the footer tag itself */}
      {/* contact */}
      <section id="contact" className={styles.contact}>
        <div className={styles.social}>
          <a target="_blank" href="https://github.com/Dipan46">
            <img className={styles.fLogo} src="icon/girhub.png" alt="GitHub" loading="lazy"/>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/dipan-basak-616952219/">
            <img className={styles.fLogo} src="icon/linkedin.png" alt="LinkidIn" loading="lazy"/>
          </a>
          <a target="_blank"
            href="https://www.instagram.com/how_notto_edit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <img className={styles.fLogo} src="icon/instagram.png" alt="instagram" loading="lazy"/>
          </a>
          <a target="_blank" href="mailto:dipaneducation46@gmail.com">
            <img className={styles.fLogo} src="icon/gmail.png" alt="e-mail" loading="lazy"/>
          </a>
        </div>
      </section>
      <p className={styles.footerText}>©Dipan46</p>
    </footer>
  );
}

export default Footer;