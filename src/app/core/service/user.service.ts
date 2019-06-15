import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, Subject, throwError as observableThrowError} from 'rxjs';
import {environment} from 'src/environments/environment';
import {UserModel} from '../../model/user.model';
import {catchError} from 'rxjs/operators';
import {AuthService} from '../auth/auth.srv';
import {LocationModel} from '../../model/location.model';
import {UserTypeModel} from '../../model/auth.model';
import {UserRegisterModel} from '../../model/user-register.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.baseApiUrl;
  private usersUrl = `${environment.baseApiUrl}/users`;

  private selectedUser = new Subject<any>();

  constructor(private http: HttpClient, private authSrv: AuthService) {
  }

  getUsers(selectedUserId: string): Observable<UserModel> {
    const userId = selectedUserId || this.authSrv.getUserId();
    return this.http
      .get<UserModel>(`${this.apiUrl}/users/getUserData/${userId}`)
      .pipe(catchError((error: any) => observableThrowError(error.json())));
  }

  registerUser(userData: UserRegisterModel): Observable<any> {
    return this.http
      .post<any>(`${this.usersUrl}/register`, {...userData})
      .pipe(catchError((error: any) => observableThrowError(error.json())));

  }

  updateUserLocation(userId: string, location: LocationModel): Observable<UserModel> {
    const updateLocationDto = {userId, ...location};
    return this.http
      .post<UserModel>(`${this.apiUrl}/users/updateOrInsertLocation`, {updateLocationDto})
      .pipe(catchError((error: any) => observableThrowError(error.json())));
  }


  getAllUsers(): Observable<UserModel[]> {
    return this.http
      .get<UserModel[]>(`${this.apiUrl}/users/getAllUsers`)
      .pipe(catchError((error: any) => observableThrowError(error.json())));
  }

  deleteUserLocation(params: { userId: string, locationId: string }): Observable<LocationModel> {
    const httpParams = new HttpParams()
      .set('locationId', params.locationId)
      .set('userId', params.userId);

    const options = {params: httpParams};
    return this.http
      .delete<LocationModel>(`${this.apiUrl}/users/deleteLocation`, options)
      .pipe(catchError((error: any) => observableThrowError(error.json())));
  }

  setSelectedUser(userId: string): void {
    this.selectedUser.next(userId);
  }

  getSelectedUser(): Observable<any> {
    return this.selectedUser;
  }

  isAdminUser(): boolean {
    return this.authSrv.getUserType() === UserTypeModel.Admin;
  }


}
