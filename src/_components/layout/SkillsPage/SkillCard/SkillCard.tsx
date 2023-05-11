import Link from "next/link";
import styles from "./SkillCard.module.css";

interface Props {
  SkillName: string;
  description: string;
  link: string;
  dates: string;
  keywords: string[];
}

export const SkillCard = ({
  SkillName,
  dates,
  description,
  keywords,
  link,
}: Props) => {
  return (
    <Link href={`/skills/${SkillName}`} className={styles.skillCard}>
      <h3 className={styles.skillName}>{SkillName}</h3>
      <i className={styles.dates}>{dates}</i>
      <p className={styles.description}>{description}</p>
      <Link className={styles.link} href={link} />
      <div className={styles.keywordContainer}>
        {keywords.map((keyword) => (
          <samp key={keyword} className={styles.keywords}>
            {keyword}
            {"  "}
          </samp>
        ))}
      </div>
    </Link>
  );
};
