import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class StoreService {

  private url = '/storezilla/stores';
  private url2 = '/storezilla/stores/edit/';
  private url3 = '/storezilla/stores/update';
  private url4 = '/storezilla/stores/add';
  private url5 = '/storezilla/stores/remove/';

  constructor(private http: Http) { }

  getStores() {
    return this.http.get(this.url);
  }

  getStoreById(storeId) {
    return this.http.get(this.url2 + storeId);
  }

  updateStore(store) {
    return this.http.put(this.url3, store);
  }

  addStore(store) {
    return this.http.post(this.url4, store);
  }

  deleteStore(storeId) {
    return this.http.delete(this.url5 + storeId);
  }
}
