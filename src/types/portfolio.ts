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
    EDIT_ELEMENT,
    CHANGE_COLOR,
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

export interface EditElementAction {
    type: PortfolioActionType.EDIT_ELEMENT;
    payload: Element;
}

export interface ChangeColorAction {
    type: PortfolioActionType.CHANGE_COLOR;
    payload: { color: string };
}

export type PortfolioAction =
    | AddElementAction
    | RemoveElementAction
    | MoveElementAction
    | EditElementAction
    | ChangeColorAction;