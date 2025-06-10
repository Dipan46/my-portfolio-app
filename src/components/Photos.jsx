import React from "react";
import styles from "./Photos.module.css";

import backyardImg from "../../assets/Image/backyeard.jpg";
import dogImg from "../../assets/Image/dog.jpg";
import gangaImg from "../../assets/Image/ganga.jpg";
import fireImg from "../../assets/Image/Fire.jpg";
import patkathiImg from "../../assets/Image/patkathi.jpg";
import busImg from "../../assets/Image/Bus.jpg";
import penImg from "../../assets/Image/pen.jpg";
import howrahBridgeImg from "../../assets/Image/howraBridge.jpg";
import sunsetImg from "../../assets/Image/sunset.jpg";
import groundImg from "../../assets/Image/ground.jpg";

function Photos() {
    const photos = [
        {
            src: backyardImg,
            alt: "A lush backyard.",
            className: styles.item1,
        },
        {
            src: dogImg,
            alt: "A friendly dog.",
            className: styles.item2,
        },
        {
            src: gangaImg,
            alt: "The Ganga river.",
            className: styles.item3,
        },
        {
            src: fireImg,
            alt: "A crackling fire.",
            className: styles.item4,
        },
        {
            src: patkathiImg,
            alt: "Dry jute sticks.",
            className: styles.item5,
        },
        {
            src: busImg,
            alt: "A local bus.",
            className: styles.item6,
        },
        {
            src: penImg,
            alt: "A close-up of a pen.",
            className: styles.item7,
        },
        {
            src: howrahBridgeImg,
            alt: "The Howrah Bridge in Kolkata.",
            className: styles.item8,
        },
        {
            src: sunsetImg,
            alt: "A beautiful sunset.",
            className: styles.item9,
        },
        {
            src: groundImg,
            alt: "A local playing ground.",
            className: styles.item10,
        },
    ];

    return (
        <section id="photo" className={styles.photo}>
            <h2>Photos</h2>
            <hr />
            <div className={styles.masonry}>
                {photos.map((photo, index) => (
                    <div
                        className={`${styles.item} ${photo.className}`}
                        key={index}
                    >
                        <img src={photo.src} loading="lazy" alt={photo.alt} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Photos;
