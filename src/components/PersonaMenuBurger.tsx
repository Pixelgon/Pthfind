import React from "react";

export type PersonaMenuBurgerProps = {
    isOpen: false,
}


export const PersonaMenuBurger: React.FC< PersonaMenuBurgerProps> = ({isOpen}) => {
    return (
        <div>
            <h1>PersonaMenuBurger is { isOpen ? "open" : "closed"}</h1>
        </div>
    );
}