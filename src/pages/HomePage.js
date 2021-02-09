import React from "react";
import styled from "styled-components";
import Huge from "../images/huge.jpeg";

import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
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
  overflow: hidden;
  img {
    display: block;
    width: 2560px;
    height: 10000px;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
`;

export default HomePage;
