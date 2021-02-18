import { ReactComponent as Coding } from "./images/icons/coding.svg";
import { ReactComponent as Infrastructure } from "./images/icons/infrastructure.svg";
import { ReactComponent as Tools } from "./images/icons/tools.svg";
import { ReactComponent as Softskills } from "./images/icons/softskills.svg";

const SkillsData = [
  {
    id: "0",
    tag: "Coding",
    Icon: Coding,
    items: [
      {
        name: "React.js",
        stars: 3,
      },
      {
        name: "JavaScript",
        stars: 3,
      },
      {
        name: "HTML",
        stars: 4,
      },
      {
        name: "CSS",
        stars: 4,
      },
      {
        name: "Python",
        stars: 3,
      },
    ],
  },
  {
    id: "1",
    tag: "Infrastructure",
    Icon: Infrastructure,
    items: [
      {
        name: "Node.js",
        stars: 2,
      },
      {
        name: "Docker",
        stars: 3,
      },
      {
        name: "MongoDB",
        stars: 4,
      },
      {
        name: "Nginx",
        stars: 2,
      },
      {
        name: "Rest-API",
        stars: 3,
      },
      {
        name: "Linux",
        stars: 4,
      },
    ],
  },
  {
    id: "2",
    tag: "Tools",
    Icon: Tools,
    items: [
      {
        name: "GitHub",
        stars: 4,
      },
      {
        name: "Microsoft Teams",
        stars: 5,
      },
      {
        name: "Postman",
        stars: 3,
      },
      {
        name: "Adobe Illustrator",
        stars: 4,
      },
      {
        name: "Procreate",
        stars: 5,
      },
    ],
  },
  {
    id: "3",
    tag: "Softskills",
    Icon: Softskills,
    items: [
      {
        name: "kreativ",
        stars: 4,
      },
      {
        name: "Microsoft Teams",
        stars: 5,
      },
      {
        name: "Postman",
        stars: 3,
      },
      {
        name: "Adobe Illustrator",
        stars: 4,
      },
      {
        name: "Procreate",
        stars: 5,
      },
    ],
  },
];

export default SkillsData;
