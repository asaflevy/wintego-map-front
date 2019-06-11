import {LocationType} from './location-type.enum';

export interface LocationModel {
  latitude?: number;
  longitude?: number;
  type?: LocationType;
  city?: string;
  region?: string;
  region_code?: string;
  info?: string;
  label?: string;
  iconUrl?: string;
  _id?: string;
}
