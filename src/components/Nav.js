import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Header from "./Header";
import { motion } from "framer-motion";

const Nav = ({ NavPosition, setNavPosition }) => {
  return (
    <Container animate={{ y: NavPosition }} transition={{ ease: "easeOut" }}>
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
