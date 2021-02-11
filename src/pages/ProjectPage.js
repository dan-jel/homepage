import React from "react";
import styled from "styled-components";
import Projects from "../Projects";
import ProjectCard from "../components/ProjectCard";

const HomePage = () => {
  return (
    <>
      <Container>
        <ProjectDrawer>
          {Projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </ProjectDrawer>
      </Container>
    </>
  );
};

const ProjectDrawer = styled.div`
  position: relative;
  width: auto;
  max-width: 80vw;
  height: auto;
  transform: translateX(10%);
  background: blue;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

const Container = styled.div`
  position: relative;
  top: -300px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100vh;
`;

export default HomePage;
