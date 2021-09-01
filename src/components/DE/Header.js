import React from "react";
import styled from "styled-components";
import Moi from "../../images/moi.jpeg";
import Waves from "../../images/waves.jpeg";
import { Link } from "react-router-dom";

import { ReactComponent as EmailIcon } from "../../images/icons/email.svg";
import { ReactComponent as LinkedIcon } from "../../images/icons/linked.svg";
import { ReactComponent as GithubIcon } from "../../images/icons/github.svg";

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
        <Language>
          <Link className="de" to="/">
            <p>DE</p>
          </Link>
          <Link className="eng" to="/eng">
            <p>ENG</p>
          </Link>
        </Language>
      </Profiles>
    </Container>
  );
};

const Language = styled.div`
  display: flex;
  position: absolute;
  right: 15%;
  top: 10px;
  @media only screen and (max-width: 700px) {
    position: absolute;
    width: 100px;
    top: -190px;
    left: 50%;
    transform: translateX(-50%);
  }
  p {
    margin: 0;
    font-size: 1rem;
  }
  .de {
    box-shadow: 0px 1px 3px rgba(28, 41, 90, 0.4);
    height: 100%;
    padding: 5px 10px 5px 10px;
    text-decoration: none;
    background: #6d9ff6;
    border-radius: 7px;
    color: black;
    :hover {
      cursor: default;
    }
  }
  .eng {
    box-shadow: 0px 1px 3px rgba(28, 41, 90, 0.4);
    text-decoration: none;
    margin-left: 10px;
    padding: 5px 10px 5px 10px;
    border-radius: 7px;
    color: black;
    :hover {
      cursor: pointer;
      background: #b2b2b2;
    }
    background: #dbdbdb;
  }
`;

const Holder = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  display: flex;
`;

const HoverDiv = styled.a`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 0 10px;
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
  height: 160px;
  align-items: center;
  margin-bottom: 10px;
`;

const ProfilePic = styled.div`
  position: absolute;
  height: 250px;
  width: 250px;
  top: 57px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 2px 2px 6px rgba(28, 41, 90, 0.5);
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
  background-repeat: repeat-x;
  img {
    position: relative;
    left: -5px;
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
  z-index: 10;
  overflow: hidden;
`;

export default Header;
