import {UserModel} from '../../../model/user.model';
import {LocationModel} from '../../../model/ILocation.model';

export const USER_DETAILS = '[USER] USER_DETAILS';
export const USER_DETAILS_SUCCESS = '[USER] USER_DETAILS_SUCCESS';
export const USER_DETAILS_FAIL = '[USER] USER_DETAILS_FAIL';


export const USER_UPDATE_LOCATION = '[USER] USER_UPDATE_LOCATION';
export const USER_UPDATE_LOCATION_SUCCESS = '[USER] USER_UPDATE_LOCATION_SUCCESS';
export const USER_DETAILS_LOCATION_FAIL = '[USER] USER_DETAILS_LOCATION_FAIL';


export class UsersDetails {

  static readonly type = USER_DETAILS;

  constructor(public payload: any = null) {
  }
}

export class UsersDetailsSuccess {
  static readonly type = USER_DETAILS_SUCCESS;

  constructor(public payload: UserModel) {
  }
}

export class UsersDetailsFail {
  static readonly type = USER_DETAILS_FAIL;

  constructor(public payload: any = null) {
  }
}


export class UserUpdateLocation {

  static readonly type = USER_UPDATE_LOCATION;

  constructor(public payload: { userId: string, location: LocationModel }) {
  }
}


export class UserUpdateLocationSuccess {
  static readonly type = USER_UPDATE_LOCATION_SUCCESS;

  constructor(public payload: LocationModel) {
  }
}


export class UserUpdateLocationFail {
  static readonly type = USER_DETAILS_LOCATION_FAIL;

  constructor(public payload: any | null) {
  }
}








