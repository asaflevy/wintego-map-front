import {LoggerModel} from '../../../../model/logger.model';

export const LOGGER_LIST_DETAILS = '[LOGGER] LOGGER_LIST_DETAILS';
export const LOGGER_LIST_DETAILS_SUCCESS = '[LOGGER] LOGGER_LIST_DETAILS_SUCCESS';
export const LOGGER_LIST_DETAILS_FAIL = '[LOGGER] LOGGER_LIST_DETAILS_FAIL';


export class LoggerListDetail {

  static readonly type = LOGGER_LIST_DETAILS;

  constructor(public payload: any = null) {
  }
}

export class LoggerListDetailSuccess {
  static readonly type = LOGGER_LIST_DETAILS_SUCCESS;

  constructor(public payload: LoggerModel[]) {
  }
}

export class LoggerListDetailFail {
  static readonly type = LOGGER_LIST_DETAILS_FAIL;

  constructor(public payload: any) {
  }
}







