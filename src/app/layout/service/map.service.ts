import {Injectable} from '@angular/core';
import {AgmDataLayer, AgmMap, GoogleMapsAPIWrapper} from '@agm/core';

declare var google;

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() {
  }

  canterMapAroundMarker(map: GoogleMapsAPIWrapper, lat: number, lon: number): Promise<void> {
      const latLng = new google.maps.LatLng(lat, lon);
      return map.panTo(latLng);
  }
}
