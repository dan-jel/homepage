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
          Neue Technologien haben mich schon von klein auf begeistert. Im Rahmen
          von Ferienjobs in IT-Firmen konnte ich mich mit Drohnen, 3D-Druckern
          und Smart-Home-Devices beschäftigen. Nach dem Abitur wollte ich
          erstmal Praxiserfahrung sammeln und hatte das Glück an einem
          beeindruckenden IT-Projekt (Glasfaser-Netzwerk Nordhessen)
          mitzuwirken.
          <br />
          <br />
          Nach dem Abschluss des Projektes wollte ich meine
          Programmier-Kenntnisse vertiefen und startete ein Informatikstudium an
          der UNI Kassel. Leider waren die Studieninhalte oft nicht mehr
          zeitgemäß und der Studienbetrieb überwiegend analog, was im Frühjahr
          2020 bedingt durch Covid-19 praktisch zum Stillstand des Lehrbetriebs
          führte.
          <br />
          <br />
          Deshalb entschied ich mich meine weitere Informatik-Ausbildung selbst
          in die Hand zu nehmen.
          <br />
          Seitdem habe ich meine Kenntnisse im Bereich der Software-Entwicklung
          umfassend ausgebaut und mehrere Projekte selbstständig und in
          kleineren Teams umgesetzt. Das selbständige und praxisbezogene Lernen
          ist für mich der effektivste Weg mir nachhaltig Wissen anzueignen.
          <br />
          <br />
          Nun möchte ich gerne den nächsten Entwicklungsschritt durch die
          Zusammenarbeit mit erfahrenen Software-Entwicklern in einem
          professionellen Firmenumfeld machen.
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
  z-index: 5;
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
