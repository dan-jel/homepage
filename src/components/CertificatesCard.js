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
      <p>finished</p>
    </Foot>
  );
};

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
      stroke: ${(props) => props.certi.color};
    }
  }
  p {
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
          <h4>{certi.name}</h4>
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

const Container = styled.div`
  height: 375px;
  width: 300px;
  background: white;
  border-radius: 10px;
  margin: 0px 10px;
  box-shadow: 0px 1px 3px rgba(28, 41, 90, 0.4);
`;

const Padding = styled.div`
  position: relative;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
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
      margin: 0;
      display: inline-block;
      padding: 5px;
      border-radius: 8px;
      width: auto;
      color: ${(props) => props.certi.color};
      background: ${(props) => props.certi.color + `20`};
    }
  }
  h4 {
    margin: 0;
  }
`;

export default CertificatesCard;
