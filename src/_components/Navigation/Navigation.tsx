import Link from "next/link";

import styles from "./Navigation.module.css";

interface Props {
  page: string;
}

export const Navigation = () => {
  return (
    <nav className={styles.navigationContainer}>
      <Link className={styles.link} href={"/"}>
        HOME
      </Link>
      <Link className={styles.link} href={"/about"}>
        ABOUT
      </Link>
      <Link className={styles.link} href={"/skills"}>
        SKILLS
      </Link>
      <Link className={styles.link} href={"/projects"}>
        PROJECTS
      </Link>
      <Link className={styles.link} href={"/contact-me"}>
        CONTACT ME
      </Link>
    </nav>
  );
};
