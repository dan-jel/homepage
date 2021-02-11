import React from "react";
import styled from "styled-components";
import AboutMe from "../components/AboutMe";
import Curriculum from "../components/Curriculum";
import { motion } from "framer-motion";

const HomePage = ({ NavPosition, setNavPosition }) => {
  const changePosition = () => {
    const pos = window.scrollY;

    if (window.location.pathname === "/") {
      if (pos < 400) {
        setNavPosition(-pos);
      } else {
        setNavPosition(-400);
      }
    } else {
      setNavPosition(-400);
    }
  };

  window.addEventListener("scroll", changePosition);

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
