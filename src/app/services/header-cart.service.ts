// services/header-cart.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
//import { environment } from '../../environments/environment'; // Adjust path based on your file structure

//import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})


export class HeaderCartService {
    private cart: Book[] = [];
    private cartSubject = new BehaviorSubject
    <Book[]>(this.cart);
    cart$ = this.cartSubject.asObservable();
    //private apiUrl = environment.baseURl;

    constructor(private http: HttpClient) { }

    addToCart(book: Book) {
        this.cart.push(book);
        this.cartSubject.next(this.cart);
       // return this.http.post(`${this.apiUrl}/cart`, { book });
    }

    removeFromCart(book: Book) {
        const index = this.cart.findIndex
        (item => item._id === book._id);
        if (index !== -1) {
            this.cart.splice(index, 1);
            this.cartSubject.next(this.cart);
            //return this.http.delete(`${this.apiUrl}/cart/${book._id}`);
        }
        //return undefined;
    }
    //getBooks(): Observable<Book[]> {
        //return this.http.get<Book[]>(`${this.apiUrl}/books`);
    //}    
}
