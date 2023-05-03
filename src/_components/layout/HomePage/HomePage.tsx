import Image from "next/image";

import text from "domain/texts/HomePage";

import styles from "./HomePage.module.css";
import Navigation from "_components/Navigation";

export const HomePage = () => {
  return (
    <main className={styles.homePageContainer}>
      <div className={styles.navigationContainer}>
        <Navigation />
      </div>
      <h1 className={styles.title}>{text.title}</h1>
      <h2 className={styles.subtitle}>{text.subtitle}</h2>
    </main>
  );
};
