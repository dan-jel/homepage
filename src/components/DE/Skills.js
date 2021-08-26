import React from "react";
import styled from "styled-components";
import SkillCard from "./SkillCard";

import SkillsData from "./SkillsData";
import { ReactComponent as Softskills } from "../../images/icons/softskills.svg";

const SoftSkillCard = () => {
  const SoftRow = ({ skills }) => {
    return (
      <SoftRowDiv>
        <p>{skills[0]}</p>
        <p>{skills[1]}</p>
      </SoftRowDiv>
    );
  };
  const SoftSkillData = [
    ["kreativ", "analytisches Denken"],
    ["flexibel", "intrinsisch motiviert"],
    ["teamfähig", "wissensdurstig"],
    ["belastbar", "anstrengungsbereit"],
  ];

  return (
    <SoftContainer>
      <SoftPadding>
        <SoftHeader>
          <h3>
            <p>Softskills</p>
          </h3>
          <Softskills />
        </SoftHeader>
        <SoftBody>
          {SoftSkillData.map((skills, index) => {
            return <SoftRow key={index} skills={skills} />;
          })}
        </SoftBody>
      </SoftPadding>
    </SoftContainer>
  );
};

const SoftRowDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const SoftBody = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const SoftContainer = styled.div`
  position: relative;
  height: 375px;
  width: 300px;
  margin: 0 15px 0px 5px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(28, 41, 90, 0.4);
  svg {
    color: black;
    height: 30px;
    width: 30px;
  }
`;

const SoftPadding = styled.div`
  width: 80%;
  height: 80%;
  position: relative;
  top: 7.5%;
  left: 7.5%;
`;

const SoftHeader = styled.div`
  display: flex;
  height: 40px;
  padding-bottom: 30px;
  align-items: center;
  justify-content: space-between;
  svg {
    z-index: 100;
    height: 30px;
    width: 30px;
    g {
      fill: black;
      stroke: black;
    }
  }
  h3 p {
    font-size: 14px;
    margin: 0;
    display: inline-block;
    padding: 5px 15px;
    border-radius: 8px;
    width: auto;
    color: #358de5;
    background: #358de520;
  }
`;

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
            <SoftSkillCard />
          </Slider>
        </Box>
      </Padding>
    </Container>
  );
};

const Padding = styled.div`
  position: relative;
  height: auto;
  width: 70%;
  left: 15%;
  h1 {
    padding-left: 5px;
    text-align: center;
  }
`;

const Container = styled.div`
  z-index: 11;
  height: auto;
  width: 100%;
  padding: 3rem 0rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 405px;
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
  @media only screen and (max-width: 1830px) {
    align-items: flex-start;
  }
`;

const Slider = styled.div`
  display: flex;
  width: ${(props) => props.skillAmount * 320 + 320 - 10 + "px"};
  height: auto;
`;

export default Skills;
