import React from "react";
import { ReactComponent as GithubIcon } from "../images/icons/github.svg";
import styled from "styled-components";

const Card = ({ project }) => {
  return (
    <Container>
      <img
        src={`${project.image}`}
        alt="project thumbnail"
        onClick={() => {
          window.location.href = project.url;
        }}
      />
      <h4>{project.name}</h4>
      <p>{project.info}</p>
      <GithubIcon
        onClick={() => {
          window.location.href = project.github;
        }}
      />
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
    cursor: pointer;
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
    padding: 5px 0 10px 0;
  }
  p {
    position: relative;
    left: 15px;
    top: 10px;
    width: 280px;
    font-size: 0.9rem;
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
    bottom: 5%;
    right: 5%;
  }
`;

export default Card;
