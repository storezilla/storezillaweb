import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class ProductService {

  private url = '/storezilla/products';
  private url2 = '/storezilla/products/edit/';
  private url3 = '/storezilla/products/update';
  private url4 = '/storezilla/products/add';
  private url5 = '/storezilla/products/remove/';

  constructor(private http: Http) { }

  getProducts() {
    return this.http.get(this.url);
  }

  getProductById(productId) {
    return this.http.get(this.url2 + productId);
  }

  updateProduct(product) {
    return this.http.put(this.url3, product);
  }

  addProduct(product) {
    return this.http.post(this.url4, product);
  }

  deleteProduct(productId) {
    return this.http.delete(this.url5 + productId);
  }
}
