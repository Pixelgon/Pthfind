import { Bars3Icon, ShareIcon, UserPlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import styled from "styled-components";
import Button from "./Button";

export type PersonaMenuBurgerProps = {
    color: string,
}

interface StyledPersonaMenuBurgerProps {
    $isOpen: boolean,
}

const StyledPersonaMenuBurgerItems = styled.ul<StyledPersonaMenuBurgerProps>`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: ${({ $isOpen }) => $isOpen ? '144px' : '0'};
    overflow: hidden;
    background-color: var(--elementBg--sec);
    border-radius: 18px;
    transition: max-height 0.3s ease;
`;

const StyledPersonaMenuBurger = styled.li<StyledPersonaMenuBurgerProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;

    &:hover ${StyledPersonaMenuBurgerItems} {
        max-height: ${({ $isOpen }) => $isOpen ? '0' : '144px'};
    }

`;

export const PersonaMenuBurger: React.FC<PersonaMenuBurgerProps> = ({ color }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <StyledPersonaMenuBurger>
            <StyledPersonaMenuBurgerItems $isOpen={isMenuOpen}>
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
            </StyledPersonaMenuBurgerItems>
            <Button onClick={toggleMenu} color={color}>
                {isMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
            </Button>
        </StyledPersonaMenuBurger>
    );
}