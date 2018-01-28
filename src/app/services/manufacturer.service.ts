import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AutoCompleteService } from './autocompleteservice.service';
import { Observable } from 'rxjs/Observable';
import { Manufacturer } from '../model/Manufacturer';

@Injectable()
export class ManufacturerService {

  private url: string;
  constructor(private http: Http) {
    // super(http, '/storezilla/manufacturers');
    this.url = '/storezilla/manufacturers';
  }
  getAllManufacturers() {
    return this.http.get(this.url);
  }
 }
