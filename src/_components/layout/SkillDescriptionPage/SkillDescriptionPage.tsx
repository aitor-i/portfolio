import Link from "next/link";

import Navigation from "_components/Navigation";

import styles from "./SkillDescriptionPage.module.css";

import skillsDescriptions from "domain/texts/Skills/SkillsDescription/SkillsDescription.json";

interface Props {
  skillName: string;
}
export const SkillDescriptionPage = ({ skillName }: Props) => {
  const skillDescription = skillsDescriptions.filter(
    (skillsD) => skillsD.SkillName === skillName
  )[0];

  return (
    <main>
      <div className={styles.navigationContainer}>
        <Navigation page="skills" />
      </div>
      <h1 className={styles.title}>{skillName}</h1>
      <div className={styles.fieldsContainer}>
        <div>
          <h2 className={styles.subtitle}>Work Experience</h2>
          {skillDescription?.workExperience?.map((experience) => (
            <p key={experience} className={styles.description}>
              {experience}
            </p>
          ))}
        </div>
        <div>
          <h2 className={styles.subtitle}>Projects</h2>
          {skillDescription?.projects?.map((project) => (
            <p key={project} className={styles.description}>
              {project}
            </p>
          ))}
        </div>

        <div>
          <h2 className={styles.subtitle}>Certificates</h2>
          {skillDescription?.certificates?.map((certificate) => (
            <p key={certificate} className={styles.description}>
              {certificate}
            </p>
          ))}
        </div>
      </div>

      <Link className={styles.backButton} href={"/skills"}>
        Go Back
      </Link>
    </main>
  );
};
