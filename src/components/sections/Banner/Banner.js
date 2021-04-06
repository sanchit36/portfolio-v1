import React from "react";
import { SectionCenter } from "../../../globalStyles";
import { ButtonGroup, ButtonLink } from "../../Button/Button.styles";
import { Center, Content, Para, SubTitle } from "./Banner.styles";
import Typed from "react-typed";

const Banner = () => {
  return (
    <React.Fragment>
      <SectionCenter>
        <Center>
          <Para>Hey, my name is</Para>
          <h1>Sanchit Bhadgal</h1>

          <SubTitle>
            {"< "}
            <Typed
              strings={["Developer", "Student", "Learner"]}
              typeSpeed={40}
              backSpeed={50}
              cursorChar={" />"}
              loop
            />
          </SubTitle>
          <Content>
            I'm a India-based web developer who loves to build and design
            elegant user experiences. I'm a India-based web developer who loves
            to build and design elegant user experiences. I'm a India-based web
            developer who loves to build and design elegant user experiences.
          </Content>
          <ButtonGroup>
            <ButtonLink href="#work">My Work</ButtonLink>
          </ButtonGroup>
        </Center>
      </SectionCenter>
    </React.Fragment>
  );
};

export default Banner;
