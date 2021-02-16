import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Header from "./Header";
import { motion } from "framer-motion";

const Nav = ({ NavPosition, setNavPosition }) => {
  return (
    <Container
      initial={{ y: "-100%" }}
      animate={{ y: NavPosition }}
      transition={{ ease: "easeIn", duration: 0.5 }}
    >
      <Header />
      <NavBar setNavPosition={setNavPosition} />
    </Container>
  );
};

const Container = styled(motion.div)`
  overflow-x: hidden;
  position: relative;
  top: 0;
  z-index: 100;
  height: auto;
  box-shadow: 0px 2px 4px rgba(28, 41, 90, 0.4);
`;

export default Nav;
