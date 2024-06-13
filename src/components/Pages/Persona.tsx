import styled from "styled-components";
import { useContext } from "react";
import { PersonaContext } from "../../providers/PersonaProvider";
import { Menu } from "../Persona/Menu";
import Elements from "../Persona/Elements";
import { motion } from "framer-motion";

interface StyledPersonaProps {
  $background: string;
  $primarycolor: string;
}

const StyledPersona = styled(motion.main)<StyledPersonaProps>`
  background: url("${(props) => props.$background}") center no-repeat;
  background-size: cover;
  color: ${(props) => props.$primarycolor};
  height: calc(100vh - 40px);
  width: calc(100vw - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;



export const Persona = () => {
  const personaData = useContext(PersonaContext);

  return (
    <>
      <StyledPersona
        $background={personaData.data.background}
        $primarycolor={personaData.data.primaryColor}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Elements/>
        <Menu />
      </StyledPersona>
    </>
  );
};