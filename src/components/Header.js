import React from "react";
import styled from "styled-components";
import Sebi from "../images/sebi.jpeg";

import { ReactComponent as EmailIcon } from "../images/icons/email.svg";
import { ReactComponent as LinkedIcon } from "../images/icons/linked.svg";
import { ReactComponent as GithubIcon } from "../images/icons/github.svg";

const Header = () => {
  return (
    <Container>
      <RoundImage>
        <div>
          <img src={Sebi} alt="profile" />
        </div>
      </RoundImage>
      <Info>
        <h1>Daniel Heese</h1>
        <Line />
        <h2>Front End Developer</h2>
        <Profiles>
          <EmailIcon />
          <LinkedIcon />
          <GithubIcon />
        </Profiles>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 600px;
`;

const RoundImage = styled.div`
  position: relative;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  div {
    height: 300px;
    width: 300px;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 5px 5px 15px black;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  h1,
  h2 {
    padding: 0;
    margin: 0;
  }
  h2 {
    font-size: 1.3rem;
  }
  padding-bottom: 0.7rem;
  ul {
    padding: 0;
    display: flex;
    li {
      list-style-type: none;
      padding: 0rem 1rem;
    }
  }
`;

const Line = styled.div`
  background: #496daf;
  height: 3px;
  width: 110%;
`;

const Profiles = styled.div`
  display: flex;
  height: 40px;
  width: auto;
  svg {
    height: 100%;
    width: auto;
    padding: 1rem;
    g {
      fill: #496daf;
    }
    :hover {
      cursor: pointer;
      g {
        fill: #1d407c;
      }
    }
  }
`;

export default Header;
