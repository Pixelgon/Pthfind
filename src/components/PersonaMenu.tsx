import Button from "./Button";
import { LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/solid'
import { useContext } from "react";
import { PersonaContext } from "../providers/PersonaProvider";
import { PersonaActionType } from "../types/persona";
import styled from "styled-components";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { PersonaMenuBurger } from "./PersonaMenuBurger";


const StyledPersonaMenu = styled.menu`
    display: flex;
    gap: 10px;
    position: relative;
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
    align-items: flex-end;
    justify-content: flex-start;
    `;



export const PersonaMenu = () => {
    const persona = useContext(PersonaContext);


    const toggleLock = () => {
        persona.dispatch({ type: PersonaActionType.TOGGLE_LOCK });
    };


    return (
        <>
            <StyledPersonaMenu>
                <li>
                    <Button onClick={() => console.log("Back to home")} color={persona.data.primaryColor}>
                        <ArrowLeftIcon />
                    </Button>
                </li>
                <li>
                    <Button onClick={() => toggleLock()} active={persona.data.editMode} color={persona.data.primaryColor}>
                        {persona.data.editMode ? <LockOpenIcon /> : <LockClosedIcon /> }
                    </Button>    
                </li>
                <PersonaMenuBurger color={persona.data.primaryColor}/>
            </StyledPersonaMenu>
        </>
    );
};