import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsapiService {

  constructor(private http: HttpClient) {

   }
   //hola
   obtenerProductos(){
    return this.http.get('https://fakestoreapi.com/products');
   }
}
