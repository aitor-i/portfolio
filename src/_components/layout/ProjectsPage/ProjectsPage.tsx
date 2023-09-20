import Navigation from "_components/Navigation";

import projects from "domain/texts/Projects/projects.json";

import styles from "./ProjectsPage.module.css";
import { Project } from "./Project/Project";

export const ProjectsPage = () => {
  return (
    <main>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.navigationContainer}>
        <Navigation page="projects" />
      </div>
      <div className={styles.projectContainer}>
        {projects.map((project) => (
          <Project
            description={project.description}
            gitLink={project["git-link"]}
            link={project.link}
            name={project.name}
            key={project.name}
          />
        ))}
      </div>
    </main>
  );
};
