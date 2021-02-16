import React from "react";
// import { motion } from "framer-motion";
import styled from "styled-components";

const Card = ({ project }) => {
  return (
    <Container>
      <img src={`${project.image}`} alt="project thumbnail" />
      <h4>{project.name}</h4>
      <p>{project.info}</p>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 375px;
  width: 300px;
  margin: 0 10px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(28, 41, 90, 0.4);
  display: flex;
  flex-direction: column;
  img {
    position: relative;
    left: 15px;
    top: 15px;
    border-radius: 10px;
    height: 200px;
    width: 270px;
  }
  h4 {
    position: relative;
    left: 15px;
    top: 25px;
    margin: 0;
  }
  p {
    position: relative;
    left: 15px;
    top: 10px;
    width: 280px;
    font-size: 0.9rem;
  }
`;

export default Card;
