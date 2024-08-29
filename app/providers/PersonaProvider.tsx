import { Dispatch, FC, PropsWithChildren, createContext, useReducer } from "react";
import { PersonaReducer } from "../reducers/PersonaReducer";
import { Persona, PersonaAction } from "../types/persona";



const PersonaInit: Persona = {
    id: "1",
    background: "/background.jpg",
    primaryColor: "#00CCFF",
    elements: [],
};

export const PersonaContext = createContext<{ data: Persona, dispatch: Dispatch<PersonaAction> }>({ data: PersonaInit, dispatch: () => {} });

export const PersonaProvider: FC<PropsWithChildren> = ({ children }) => {
    const [data, dispatch] = useReducer(PersonaReducer, PersonaInit);
  
    return <PersonaContext.Provider value={{ data, dispatch }}>{children}</PersonaContext.Provider>;
};