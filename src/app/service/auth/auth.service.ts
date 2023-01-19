import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { tap } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: string | null;
  isLoggedIn = false;
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private apiService: ApiService) {
    // const token = localStorage.getItem('profanis_auth');
    // this._isLoggedIn$.next(!!token);
    this.user = localStorage.getItem('user');
  }

  loginAuth(username: string, password: string) {
    return this.apiService.loginApi(username, password, this.user).pipe(
      tap((response: any) => {
        console.log('res: ', response.token);
        this.user = response.token;
        localStorage.setItem('user', response.token);
      })
    );
  }

  isAuthenticated() {
    console.log('user: ', this.user);
    return this.user ? true : false;
  }
}
