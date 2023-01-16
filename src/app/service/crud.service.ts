import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export class Book {
  _id!: String;
  name!: String;
  price!: Number;
  description!: String;
}

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  // Node.js API
  REST_API: string = 'http://localhost:8000/api';

  // http header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  // Add new book
  AddBook(data: Book): Observable<any> {
    let API_URL = `${this.REST_API}/books/add`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  // Get all book(s)
  GetBooks() {
    return this.httpClient.get(`${this.REST_API}/books`);
  }

  // Get a book
  GetBook(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/books/${id}`;

    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Update book
  UpdateBook(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/books/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Delete
  DeleteBook(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/books/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Handle error
  handleError(error: HttpErrorResponse) {
    let errorMsg = '';
    // Handle client error
    if (error.error instanceof ErrorEvent) errorMsg = error.error.message;
    // Handle server error
    else errorMsg = `Error code: ${error.status}\nMessage: ${error.message}`;

    console.log(errorMsg);

    return throwError(errorMsg);
  }
}
