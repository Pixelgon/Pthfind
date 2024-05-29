import { act } from "react-dom/test-utils";
import Button from "./Button";
import { LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/solid'
import { useState } from "react";



export const PortfolioMenu = () => {
    const [active, setActive] = useState(false);

    const toggleLock = () => {
        setActive(!active);
        console.log(active);
    };

    return (
        <>
            <Button onClick={() => toggleLock()} active={active}>
                  {active ? <LockClosedIcon /> : <LockOpenIcon />}
            </Button>
        </>
    );
};