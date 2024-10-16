// models/book.model.ts

export interface Book {
    _id: string;
    title: string;
    author: string;
    genre: string;
    description: string;
    price: number;
    image: string;
}
