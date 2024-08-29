import styled from "styled-components";
import { useContext } from "react";
import { PersonaContext } from "../../providers/PersonaProvider";
import { Menu } from "../Persona/Menu";
import Elements from "../Persona/Elements";
import { motion } from "framer-motion";



export const Persona = () => {
  const personaData = useContext(PersonaContext);

  return (
    <>
      <main
        className="flex justify-center items-center flex-col p-5"
        style={{
          background: `url(${personaData.data.background}) center no-repeat`,
          backgroundSize: 'cover',
          color: personaData.data.primarycolor,
          height: 'calc(100vh - 40px)',
          width: 'calc(100vw - 40px)',
        }}
      >
        <Elements/>
        <Menu />
      </main>
    </>
  );
};