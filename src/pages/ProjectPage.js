import React from "react";
import styled from "styled-components";
import Huge from "../images/huge.jpeg";
import NavBar from "../components/Nav";
import Projects from "../Projects";
import ProjectCard from "../components/ProjectCard";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Background>
          <img src={Huge} alt="Background" />
        </Background>
        <ProjectDrawer>
          {Projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </ProjectDrawer>
      </Container>
    </>
  );
};

const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  img {
    display: block;
    width: 2560px;
    height: 10000px;
  }
`;

const ProjectDrawer = styled.div`
  position: absolute;
  top: 150px;
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
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow-y: scroll; /* Add the ability to scroll */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default HomePage;
