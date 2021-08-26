import React from "react";
import styled from "styled-components";
import Header from "../components/DE/Header";
import AboutMe from "../components/DE/AboutMe";
import Curriculum from "../components/DE/Curriculum";
import Skills from "../components/DE/Skills";
import Certificates from "../components/DE/Certificates";
import ProjectPreview from "../components/DE/ProjectPreview";
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
