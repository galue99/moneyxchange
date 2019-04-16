import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable()
export class HomeServices {
  
  apiURL: string = 'http://data.fixer.io/api/latest?access_key=';
  constructor(
    public http: HttpClient
  ) { }

  public getData() {
    console.log('#getData(): Get Data');
    return this.http.get(`${this.apiURL}` + `${environment.key}`);
  }

}
