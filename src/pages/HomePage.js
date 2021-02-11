import React from "react";
import styled from "styled-components";
import AboutMe from "../components/AboutMe";
import Curriculum from "../components/Curriculum";

const HomePage = ({ NavPosition, setNavPosition }) => {
  const changePosition = () => {
    console.log(window.scrollY, NavPosition);
    if (window.location.pathname === "/") {
      if (window.scrollY < 200) {
        setNavPosition(0);
      } else {
        setNavPosition(-400);
      }
    } else {
      return;
    }
  };

  window.addEventListener("scroll", changePosition);

  return (
    <Container
      onScroll={() => {
        console.log("TEST");
      }}
    >
      <AboutMe />
      <Curriculum />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  top: 450px;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default HomePage;
