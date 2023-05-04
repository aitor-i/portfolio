import { filterSkills } from "./filterSkills";
import { SkillsType } from "domain/types/Skills/Skills";

describe("filterSkills", () => {
  const skills = [
    {
      SkillName: "JavaScript",
      description: "A programming language",
      link: "https://example.com",
      dates: "2019-2020",
      "key-words": ["programming", "web development"],
    },
    {
      SkillName: "React",
      description: "A JavaScript library for building user interfaces",
      link: "https://example.com",
      dates: "2020-2021",
      "key-words": ["programming", "web development", "UI"],
    },
    {
      SkillName: "TypeScript",
      description: "A superset of JavaScript that adds optional static typing",
      link: "https://example.com",
      dates: "2021-2022",
      "key-words": ["programming", "web development", "static typing"],
    },
  ];

  it("should return an empty array when no skills match the search text", () => {
    const filteredSkills = filterSkills(skills, "Python");
    expect(filteredSkills).toEqual([]);
  });

  it("should return an array containing only the matching skill when only one skill matches the search text", () => {
    const filteredSkills = filterSkills(skills, "React");
    expect(filteredSkills).toEqual([
      {
        SkillName: "React",
        description: "A JavaScript library for building user interfaces",
        link: "https://example.com",
        dates: "2020-2021",
        "key-words": ["programming", "web development", "UI"],
      },
    ]);
  });

  it("should return an array containing all skills that match the search text", () => {
    const filteredSkills = filterSkills(skills, "programming");
    expect(filteredSkills).toEqual([
      {
        SkillName: "JavaScript",
        description: "A programming language",
        link: "https://example.com",
        dates: "2019-2020",
        "key-words": ["programming", "web development"],
      },
      {
        SkillName: "React",
        description: "A JavaScript library for building user interfaces",
        link: "https://example.com",
        dates: "2020-2021",
        "key-words": ["programming", "web development", "UI"],
      },
      {
        SkillName: "TypeScript",
        description:
          "A superset of JavaScript that adds optional static typing",
        link: "https://example.com",
        dates: "2021-2022",
        "key-words": ["programming", "web development", "static typing"],
      },
    ]);
  });

  it("should not be case-insensitive", () => {
    const filteredSkills = filterSkills(skills, "jAvAsCrIpt");
    expect(filteredSkills).toEqual([
      {
        SkillName: "JavaScript",
        description: "A programming language",
        link: "https://example.com",
        dates: "2019-2020",
        "key-words": ["programming", "web development"],
      },
      {
        SkillName: "React",
        description: "A JavaScript library for building user interfaces",
        link: "https://example.com",
        dates: "2020-2021",
        "key-words": ["programming", "web development", "UI"],
      },
      {
        SkillName: "TypeScript",
        description:
          "A superset of JavaScript that adds optional static typing",
        link: "https://example.com",
        dates: "2021-2022",
        "key-words": ["programming", "web development", "static typing"],
      },
    ]);
  });

  it("should match partial words", () => {
    const filteredSkills = filterSkills(skills, "scr");
    expect(filteredSkills.length).toEqual(3);
  });
});
