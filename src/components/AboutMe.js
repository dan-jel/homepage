import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <Container
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
    >
      <TextBlock>
        <h1>Hallo, ich bin Daniel!</h1>
        <Line
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 1.25 }}
        />
        <h3>Krativer Kopf, Autodidakt und Coder</h3>
        <p>
          Ich bin 21 Jahre alt und lebe zur Zeit in Kassel. Im Sommer 2019 habe
          ich angefangen Informatik zu studieren, was ich aber im Zuge der
          Corona Pandemie pauseirt habe und mich seit dem selbstständig
          fortbilde. Nach einer Art Findungsphase zu Beginn 2020, wo ich sehr
          viel mit Python ausprobiert habe, bin ich zur Front End Entwicklung
          gekommen. Seit dem bin ich dabei React mit all seinen Features und
          Funktionen kennen zu lernen und in eigenregie Webseiten mit
          verschiedenen Inhalten und Konzepten zu entwickeln.
        </p>
      </TextBlock>
    </Container>
  );
};

const Line = styled(motion.div)`
  height: 3px;
  width: 200px;
  background: #6c9ff6;
`;

const Container = styled(motion.div)`
  position: relative;
  padding: 3rem 0rem 3rem 0rem;
  height: auto;
  width: 100%;
  background: rgb(219, 237, 255);
`;

const TextBlock = styled.div`
  position: relative;
  width: 60%;
  height: 100%;
  left: 20%;
  h3 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1.2rem;
  }
`;

export default AboutMe;
