import Link from "next/link";

import Navigation from "_components/Navigation";
import SocialMedia from "_components/layout/ContactMePage/SocialMedia";

import text from "domain/texts/LandingPages/ReactPamplona/reactPamplona.json";

import styles from "./ReactPamplonaPage.module.css";

export const ReactPamplonaPage = () => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.navigationContainer}>
          <Navigation page="home" />
        </div>
        <div className={styles.headers}>
          <h1 className={styles.title}>{text.name}</h1>
          <h2 className={styles.subtitle}>{text.profile}</h2>
          <h3 className={styles.location}>{text.location}</h3>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.text}>{text.experience}</p>
          {text.strengths.map((strength) => (
            <p className={styles.text} key={strength}>
              {strength}
            </p>
          ))}
          <p className={styles.text}>{text.availability}</p>
          <Link
            className={styles.contact}
            href={`mailto: ${text.contact.email}`}
          >
            {text.contact.email}
          </Link>
        </div>
        <div className={styles.socialMediaContainer}>
          <SocialMedia />
        </div>
      </div>
    </main>
  );
};
