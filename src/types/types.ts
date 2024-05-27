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

export interface Contact {
    type: ContactType;
    contact: string;
}

export interface Element {
    id: string;
    type: ElementType;
}

export interface ProfileElement extends Element {
    type: ElementType.PROFILE;
    image: string;
    name: string;
}

export interface ContactElement extends Element {
    type: ElementType.CONTACT;
    contacts: Contact[];
}

export interface TextElement extends Element {
    type: ElementType.TEXT;
    title?: string;
    text: string; 
}

export interface WebElement extends Element {
    type: ElementType.WEB;
    url: string;
}

export interface GalleryElement extends Element {
    type: ElementType.GALLERY;
    images: string[];
}

export interface LinkElement extends Element {
    type: ElementType.LINK;
    username: string;
    url: string;
}

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
    UPDATE_ELEMENT,
    LOCK_PROFILE,
    UNLOCK_PROFILE,
}

export interface PortfolioAction {
    type: PortfolioActionType;
    payload: any;
}