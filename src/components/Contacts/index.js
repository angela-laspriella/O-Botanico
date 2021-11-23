import React, { useState } from "react";
import {
  Body,
  Body1,
  Body2,
  ContactContainer,
  ContactContainer2,
  ContactContainer3,
  ContactH1,
  ContactH2,
  ContactH3,
  ContactP1,
  ScheduleContainer,
  ScheduleContainer2,
  ScheduleContainer3,
  ScheduleH1,
  ScheduleH2,
  ScheduleH3,
  ScheduleP1,
} from "./ContactElements";
import { Parallax } from "react-scroll-parallax";

const ContactSection = () => {
  return (
    <Body>
      <Body1>
        <ContactContainer>
          <Parallax y={[710, -400]} tagOuter="figure">
            <ContactContainer2>
              <ContactH1>Contactos</ContactH1>
            </ContactContainer2>
          </Parallax>

          <ContactContainer3>
            <Parallax y={[177, -435]} x={[25, 25]} tagOuter="figure">
              <ContactH2>Telefone</ContactH2>
            </Parallax>

            <Parallax
              y={[-145 + 500, -2700 + 500]}
              x={[25, 25]}
              tagOuter="figure"
            >
              <ContactH3>+351 239 855 215</ContactH3>
            </Parallax>

            <Parallax
              y={[-240 + 550, -3000 + 500]}
              x={[25, 25]}
              tagOuter="figure"
            >
              <ContactP1>Horário: 9h00-12h30, 14h00-17h30</ContactP1>
            </Parallax>

            <Parallax y={[42, -435]} x={[25, 25]} tagOuter="figure">
              <ContactH2>Morada</ContactH2>
            </Parallax>

            <Parallax y={[-145, -2700]} x={[25, 25]} tagOuter="figure">
              <ContactH3>Jardim Botânico da Universidade de Coimbra</ContactH3>
            </Parallax>

            <Parallax y={[-240, -3000]} x={[25, 25]} tagOuter="figure">
              <ContactP1>Calçada Martim de Freitas 3000-456, Coimbra</ContactP1>
            </Parallax>
          </ContactContainer3>
        </ContactContainer>
      </Body1>
      <Body2>
        <ScheduleContainer>
          <Parallax x={[-100, 100]} tagOuter="figure">
            <ScheduleContainer2>
              <ScheduleH1>Horários</ScheduleH1>
            </ScheduleContainer2>
          </Parallax>
          <ScheduleContainer3>
            <Parallax x={[-100, 250]} tagOuter="figure">
              <ScheduleH2>Inverno</ScheduleH2>
            </Parallax>
            <Parallax x={[-100, 325]} tagOuter="figure">
              <ScheduleH3>1 outubro a 31 de março</ScheduleH3>
            </Parallax>
            <Parallax x={[-100, 365]} tagOuter="figure">
              <ScheduleP1>Horário: 9h00-12h30, 14h00-17h30</ScheduleP1>
            </Parallax>
            <Parallax x={[-100, 475]} tagOuter="figure">
              <ScheduleH2>Verão</ScheduleH2>
            </Parallax>
            <Parallax x={[-100, 800]} tagOuter="figure">
              <ScheduleH3>1 outubro a 31 de março</ScheduleH3>
            </Parallax>
            <Parallax x={[-100, 1005]} tagOuter="figure">
              <ScheduleP1>Horário: 9h00-12h30, 14h00-17h30</ScheduleP1>
            </Parallax>
          </ScheduleContainer3>
        </ScheduleContainer>
      </Body2>
    </Body>
  );
};

export default ContactSection;
