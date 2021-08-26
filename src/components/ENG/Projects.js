import soundcontainer from "../../images/project_thumbnails/soundcontainer.jpeg";
import ignite from "../../images/project_thumbnails/ignite.jpeg";
import portfolio from "../../images/project_thumbnails/portfolio.jpeg";

const Projects = [
  {
    id: 0,
    name: "music player",
    info: "minimalistic webplayer which can easily be supplemented with other songs",
    url: "http://h2911972.stratoserver.net:90/",
    github: "https://github.com/dan-jel/soundcontainer",
    image: soundcontainer,
  },
  {
    id: 1,
    name: "portfolio",
    info: "a dummy portfolio in which I worked a lot with styled components and framer-motion, for a dynamic and interactive look",
    url: "http://h2911972.stratoserver.net:88/",
    github: "https://github.com/dan-jel/react-portfolio",
    image: portfolio,
  },
  {
    id: 2,
    name: "ignite",
    info: "A website that gets images and other content from the RAWG.io API and shows them filtered in a dynamic view",
    url: "http://h2911972.stratoserver.net:89/",
    github: "https://github.com/dan-jel/ignite-website",
    image: ignite,
  },
];

export default Projects;
