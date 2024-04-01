type Item = {
    id: number;
    authors: Author[];
    name: string;
    categories: Category[];
    language: string;
    esteemes: number;
    rating: number;
    description: string;
    price: number;
    currency: Currency;
    published: number;
}

type Currency = {
    id: number;
    name: string;
}

type Category = {
    id: number;
    name: string;
}

type Author = {
    id: number;
    name: string;
    birth: number;
    death: number;
}

type User = {
    id: number;
    name: string;
    description: string;
    email: string;
    pass: string;
}

type Rating = {
    id: number;
    user: User;
    book: Item;
    value: number;
}
