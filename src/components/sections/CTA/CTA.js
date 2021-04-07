import React from "react";
import { Container, DARKBG, Section } from "../../../globalStyles";
import { ButtonLink } from "../../Button/Button.styles";

const CTA = () => {
  return (
    <React.Fragment>
      <Section style={{ backgroundColor: DARKBG }}>
        <Container style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "5rem" }}>Have something in mind?</h2>
          <ButtonLink>Get in Touch</ButtonLink>
        </Container>
      </Section>
    </React.Fragment>
  );
};

export default CTA;
