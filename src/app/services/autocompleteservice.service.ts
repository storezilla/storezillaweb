import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Generic } from '../model/generic';

@Injectable()
export class AutoCompleteService {

  private url = '/storezilla/manufacturers';
  constructor(private http: Http) { }

  getAllObjects() {
    return this.http.get(this.url);
  }
}
