import React from "react";
import styled from "styled-components";
import Projects from "../Projects";
import Card from "./ProjectPreviewCard";
import { Link } from "react-router-dom";

const ProjectPreview = () => {
  const projectAmount = Projects.length;
  return (
    <Container>
      <Padding>
        <h1>Projects</h1>
        <Box>
          <Slider projectAmount={projectAmount}>
            {Projects.map((project) => {
              return <Card key={project.id} project={project} />;
            })}
          </Slider>
        </Box>
        <ProjektLink to="/projects">Projektübersicht</ProjektLink>
      </Padding>
    </Container>
  );
};

const ProjektLink = styled(Link)`
  color: black;
  cursor: pointer;
  border-radius: 8px;
  margin-top: 1rem;
  padding: 5px 10px;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    background: white;
    box-shadow: 0px 2px 4px rgba(28, 41, 90, 0.4);
  }
`;

const Padding = styled.div`
  width: 70%;
  height: auto;
  position: relative;
  left: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  width: 100%;
  height: 430px;
  position: relative;
  overflow-x: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: 0;
    background-color: #dbedff;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: 0rem;
    background-color: #6c9ff6;
  }
`;

const Container = styled.div`
  position: relative;
  padding: 3rem 0rem;
  height: auto;
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  background: rgb(219, 237, 255);
`;

const Slider = styled.div`
  display: flex;
  width: ${(props) => props.projectAmount * 320 + "px"};
  height: auto;
`;

export default ProjectPreview;
