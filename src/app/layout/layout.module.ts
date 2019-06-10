import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {TopnavComponent} from './components/topnav/topnav.component';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {NavComponent} from './nav/nav.component';
import {MarkerEditComponent} from './marker-edit/marker-edit.component';
import {MarkerEditDialogService} from './marker-edit/service/marker-edit.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  providers: [MarkerEditDialogService],
  imports: [
    SharedModule,
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatListModule,
  ],
  declarations: [LayoutComponent, NavComponent, TopnavComponent, SidebarComponent, MarkerEditComponent],
  entryComponents: [MarkerEditComponent],
  exports: [MarkerEditComponent]
})
export class LayoutModule {
}
