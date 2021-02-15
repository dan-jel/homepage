import React from "react";
import styled from "styled-components";
import AboutMe from "../components/AboutMe";
import Curriculum from "../components/Curriculum";
import Skills from "../components/Skills";
import { motion } from "framer-motion";

const HomePage = ({ NavPosition, setNavPosition }) => {
  return (
    <Container>
      <AboutMe />
      <Curriculum />
      <Skills />
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
