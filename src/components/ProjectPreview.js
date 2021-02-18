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
        <Header>
          <h1>Projects</h1>
          <ProjektLink to="/projects">Projektübersicht</ProjektLink>
        </Header>
        <Box>
          <Slider projectAmount={projectAmount}>
            {Projects.map((project) => {
              return <Card key={project.id} project={project} />;
            })}
          </Slider>
        </Box>
      </Padding>
    </Container>
  );
};

const Header = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    padding-left: 5px;
  }
`;

const ProjektLink = styled(Link)`
  position: relative;
  right: 0;
  top: 0;
  color: black;
  cursor: pointer;
  padding: 5px 15px;
  border-radius: 8px;
  text-decoration: underline;
  :hover {
    background: white;
    box-shadow: 0px 2px 4px rgba(28, 41, 90, 0.4);
  }
`;

const Padding = styled.div`
  width: 80%;
  height: auto;
  position: relative;
  left: 10%;
`;

const Box = styled.div`
  width: 100%;
  height: 405px;
  position: relative;
  overflow-x: scroll;
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
