import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserTabComponent} from './user-tab/user-tab.component';
import {CapitalizePipe} from './capitalize.pipe';
import {
  MatBadgeModule,
  MatButtonModule, MatCardModule, MatCheckboxModule,
  MatGridListModule, MatIconModule, MatInputModule,
  MatListModule, MatRippleModule,
  MatTableModule
} from '@angular/material';
import {AgmCoreModule, GoogleMapsAPIWrapper} from "@agm/core";


@NgModule({
  declarations: [UserTabComponent, CapitalizePipe],
  providers: [GoogleMapsAPIWrapper],
  imports: [
    CommonModule,
    MatButtonModule,
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
      //apiKey: 'AIzaSyDEhMCTsKcRrtSy59Nmn4PgCPxE8DTurSY'
    })
  ],
  exports: [
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
