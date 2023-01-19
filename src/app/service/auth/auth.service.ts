import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { tap } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private apiService: ApiService) {
    // const token = localStorage.getItem('profanis_auth');
    // this._isLoggedIn$.next(!!token);
  }

  loginAuth(username: string, password: string) {
    return this.apiService.loginApi(username, password).pipe(
      tap((response: any) => {
        console.log('res: ', response.token);
      })
    );
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
