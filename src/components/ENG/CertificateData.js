// Icon Import
import DataScience from "../../images/datascience.jpeg";
import FrontEnd from "../../images/frontend.jpeg";
import BackEnd from "../../images/backend.jpeg";
import Django from "../../images/django.png";

// PDF Import
import pythonPDF from "../../images/pdf/python.pdf";
import reactPDF from "../../images/pdf/react.pdf";
import dockerPDF from "../../images/pdf/docker.pdf";

const CertificateData = [
  {
    id: 0,
    icon: DataScience,
    color: "#f0c029",
    tag: "Python / DataScience",
    name: "Python Bootcamp: Vom Anfänger zum Profi, inkl. Data Science",
    info: "comprehensive course about Python including Numpy, Pandas, Matplotlib, Webcrawling, Flask und PyQt",
    link: "https://www.udemy.com/course/python-bootcamp/",
    pdf: pythonPDF,
    platform: "Udemy",
    inProgress: false,
  },
  {
    id: 1,
    icon: FrontEnd,
    color: "#38bcff",
    tag: "Front End / React",
    name: "The Creative React and Redux Course",
    info: "Javascript Refresher, React Basics, 3 different projects each with a different main emphasis (all of them can be found under my projects), styled-components, framer-motion, Redux und Async",
    link: "https://developedbyed.com/courses/enrolled/1203573",
    pdf: reactPDF,
    platform: "developedbyed",
    inProgress: false,
  },
  {
    id: 2,
    color: "#62c96b",
    icon: BackEnd,
    tag: "Back End / Infrastructure",
    name: "Python REST APIs with Flask, Docker, MongoDB, and AWS DevOps",
    info: "Learn Python coding with RESTful API's using the Flask framework. Understand how to use MongoDB, Docker and Tensor flow.",
    link: "https://www.udemy.com/course/python-rest-apis-with-flask-docker-mongodb-and-aws-devops/",
    pdf: dockerPDF,
    platform: "Udemy",
    inProgress: false,
  },
  {
    id: 3,
    color: "#092E20",
    icon: Django,
    tag: "Full Stack Web Development",
    name: "Build websites with HTML, CSS, Bootstrap, Javascript, jQuery, Python 3, and Django!",
    info: "Understanding the different components and how they complement each other. Learn Django Routing and the Model Views structure.",
    link: "https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/",
    pdf: "",
    platform: "Udemy",
    inProgress: true,
  },
];

export default CertificateData;
