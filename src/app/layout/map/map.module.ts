import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MapComponent } from './container/map.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    SharedModule,
    MapRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCJO8-vFe0zqQaSrzIqcpftDiwJYbQB2bQ'
      //apiKey: 'AIzaSyDEhMCTsKcRrtSy59Nmn4PgCPxE8DTurSY'
    })
  ]
})
export class MapModule { }
