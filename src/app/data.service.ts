import { Injectable, Type } from '@angular/core';
import { HandleError, HttpErrorHandler } from './shared/http-error-handler.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = "api/Data"
  private handleError: HandleError;
  private id = "id"
  constructor(
    private http: HttpClient, public httpErrorHandler: HttpErrorHandler) {
    this.handleError = this.httpErrorHandler.createHandleError('DataService');
  }

  setURL(url) {
    this.url = /* environment.api + */ url
  }

  setId(id: string) {
    this.id = id
  }

  /** GET heroes from the server */
  getData (): Observable<any[]> {
    return this.http.get<any[]>(this.url)
      .pipe(
        catchError(this.handleError('getData', []))
      );
  }

  /* GET Data whose name contains search term */
  searchData(term: string): Observable<any[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set(this.id, term) } : {};
    return this.http.get<any[]>(this.url, options)
      .pipe(
        catchError(this.handleError<any[]>('searchData', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the database */
  addData (data: any): Observable<any> {
    return this.http.post<any>(this.url, data, httpOptions)
      .pipe(
        catchError(this.handleError('addData', data))
      );
  }

  /** DELETE: delete the Data from the server */
  deleteData (id: number): Observable<{}> {
    const url = `${this.url}/${id}`; // DELETE api/Dataes/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteData'))
      );
  }

  /** PUT: update the Data on the server. Returns the updated Data upon success. */
  updateData (data: any): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<any>(this.url, data, httpOptions)
      .pipe(
        catchError(this.handleError('updateData', data))
      );
  }
}
