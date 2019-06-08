import {ILocationModel} from "./ILocation.model";


export interface IloggerModel {
  created_date: Date
  message: string;
  ip: string;
  fkLocation: ILocationModel

}
