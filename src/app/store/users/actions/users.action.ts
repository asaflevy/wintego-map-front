import {UserModel} from '../../../model/user.model';
import {LocationModel} from '../../../model/location.model';


export const CLEAR_USER_DATA = '[USER] CLEAR_USER_DATA';
export const USER_DETAILS = '[USER] USER_DETAILS';
export const USER_DETAILS_SUCCESS = '[USER] USER_DETAILS_SUCCESS';
export const USER_DETAILS_FAIL = '[USER] USER_DETAILS_FAIL';


export const USER_UPDATE_LOCATION = '[USER] USER_UPDATE_LOCATION';
export const USER_UPDATE_LOCATION_SUCCESS = '[USER] USER_UPDATE_LOCATION_SUCCESS';
export const USER_UPDATE_LOCATION_FAIL = '[USER] USER_UPDATE_LOCATION_FAIL';


export const GET_ALL_USER = '[USER] GET_ALL_USER';
export const GET_ALL_USER_SUCCESS = '[USER] GET_ALL_USER_SUCCESS';
export const GET_ALL_USER_FAIL = '[USER] GET_ALL_USER_FAIL';

export const DELETE_USER_LOCATION = '[USER] DELETE_USER_LOCATION';
export const DELETE_USER_LOCATION_SUCCESS = '[USER] DELETE_USER_LOCATION_SUCCESS';
export const DELETE_USER_LOCATION_FAIL = '[USER] DELETE_USER_LOCATION_FAIL';


export class ClearUserData {
  static readonly type = CLEAR_USER_DATA;
}

export class UsersDetails {

  static readonly type = USER_DETAILS;

  constructor(public payload: string = null) {
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


export class UserInsertOrUpdateLocation {

  static readonly type = USER_UPDATE_LOCATION;

  constructor(public payload: { userId: string, location: LocationModel }) {
  }
}


export class UserInsertOrUpdateLocationSuccess {
  static readonly type = USER_UPDATE_LOCATION_SUCCESS;

  constructor(public payload: LocationModel) {
  }
}


export class UserUpdateLocationFail {
  static readonly type = USER_UPDATE_LOCATION_FAIL;

  constructor(public payload: any | null) {
  }
}


export class GetAllUsers {

  static readonly type = GET_ALL_USER;

  constructor() {
  }
}


export class GetAllUsersSuccess {
  static readonly type = GET_ALL_USER_SUCCESS;

  constructor(public payload: UserModel[]) {
  }
}


export class GetAllUsersFail {
  static readonly type = GET_ALL_USER_FAIL;

  constructor(public payload: any | null) {
  }
}


export class DeleteUserLocation {
  static readonly type = DELETE_USER_LOCATION;

  constructor(public payload: { userId: string,  locationId: string }) {
  }
}

export class DeleteUserLocationSuccess {

  static readonly type = DELETE_USER_LOCATION_SUCCESS;

  constructor(public payload: LocationModel) {
  }
}


export class DeleteUserLocationFail {
  static readonly type = DELETE_USER_LOCATION_FAIL;

  constructor(public payload: any | null) {
  }
}







