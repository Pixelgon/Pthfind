import Button from "../Common/Button";
import { LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/solid'
import { useContext } from "react";
import { PersonaContext } from "../../providers/PersonaProvider";
import { PersonaActionType } from "../../types/persona";
import styled from "styled-components";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { MenuBurger } from "./MenuBurger";
import { useLocation, useNavigate } from "react-router-dom";


const StyledMenu = styled.menu`
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


export const Menu = () => {
    const persona = useContext(PersonaContext);
    const navigate = useNavigate();
    const location = useLocation();
    const isEditMode = location.pathname.endsWith('/edit');


    const toggleLock = () => {
        navigate(isEditMode ? location.pathname.replace('/edit', '') : location.pathname + '/edit');
    };


    return (
        <>
            <StyledMenu>
                <li>
                    <Button onClick={() => navigate('/')} color={persona.data.primaryColor}>
                        <ArrowLeftIcon />
                    </Button>
                </li>
                <li>
                    <Button onClick={() => toggleLock()} active={isEditMode} color={persona.data.primaryColor}>
                        {isEditMode ? <LockOpenIcon /> : <LockClosedIcon /> }
                    </Button>    
                </li>
                <MenuBurger color={persona.data.primaryColor} isLocked={isEditMode} />
            </StyledMenu>
        </>
    );
};