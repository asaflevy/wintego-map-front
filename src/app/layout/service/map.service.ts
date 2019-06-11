import {Injectable} from '@angular/core';
import {GoogleMapsAPIWrapper} from '@agm/core';
import {LocationModel} from '../../model/location.model';
import {LocationType} from '../../model/location-type.enum';

declare var google;

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() {
  }

  centerMapAroundMarker(map: GoogleMapsAPIWrapper, lat: number, lon: number): Promise<void> {
    const latLng = new google.maps.LatLng(lat, lon);
    return map.panTo(latLng);
  }


  createLocation(_id: string = null, latitude: number = 32.816, longitude: number = 34.9821, label: string = '', info: string = '',
                 iconUrl: string = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'): LocationModel {
    return {
      _id,
      latitude,
      longitude,
      label,
      type: LocationType.User,
      iconUrl,
      info,
    } as LocationModel;

  }

  getLocationProperty(location: LocationModel, property: string | number) {
    const value = location[property];
    if (value) {
      return location[property];
    }
    return ' ';
  }
}
