import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {MarkerEditComponent} from '../marker-edit.component';


@Injectable()
export class MarkerEditDialogService {

  constructor(private dialog: MatDialog, private router: Router) {
  }

  openMarkerEditDialog(data) {
    const dialogRef = this.dialog.open(MarkerEditComponent, {
      width: '100vw',
      maxWidth: '100vw',
      height: '100vh',
      maxHeight: '100vh',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
