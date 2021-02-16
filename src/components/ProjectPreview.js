import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Projects from "../Projects";
import Card from "./ProjectPreviewCard";

const ProjectPreview = () => {
  const projectAmount = Projects.length;
  return (
    <Container
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
    >
      <h1>Projects:</h1>
      <Line />
      <Box>
        <Slider projectAmount={projectAmount}>
          {Projects.map((project) => {
            return <Card key={project.id} project={project} />;
          })}
        </Slider>
      </Box>
    </Container>
  );
};

const Line = styled(motion.div)`
  height: 3px;
  width: 200px;
  background: #6c9ff6;
`;

const Box = styled.div`
  width: 80%;
  height: 405px;
  position: relative;
  overflow-x: scroll;
  padding-top: 2rem;
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: 0;
    background-color: white;
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

const Container = styled(motion.div)`
  position: relative;
  padding: 3rem 0rem;
  height: auto;
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(219, 237, 255);
  h1 {
    margin: 1rem 0rem 0.3rem 0rem;
  }
`;

const Slider = styled.div`
  display: flex;
  width: ${(props) => props.projectAmount * 320 + "px"};
  height: auto;
`;

export default ProjectPreview;
