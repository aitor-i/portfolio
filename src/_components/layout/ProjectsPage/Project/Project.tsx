import Link from "next/link";

import styles from "./Project.module.css";

interface Props {
  name: string;
  gitLink: string;
  link: string;
  description: string;
}

export const Project = ({ description, gitLink, link, name }: Props) => {
  return (
    <div className={styles.projectContainer}>
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.description}>{description}</p>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        href={link}
      >
        VISIT PAGE
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        href={gitLink}
      >
        VIEW SOURCE CODE
      </Link>
    </div>
  );
};
