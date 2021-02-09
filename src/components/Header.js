import React from "react";
import styled from "styled-components";
import Sebi from "../images/sebi.jpeg";
import BlueBack from "../images/blue.jpeg";
import Sticks from "../images/sticks.jpeg";

import { ReactComponent as EmailIcon } from "../images/icons/email.svg";
import { ReactComponent as LinkedIcon } from "../images/icons/linked.svg";
import { ReactComponent as GithubIcon } from "../images/icons/github.svg";

const Header = () => {
  return (
    <Container>
      <Navigation>
        <ul>
          <li>
            <NavButton>home</NavButton>
          </li>
          <li>
            <NavButton>projects</NavButton>
          </li>
          <li>
            <NavButton>contact</NavButton>
          </li>
        </ul>
      </Navigation>
      <Banner>
        <img src={Sticks} alt="Sticks" />
      </Banner>
      <RoundImage>
        <img src={Sebi} alt="profile" />
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

const Banner = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: blue;
  display: flex;
  z-index: 1;
  box-shadow: 0px 0px 15px #000000;
  img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const RoundImage = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  box-shadow: 5px 5px 15px black;
  z-index: 2;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Navigation = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  ul {
    padding-inline-start: 0;
    display: flex;
    justify-content: center;
    list-style-type: none;
    li {
      padding: 1rem 3rem;
      font-size: 1.5rem;
      font-weight: bold;
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

const NavButton = styled.div`
  background-color: rgba(255, 255, 255, 0.75);
  padding: 0.25rem 1rem;
  border-radius: 2rem;
  color: #1c488b;
  :hover {
    background-image: url(${BlueBack});
    color: white;
    cursor: pointer;
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
