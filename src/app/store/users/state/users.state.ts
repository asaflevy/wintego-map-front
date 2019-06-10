import {Action, Selector, State, StateContext} from '@ngxs/store';
import * as fromAction from '../actions';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';
import {UserModel} from '../../../model/user.model';
import {UserService} from '../../../core/service/user.service';

export class UsersListStateModel {
  data: UserModel;
  loaded: boolean;
  loading: boolean;
}

@State<UsersListStateModel>({
  name: 'usersState',
  defaults: {
    data: null,
    loaded: false,
    loading: false,
  }
})


export class UsersState {
  constructor(private userSrv: UserService) {
  }

  @Selector()
  static getUsersDetails(state: UsersListStateModel): UserModel {
    return state.data;
  }


  @Action(fromAction.UsersDetails)
  UsersListDetails({dispatch, patchState}: StateContext<UsersListStateModel>) {
    patchState({loading: true});
    return this.userSrv.getUsers()
      .pipe(
        map((data) => {
          dispatch(new fromAction.UsersDetailsSuccess(data));
        }),
        catchError(error => of(dispatch(new fromAction.UsersDetailsFail(error))))
      );
  }

  @Action(fromAction.UsersDetailsSuccess)
  UsersListDetailsSuccess({patchState}: StateContext<UsersListStateModel>, action: fromAction.UsersDetailsSuccess) {
    const data = action.payload;
    patchState(
      {
        data,
        loading: false,
        loaded: true
      }
    );
  }

  @Action(fromAction.UsersDetailsFail)
  UsersListDetailsFail({patchState}: StateContext<UsersListStateModel>) {
    patchState(
      {
        loading: false,
        loaded: false,
      }
    );
  }


  @Action(fromAction.UserInsertOrUpdateLocation)
  UserUpdateLocation({dispatch, patchState}: StateContext<UsersListStateModel>, action: fromAction.UserInsertOrUpdateLocation) {
    patchState({loading: true});
    const payload = action.payload;

    return this.userSrv.updateUserLocation(payload.userId, payload.location)
      .pipe(
        map((data) => {
          dispatch(new fromAction.UserInsertOrUpdateLocationSuccess(data));
        }),
        catchError(error => of(dispatch(new fromAction.UserUpdateLocationFail(error))))
      );
  }

  @Action(fromAction.UserInsertOrUpdateLocationSuccess)
  // tslint:disable-next-line:max-line-length
  UserInsertOrUpdateLocationSuccess({patchState, getState}: StateContext<UsersListStateModel>, action: fromAction.UserInsertOrUpdateLocationSuccess) {
    let data = getState().data;
    const newLocation = data.fkLocation.filter((loc) => {
      return loc._id === action.payload._id;
    });
    if (newLocation.length) {
      data = {...data, ...newLocation};
    } else {
      data.fkLocation.push(action.payload);
    }
    patchState(
      {
        ...data,
        loading: false,
        loaded: true
      }
    );
  }

  @Action(fromAction.UserUpdateLocationFail)
  UserUpdateLocationFail({patchState}: StateContext<UsersListStateModel>) {
    patchState(
      {
        loading: false,
        loaded: false,
      }
    );
  }
}

