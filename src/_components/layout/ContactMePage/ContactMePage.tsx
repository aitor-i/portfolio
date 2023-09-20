import Navigation from "_components/Navigation";
import SocialMedia from "./SocialMedia";

import styles from "./ContactMePage.module.css";

import text from "domain/texts/ContactMe/contactMe.json";
import Link from "next/link";

export const ContactMePage = () => {
  return (
    <main>
      <h1 className={styles.title}>{text.contact.title}</h1>
      <div className={styles.navigationContainer}>
        <Navigation page="contact-me" />
      </div>
      <div className={styles.container}>
        <p className={styles.description}>{text.contact.description}</p>
        <Link
          className={styles.email}
          href={`mailto: ${text.contact.contactInfo[0].value}`}
        >
          {text.contact.contactInfo[0].value}
        </Link>
        <SocialMedia />
      </div>
    </main>
  );
};
