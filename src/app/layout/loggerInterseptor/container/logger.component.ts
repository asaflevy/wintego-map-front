import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import * as fromState from './../store';
import {Observable} from "rxjs";
import {IloggerModel} from "../../../core/model/Ilogger.model";
import {Select, Store} from "@ngxs/store";
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
declare var google;
@Component({
  selector: 'app-map',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.less']
})
export class LoggerComponent implements OnInit, AfterViewInit {
  bounds  = new google.maps.LatLngBounds();
  constructor(private store: Store) {
    this.store.dispatch(new fromState.LoggerListDetail());
  }

  @Select(fromState.LoggerState.getLoggerDetailData) loggerData$: Observable<IloggerModel[]>;

  @ViewChild(AgmMap) agmMap;
  map: any = null;
  positions = [];
  zoom: number = 18;
  lat: number = 32.816;
  lng: number = 34.9821;

  ngOnInit() {
    setTimeout(() => {
      this.positions.push({let: 21.678418, lng: 7.809007});
    }, 3000);
  }

  ngAfterViewInit() {
    this.agmMap.mapReady.subscribe(map => {
      this.map = map;
    });
  }

  markerSelected(row: IloggerModel) {
    this.lat = +row.fkLocation.latitude;
    this.lng = +row.fkLocation.longitude;
    let loc = new google.maps.LatLng(row.fkLocation.longitude, row.fkLocation.latitude);
    this.map.setCenter(loc);
  }


}
