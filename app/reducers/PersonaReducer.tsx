import { Persona, PersonaAction, PersonaActionType } from "../types/persona";

export const PersonaReducer = (state: Persona, action: PersonaAction): Persona => {
    switch (action.type) {
        case PersonaActionType.ADD_ELEMENT:
            return {
                ...state,
                elements: [...state.elements, action.payload],
            };
        case PersonaActionType.REMOVE_ELEMENT:
            return {
                ...state,
                elements: state.elements.filter((e) => e.id !== action.payload.elementId),
            };
        case PersonaActionType.MOVE_ELEMENT:
        case PersonaActionType.RESIZE_ELEMENT:
        case PersonaActionType.EDIT_ELEMENT:
            return {
                ...state,
                elements: state.elements.map((e) =>
                    e.id === action.payload.elementId ? { ...e, ...action.payload } : e
                ),
            };
        case PersonaActionType.CHANGE_COLOR:
            return {
                ...state,
                primaryColor: (action.payload as { color: string }).color,
            };
        case PersonaActionType.CHANGE_BACKGROUND:
            return {
                ...state,
                background: (action.payload as { background: string }).background,
            };
        // Prepinan mezi edite modem a view
        case PersonaActionType.TOGGLE_LOCK:
            return {
                ...state,
                editMode: !state.editMode,
            };
        default:
            return state;
    }
};
