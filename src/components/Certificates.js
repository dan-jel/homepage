import React from "react";
import styled from "styled-components";
import CertificatesCard from "./CertificatesCard";
import CertificateData from "../CertificateData";

const Certificates = () => {
  return (
    <Container>
      <Padding>
        <h1>Zertifikate & Kurse</h1>
        <Box>
          <Slider>
            {CertificateData.map((certi) => {
              return <CertificatesCard key={certi.id} certi={certi} />;
            })}
          </Slider>
        </Box>
      </Padding>
    </Container>
  );
};

const Padding = styled.div`
  width: 80%;
  position: relative;
  left: 10%;
  h1 {
    text-align: center;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 425px;
  position: relative;
  overflow-x: scroll;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  padding: 3rem 0rem;
  box-shadow: 0px 4px 4px rgba(28, 41, 90, 0.2);
  z-index: 10;
  h1 {
    padding-left: 5px;
  }
`;

const Slider = styled.div`
  display: flex;
  width: ${(props) => props.projectAmount * 320 + "px"};
  height: auto;
`;

export default Certificates;
