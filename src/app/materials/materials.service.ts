import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { HandleError, HttpErrorHandler } from '../shared/http-error-handler.service';
import { Material } from '../../models';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {

  materialURL = "api/materials"
  private handleError: HandleError;
  constructor(
    private http: HttpClient, public httpErrorHandler: HttpErrorHandler) {
    this.handleError = this.httpErrorHandler.createHandleError('MaterialsService');
  }
  /** GET heroes from the server */
  getMaterials (): Observable<Material[]> {
    return this.http.get<Material[]>(this.materialURL)
      .pipe(
        catchError(this.handleError('getMaterials', []))
      );
  }

  /* GET Materials whose name contains search term */
  searchMaterials(term: string): Observable<Material[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('code', term) } : {};
    return this.http.get<Material[]>(this.materialURL, options)
      .pipe(
        catchError(this.handleError<Material[]>('searchMaterials', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the database */
  addMaterial (material: Material): Observable<Material> {
    return this.http.post<Material>(this.materialURL, material, httpOptions)
      .pipe(
        catchError(this.handleError('addMaterial', material))
      );
  }

  /** DELETE: delete the Material from the server */
  deleteMaterial (id: number): Observable<{}> {
    const url = `${this.materialURL}/${id}`; // DELETE api/Materiales/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteMaterial'))
      );
  }

  /** PUT: update the Material on the server. Returns the updated Material upon success. */
  updateMaterial (material: Material): Observable<Material> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Material>(this.materialURL, material, httpOptions)
      .pipe(
        catchError(this.handleError('updateMaterial', material))
      );
  }
}
