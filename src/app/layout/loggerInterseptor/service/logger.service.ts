import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IUser } from '../../../core/model/user.model';
import { environment } from 'src/environments/environment';
import {IloggerModel} from "../../../core/model/Ilogger.model";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private apiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllLoggerDetails(): Observable<IloggerModel[]> {
    return this.http.get<IloggerModel[]>(`${this.apiUrl}/logger/getAll`)
      .pipe(
        catchError(this.handleError)
      );
  }


  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
