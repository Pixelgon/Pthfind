import Button from "./Button";
import { Bars3Icon, LockClosedIcon, LockOpenIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useContext, useState } from "react";
import { PersonaContext } from "../providers/PersonaProvider";
import { PersonaActionType } from "../types/persona";
import styled from "styled-components";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { PersonaMenuBurger } from "./PersonaMenuBurger";


const StyledPersonaMenu = styled.div`
    display: flex;
    gap: 10px;
    `;



export const PersonaMenu = () => {
    const persona = useContext(PersonaContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleLock = () => {
        persona.dispatch({ type: PersonaActionType.TOGGLE_LOCK });
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <StyledPersonaMenu>
                <Button onClick={() => console.log("Back to home")} color={persona.data.primaryColor}>
                    <ArrowLeftIcon />
                </Button>
                <Button onClick={() => toggleLock()} active={persona.data.editMode} color={persona.data.primaryColor}>
                    {persona.data.editMode ? <LockOpenIcon /> : <LockClosedIcon /> }
                </Button>
                <Button onClick={() => toggleMenu()} color={persona.data.primaryColor}>
                    {isMenuOpen ?  <XMarkIcon/> : <Bars3Icon/>}
                </Button>
                <PersonaMenuBurger isOpen={isMenuOpen} />
            </StyledPersonaMenu>
        </>
    );
};