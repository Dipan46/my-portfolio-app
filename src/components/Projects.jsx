import styles from "./Projects.module.css";
import projects from "../utils/card.json";

// Import all the images
import ts from "../../assets/projects/ts.png";
import fa from "../../assets/projects/fa.png";
import texted from "../../assets/projects/texted.png";
import sc from "../../assets/projects/sc.png";
import hh from "../../assets/projects/hh.png";
import ens from "../../assets/projects/ens.png";
import todo from "../../assets/projects/todo.png";
import kpr from "../../assets/projects/kpr.png";
import tsm from "../../assets/projects/TSM.png";
import awr from "../../assets/projects/AWR.png";
import salesdata from "../../assets/projects/salesdata.png";

// Create a map from the string key in JSON to the imported image
const imageMap = {
    ts,
    fa,
    texted,
    sc,
    hh,
    ens,
    todo,
    kpr,
    tsm,
    awr,
    salesdata,
};

function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <h2>Projects</h2>
            <hr />
            <div className={styles.proCard}>
                {projects.map((project, index) => (
                    <div className={styles.card} key={index}>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.protxt}
                        >
                            <img
                                className={styles.proImg}
                                src={imageMap[project.image]}
                                alt={project.title}
                            />
                            <h5 className={styles.proTit}>{project.title}</h5>
                            <p className={styles.proDis}>
                                {project.description}
                            </p>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
