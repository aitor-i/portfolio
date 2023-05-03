import Navigation from "_components/Navigation";

import styles from "./Skills.module.css";

export const SkillsPage = () => {
  return (
    <main>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.navigationContainer}>
        <Navigation />
      </div>
    </main>
  );
};
