import Navigation from "_components/Navigation";
import SocialMedia from "./SocialMedia";

import styles from "./ContactMePage.module.css";

import text from "domain/texts/ContactMe/contactMe.json";

export const ContactMePage = () => {
  return (
    <main>
      <h1 className={styles.title}>{text.contact.title}</h1>
      <div className={styles.navigationContainer}>
        <Navigation />
      </div>
      <div className={styles.container}>
        <p className={styles.description}>{text.contact.description}</p>
        <p className={styles.email}>{text.contact.contactInfo[0].value}</p>
        <SocialMedia />
      </div>
    </main>
  );
};
