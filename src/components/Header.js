import React, { useState } from "react";
import styled from "styled-components";
import Sebi from "../images/sebi.jpeg";
import Waves from "../images/waves.jpeg";
import { motion } from "framer-motion";

import { ReactComponent as EmailIcon } from "../images/icons/email.svg";
import { ReactComponent as LinkedIcon } from "../images/icons/linked.svg";
import { ReactComponent as GithubIcon } from "../images/icons/github.svg";

const Header = () => {
  const [Rotation1, setRotation1] = useState(0);
  const [Rotation2, setRotation2] = useState(0);
  const [Rotation3, setRotation3] = useState(0);

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
        <HoverDiv
          initial={{ x: 200 }}
          animate={{ x: 0, rotate: Rotation1 }}
          onHoverStart={() => setRotation1(Rotation1 + 360)}
          transition={{ ease: "easeOut" }}
        >
          <EmailIcon />
        </HoverDiv>
        <HoverDiv
          initial={{ x: 200 }}
          animate={{ x: 0, rotate: Rotation2 }}
          onHoverStart={() => setRotation2(Rotation2 + 360)}
          transition={{ ease: "linear" }}
        >
          <LinkedIcon />
        </HoverDiv>
        <HoverDiv
          initial={{ x: 200 }}
          animate={{ x: 0, rotate: Rotation3 }}
          onHoverStart={() => setRotation3(Rotation3 + 360)}
          transition={{ ease: "linear" }}
        >
          <GithubIcon />
        </HoverDiv>
      </Profiles>
    </Container>
  );
};

const HoverDiv = styled(motion.Layer)`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 1rem;
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
