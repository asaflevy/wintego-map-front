import {LocationModel} from './location.model';

export interface LoggerModel {
  created_date: Date;
  message: string;
  ip: string;
  fkLocation: LocationModel;

}
