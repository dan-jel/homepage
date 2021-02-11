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
  position: sticky;
  top: 0;
  z-index: 100;
  height: auto;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.5);
`;

export default Nav;
