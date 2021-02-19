import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <Container>
      <TextBlock>
        <HeaderText>
          <h2>Hallo, ich bin Daniel -&nbsp;</h2>
          <h2>Kreativer Kopf, Autodidakt und Coder</h2>
        </HeaderText>

        <Line />
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

const HeaderText = styled.div`
  display: flex;
  h2 {
    font-size: 1.3rem;
  }
  @media only screen and (max-width: 825px) {
    flex-direction: column;
    h2 {
      margin: 5px 0;
    }
  }
`;

const Line = styled(motion.div)`
  height: 3px;
  width: 100%;
  background: #6c9ff6;
`;

const Container = styled(motion.div)`
  position: relative;
  padding: 1rem 0rem 3rem 0rem;
  height: auto;
  width: 100%;
  z-index: 5;
`;

const TextBlock = styled.div`
  text-align: center;
  position: relative;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  left: 15%;
  p {
    font-size: 18px;
  }
`;

export default AboutMe;
