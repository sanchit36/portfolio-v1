import React from "react";
import { Container } from "../../globalStyles";
import Links from "../Links/Links";
import { FooterContainer } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <p>Designed and Developed by Sanchit Bhadgal</p>
        <Links />
      </Container>
    </FooterContainer>
  );
};

export default Footer;
