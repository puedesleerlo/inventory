import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ValidationMessagesService {

   constructor(private http: HttpClient) { }
   getAccountValidationMessages() {
      let apiUrl = './assets/info.json';
      return this.http.get(apiUrl)
      .map( (response) => {
         const data = response;
         return data['accounts'];
      });
   }  
}