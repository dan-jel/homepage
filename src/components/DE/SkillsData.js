import { ReactComponent as Coding } from "../../images/icons/coding.svg";
import { ReactComponent as Infrastructure } from "../../images/icons/infrastructure.svg";
import { ReactComponent as Tools } from "../../images/icons/tools.svg";

const SkillsData = [
  {
    id: "0",
    tag: "Coding",
    Icon: Coding,
    items: [
      {
        name: "React.js",
        stars: 4,
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
        stars: 4,
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
        stars: 4,
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
        stars: 4,
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
        stars: 4,
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
        stars: 4,
      },
    ],
  },
];

export default SkillsData;
