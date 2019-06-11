import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError as observableThrowError} from 'rxjs';
import {environment} from 'src/environments/environment';
import {UserModel} from '../../model/user.model';
import {catchError} from 'rxjs/operators';
import {AuthService} from '../auth/auth.srv';
import {LocationModel} from '../../model/ILocation.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient, private authSrv: AuthService) {
  }

  getUsers(): Observable<UserModel> {
    const userId = this.authSrv.getUserId();
    return this.http
      .get<UserModel>(`${this.apiUrl}/users/getUserData/${userId}`)
      .pipe(catchError((error: any) => observableThrowError(error.json())));
  }

  updateUserLocation(userId: string, location: LocationModel): Observable<UserModel> {
    const updateLocationDto = {userId, ...location};
    return this.http
      .post<UserModel>(`${this.apiUrl}/users/updateOrInsertLocation`, {updateLocationDto})
      .pipe(catchError((error: any) => observableThrowError(error.json())));
  }
}
