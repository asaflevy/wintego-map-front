import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CapitalizePipe} from './capitalize.pipe';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatRippleModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTableModule
} from '@angular/material';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import {AuthService} from '../core/auth/auth.srv';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularOpenlayersModule} from 'ngx-openlayers';
import {ProgressBarComponent} from '../layout/components/app-progras-bar/app-progress-bar.component';


@NgModule({
  declarations: [CapitalizePipe, ProgressBarComponent],
  providers: [
    GoogleMapsAPIWrapper, AuthService,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatBadgeModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatRippleModule,
    AgmCoreModule,
    MatSnackBarModule,
    MatSelectModule,
    MatProgressBarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCJO8-vFe0zqQaSrzIqcpftDiwJYbQB2bQ'
    })
  ],
  exports: [
    ProgressBarComponent,
    MatProgressBarModule,
    MatSelectModule,
    MatSnackBarModule,
    AngularOpenlayersModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    CapitalizePipe,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatTableModule,
    MatInputModule,
    MatRippleModule,
    AgmCoreModule,
  ]
})
export class SharedModule {
}
