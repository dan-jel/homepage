import React from "react";
import styled from "styled-components";
import Header from "../components/ENG/Header";
import AboutMe from "../components/ENG/AboutMe";
import Curriculum from "../components/ENG/Curriculum";
import Skills from "../components/ENG/Skills";
import Certificates from "../components/ENG/Certificates";
import ProjectPreview from "../components/ENG/ProjectPreview";
import { motion } from "framer-motion";

const HomePage = ({ NavPosition, setNavPosition }) => {
  return (
    <Container>
      <Header />
      <AboutMe />
      <Curriculum />
      <Skills />
      <Certificates />
      <ProjectPreview />
    </Container>
  );
};

const Container = styled(motion.div)`
  position: relative;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default HomePage;
