import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Book {
  _id!: String;
  name!: String;
  price!: String;
  description!: String;
}

export class CrudService {
  // Node.js API
  REST_API = 'http://localhost:8000/api';

  // http header
  httpHeaders = new HttpHeaders().set('Content-Type', 'Application/json');

  constructor(private httpClient: HttpClient) {}

  // Add new book
  AddBook(data: Book): Observable<any> {
    let API_URL = `${this.REST_API}/add-book`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  // Get all book(s)
  GetBooks(): Observable<any> {
    return this.httpClient.get(`${this.REST_API}`);
  }

  // Get a book
  GetBook(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/read-book/${id}`;

    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Update book
  UpdateBook(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-book/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Delete
  DeleteBook(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-book/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Handle error
  handleError(error: HttpErrorResponse) {
    let errorMsg = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMsg = error.error.message;
      // Handle server error
      errorMsg = `Error code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMsg);

    return throwError(errorMsg);
  }
}
