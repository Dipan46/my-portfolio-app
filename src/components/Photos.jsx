import React from "react";
import styles from "./Photos.module.css";

function Photos() {
    // Assuming images are static for now, could be fetched or passed as props later
    const photos = [
        {
            src: "./Image/backyeard.jpg",
            alt: "Description of image 1",
            className: styles.item1,
        },
        {
            src: "./Image/dog.jpg",
            alt: "Description of image 2",
            className: styles.item2,
        },
        {
            src: "./Image/ganga.jpg",
            alt: "Description of image 3",
            className: styles.item3,
        },
        {
            src: "./Image/Fire.jpg",
            alt: "Description of image 4",
            className: styles.item4,
        },
        {
            src: "./Image/patkathi.jpg",
            alt: "Description of image 5",
            className: styles.item5,
        },
        {
            src: "./Image/Bus.jpg",
            alt: "Description of image 6",
            className: styles.item6,
        },
        {
            src: "./Image/pen.jpg",
            alt: "Description of image 7",
            className: styles.item7,
        },
        {
            src: "./Image/howraBridge.jpg",
            alt: "Description of image 8",
            className: styles.item8,
        },
        {
            src: "./Image/sunset.jpg",
            alt: "Description of image 9",
            className: styles.item9,
        },
        {
            src: "./Image/ground.jpg",
            alt: "Description of image 10",
            className: styles.item10,
        },
    ];

    return (
        <section id="photo" className={styles.photo}>
            <h2>Photos</h2>
            <hr />
            <div className={styles.masonry}>
                <div className={styles.masonry}>
                    {" "}
                    {/* Nested masonry div from original HTML */}
                    {photos.map((photo, index) => (
                        <div
                            className={`${styles.item} ${photo.className}`}
                            key={index}
                        >
                            <img
                                src={photo.src}
                                loading="lazy"
                                alt={photo.alt}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Photos;
