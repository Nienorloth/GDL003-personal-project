import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient
    ) { }

  public getAllProducts() {
    return this.http.get<Product[]>('https://floating-savannah-95962.herokuapp.com/products/');
  }
  getProduct(id: string) {
    return this.http.get(`https://floating-savannah-95962.herokuapp.com/products/${id}`);
  }
}
