import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AgmMap, MapsAPILoader} from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit, AfterViewInit {

  constructor(public mapsAPILoader: MapsAPILoader) {
  }

  @ViewChild(AgmMap) agmMap;
  map: any = null;
  positions = [];
  zoom: number = 18;
  lat: number = 51.678418;
  lng: number = 7.809007;

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

}
