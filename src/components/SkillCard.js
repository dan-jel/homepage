import React from "react";
import styled from "styled-components";
import { ReactComponent as Star } from "../images/icons/star.svg";

const SkillCard = () => {
  return (
    <Container>
      <Star />
    </Container>
  );
};

const Container = styled.div`
  svg {
    height: 30px;
    width: 30px;
    g {
      fill: #358de5;
      stroke: #358de5;
    }
  }
`;

export default SkillCard;
