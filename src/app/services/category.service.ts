import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class CategoryService {

  private url = '/storezilla/categories';
  private url2 = '/storezilla/categories/edit/';
  private url3 = '/storezilla/categories/update';
  private url4 = '/storezilla/categories/add';
  private url5 = '/storezilla/categories/remove/';

  constructor(private http: Http) { }

  getCategories() {
    return this.http.get(this.url);
  }

  getCategoryById(categoryId) {
    return this.http.get(this.url2 + categoryId);
  }

  updateCategory(category) {
    return this.http.put(this.url3, category);
  }

  addCategory(category) {
    return this.http.post(this.url4, category);
  }

  deleteCategory(categoryId) {
    return this.http.delete(this.url5 + categoryId);
  }
}
