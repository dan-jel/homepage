import React from "react";
// import { motion } from "framer-motion";
import styled from "styled-components";

const Card = ({ project }) => {
  return (
    <Container>
      <h2>{project.name}</h2>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
  margin: 0 10px;
  background: white;
  border-radius: 1.5rem;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
`;

export default Card;
