import React from "react";
import styled from "styled-components";
import AboutMe from "../components/AboutMe";
import Curriculum from "../components/Curriculum";
import { motion } from "framer-motion";

const HomePage = ({ NavPosition, setNavPosition }) => {
  return (
    <Container>
      <AboutMe />
      <Curriculum />
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
