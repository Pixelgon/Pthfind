import { ElementSize } from "./elements";

export interface Portfolio {
    id: string;
    background: string;
    primaryColor: string;
    locked: boolean;
    elements: Element[];
}

export enum PortfolioActionType {
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

export interface ResizeElementAction {
    type: PortfolioActionType.RESIZE_ELEMENT;
    payload: { elementId: string; newSize: ElementSize };
}

export interface EditElementAction {
    type: PortfolioActionType.EDIT_ELEMENT;
    payload: { elementId: string; changes: Partial<Element> };
}

export interface ChangeColorAction {
    type: PortfolioActionType.CHANGE_COLOR;
    payload: { color: string };
}

export interface ChangeBackgroundAction {
    type: PortfolioActionType.CHANGE_BACKGROUND;
    payload: { background: string };
}

export interface ToggleLockAction {
    type: PortfolioActionType.TOGGLE_LOCK;
}

export type PortfolioAction =
    | AddElementAction
    | RemoveElementAction
    | MoveElementAction
    | ResizeElementAction
    | EditElementAction
    | ChangeColorAction
    | ChangeBackgroundAction
    | ToggleLockAction;