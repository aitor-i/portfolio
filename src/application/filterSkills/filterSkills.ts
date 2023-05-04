import type { SkillsType } from "domain/types/Skills/Skills";

export function filterSkills(
  skills: SkillsType[],
  searchText: string
): SkillsType[] {
  // Convert searchText to lowercase to do a case-insensitive search
  const lowercaseSearchText = searchText.toLowerCase();

  // Filter the array of skills
  const filteredSkills = skills.filter((skill) => {
    // Check if the SkillName or description contains the search text
    const skillNameContainsSearchText =
      skill.SkillName.toLowerCase().includes(lowercaseSearchText);
    const descriptionContainsSearchText = skill.description
      .toLowerCase()
      .includes(lowercaseSearchText);

    // Check if any of the keywords contain the search text
    const keywordsContainSearchText = skill["key-words"].some((keyword) =>
      keyword.toLowerCase().includes(lowercaseSearchText)
    );

    // Return true if any of the above conditions are true
    return (
      skillNameContainsSearchText ||
      descriptionContainsSearchText ||
      keywordsContainSearchText
    );
  });

  return filteredSkills;
}
