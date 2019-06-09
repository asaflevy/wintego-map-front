import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MapRoutingModule} from './map-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {LoggerComponent} from './container/logger.component';
import {LoggerService} from './service/logger.service';
import {NgxsModule} from '@ngxs/store';
import {LoggerState} from './store/state/logger.state';
import {LoggerDetailsComponent} from './components/logger-details/logger-details.component';

@NgModule({
  declarations: [LoggerComponent, LoggerDetailsComponent],
  providers: [LoggerService],
  imports: [
    CommonModule,
    SharedModule,
    MapRoutingModule,
    NgxsModule.forFeature([LoggerState]),

  ]
})
export class LoggerInterseptorModule {
}
