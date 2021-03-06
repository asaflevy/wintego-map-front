import {Action, Selector, State, StateContext} from '@ngxs/store';
import * as fromAction from '../actions';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';
import {UserModel} from '../../../model/user.model';
import {UserService} from '../../../core/service/user.service';
import {UserTypeModel} from '../../../model/auth.model';
import {MessageService} from '../../../core/service/message.service';

export class UsersListStateModel {
  data: UserModel;
  allUsers: UserModel[];
  loaded: boolean;
  loading: boolean;
}

@State<UsersListStateModel>({
  name: 'usersState',
  defaults: {
    data: null,
    allUsers: [],
    loaded: false,
    loading: false,
  }
})


export class UsersState {
  constructor(private userSrv: UserService, private messageSrv: MessageService) {
  }

  @Selector()
  static getUsersDetails(state: UsersListStateModel): UserModel {
    return state.data;
  }

  @Selector()
  static getAllUsers(state: UsersListStateModel): UserModel[] {
    return state.allUsers;
  }

  @Selector()
  static isLoading(state: UsersListStateModel): boolean {
    return state.loading;
  }


  @Action(fromAction.ClearUserData)
  ClearUserData({patchState}: StateContext<UsersListStateModel>) {
    patchState(
      {
        data: null,
        allUsers: [],
        loaded: false,
        loading: false,
      });
  }


  @Action(fromAction.UsersDetails)
  UsersListDetails({dispatch, patchState}: StateContext<UsersListStateModel>, action: fromAction.UsersDetails) {
    patchState({loading: true});
    return this.userSrv.getUsers(action.payload)
      .pipe(
        map((data) => {
          dispatch(new fromAction.UsersDetailsSuccess(data));
        }),
        catchError(error => of(dispatch(new fromAction.UsersDetailsFail(error))))
      );
  }

  @Action(fromAction.UsersDetailsSuccess)
  UsersListDetailsSuccess({dispatch, patchState}: StateContext<UsersListStateModel>, action: fromAction.UsersDetailsSuccess) {
    const data = action.payload;
    if (data.role === UserTypeModel.Admin) {
      dispatch(new fromAction.GetAllUsers());
    }
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
    this.messageSrv.showMessage('failed to load user detail');
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
    this.messageSrv.showMessage('update location data succeeded');
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
    this.messageSrv.showMessage('update location data failed');
    patchState(
      {
        loading: false,
        loaded: false,
      }
    );
  }


  @Action(fromAction.GetAllUsers)
  GetAllUsers({dispatch, patchState}: StateContext<UsersListStateModel>) {
    patchState({loading: true});

    return this.userSrv.getAllUsers()
      .pipe(
        map((data) => {
          dispatch(new fromAction.GetAllUsersSuccess(data));
        }),
        catchError(error => of(dispatch(new fromAction.UserUpdateLocationFail(error))))
      );
  }

  @Action(fromAction.GetAllUsersSuccess)
  GetAllUsersSuccess({patchState, getState}: StateContext<UsersListStateModel>, action: fromAction.GetAllUsersSuccess) {
    const allUserPayLoad = action.payload;
    patchState(
      {
        allUsers: allUserPayLoad,
        loading: false,
        loaded: true
      }
    );
  }

  @Action(fromAction.GetAllUsersFail)
  GetAllUsersFail({patchState}: StateContext<UsersListStateModel>) {
    this.messageSrv.showMessage('get all users data failed');
    patchState(
      {
        loading: false,
        loaded: false,
      }
    );
  }


  @Action(fromAction.DeleteUserLocation)
  DeleteUserLocation({dispatch, patchState}: StateContext<UsersListStateModel>, action: fromAction.DeleteUserLocation) {
    patchState({loading: true});

    return this.userSrv.deleteUserLocation(action.payload)
      .pipe(
        map((data) => {
          dispatch(new fromAction.DeleteUserLocationSuccess(data));
        }),
        catchError(error => of(dispatch(new fromAction.DeleteUserLocationFail(error))))
      );
  }

  @Action(fromAction.DeleteUserLocationSuccess)
  DeleteUserLocationSuccess({patchState, getState}: StateContext<UsersListStateModel>, action: fromAction.DeleteUserLocationSuccess) {
    const data = getState().data;
    const location = action.payload;
    data.fkLocation = data.fkLocation.filter(ob =>
      ob._id !== location._id
    );
    patchState(
      {
        ...data,
        loading: false,
        loaded: true
      }
    );
  }

  @Action(fromAction.DeleteUserLocationFail)
  DeleteUserLocationFail({patchState}: StateContext<UsersListStateModel>) {
    this.messageSrv.showMessage('get all users data failed');
    patchState(
      {
        loading: false,
        loaded: false,
      }
    );
  }


}

