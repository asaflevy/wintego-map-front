import {LocationModel} from './ILocation.model';

export interface LoggerModel {
  created_date: Date;
  message: string;
  ip: string;
  fkLocation: LocationModel;

}
