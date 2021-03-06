import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {LoggerModel} from '../../../model/logger.model';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private apiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) {
  }

  getAllLoggerDetails(): Observable<LoggerModel[]> {
    return this.http.get<LoggerModel[]>(`${this.apiUrl}/logger/getAll`)
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
