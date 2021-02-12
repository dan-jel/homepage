import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Toggle = ({ children, title, date }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Container layout>
      <Header layout onClick={() => setToggle(!toggle)}>
        <h2 className="date">{date}</h2>
        <h2 className="title">{title}</h2>
      </Header>
      {toggle ? (
        <Line
          animate={{ width: "100%" }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        />
      ) : (
        <Line
          animate={{ width: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        />
      )}
      {toggle ? children : ""}
    </Container>
  );
};

const Container = styled(motion.div)`
  p {
    font-size: 1.2rem;
  }
`;

const Header = styled(motion.div)`
  display: flex;
  cursor: pointer;
`;

const Line = styled(motion.div)`
  width: 100%;
  height: 3px;
  background: #6c9ff6;
`;

export default Toggle;
