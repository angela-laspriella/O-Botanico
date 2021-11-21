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
          <ContactContainer2>
            <ContactH1>Contactos</ContactH1>
          </ContactContainer2>

          <ContactContainer3>
            <ContactH2>Telefone</ContactH2>
            <ContactH3>+351 239 855 215</ContactH3>
            <ContactP1>Horário: 9h00-12h30, 14h00-17h30</ContactP1>
            <ContactH2>Morada</ContactH2>
            <ContactH3>Jardim Botânico da Universidade de Coimbra</ContactH3>

            <ContactP1>
              Calçada Martim de Freitas 3000-456 Coimbra, Portugal
            </ContactP1>
          </ContactContainer3>
        </ContactContainer>
      </Body1>
      <Body2>
        <ScheduleContainer>
          <ScheduleContainer2>
            <ScheduleH1>Horários</ScheduleH1>
          </ScheduleContainer2>

          <ScheduleContainer3>
            <ScheduleH2>Inverno</ScheduleH2>
            <ScheduleH3>1 outubro a 31 de março</ScheduleH3>
            <ScheduleP1>Horário: 9h00-12h30, 14h00-17h30</ScheduleP1>
            <ScheduleH2>Verão</ScheduleH2>
            <ScheduleH3>1 outubro a 31 de março</ScheduleH3>
            <ScheduleP1>Horário: 9h00-12h30, 14h00-17h30</ScheduleP1>
          </ScheduleContainer3>
        </ScheduleContainer>
      </Body2>
    </Body>
  );
};

export default ContactSection;
