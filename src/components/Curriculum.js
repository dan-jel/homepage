import React from "react";
import styled from "styled-components";
import { motion, AnimateSharedLayout } from "framer-motion";
import Toggle from "./Toggle";

const Curriculum = () => {
  return (
    <Container
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.75, delay: 0.75, ease: "easeOut" }}
    >
      <Block>
        <AnimateSharedLayout>
          <Toggle title="2005 - 2009  |  Montessori Schule Kassel">
            <div className="answer">
              <p>Bilinguale Grundschule</p>
            </div>
          </Toggle>
          <Toggle title="2009 - 2017  |  Albert-Schweitzer-Schule Kassel">
            <div className="answer">
              <p>
                Abitur mit einem Schnitt von 2,7 mit den Leistungskursen Chemie
                & Kunst
              </p>
            </div>
          </Toggle>
          <Toggle title="2017 - 2019  |  N+P Informationssysteme GmbH Kassel">
            <div className="answer">
              <p>
                Bei N+P wurde ich im Zuge eines Projektes für die Netcom Kassel
                eingestellt, welche das neugebaute Glasfasernetz in Nordhessen
                erfassen musste. Zu Beginn meiner Tätigkeit habe ich fast
                ausschließlich in der Datenerfassung via/mit AutoCAD gearbeitet,
                allerdings konnte ich schnell mehr Verantwortung übernehmen. Zu
                meinen Tätigkeiten gehörte dann die Qualitätsprüfung der
                (bereits) erfassten Daten (von mir als auch der anderen
                Erfassungsmitarbeiter), sowie die permanente Weiterentwickelung
                des Datenmodells und Anpassung der AutoCAD Erweiterung für
                Glasfasererfassung, in ständiger Rücksprache mit der
                Projektleitung und der Baufirma. Eine der größten
                Herausforderungen für mich war es eine Schulung für das
                Netzauskunftsteam der Netcom zu halten, das mit AutoCAD und
                insbesondere der Erweiterung vertraut gemacht werden sollten.
              </p>
            </div>
          </Toggle>
          <Toggle title="2019 - 2020  |  Informatik Studium an der Universität Kassel">
            <div className="answer">
              <p>
                Im Sommersemester 2019 habe ich mich für ein Informatik Studium
                an der Uni Kassel eingeschrieben. Nach der ursprünglichen
                Begeisterung wurde mir schnell klar, dass die Themen und deren
                Behandlung sehr theoretisch waren und ich das unmittelbare
                Tüfteln an einem realen Projekt vermisste. Die Corona Pandemie
                stieß mich dann endgültig über die Klippe, da auch noch jeder
                soziale Aspekt des Studiums verloren ging, sodass ich mein
                Studium vorerst einstellt.
              </p>
            </div>
          </Toggle>
          <Toggle title="2020 - today  |  Arbeiter-Samariter-Bund" date=" ">
            <div className="answer">
              <p>
                Beim ASB arbeite ich zwei mal die Woche halbtags im Bürodienst
                und werde die meiste Zeit für die verschiedensten kleinen
                technischen Probleme in der Firma gebraucht.
              </p>
            </div>
          </Toggle>
          <Toggle title="2020 - today  |  Selbststudium und Onlinekurse">
            <div className="answer">
              <p>
                Da ich im Studium schon angefangen hatte Python zu lernen,
                schien es mir sinnvoll dort direkt weiter zu machen, weshalb ich
                mir einen sehr umfangreichen Kurs bei Udemy kaufte. Dieser war
                Ursprung vieler kleiner Projekte, wie z.B. der Automatisierung
                diverser Excel-Tabellen für meine Arbeit beim ASB oder einem
                kleinen Python Tool um eine Verbindungsauskunft von der NVBW API
                abzufragen. Ich habe mit den unterschiedlichsten Technologien
                wie Docker, Nginx, MongoDB und RestAPI herumexperimentiert, bis
                ich Ende 2020 über React gestolpert bin. Seit dem habe ich
                meinen Fokus auf die Front-End Entwicklung gelegt und bin neben
                weiteren Onlinekursen dabei Webseiten für Freunde und Bekannte
                (oder: selbstständig und in kleineren Teams) zu entwickeln.
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
      </Block>
    </Container>
  );
};

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

export default Curriculum;
