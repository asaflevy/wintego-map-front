import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import * as fromState from './../store';
import {Observable} from 'rxjs';
import {LoggerModel} from '../../../model/logger.model';
import {Select, Store} from '@ngxs/store';
import {AgmMap} from '@agm/core';
import {untilComponentDestroyed} from '@w11k/ngx-componentdestroyed';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.less']
})
export class LoggerComponent implements OnInit, AfterViewInit, OnDestroy {

  @Select(fromState.LoggerState.getLoggerDetailData) loggerData$: Observable<LoggerModel[]>;
  @ViewChild(AgmMap) agmMap;
  map: any = null;
  zoom = 10;
  lat = 32.816;
  lng = 34.9821;

  constructor(private store: Store) {
    this.store.dispatch(new fromState.LoggerListDetail());
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.agmMap.mapReady.pipe(untilComponentDestroyed(this)).subscribe(map => {
      this.map = map;
    });
  }

  markerSelected(row: LoggerModel) {
    this.lat = row.fkLocation.latitude;
    this.lng = row.fkLocation.longitude;
    const loc = new google.maps.LatLng(row.fkLocation.longitude, row.fkLocation.latitude);
    this.map.setCenter(loc);
  }

  ngOnDestroy(): void {
  }


}
