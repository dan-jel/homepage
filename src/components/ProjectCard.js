import React from "react";
import styled from "styled-components";

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <h1>{project.name}</h1>
    </Card>
  );
};

const Card = styled.div`
  background: red;
  position: relative;
  height: 200px;
  width: 200px;
`;

export default ProjectCard;
