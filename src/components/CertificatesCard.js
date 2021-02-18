import React from "react";
import styled from "styled-components";

import { ReactComponent as Progress } from "../images/icons/progress.svg";
import { ReactComponent as Finished } from "../images/icons/finished.svg";

const ProgressBar = ({ certi }) => {
  return (
    <Foot certi={certi}>
      <Progress />
      <p>in progress</p>
    </Foot>
  );
};

const FinishedBar = ({ certi }) => {
  return (
    <Foot certi={certi}>
      <Finished />
      <CertiLink certi={certi} href={certi.pdf} target="_blank">
        certified
      </CertiLink>
    </Foot>
  );
};

const CertiLink = styled.a`
  cursor: pointer;
  :hover {
    background: ${(props) => props.certi.color + `20`};
  }
`;

const Foot = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
  left: 0;
  svg {
    height: 30px;
    width: 30px;
    g {
      color: ${(props) => props.certi.color};
      stroke: ${(props) => props.certi.color};
    }
  }
  a,
  p {
    text-decoration: none;
    color: black;
    border: 1px solid ${(props) => props.certi.color};
    padding: 5px 10px;
    margin: 0;
    border-radius: 1rem;
  }
`;

const CertificatesCard = ({ certi }) => {
  return (
    <Container>
      <Padding>
        <Tag certi={certi}>
          <img src={certi.icon} alt="" />
          <h3>
            <p>{certi.tag}</p>
          </h3>
          <CourseLink
            target="_blank"
            rel="noopener noreferrer"
            href={certi.link}
          >
            {certi.name}
          </CourseLink>
          <p>{certi.info}</p>
        </Tag>
        {certi.inProgress ? (
          <ProgressBar certi={certi} />
        ) : (
          <FinishedBar certi={certi} />
        )}
      </Padding>
    </Container>
  );
};

const CourseLink = styled.a`
  font-size: 16px;
  color: black;
  font-weight: bold;
`;

const Container = styled.div`
  height: 400px;
  width: 300px;
  background: white;
  border-radius: 10px;
  margin: 0 15px 0px 5px;
  box-shadow: 0px 1px 3px rgba(28, 41, 90, 0.4);
`;

const Padding = styled.div`
  position: relative;
  top: 7.5%;
  left: 7.5%;
  width: 85%;
  height: 85%;
`;

const Tag = styled.div`
  display: flex;
  flex-direction: column;
  img {
    height: 50px;
    width: 50px;
  }
  h3 {
    p {
      font-size: 14px;
      margin: 0;
      display: inline-block;
      padding: 5px 15px;
      border-radius: 8px;
      width: auto;
      color: ${(props) => props.certi.color};
      background: ${(props) => props.certi.color + `20`};
    }
  }
  h4 {
    cursor: pointer;
    margin: 0;
    :hover {
      text-decoration: underline;
    }
  }
`;

export default CertificatesCard;
