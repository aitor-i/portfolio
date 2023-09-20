import Link from "next/link";

import styles from "./Navigation.module.css";

type Page = "home" | "about" | "skills" | "projects" | "contact-me";
interface Props {
  page: Page;
}

export const Navigation = ({ page }: Props) => {
  return (
    <nav className={styles.navigationContainer}>
      <Link
        className={page === "home" ? styles.active : styles.link}
        href={"/"}
      >
        HOME
      </Link>
      <Link
        className={page === "about" ? styles.active : styles.link}
        href={"/about"}
      >
        ABOUT
      </Link>
      <Link
        className={page === "skills" ? styles.active : styles.link}
        href={"/skills"}
      >
        SKILLS
      </Link>
      <Link
        className={page === "projects" ? styles.active : styles.link}
        href={"/projects"}
      >
        PROJECTS
      </Link>
      <Link
        className={page === "contact-me" ? styles.active : styles.link}
        href={"/contact-me"}
      >
        CONTACT ME
      </Link>
    </nav>
  );
};
