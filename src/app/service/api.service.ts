import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  loginApi(username: string, password: string) {
    console.log('accressss');
    return this.http
      .post('http://localhost:4008/register', {
        username,
        password,
      })
      .pipe(catchError(this.handleError));
  }

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
