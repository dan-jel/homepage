import React from "react";
import { ReactComponent as GithubIcon } from "../images/icons/github.svg";
import styled from "styled-components";
import { motion } from "framer-motion";

const Card = ({ project }) => {
  return (
    <Container>
      <Padding>
        <ImageBox target="_blank" rel="noopener noreferrer" href={project.url}>
          <motion.img src={`${project.image}`} alt="project thumbnail" />
        </ImageBox>
        <a target="_blank" rel="noopener noreferrer" href={project.url}>
          {" "}
          <h4>{project.name}</h4>
        </a>

        <p>{project.info}</p>
        <a target="_blank" rel="noopener noreferrer" href={project.github}>
          {" "}
          <GithubIcon />
        </a>
      </Padding>
    </Container>
  );
};

const ImageBox = styled.a`
  position: relative;
  width: 100%;
  height: 125px;
  display: inline-block;
`;

const Padding = styled.div`
  position: relative;
  width: 85%;
  height: 85%;
  top: 7.5%;
  left: 7.5%;
  a {
    text-decoration: none;
  }
  h4 {
    color: black;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;

const Container = styled.div`
  position: relative;
  height: 400px;
  width: 300px;
  margin: 0 15px 0 5px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(28, 41, 90, 0.4);
  display: flex;
  flex-direction: column;
  img {
    cursor: pointer;
    position: relative;
    border-radius: 10px;
    width: 100%;
  }
  h4 {
    position: relative;
    margin: 0;
    margin-top: 20px;
    padding: 5px 0 10px 0;
  }
  p {
    position: relative;
    width: 100%;
    margin: 0;
  }
  svg {
    cursor: pointer;
    :hover {
      g {
        fill: #6c9ff6;
      }
    }
    height: 30px;
    width: 30px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export default Card;
