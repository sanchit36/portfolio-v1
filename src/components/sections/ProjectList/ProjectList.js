import React from "react";
import { Container, Section } from "../../../globalStyles";
import Heading from "../../Heading/Heading";
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import CardMain from "../../Card/CardMain";
import CardFooter from "../../Card/CardFooter";
import CardImage from "../../Card/CardImage";
import {
  IconsContainer,
  ParaPrimary,
  TechContainer,
} from "./ProjectList.styles";
import Loader from "../../Loader";

const ProjectList = ({ loading, projects }) => {
  return (
    <React.Fragment>
      <Section id="work">
        <Container>
          <Heading>Projects</Heading>
          {loading ? (
            <Loader />
          ) : (
            projects?.map(
              (
                {
                  id,
                  subtitle,
                  title,
                  summary,
                  technologies,
                  image,
                  code_link,
                  live_link,
                },
                index
              ) => (
                <Card key={id} inverted={index % 2}>
                  <CardHeader>
                    <ParaPrimary>{subtitle}</ParaPrimary>
                    <h3>{title.toUpperCase()}</h3>
                  </CardHeader>
                  <CardImage>
                    <img src={image} alt="profile" />
                  </CardImage>
                  <CardMain>
                    <p>{summary}</p>
                  </CardMain>
                  <CardFooter>
                    <TechContainer>
                      {technologies?.map((val, ind) => (
                        <p key={ind}>{val}</p>
                      ))}
                    </TechContainer>
                    <IconsContainer>
                      {code_link && (
                        <a href={code_link} target="_blank" rel="noreferrer">
                          <i className="fab fa-github" />
                        </a>
                      )}
                      {live_link && (
                        <a href={live_link} target="_blank" rel="noreferrer">
                          <i className="fas fa-external-link-alt" />
                        </a>
                      )}
                    </IconsContainer>
                  </CardFooter>
                </Card>
              )
            )
          )}
        </Container>
      </Section>
    </React.Fragment>
  );
};

export default ProjectList;
