import { Portfolio, PortfolioAction, PortfolioActionType } from "../types/portfolio";

export const PortfolioReducer = (state: Portfolio, action: PortfolioAction): Portfolio => {
    switch (action.type) {
        case PortfolioActionType.ADD_ELEMENT:
            return {
                ...state,
                elements: [...state.elements, action.payload],
            };
        case PortfolioActionType.REMOVE_ELEMENT:
            return {
                ...state,
                elements: state.elements.filter((e) => e.id !== action.payload.elementId),
            };
        case PortfolioActionType.MOVE_ELEMENT:
        case PortfolioActionType.RESIZE_ELEMENT:
        case PortfolioActionType.EDIT_ELEMENT:
            return {
                ...state,
                elements: state.elements.map((e) =>
                    e.id === action.payload.elementId ? { ...e, ...action.payload } : e
                ),
            };
        case PortfolioActionType.CHANGE_COLOR:
            return {
                ...state,
                primaryColor: (action.payload as { color: string }).color,
            };
        case PortfolioActionType.CHANGE_BACKGROUND:
            return {
                ...state,
                background: (action.payload as { background: string }).background,
            };
        // Prepinan mezi edite modem a view
        case PortfolioActionType.TOGGLE_LOCK:
            return {
                ...state,
                locked: !state.locked,
            };
        default:
            return state;
    }
};
