import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Curriculum = () => {
  const [active, setActive] = useState(0);

  return (
    <Container
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.75, delay: 0.75, ease: "easeOut" }}
    >
      <Block>
        <h1>Lebenslauf</h1>
        <Timeline>
          <LifeLine
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 1.25 }}
          />
          <Dot
            active={active === 0 ? true : false}
            pos="0%"
            onClick={() => {
              setActive(0);
            }}
          />
          <Dot
            active={active === 1 ? true : false}
            pos="10%"
            onClick={() => {
              setActive(1);
            }}
          />
          <Dot
            active={active === 2 ? true : false}
            pos="20%"
            onClick={() => {
              setActive(2);
            }}
          />
        </Timeline>
      </Block>
    </Container>
  );
};

const Dot = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: ${(props) => props.pos};
  height: ${(props) => (props.active ? "40px" : "20px")};
  width: ${(props) => (props.active ? "40px" : "20px")};
  border-radius: 50%;
  transform: translateY(-50%);
  background: #1c488b;
`;

const Timeline = styled.div`
  margin: 3rem 0rem;
  width: 100%;
  height: 50px;
  position: relative;
`;

const Container = styled(motion.div)`
  position: relative;
  height: auto;
  width: 100%;
  background: white;
  padding: 3rem 0rem;
`;

const Block = styled.div`
  position: relative;
  height: 100%;
  width: 60%;
  left: 20%;
`;

const LifeLine = styled(motion.div)`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 10px;
  background: #6c9ff6;
  border-radius: 1rem;
`;

export default Curriculum;
