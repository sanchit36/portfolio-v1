import styled from "styled-components";
import { PRIMARY, SECONDARY } from "../../../globalStyles";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  gap: 5rem;
  text-align: justify;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 65ch;
`;

export const LinksContainer = styled.div`
  margin-top: 4rem;
  position: relative;

  & a {
    color: ${PRIMARY};
    display: inline-block;
    font-size: 2.6rem;
    margin-right: 4rem;
    :hover {
      color: ${SECONDARY};
    }
  }
`;

export const ImageContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  flex: 1;
  padding-top: 55.25%;
  width: 100%;
  min-width: 250px;
  max-width: 400px;
  background-color: red;
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }
`;
