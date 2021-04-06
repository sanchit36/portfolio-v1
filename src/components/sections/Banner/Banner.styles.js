import styled from "styled-components";
import { Container, LeadPara, PRIMARY, SECONDARY } from "../../../globalStyles";

export const Center = styled(Container)`
  text-align: center;
`;

export const Para = styled.p`
  color: ${PRIMARY};
`;

export const Content = styled(LeadPara)`
  max-width: 55ch;
  margin: 2.5rem auto;
`;

export const SubTitle = styled.h2`
  color: ${SECONDARY};
`;
