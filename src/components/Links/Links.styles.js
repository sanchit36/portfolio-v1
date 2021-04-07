import styled from "styled-components";
import { PRIMARY, SECONDARY } from "../../globalStyles";

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
