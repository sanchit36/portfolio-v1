import React from "react";
import { Container, Section } from "../../../globalStyles";
import { ButtonLink } from "../../Button/Button.styles";
import Heading from "../../Heading/Heading";
import { Content, Flex, ImageContainer, LinksContainer } from "./About.styles";

import Profile from "../../../images/profile.jpg";

const About = () => {
  return (
    <React.Fragment>
      <Section style={{ paddingTop: 0 }}>
        <Container>
          <Heading>About</Heading>
          <Flex>
            <Content>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                doloribus laudantium perspiciatis odit laborum, nobis quis culpa
                porro accusantium odio facilis consequuntur hic inventore autem,
                quidem nemo officia. Possimus, tempora?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                doloribus laudantium perspiciatis odit laborum, nobis quis culpa
                porro accusantium odio facilis consequuntur hic inventore autem,
                quidem nemo officia. Possimus, tempora?
              </p>
              <br />
              <br />
              <ButtonLink>Resume</ButtonLink>
              <LinksContainer>
                <a href=".">
                  <i className="fab fa-github"></i>
                </a>
                <a href=".">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href=".">
                  <i className="fab fa-instagram"></i>
                </a>
              </LinksContainer>
            </Content>
            <ImageContainer>
              <img src={Profile} alt="" />
            </ImageContainer>
          </Flex>
        </Container>
      </Section>
    </React.Fragment>
  );
};

export default About;
