import { Action, Selector, State, StateContext } from '@ngxs/store';
import * as fromAction from '../actions';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import {LoggerService} from "../../service/logger.service";
import {IloggerModel} from "../../../../core/model/Ilogger.model";

export class LoggerStateModel {
  data: IloggerModel[];
  loaded: boolean;
  loading: boolean;
}

@State<LoggerStateModel>({
  name: 'usersState',
  defaults: {
    data: [],
    loaded: false,
    loading: false,
  }
})


export class LoggerState {
  constructor(private userSrv: LoggerService) {
  }

  @Selector()
  static getLoggerDetailData(state: LoggerStateModel): Array<IloggerModel> {
    return state.data;
  }



  @Action(fromAction.LoggerListDetail)
  UsersListDetails({ dispatch, patchState }: StateContext<LoggerStateModel>) {
    patchState({ loading: true });
    return this.userSrv.getAllLoggerDetails()
      .pipe(
        map((data) => {
          dispatch(new fromAction.LoggerListDetailSuccess(data));
        }),
        catchError(error => of(dispatch(new fromAction.LoggerListDetailFail(error))))
      );
  }

  @Action(fromAction.LoggerListDetailSuccess)
  UsersListDetailsSuccess({ patchState }: StateContext<LoggerStateModel>, action: fromAction.LoggerListDetailSuccess) {
    const data = action.payload as IloggerModel[];
    patchState(
      {
        data,
        loading: false,
        loaded: true
      }
    );
  }

  @Action(fromAction.LoggerListDetailFail)
  UsersListDetailsFail({ patchState }: StateContext<LoggerStateModel>) {
    patchState(
      {
        loading: false,
        loaded: false,
      }
    );
  }
}

