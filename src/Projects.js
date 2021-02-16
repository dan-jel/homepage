import soundcontainer from "./images/project_thumbnails/soundcontainer.jpeg";
import ignite from "./images/project_thumbnails/ignite.jpeg";
import portfolio from "./images/project_thumbnails/portfolio.jpeg";

const Projects = [
  {
    id: 0,
    name: "music player",
    info:
      "Minimalistischer Webplayer, welcher sich leicht um weitere Lieder ergänzen lässt",
    url: "http://h2911972.stratoserver.net:90/",
    github: "https://github.com/dan-jel/soundcontainer",
    image: soundcontainer,
  },
  {
    id: 1,
    name: "ignite",
    info:
      "Eine Webseite, welche Bilder und weitere Inhalte von der RAWG.io API bezieht und diese gefiltert in einer dynamischen Ansicht zeigt.",
    url: "http://h2911972.stratoserver.net:89/",
    github: "https://github.com/dan-jel/ignite-website",
    image: ignite,
  },
  {
    id: 2,
    name: "portfolio",
    info:
      "Ein dummy Portfolio, bei welchem ich viel mit styled-components und framer-motion gearbeitet habe, für einen dynamisch und interaktiv wirkenden Look.",
    url: "http://h2911972.stratoserver.net:88/",
    github: "https://github.com/dan-jel/react-portfolio",
    image: portfolio,
  },
];

export default Projects;
