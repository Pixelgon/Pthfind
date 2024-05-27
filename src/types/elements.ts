enum ElementType {
    PROFILE,
    CONTACT,
    TEXT,
    WEB,
    GALLERY,
    LINK,
}

enum ContactType {
    EMAIL,
    PHONE,
    ADDRESS,
    WEB,
    BIRTH,
    NATIONALITY,
    ANY,
}

export interface ElementSize {
    cols: number;
    rows: number;
}

export interface Contact {
    type: ContactType;
    contact: string;
}

export interface Element {
    id: string;
    type: ElementType;
    minSize: ElementSize;
    maxSize: ElementSize;
}

export interface ProfileElement extends Element {
    type: ElementType.PROFILE;
    image: string;
    name: string;
    minSize: { cols: 2, rows: 2 };
    maxSize: { cols: 3, rows: 3 };
}

export interface ContactElement extends Element {
    type: ElementType.CONTACT;
    contacts: Contact[];
    minSize: { cols: 2, rows: 1 };
    maxSize: { cols: 3, rows: 4 };
}

export interface TextElement extends Element {
    type: ElementType.TEXT;
    title?: string;
    text: string;
    minSize: { cols: 1, rows: 1 };
    maxSize: { cols: 4, rows: 4 };
}

export interface WebElement extends Element {
    type: ElementType.WEB;
    url: string;
    minSize: { cols: 2, rows: 2 };
    maxSize: { cols: 6, rows: 6 };
}

export interface GalleryElement extends Element {
    type: ElementType.GALLERY;
    images: string[];
    minSize: { cols: 2, rows: 2 };
    maxSize: { cols: 6, rows: 6 };
}

export interface LinkElement extends Element {
    type: ElementType.LINK;
    username: string;
    url: string;
    minSize: { cols: 1, rows: 1 };
    maxSize: { cols: 2, rows: 2 };
}

export enum ElementActionType {
    UPDATE_SIZE,
    UPDATE_CONTENT,
}

export interface UpdateElementSizeAction {
    type: ElementActionType.UPDATE_SIZE;
    payload: { elementId: string; newSize: ElementSize };
}

// Payloady pro různé typy obsahu elementů
export interface UpdateProfileContentPayload {
    elementId: string;
    image?: string;
    name?: string;
}

export interface UpdateContactContentPayload {
    elementId: string;
    contacts: Contact[];
}

export interface UpdateTextContentPayload {
    elementId: string;
    title?: string;
    text: string;
}

export interface UpdateWebContentPayload {
    elementId: string;
    url: string;
}

export interface UpdateGalleryContentPayload {
    elementId: string;
    images: string[];
}

export interface UpdateLinkContentPayload {
    elementId: string;
    username: string;
    url: string;
}

export type UpdateElementContentAction =
    | { type: ElementActionType.UPDATE_CONTENT; payload: UpdateProfileContentPayload; }
    | { type: ElementActionType.UPDATE_CONTENT; payload: UpdateContactContentPayload; }
    | { type: ElementActionType.UPDATE_CONTENT; payload: UpdateTextContentPayload; }
    | { type: ElementActionType.UPDATE_CONTENT; payload: UpdateWebContentPayload; }
    | { type: ElementActionType.UPDATE_CONTENT; payload: UpdateGalleryContentPayload; }
    | { type: ElementActionType.UPDATE_CONTENT; payload: UpdateLinkContentPayload; };

export type ElementAction =
    | UpdateElementSizeAction
    | UpdateElementContentAction;
