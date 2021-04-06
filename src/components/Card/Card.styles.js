import styled from "styled-components";
import { BORDERRADIUS, DARKBG, PRIMARY, SECONDARY } from "../../globalStyles";

export const CardContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-areas:
      "header img"
      "card img"
      "footer img";
    grid-template-columns: 2fr 3fr;
  }
`;

export const CardHeaderContainer = styled.div`
  margin-bottom: 3rem;
  @media screen and (min-width: 768px) {
    grid-area: header;
  }
`;

export const CardMainContainer = styled.div`
  p {
    max-width: 55ch;
  }

  @media screen and (min-width: 768px) {
    grid-area: card;
    background-color: ${DARKBG};
    border-radius: ${BORDERRADIUS};
    padding: 3rem;
    grid-row: 2;
    position: relative;
    z-index: 2;
    width: calc(100% + 4rem);
  }
`;

export const CardFooterContainer = styled.div`
  margin-top: 3rem;

  & a {
    color: ${PRIMARY};
    display: inline-block;
    font-size: 3.2rem;
    margin-right: 3.6rem;
    :hover {
      color: ${SECONDARY};
    }
  }
  @media screen and (min-width: 768px) {
    grid-area: footer;
  }
`;

export const CardImageContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    grid-area: img;
    display: block;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
