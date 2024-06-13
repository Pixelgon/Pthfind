    export enum ElementType {
        PROFILE,
        CONTACT,
        TEXT,
        WEB,
        GALLERY,
        LINK,
    }

    export enum ContactType {
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
        required?: boolean;
        maxN?: number;
    }

    export interface ProfileElement extends Element {
        type: ElementType.PROFILE;
        image: string;
        name: string;
        minSize: { cols: 2, rows: 2 };
        maxSize: { cols: 3, rows: 3 };
        required: true;
        maxN: 1;
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
        maxN: 2;
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