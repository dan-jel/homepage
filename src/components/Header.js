import React from "react";
import styled from "styled-components";
import Sebi from "../images/sebi.jpeg";
import Waves from "../images/waves.jpeg";

import { ReactComponent as EmailIcon } from "../images/icons/email.svg";
import { ReactComponent as LinkedIcon } from "../images/icons/linked.svg";
import { ReactComponent as GithubIcon } from "../images/icons/github.svg";

const Header = () => {
  return (
    <Container>
      <Banner>
        <img src={Waves} alt="Banner" />
      </Banner>
      <ProfilePic>
        <img src={Sebi} alt="Profile" />
      </ProfilePic>
      <ProfileText>
        <h1>Daniel Heese</h1>
        <Line />
        <h2>Front End Developer</h2>
      </ProfileText>
      <Profiles>
        <HoverDiv>
          <EmailIcon />
        </HoverDiv>
        <HoverDiv>
          <LinkedIcon />
        </HoverDiv>
        <HoverDiv>
          <GithubIcon />
        </HoverDiv>
      </Profiles>
    </Container>
  );
};

const HoverDiv = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  padding-right: 1rem;
  cursor: pointer;
  :hover {
    svg {
      transform: rotate(15deg);
      g {
        fill: #1c488b;
      }
    }
  }
  svg {
    height: 40px;
    width: 40px;
    g {
      fill: #6d9ff6;
    }
  }
`;

const Profiles = styled.div`
  position: absolute;
  top: 250px;
  padding-top: 2rem;
  right: 0;
  display: flex;
  height: 30px;
`;

const Line = styled.div`
  position: relative;
  height: 3px;
  width: 120%;
  background: #6d9ff6;
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 315px;
  left: 50%;
  width: 230px;
  transform: translateX(-50%);
  align-items: center;
  h1 {
    margin: 0;
    margin-bottom: 0.3rem;
    white-space: nowrap;
  }
  h2 {
    margin: 0;
    margin-top: 0.3rem;
    white-space: nowrap;
  }
`;

const ProfilePic = styled.div`
  position: absolute;
  height: 250px;
  width: 250px;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 4px 4px 7px #222222;
`;

const Banner = styled.div`
  height: 250px;
  width: 100vw;
  overflow: hidden;
  object-fit: fill;
  img {
    width: auto;
    height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
`;

export default Header;
