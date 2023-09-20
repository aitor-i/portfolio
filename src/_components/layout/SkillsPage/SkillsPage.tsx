import Navigation from "_components/Navigation";

import styles from "./Skills.module.css";
import SkillCard from "./SkillCard";

import skills from "domain/texts/Skills/Skills.json";
import { filterSkills } from "application/filterSkills/filterSkills";
import { ChangeEvent, useState } from "react";

export const SkillsPage = () => {
  const [searchParam, setSearchParam] = useState("");

  const skillsInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParam(event.target.value);
  };
  const filteredSkills = filterSkills(skills, searchParam);
  return (
    <main>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.navigationContainer}>
        <Navigation page="skills" />
      </div>
      <div className={styles.searchContainer}>
        <input
          className={styles.search}
          type="text"
          placeholder="Search skill"
          onChange={skillsInputHandler}
        />
      </div>
      <div className={styles.skillCardContainer}>
        {filteredSkills.map((skill) => (
          <SkillCard
            key={skill.link}
            SkillName={skill.SkillName}
            dates={skill.dates}
            description={skill.description}
            keywords={skill["key-words"]}
            link={skill.link}
          />
        ))}
      </div>
    </main>
  );
};
