import styled from "styled-components";
import { useContext } from "react";
import { PersonaContext } from "../providers/PersonaProvider";
import { PersonaMenu } from "./PersonaMenu";

interface StyledPersonaProps {
  $background: string;
  $primarycolor: string;
}

const StyledPersona = styled.main<StyledPersonaProps>`
  background-color: ${(props) => props.$background};
  color: ${(props) => props.$primarycolor};
  height: calc(100vh - 40px);
  width: calc(100vw - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;

`;

const StyledHeader = styled.h1`
  flex-grow: 1;
`;



export const Persona = () => {
  const personaData = useContext(PersonaContext);

  return (
    <>
      <StyledPersona
        $background={personaData.data.background}
        $primarycolor={personaData.data.primaryColor}
      >
        <StyledHeader>Persona</StyledHeader>
        <PersonaMenu />
      </StyledPersona>
    </>
  );
};