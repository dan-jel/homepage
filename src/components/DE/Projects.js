import soundcontainer from "../../images/project_thumbnails/soundcontainer.jpeg";
import ignite from "../../images/project_thumbnails/ignite.jpeg";
import portfolio from "../../images/project_thumbnails/portfolio.jpeg";
import crypto_dashboard from "../../images/project_thumbnails/crypto-dashboard.jpeg";

const Projects = [
  {
    id: 0,
    name: "crypto dashboard",
    info: "Dashboard, was die top 500 Cryptowährungen monitort und verschiedene dynamische Ansichten generiert",
    url: "http://h2911972.stratoserver.net:91/",
    github: "https://github.com/dan-jel/crypto-dashboard",
    image: crypto_dashboard,
    tag: "in progress",
  },
  {
    id: 1,
    name: "music player",
    info: "Minimalistischer Webplayer, welcher sich leicht um weitere Lieder ergänzen lässt",
    url: "http://h2911972.stratoserver.net:90/",
    github: "https://github.com/dan-jel/soundcontainer",
    image: soundcontainer,
    tag: "done",
  },
  {
    id: 2,
    name: "portfolio",
    info: "Ein dummy Portfolio, bei welchem ich viel mit styled-components und framer-motion gearbeitet habe, für einen dynamisch und interaktiv wirkenden Look.",
    url: "http://h2911972.stratoserver.net:88/",
    github: "https://github.com/dan-jel/react-portfolio",
    image: portfolio,
    tag: "done",
  },
  {
    id: 3,
    name: "ignite",
    info: "Eine Webseite, welche Bilder und weitere Inhalte von der RAWG.io API bezieht und diese gefiltert in einer dynamischen Ansicht zeigt.",
    url: "http://h2911972.stratoserver.net:89/",
    github: "https://github.com/dan-jel/ignite-website",
    image: ignite,
    tag: "outdated",
  },
];

export default Projects;
