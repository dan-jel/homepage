import React from "react";
import styled from "styled-components";
import { motion, AnimateSharedLayout } from "framer-motion";
import Toggle from "./Toggle";

const Curriculum = () => {
  return (
    <Container>
      <Padding>
        <h1>Lebenslauf</h1>
        <Block>
          <AnimateSharedLayout>
            <Toggle title="2005 - 2009  |  Montessori Schule Kassel">
              <motion.div className="answer">
                <motion.p>Bilinguale Grundschule</motion.p>
              </motion.div>
            </Toggle>
            <Toggle title="2009 - 2017  |  Albert-Schweitzer-Schule Kassel">
              <motion.div
                className="answer"
                transition={{ duration: 0.5, ease: "easeIn" }}
                animate={{ opacity: 1 }}
              >
                <motion.p>
                  Abitur mit den Leistungskursen Chemie & Kunst (Schnitt 2,7)
                </motion.p>
              </motion.div>
            </Toggle>
            <Toggle title="2017 - 2019  |  N+P Informationssysteme">
              <motion.div className="answer">
                <motion.p>
                  Bei N+P wurde ich im Zuge eines Projektes für die Netcom
                  Kassel eingestellt, welche das neugebaute Glasfasernetz in
                  Nordhessen erfasste. Zu Beginn meiner Tätigkeit habe ich fast
                  ausschließlich in der Datenerfassung gearbeitet, allerdings
                  konnte ich schnell mehr Verantwortung übernehmen. Zu meinen
                  Tätigkeiten gehörte dann die Qualitätsprüfung der erfassten
                  Daten sowie die permanente Weiterentwickelung des
                  Datenmodells, der GUI, Abfragen und Reports. Weiterhin führte
                  ich Anpassungen am WebGIS für die Planauskunft durch und
                  schulte das Netzauskunftsteam der Netcom.
                </motion.p>
              </motion.div>
            </Toggle>
            <Toggle title="2019 - 2020  |  Informatik Studium">
              <motion.div className="answer">
                <motion.p>
                  Im Sommersemester 2019 habe ich mich für ein Informatik
                  Studium an der Uni Kassel eingeschrieben. Nach der
                  anfänglichen Begeisterung wurde mir schnell klar, dass die
                  Themen und deren Behandlung sehr theoretisch waren und ich das
                  unmittelbare Tüfteln an einem realen Projekt vermisste. Durch
                  die Corona Pandemie und den dadurch auch noch entfallenden
                  sozialen Aspekt des Studiums, entschied ich mich es
                  abzubrechen und meine Bildung selbst in die Hand zu nehmen.
                </motion.p>
              </motion.div>
            </Toggle>
            <Toggle title="2020 - today  |  Arbeiter-Samariter-Bund" date=" ">
              <motion.div className="answer">
                <motion.p>
                  In meinem MiniJob beim ASB bin ich für die sukzessive
                  Digitalisierung von Büroprozessen verantwortlich und
                  unterstütze die Benutzer bei allen anfallenden technischen
                  Problemen.
                </motion.p>
              </motion.div>
            </Toggle>
            <Toggle title="2020 - today  |  Selbststudium & Onlinekurse">
              <motion.div className="answer">
                <motion.p>
                  Da ich im Studium schon angefangen hatte Python zu lernen,
                  vertiefte ich zunächst diese Kenntnisse mit einem
                  umfangreichen Udemy-Kurs bei Udemy. Dieser war Ursprung vieler
                  kleiner Projekte, wie z.B. der Automatisierung diverser
                  Excel-Tabellen für meine Arbeit beim ASB oder einem
                  Python-Tool um eine Verbindungsauskunft von der API des
                  Nahverkehrsverbundes Baden-Württemberg abzufragen. Ich habe
                  mit den unterschiedlichsten Technologien wie Docker, Nginx,
                  MongoDB und RestAPI gearbeitet, bis ich Ende 2020 auf React
                  gestoßen bin. Seitdem habe ich meinen Fokus auf die Front- End
                  Entwicklung gelegt und bin neben weiteren Onlinekursen dabei,
                  Webseiten für Freunde und Bekannte zu entwickeln.
                </motion.p>
              </motion.div>
            </Toggle>
          </AnimateSharedLayout>
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
  box-shadow: 0px -3px 4px rgba(28, 41, 90, 0.2);
`;

const Block = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export default Curriculum;
