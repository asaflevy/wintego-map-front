import {Injectable, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {Observable, throwError as observableThrowError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Store} from '@ngxs/store';
import {MatDialog} from '@angular/material';
import {UserLoginModel} from '../../model/user-login.model';
import {AuthModel} from '../../model/auth.model';

@Injectable()
export class AuthService implements OnInit {

  private loginUrl = `${environment.baseUrl}/auth/signIn`;

  constructor(private http: HttpClient, private router: Router, private store: Store, private dialog: MatDialog) {
  }

  ngOnInit() {

  }


  login(userData: UserLoginModel): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    return this.http
    // tslint:disable-next-line:max-line-length
      .post<any>(this.loginUrl, `email=${encodeURIComponent(userData.email)}&password=${encodeURIComponent(userData.password)}`, httpOptions)
      .pipe(
        tap((res) => this.setCurrentUser(res)),
        catchError((error: any) => observableThrowError(error.json())));

  }

  logout() {
    return this.removeUserToken();
    this.router.navigate(['/']);
  }

  removeUserToken(): void {
    localStorage.removeItem('currentUser');
  }


  jwtAuthorizationHeaderOnly(): any {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.access_token) {
      return {Authorization: 'Bearer ' + currentUser.access_token, 'Content-Type': 'application/json'};
    }
    return {};
  }

  getAccessToken(): string {
    if (this.isLoggedIn()) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      return currentUser.accessToken;
    }
    return null;
  }

  getUserId(): string {
    if (this.isLoggedIn()) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser')) as AuthModel;
      return currentUser.userId;
    }
    return null;
  }

  isLoggedIn(): boolean {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || false;
    return currentUser && currentUser.accessToken != null;
  }

  setCurrentUser(authRes: any) {
    localStorage.setItem('currentUser', JSON.stringify(authRes));
  }

}
