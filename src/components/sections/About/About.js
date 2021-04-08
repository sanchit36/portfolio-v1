import React from "react";
import { Container, Section } from "../../../globalStyles";
import { ButtonLink } from "../../Button/Button.styles";
import Heading from "../../Heading/Heading";
import { Content, Flex, ImageContainer } from "./About.styles";

import Profile from "../../../images/profile.jpg";
import Links from "../../Links/Links";
import { resume, socialLinks } from "../../../data";

const About = () => {
  return (
    <React.Fragment>
      <Section style={{ paddingTop: 0 }}>
        <Container>
          <Heading>About</Heading>
          <Flex>
            <Content>
              <h4>Fullstack Web developer</h4>
              <p>
                Hey, I'm Sanchit Bhadgal, a full-stack web developer. I like to
                create and design things that you see over internet. I have a
                working knowledge of various web techonologies such as
                <strong>
                  {" "}
                  SASS / JavaScript / React / Redux / Styled Components / Django
                  / Firebase
                </strong>
                .
              </p>
              <p>
                I love spending time in fixing little details and optimizing
                website designs and performance. I am still a learner trying to
                grasp various things that come my way.
              </p>
              {resume && (
                <ButtonLink
                  target="blank"
                  href={resume}
                  style={{ marginTop: "3rem" }}
                >
                  Resume
                </ButtonLink>
              )}
              <Links data={socialLinks} />
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
