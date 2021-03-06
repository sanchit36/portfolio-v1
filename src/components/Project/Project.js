import React from "react";
import Card from "../Card/Card";
import CardFooter from "../Card/CardFooter";
import CardHeader from "../Card/CardHeader";
import CardImage from "../Card/CardImage";
import CardMain from "../Card/CardMain";
import { IconsContainer, ParaPrimary, TechContainer } from "./Project.styles";

const Project = ({
  subtitle,
  title,
  summary,
  technologies,
  image,
  source_code_url,
  live_demo_url,
  inverted,
}) => {
  return (
    <React.Fragment>
      <Card inverted={inverted}>
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
            {technologies?.map(({ id, name }) => (
              <p key={id}>{name}</p>
            ))}
          </TechContainer>
          <IconsContainer>
            {source_code_url && (
              <a href={source_code_url} target="_blank" rel="noreferrer">
                <i className="fab fa-github" />
              </a>
            )}
            {live_demo_url && (
              <a href={live_demo_url} target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt" />
              </a>
            )}
          </IconsContainer>
        </CardFooter>
      </Card>
    </React.Fragment>
  );
};

export default Project;
