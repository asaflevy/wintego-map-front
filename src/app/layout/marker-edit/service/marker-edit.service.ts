import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {MarkerEditComponent} from '../marker-edit.component';


@Injectable()
export class MarkerEditDialogService {

  constructor(private dialog: MatDialog) {
  }

  openMarkerEditDialog(data): MatDialogRef<any, any> {
    return this.dialog.open(MarkerEditComponent, {
      width: '100vw',
      maxWidth: '100vw',
      height: '100vh',
      maxHeight: '100vh',
      data
    });

  }
}
