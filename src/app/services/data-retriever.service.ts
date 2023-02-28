import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, of } from 'rxjs';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class DataRetrieverService {


    private productUrl = 'api/products';  // URL to web api

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
    constructor(
      private http: HttpClient) { }
  
    /** GET products from the server */
    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.productUrl)
    }

}
