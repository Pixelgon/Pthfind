import { ElementSize } from "./elements";

export interface Persona {
    id: string;
    background: string;
    primaryColor: string;
    elements: Element[];
}

export enum PersonaActionType {
    ADD_ELEMENT,
    REMOVE_ELEMENT,
    MOVE_ELEMENT,
    RESIZE_ELEMENT,
    EDIT_ELEMENT,
    CHANGE_COLOR,
    CHANGE_BACKGROUND,
    TOGGLE_LOCK
}

export interface AddElementAction {
    type: PersonaActionType.ADD_ELEMENT;
    payload: Element;
}

export interface RemoveElementAction {
    type: PersonaActionType.REMOVE_ELEMENT;
    payload: { elementId: string };
}

export interface MoveElementAction {
    type: PersonaActionType.MOVE_ELEMENT;
    payload: { elementId: string; newIndex: number };
}

export interface ResizeElementAction {
    type: PersonaActionType.RESIZE_ELEMENT;
    payload: { elementId: string; newSize: ElementSize };
}

export interface EditElementAction {
    type: PersonaActionType.EDIT_ELEMENT;
    payload: { elementId: string; changes: Partial<Element> };
}

export interface ChangeColorAction {
    type: PersonaActionType.CHANGE_COLOR;
    payload: { color: string };
}

export interface ChangeBackgroundAction {
    type: PersonaActionType.CHANGE_BACKGROUND;
    payload: { background: string };
}


export type PersonaAction =
    | AddElementAction
    | RemoveElementAction
    | MoveElementAction
    | ResizeElementAction
    | EditElementAction
    | ChangeColorAction
    | ChangeBackgroundAction;