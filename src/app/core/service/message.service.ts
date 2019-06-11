import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


  constructor(private _snackBar: MatSnackBar) {
  }

  showMessage(message: string, action: string = '<--', config: MatSnackBarConfig<any> = {
    duration: 4500,
    horizontalPosition: 'center',
    verticalPosition: 'bottom', panelClass: 'map-message'
  }) {
    this._snackBar.open(message, action, config);
  }

}
