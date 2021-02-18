import React from "react";
import styled from "styled-components";
import SkillCard from "./SkillCard";

import SkillsData from "../SkillsData";

const Skills = () => {
  const skillAmount = SkillsData.length;
  return (
    <Container>
      <Padding>
        <h1>Skills</h1>
        <Box>
          <Slider skillAmount={skillAmount}>
            {SkillsData.map((Skill, i) => {
              return <SkillCard Skill={Skill} key={i} />;
            })}
          </Slider>
        </Box>
      </Padding>
    </Container>
  );
};

const Padding = styled.div`
  position: relative;
  height: auto;
  width: 80%;
  left: 10%;
`;

const Container = styled.div`
  z-index: 11;
  height: auto;
  width: 100%;
  padding: 3rem 0rem;
`;

const Box = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  overflow-x: scroll;
  padding-top: 5px;
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

const Slider = styled.div`
  display: flex;
  width: ${(props) => props.skillAmount * 320 + "px"};
  height: auto;
`;

export default Skills;
