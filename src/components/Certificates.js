import React from "react";
import styled from "styled-components";
import CertificatesCard from "./CertificatesCard";
import CertificateData from "../CertificateData";

const Certificates = () => {
  return (
    <Container>
      <Box>
        <Slider>
          {CertificateData.map((certi) => {
            return <CertificatesCard key={certi.id} certi={certi} />;
          })}
        </Slider>
      </Box>
    </Container>
  );
};

const Box = styled.div`
  width: 80%;
  left: 10%;
  height: 405px;
  position: relative;
  overflow-x: scroll;
  padding-top: 2rem;
  display: flex;
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: 0;
    background-color: white;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: 0rem;
    background-color: #6c9ff6;
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  background: white;
`;

const Slider = styled.div`
  display: flex;
  width: ${(props) => props.projectAmount * 320 + "px"};
  height: auto;
`;

export default Certificates;
