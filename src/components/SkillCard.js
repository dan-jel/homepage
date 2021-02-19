import React from "react";
import styled from "styled-components";
import { ReactComponent as Star } from "../images/icons/star.svg";

const Entry = ({ item }) => {
  const loop = item.stars;
  return (
    <Reihe>
      <p>{item.name}</p>
      <StarDiv>
        {[...Array(loop)].map((e, i) => (
          <Star key={i} />
        ))}
      </StarDiv>
    </Reihe>
  );
};

const StarDiv = styled.div`
  svg {
    margin: 0 -10px 0 0;
  }
`;

const Reihe = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  margin: 0 0 5px 0;
  p {
    margin: 0;
  }
  svg {
    position: relative;
    top: 2px;
  }
`;

const SkillCard = ({ Skill }) => {
  return (
    <Container>
      <Padding>
        <Header>
          <h3>
            <p>{Skill.tag}</p>
          </h3>
          <Skill.Icon />
        </Header>
        <ListBody>
          {Skill.items.map((item, i) => {
            return <Entry item={item} key={i} />;
          })}
        </ListBody>
      </Padding>
    </Container>
  );
};

const ListBody = styled.div`
  width: 100%;
  align-items: center;
`;

const Container = styled.div`
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
    g {
      fill: #358de5;
      stroke: #358de5;
    }
  }
`;

const Header = styled.div`
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

const Padding = styled.div`
  width: 80%;
  height: 80%;
  position: absolute;
  top: 7.5%;
  left: 7.5%;
`;

export default SkillCard;
