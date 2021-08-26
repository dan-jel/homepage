import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <Container>
      <TextBlock>
        <HeaderText>
          <h2>Hello, I'm Daniel -&nbsp;</h2>
          <h2>creative mind, self-taught coder</h2>
        </HeaderText>

        <Line />
        <p>
          I was enthusiastic about new technologies from an early age. As part
          of vacation jobs in IT companies, I was able to work with drones and
          3D printers and smart home devices. After graduating from high school,
          I wanted to first gain practical experience and I was lucky enough to
          participate in an impressive IT project (Glasfaser-Netzwerk Hessen).
          <br />
          <br />
          After completing the project, I wanted to deepen my programming skills
          and started studying computer science at the University of Kassel.
          Unfortunately, the course content was often no longer up-to-date and
          the courses were mostly analogue, which in spring 2020 practically led
          to a standstill of teaching due to Covid-19.
          <br />
          <br />
          That's why I decided to take my further IT training into my own hands.
          <br />
          Since then I have expanded my knowledge in the field of software
          development and implemented several projects independently and in
          smaller teams. Independent and practice-related learning is the most
          effective way for me to acquire sustainable knowledge.
          <br />
          <br />
          Now I would like to take the next step by working with experienced
          software developers in a professional company environment.
        </p>
      </TextBlock>
    </Container>
  );
};

const HeaderText = styled.div`
  display: flex;
  h2 {
    font-size: 1.3rem;
  }
  @media only screen and (max-width: 825px) {
    flex-direction: column;
    h2 {
      margin: 5px 0;
    }
  }
`;

const Line = styled(motion.div)`
  height: 3px;
  width: 100%;
  background: #6c9ff6;
`;

const Container = styled(motion.div)`
  position: relative;
  padding: 1rem 0rem 3rem 0rem;
  height: auto;
  width: 100%;
  z-index: 5;
`;

const TextBlock = styled.div`
  text-align: center;
  position: relative;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  left: 15%;
  p {
    font-size: 18px;
  }
`;

export default AboutMe;
