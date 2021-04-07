import React from "react";
import { LinksContainer } from "./Links.styles";

const Links = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Links;
