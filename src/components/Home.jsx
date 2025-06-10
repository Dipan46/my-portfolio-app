import React from "react";
import img from "../assets/Image/BW2.png";
import styles from "./Home.module.css";

function Home() {
    return (
        <section className={styles.home}>
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
                    href="https://drive.google.com/file/d/1Y8QMZhq5lbTyeRjiQri9waJPaBkYDCcl/view?usp=sharing"
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
