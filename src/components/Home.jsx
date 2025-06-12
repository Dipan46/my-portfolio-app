import React from "react";
import img from "../assets/Image/BW2.png";
import styles from "./Home.module.css";

function Home() {
    return (
        <section id="home" className={styles.home}>
            <div className={styles.intro}>
                <h1>
                    <span className={styles.grt}>Hello everyone</span> <br />{" "}
                    <span className={styles.name}>Dipan</span>&nbsp; here <br />
                    <span className={styles.abt}>
                        <br />
                        I'm a web designer and Developer <br />I also like to do
                        photo editing.
                    </span>
                </h1>
                <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1amwaPkJU5F7McZMP5-ohEirh52ktrEB1/view?usp=drive_link"
                >
                    <button className={styles.resume}>Resume</button>
                </a>
            </div>
            <img
                src={img}
                alt="dipanImg"
                className={styles.mainImg}
                loading="lazy"
            />
        </section>
    );
}

export default Home;
