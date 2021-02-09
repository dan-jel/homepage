import React from "react";
import styled from "styled-components";
import Huge from "../images/huge.jpeg";
import NavBar from "../components/Nav";

import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Background>
          <img src={Huge} alt="Background" />
        </Background>
        <Header />
      </Container>
    </>
  );
};

const Background = styled.div`
  position: absolute;
  height: 4000px;
  width: 100%;
  img {
    display: block;
    width: 2560px;
    height: 10000px;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200vh;
  overflow-x: hidden;
  overflow-y: scroll;
  /* Add the ability to scroll */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default HomePage;
