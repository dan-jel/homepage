import React from "react";
import styled from "styled-components";

const CertificatesCard = ({ certi }) => {
  return (
    <Container>
      <h3>{certi.name}</h3>
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
  h3 {
    padding-left: 10px;
  }
`;

export default CertificatesCard;
