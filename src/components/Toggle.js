import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Toggle = ({ children, title, date }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Container>
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
          animate={{ width: toggle ? "100%" : "0" }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        />
      )}
      <div layout>{toggle ? children : ""}</div>
    </Container>
  );
};

const Container = styled(motion.div)`
  p {
    font-size: 1.2rem;
  }
  position: relative;
`;

const Header = styled(motion.div)`
  display: flex;
  cursor: pointer;
  h2 {
    font-size: 1.4rem;
  }
`;

const Line = styled(motion.div)`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #6c9ff6;
`;

export default Toggle;
