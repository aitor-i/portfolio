import Link from "next/link";

import Navigation from "_components/Navigation";

import styles from "./SkillDescriptionPage.module.css";

interface Props {
  skillName: string;
}
export const SkillDescriptionPage = ({ skillName }: Props) => {
  return (
    <main>
      <div>
        <Navigation />
      </div>
      <h1 className={styles.title}>{skillName}</h1>
      <h2 className={styles.subtitle}>Work Experience</h2>
      <p>Biko</p>
      <h2 className={styles.subtitle}>Projects</h2>
      <p>Ibarra Photo</p>

      <h2 className={styles.subtitle}>Certificates</h2>
      <p>Free Code Camp</p>

      <Link href={"/skills"}>Go Back</Link>
    </main>
  );
};
