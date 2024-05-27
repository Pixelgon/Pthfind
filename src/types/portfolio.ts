export interface Portfolio {
    id: string;
    background?: string; // Obrázek nebo video jako pozadí
    primaryColor?: string;
    locked: boolean; // Indikuje, zda je profil uzamčen pro editaci
    elements: Element[]; // Pole s elementy profilu
}

export enum PortfolioActionType {
    ADD_ELEMENT,
    REMOVE_ELEMENT,
    MOVE_ELEMENT,
}

export interface AddElementAction {
    type: PortfolioActionType.ADD_ELEMENT;
    payload: Element;
}

export interface RemoveElementAction {
    type: PortfolioActionType.REMOVE_ELEMENT;
    payload: { elementId: string };
}

export interface MoveElementAction {
    type: PortfolioActionType.MOVE_ELEMENT;
    payload: { elementId: string; newIndex: number };
}

export type PortfolioAction =
    | AddElementAction
    | RemoveElementAction
    | MoveElementAction;
