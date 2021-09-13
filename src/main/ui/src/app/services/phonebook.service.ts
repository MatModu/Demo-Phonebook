import { Phonebook } from '../phonebook.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class PhonebookService {

  private baseUrl = 'http://localhost:8080/demo';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient){}

  addUser(phonebook: Phonebook): Observable<Phonebook>{
    return this.http.post<Phonebook>(`${this.baseUrl}/addUser`, phonebook);
  }
  //deleteUser(id: number):Observable<{}>{
  //  return this.http.delete(`${this.baseUrl}/${id}`)
  //                    .pipe(catchError(this.handleError));
  //}
  //
  //updateUser(phonebook: Phonebook){
  //  return this.http.put(`${this.baseUrl}/updateuser`, phonebook)
  //  .pipe(catchError(this.handleError));
  //}
  getAllUsers(): Observable<Phonebook[]>{
    return this.http.get<Phonebook[]>(`${this.baseUrl}/allUsers`)
                      //.pipe(catchError(this.handleError));
  }
  getUserById(id: number): Observable<Phonebook> {
    return this.http.get<Phonebook>(`${this.baseUrl}/${id}`)
                      .pipe(catchError(this.handleError));
  }

  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', httpError.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}