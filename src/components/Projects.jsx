import styles from './Projects.module.css';
import projects from '../utils/card.json';


function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <hr />
      <div className={styles.proCard}>
        {projects.map((project, index) => (
          <div className={styles.card} key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.protxt}>
              <img className={styles.proImg} src={project.image} alt={project.title} />
              <h5 className={styles.proTit}>{project.title}</h5>
              <p className={styles.proDis}>{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;