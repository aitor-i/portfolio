import text from "domain/texts/About/about.json";

import styles from "./AboutPage.module.css";
import Navigation from "_components/Navigation";
import Jobs from "./Jobs";

export const AboutPage = () => {
  return (
    <main>
      <h1 className={styles.title}>{text.title}</h1>
      <div className={styles.navigationContainer}>
        <Navigation page="about" />
      </div>
      <div className={styles.jobsContainer}>
        {text.experience.map((experience) => (
          <Jobs
            key={experience.company}
            company={experience.company}
            dates={experience.dates}
            description={experience.description}
            role={experience.role}
          />
        ))}
      </div>
      {/* <div className={styles.textContainer}>
        {text.content.map((contentText) => (
          <p className={styles.text} key={contentText}>
            {contentText}
          </p>
        ))}
      </div> */}
    </main>
  );
};
