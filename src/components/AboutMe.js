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
        <h3>Kreativer Kopf, Autodidakt und Coder</h3>
        <p>
          Ich bin 21 Jahre alt und lebe zur Zeit in Kassel. Seit meiner Kindheit
          beschäftige ich mich mit Computern & neusten Technologien wie
          3D-Druckern, Drohen und Smart-Home-Devices, sodass für mich schon früh
          klar war etwas in Richtung Informatik zu machen. Da ich im Studium
          nicht das Gefühl hatte die Praxis und Erfahrung zu sammeln, die ich
          mir erwünscht habe und aus früheren Berufserfahrungen mitgenommen
          habe, dass mich die praktische Anwendung schnell(er) voranbringt,
          entschied ich mich Anfang 2020 meine Bildung selbst in die Hand zu
          nehmen. Seitdem habe ich meine Kenntnisse im Bereich der Front-End
          Entwicklung extrem ausgebaut und mehrere Projekte selbstständig und in
          kleineren Teams umgesetzt. Ich freue mich auf weitere
          Berufserfahrungen, um meinen Wissenshorizont (wie zum Beispiel der
          Umgang und Nutzen aus BigData und Automatisierungen) zu erweitern und
          im Team an neuen Entwicklungen/Projekten/Technologien zu arbeiten.
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
