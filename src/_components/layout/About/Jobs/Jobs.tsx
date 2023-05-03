import styles from "./Jobs.module.css";

interface Props {
  company: string;
  dates: string;
  description: string;
  role: string;
}

export const Jobs = ({ company, dates, description, role }: Props) => {
  return (
    <div className={styles.jobsContainer}>
      <h3 className={styles.role}>{role}</h3>
      <i className={styles.dates}>{dates}</i>
      <b className={styles.company}>{company}</b>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
