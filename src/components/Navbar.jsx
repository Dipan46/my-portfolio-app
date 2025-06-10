import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <img className={styles.navImg} src="Image/Sign2.png" alt="img" loading="lazy"/>
      </div>
      <ul>
        <li>
          <a href="#home">
            <img src="icon/house3.png" alt="home" className={styles.navIcoH} loading="lazy"/>
            Home
          </a>
        </li>
        <li>
          <a href="#about">
            <img src="icon/about3.png" alt="about" className={styles.navIcoA} loading="lazy"/>
            About
          </a>
        </li>
        <li>
          <a href="#projects">
            <img src="icon/project3.png" alt="project" className={styles.navIcoP} loading="lazy"/>
            Projects
          </a>
        </li>
        <li>
          <a href="#photo">
            <img src="icon/camera3.png" alt="photo" className={styles.navIcoP} loading="lazy"/>
            Photos
          </a>
        </li>
        <li>
          <a href="#footer">
            <img src="icon/contact3.png" alt="contact" className={styles.navIcoC} loading="lazy"/>
            Contact
          </a>
        </li>
      </ul>
      {/* Add a toggle button */}
    </nav>
  );
}

export default Navbar;