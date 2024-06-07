import { Bars3Icon, PaintBrushIcon, PhotoIcon, PlusIcon, ShareIcon, UserPlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import styled from "styled-components";
import Button, { StyledButton } from "./Button";

export type PersonaMenuBurgerProps = {
    color: string,
    isLocked: boolean,
}

interface StyledPersonaMenuBurgerProps {
    $isOpen: boolean,
}


const ViewOptions = ({ color }: { color: string }) => {
    return (
        <>
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
        </>
    );
}

const EditOptions = ({ color }: { color: string }) => {
    return (
        <>
        <li>
                <Button onClick={() => console.log("Menu item 1")} color={color} nobg>
                    <PlusIcon />
                </Button>
            </li>
            <li>
                <Button onClick={() => console.log("Menu item 2")} color={color} nobg>
                    <PaintBrushIcon />
                </Button>
            </li>
            <li>
                <Button onClick={() => console.log("Menu item 2")} color={color} nobg>
                    <PhotoIcon />
                </Button>
            </li>
        </>
    );
}

const StyledPersonaMenuBurgerItems = styled.ul<StyledPersonaMenuBurgerProps>`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
    background-color: var(--elementBg--sec);
    backdrop-filter: var(--blur);
    border-radius: 18px;
    transition: all .3s ease;
    height: 100%;
    animation-fill-mode: forwards;

    > li { 
     ${props => props.$isOpen ? 'animation: growHeight .5s ease;' : ''}
     max-height: ${props => props.$isOpen ? '63px' : '0'};
     transition: all .5s ease;
    }


    > li:first-of-type a {
        padding-bottom: 9px;
    }
    
    > li:last-of-type a {
        padding-top: 9px;
    }

    > li:not(:last-of-type):not(:first-of-type) a {
        padding: 9px 18px;
    }

    @media (min-width: 768px) {
        max-height: none;
        flex-direction: row;
        border-radius: 18px;

        > li:first-of-type a {
            padding-right: 9px;
            padding-bottom: 18px;
        }
    
        > li:last-of-type a {
            padding-left: 9px;
            padding-top: 18px;
        }

        > li:not(:last-of-type):not(:first-of-type) a {
            padding: 18px 9px;
        }

        > li {
            animation: growWidht .5s ease;
            }
    }


    @keyframes growHeight {
        0% {
            max-height: 0;
        }
        100% {
            max-height: 63px;
        }
    }

    @keyframes growWidht {
        0% {
            max-width: 0;
        }
        100% {
            max-width: 63px;
        }
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


/* Obchazeni správného zápisu extnesion styled componenty, jedině jak to funguje... */
const BurgerButton = styled(StyledButton)`
    @media (min-width: 768px) {
        display: none;
    };  
    `;

export const PersonaMenuBurger: React.FC<PersonaMenuBurgerProps> = ({ color, isLocked }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(window.innerWidth > 768 ? true : false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }   

    return (
        <StyledPersonaMenuBurger>
            <StyledPersonaMenuBurgerItems $isOpen={isMenuOpen}>
                {isLocked ? <EditOptions color={color} /> : <ViewOptions color={color} />}
            </StyledPersonaMenuBurgerItems>
            <BurgerButton onClick={toggleMenu} color={color}>
                {isMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
            </BurgerButton>    
        </StyledPersonaMenuBurger>
    );
}

