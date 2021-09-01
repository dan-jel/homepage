import soundcontainer from "../../images/project_thumbnails/soundcontainer.jpeg";
import ignite from "../../images/project_thumbnails/ignite.jpeg";
import portfolio from "../../images/project_thumbnails/portfolio.jpeg";
import crypto_dashboard from "../../images/project_thumbnails/crypto-dashboard.jpeg";

const Projects = [
  {
    id: 0,
    name: "crypto dashboard",
    info: "dashboard which monitors the top 500 crypto-currencys and displays their data in different dynamic views",
    url: "http://h2911972.stratoserver.net:91/",
    github: "https://github.com/dan-jel/crypto-dashboard",
    image: crypto_dashboard,
    tag: "in progress",
  },
  {
    id: 1,
    name: "music player",
    info: "minimalistic webplayer which can easily be supplemented with other songs",
    url: "http://h2911972.stratoserver.net:90/",
    github: "https://github.com/dan-jel/soundcontainer",
    image: soundcontainer,
    tag: "done",
  },
  {
    id: 2,
    name: "portfolio",
    info: "a dummy portfolio in which I worked a lot with styled components and framer-motion, for a dynamic and interactive look",
    url: "http://h2911972.stratoserver.net:88/",
    github: "https://github.com/dan-jel/react-portfolio",
    image: portfolio,
    tag: "done",
  },
  {
    id: 3,
    name: "ignite",
    info: "a website that gets images and other content from the RAWG.io API and shows them filtered in a dynamic view",
    url: "http://h2911972.stratoserver.net:89/",
    github: "https://github.com/dan-jel/ignite-website",
    image: ignite,
    tag: "outdated",
  },
];

export default Projects;
