import React from "react";
import styles from "./Photos.module.css";
import photos from "../utils/photos.json";

import backyardImg from "../assets/Image/backyeard.jpg";
import dogImg from "../assets/Image/dog.jpg";
import gangaImg from "../assets/Image/ganga.jpg";
import fireImg from "../assets/Image/Fire.jpg";
import patkathiImg from "../assets/Image/patkathi.jpg";
import busImg from "../assets/Image/Bus.jpg";
import penImg from "../assets/Image/pen.jpg";
import howrahBridgeImg from "../assets/Image/howraBridge.jpg";
import sunsetImg from "../assets/Image/sunset.jpg";
import groundImg from "../assets/Image/ground.jpg";

const imageMap = {
    backyardImg,
    dogImg,
    gangaImg,
    fireImg,
    patkathiImg,
    busImg,
    penImg,
    howrahBridgeImg,
    sunsetImg,
    groundImg,
};

function Photos() {
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
                        <img
                            src={imageMap[photo.src]}
                            loading="lazy"
                            alt={photo.alt}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Photos;
