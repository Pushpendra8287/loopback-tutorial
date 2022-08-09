import { Entity } from '@loopback/repository';
export declare class Book extends Entity {
    id?: number;
    category: string;
    bookName: string;
    publisher: string;
    total: number;
    issued: number;
    available: number;
    status: boolean;
    [prop: string]: any;
    constructor(data?: Partial<Book>);
}
export interface BookRelations {
}
export declare type BookWithRelations = Book & BookRelations;
