import React from "react";
import styled from "styled-components";
import Moi from "../images/moi.jpeg";
import Waves from "../images/waves.jpeg";

import BlueBack from "../images/blue.jpeg";

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
        <img src={Moi} alt="Profile" />
      </ProfilePic>
      <Profiles>
        <Holder>
          <HoverDiv
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:daniel.heese1@gmail.com"
          >
            <EmailIcon />
          </HoverDiv>
          <HoverDiv
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/daniel-heese/"
          >
            <LinkedIcon />
          </HoverDiv>
          <HoverDiv
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/dan-jel"
          >
            <GithubIcon />
          </HoverDiv>
        </Holder>
      </Profiles>
    </Container>
  );
};

const Holder = styled.div`
  position: absolute;
  right: 10%;
  bottom: 7.5%;
  display: flex;
`;

const HoverDiv = styled.a`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 0rem 0.5rem;
  cursor: pointer;
  :hover {
    svg {
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
  position: relative;
  bottom: 0;
  right: 0;
  display: flex;
  height: 120px;
  align-items: center;
  margin-bottom: 10px;
  a {
    padding-left: 10%;
    font-weight: bold;
    text-decoration: none;
    color: black;
    display: inline-block;
    p {
      padding: 5px 10px;
      border-radius: 1.5rem;
      :hover {
        color: white;
        background-image: url(${BlueBack});
      }
    }
  }
`;

const ProfilePic = styled.div`
  position: absolute;
  height: 250px;
  width: 250px;
  top: 53px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 4px 4px 7px #222222;
  img {
    height: 100%;
    width: 100%;
  }
`;

const Banner = styled.div`
  position: relative;
  height: 200px;
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
  height: auto;
  box-shadow: 0px 2px 4px rgba(28, 41, 90, 0.4);
  z-index: 10;
  overflow: hidden;
`;

export default Header;
