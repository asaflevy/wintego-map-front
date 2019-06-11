import {UserTypeModel} from './auth.model';
import {LocationModel} from './location.model';

export interface UserModel {
  created_date: Date;
  email: string;
  firstName: string;
  fkLocation?: LocationModel[];
  lastName: string;
  role: UserTypeModel;
  _id: string;
}
