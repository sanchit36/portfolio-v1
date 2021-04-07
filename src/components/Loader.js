import React from "react";
import { Circle } from "better-react-spinkit";
import { Container, PRIMARY } from "../globalStyles";

const Loader = () => {
  return (
    <Container
      style={{ padding: "5rem", display: "grid", placeItems: "center" }}
    >
      <Circle size={50} color={PRIMARY} />
    </Container>
  );
};

export default Loader;
