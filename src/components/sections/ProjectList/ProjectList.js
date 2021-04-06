import React from "react";
import { Container, PRIMARY, SECONDARY, Section } from "../../../globalStyles";
import Heading from "../../Heading/Heading";
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import CardMain from "../../Card/CardMain";
import CardFooter from "../../Card/CardFooter";
import CardImage from "../../Card/CardImage";
import Image from "../../../images/test.png";
import styled from "styled-components";

const ProjectList = () => {
  return (
    <React.Fragment>
      <Section>
        <Container>
          <Heading>Projects</Heading>
          <Card>
            <CardHeader>
              <ParaPrimary>E-Commerce</ParaPrimary>
              <h3>Djkart</h3>
            </CardHeader>
            <CardImage>
              <img src={Image} alt="profile" />
            </CardImage>
            <CardMain>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam expedita cumque dolores distinctio ex illum ipsum quos
                corrupti accusamus! Est. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Aliquam expedita cumque dolores distinctio ex
                illum ipsum quos corrupti accusamus! Est.
              </p>
            </CardMain>
            <CardFooter>
              <TechContainer>
                <p>Reactjs</p>
                <p>Django</p>
                <p>Styled Components</p>
              </TechContainer>
              <IconsContainer>
                <a href="x">
                  <i className="fab fa-github"></i>
                </a>
                <a href="x">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="x">
                  <i className="fab fa-instagram"></i>
                </a>
              </IconsContainer>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <ParaPrimary>E-Commerce</ParaPrimary>
              <h3>Djkart</h3>
            </CardHeader>
            <CardImage>
              <img src={Image} alt="profile" />
            </CardImage>
            <CardMain>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam expedita cumque dolores distinctio ex illum ipsum quos
                corrupti accusamus! Est. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Aliquam expedita cumque dolores distinctio ex
                illum ipsum quos corrupti accusamus! Est.
              </p>
            </CardMain>
            <CardFooter>
              <TechContainer>
                <p>Reactjs</p>
                <p>Django</p>
                <p>Styled Components</p>
              </TechContainer>
              <IconsContainer>
                <a href="x">
                  <i className="fab fa-github"></i>
                </a>
                <a href="x">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="x">
                  <i className="fab fa-instagram"></i>
                </a>
              </IconsContainer>
            </CardFooter>
          </Card>
        </Container>
      </Section>
    </React.Fragment>
  );
};

const ParaPrimary = styled.p`
  margin-bottom: 0.5rem;
  color: ${PRIMARY};
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: 300;
  p {
    margin-right: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

const IconsContainer = styled.div`
  margin-top: 1rem;
  & a {
    color: ${PRIMARY};
    display: inline-block;
    font-size: 3.2rem;
    margin-right: 3.6rem;
    :hover {
      color: ${SECONDARY};
    }
  }
`;

export default ProjectList;
