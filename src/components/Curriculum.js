import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import TimelineData from "../TimelineData";
import Arrow from "../images/icons/arrow.jpeg";

const Chapter = ({ entry, selected, setSelected }) => {
  const moi = entry.id === selected;

  const ShowText = () => {
    return (
      <Details>
        <p>{entry.text}</p>
      </Details>
    );
  };

  return (
    <Box>
      <Header
        onClick={() => {
          setSelected(entry.id);
        }}
      >
        <motion.img animate={{ rotate: moi ? 90 : 0 }} src={Arrow} alt="" />
        <Date>{entry.date}</Date>
        <h3>{entry.title}</h3>
      </Header>
      {moi ? <ShowText /> : ""}
    </Box>
  );
};

const Date = styled.h3`
  width: 120px;
  height: auto;
  position: relative;
  left: 5px;
`;

const Details = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  p {
    margin: 0 35px;
    padding-bottom: 20px;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  img {
    margin-left: 5px;
    height: 25px;
    width: 25px;
  }
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(28, 41, 90, 0.2);
`;

const Curriculum = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Container>
      <Padding>
        <h1>Lebenslauf</h1>
        <Block>
          {TimelineData.map((entry, index) => {
            return (
              <Chapter
                key={index}
                entry={entry}
                selected={selected}
                setSelected={setSelected}
              />
            );
          })}
        </Block>
      </Padding>
    </Container>
  );
};

const Padding = styled.div`
  width: 80%;
  height: auto;
  position: relative;
  left: 10%;
`;

const Container = styled(motion.div)`
  position: relative;
  height: auto;
  width: 100%;
  z-index: 10;
  background: white;
  padding: 3rem 0rem;
  box-shadow: 0px -4px 4px rgba(28, 41, 90, 0.2);
`;

const Block = styled.div`
  position: relative;
  height: auto;
  width: 100%;
`;

export default Curriculum;
