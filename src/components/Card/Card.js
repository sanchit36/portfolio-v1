import React from "react";
import { CardContainer } from "./Card.styles";

const Card = ({ children }) => {
  return (
    <React.Fragment>
      <CardContainer>{children}</CardContainer>
    </React.Fragment>
  );
};

export default Card;
