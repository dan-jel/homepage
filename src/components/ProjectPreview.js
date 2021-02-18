import React from "react";
import styled from "styled-components";
import Projects from "../Projects";
import Card from "./ProjectPreviewCard";

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
      </Padding>
    </Container>
  );
};

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
