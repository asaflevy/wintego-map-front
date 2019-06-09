import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './container/dashboard.component';
import {AgmCoreModule} from '@agm/core';
import {DashboardRoutingModule} from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCJO8-vFe0zqQaSrzIqcpftDiwJYbQB2bQ'
      //apiKey: 'AIzaSyDEhMCTsKcRrtSy59Nmn4PgCPxE8DTurSY'
    })
  ]
})
export class DashboardModule { }
