import {Action, Selector, State, StateContext} from '@ngxs/store';
import * as fromAction from '../actions';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';
import {LoggerService} from '../../service/logger.service';
import {LoggerModel} from '../../../../model/logger.model';

export class LoggerStateModel {
  data: LoggerModel[];
  loaded: boolean;
  loading: boolean;
}

@State<LoggerStateModel>({
  name: 'loggerState',
  defaults: {
    data: [],
    loaded: false,
    loading: false,
  }
})


export class LoggerState {
  constructor(private loggerService: LoggerService) {
  }

  @Selector()
  static getLoggerDetailData(state: LoggerStateModel): Array<LoggerModel> {
    return state.data;
  }

  @Selector()
  static isLoading$(state: LoggerStateModel): boolean {
    return state.loading;
  }


  @Action(fromAction.LoggerListDetail)
  LoggerListDetail({dispatch, patchState}: StateContext<LoggerStateModel>) {
    patchState({loading: true});
    return this.loggerService.getAllLoggerDetails()
      .pipe(
        map((data) => {
          dispatch(new fromAction.LoggerListDetailSuccess(data));
        }),
        catchError(error => of(dispatch(new fromAction.LoggerListDetailFail(error))))
      );
  }

  @Action(fromAction.LoggerListDetailSuccess)
  LoggerListDetailSuccess({patchState}: StateContext<LoggerStateModel>, action: fromAction.LoggerListDetailSuccess) {
    const data = action.payload as LoggerModel[];
    patchState(
      {
        data,
        loading: false,
        loaded: true
      }
    );
  }

  @Action(fromAction.LoggerListDetailFail)
  LoggerListDetailFail({patchState}: StateContext<LoggerStateModel>) {
    patchState(
      {
        loading: false,
        loaded: false,
      }
    );
  }
}

