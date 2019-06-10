import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CapitalizePipe} from './capitalize.pipe';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatRippleModule,
  MatTableModule
} from '@angular/material';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import {AuthService} from '../core/auth/auth.srv';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularOpenlayersModule} from 'ngx-openlayers';


@NgModule({
  declarations: [CapitalizePipe],
  providers: [GoogleMapsAPIWrapper, AuthService],
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCJO8-vFe0zqQaSrzIqcpftDiwJYbQB2bQ'
    })
  ],
  exports: [
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
