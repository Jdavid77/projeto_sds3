import { seller } from "./seller"

export type SaleSum = {
    sellerName: string,
    sum: number
}

export type SaleSuccess = {
    sellerName: string;
    visited: number;
    deals: number;
}

export type Sale = {
    
        deals: number;
        amount: number;
        date: string;
        seller: seller;
        id: number;
        visited: number;
    
}


export type SalePage = {
    content?: Sale[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
}