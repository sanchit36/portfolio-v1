import React from "react";
import { Container, Section } from "../../../globalStyles";
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import CardMain from "../../Card/CardMain";
import CardFooter from "../../Card/CardFooter";
import CardImage from "../../Card/CardImage";
import Heading from "../../Heading/Heading";
import Image from "../../../images/test.png";

const About = () => {
  return (
    <React.Fragment>
      <Section>
        <Container>
          <Heading>About</Heading>
          <Card>
            <CardImage>
              <img src={Image} alt="profile" />
            </CardImage>
            <CardHeader>
              <h4>Background</h4>
            </CardHeader>
            <CardMain>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam expedita cumque dolores distinctio ex illum ipsum quos
                corrupti accusamus! Est.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam expedita cumque dolores distinctio ex illum ipsum quos
                corrupti accusamus! Est.
              </p>
            </CardMain>
            <CardFooter>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </CardFooter>
          </Card>
        </Container>
      </Section>
    </React.Fragment>
  );
};

export default About;
