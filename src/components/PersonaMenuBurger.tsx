import { Bars3Icon, ShareIcon, UserPlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import styled from "styled-components";
import Button from "./Button";

export type PersonaMenuBurgerProps = {
    color: string,
}

interface StyledPersonaMenuBurgerProps {
    $isOpen: boolean,
    $NItems: number,
}

const StyledPersonaMenuBurgerItems = styled.ul<StyledPersonaMenuBurgerProps>`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: ${({ $isOpen, $NItems }) => $isOpen ? 72*$NItems+'px' : '0'};
    overflow: hidden;
    background-color: var(--elementBg--sec);
    backdrop-filter: var(--blur);
    border-radius: ${({ $isOpen }) => $isOpen ? '18px' : '0'};
    transition: all 0.3s ease;
    height: 100%;

    @media (min-width: 768px) {
        max-height: none;
        flex-direction: row;
        border-radius: 18px;
    }
    `;


const StyledPersonaMenuBurger = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    height: 100%;

    @media and (min-width: 768px) {
        width: 0;
    }
`;


const StyledButton = styled.div`
    @media (min-width: 768px) {
        display: none;  
    }
`;




export const PersonaMenuBurger: React.FC<PersonaMenuBurgerProps> = ({ color }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(window.innerWidth > 768 ? true : false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }   

    return (
        <StyledPersonaMenuBurger>
            <StyledPersonaMenuBurgerItems $isOpen={isMenuOpen} $NItems={2}>
                <li>
                    <Button onClick={() => console.log("Menu item 1")} color={color} nobg>
                        <ShareIcon />
                    </Button>
                </li>
                <li>
                    <Button onClick={() => console.log("Menu item 2")} color={color} nobg>
                        <UserPlusIcon />
                    </Button>
                </li>
                <li>
                    <Button onClick={() => console.log("Menu item 2")} color={color} nobg>
                        <UserPlusIcon />
                    </Button>
                </li>
            </StyledPersonaMenuBurgerItems>
            <StyledButton>
                <Button onClick={toggleMenu} color={color}>
                    {isMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
                </Button>    
            </StyledButton>
        </StyledPersonaMenuBurger>
    );
}

