import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AgmInfoWindow, AgmMap, AgmMarker} from '@agm/core';
import * as fromState from './../../../store/users';
import {Actions, ofActionSuccessful, Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {UserModel} from '../../../model/user.model';
import {untilComponentDestroyed} from '@w11k/ngx-componentdestroyed';
import {MarkerEditDialogService} from '../../marker-edit/service/marker-edit.service';
import {LocationModel} from '../../../model/location.model';
import {MapService} from '../../service/map.service';
import {AuthService} from '../../../core/auth/auth.srv';
import {UserService} from '../../../core/service/user.service';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  @Select(fromState.UsersState.isLoading) isLoading$: Observable<boolean>;
  @Select(fromState.UsersState.getUsersDetails) userData$: Observable<UserModel>;
  @Select(fromState.UsersState.getAllUsers) userList$: Observable<UserModel[]>;

  @ViewChild(AgmMap) gm;
  @ViewChild(AgmInfoWindow) infoWindow;
  selectedUserId: string;
  userData: UserModel;
  map: any = null;
  zoom = 6;
  lat = 51.678418;
  lng = 7.809007;

  constructor(private store: Store, public authSrv: AuthService, private actions$: Actions, public userSrv: UserService,
              private markerDlgSrv: MarkerEditDialogService, public mapSrv: MapService) {

    this.selectedUserId = this.authSrv.getUserId();

    this.userData$.pipe(untilComponentDestroyed(this)).subscribe(resData => {
      this.userData = resData;
      if (this.userData && this.userData.fkLocation && this.userData.fkLocation.length) {
        const lat = this.userData.fkLocation[0].latitude;
        const log = this.userData.fkLocation[0].longitude;
        this.mapSrv.centerMapAroundMarker(this.map, lat, log);
      }
    });
  }

  ngOnInit() {
    this.actions$.pipe(
      untilComponentDestroyed(this),
      ofActionSuccessful(fromState.USER_UPDATE_LOCATION_SUCCESS)).subscribe((location: LocationModel) => {
      this.mapSrv.centerMapAroundMarker(this.map, location.latitude, location.longitude);
    });

    this.userSrv.getSelectedUser().pipe(untilComponentDestroyed(this)).subscribe((userId) => {
      this.selectedUserId = userId;
      this.store.dispatch(new fromState.UsersDetails(userId));
    });
  }

  ngAfterViewInit() {
    this.gm.mapReady.subscribe(map => {
      this.map = map;
      this.store.dispatch(new fromState.UsersDetails());
    });
  }


  async onMarkerClicked(marker: AgmMarker) {
    const markerData = this.userData.fkLocation.filter((loc: LocationModel) => {
      return loc._id === marker.label['id'];
    })[0];
    await this.mapSrv.centerMapAroundMarker(this.map, marker.latitude, marker.longitude);
    this.markerDlgSrv.openMarkerEditDialog({markerData, userId: this.authSrv.getUserId()});
  }

  onAddLocation() {
    const tempLocation = this.mapSrv.createLocation();
    this.markerDlgSrv.openMarkerEditDialog({markerData: tempLocation, userId: this.authSrv.getUserId()});
  }

  onMouseOver(infoWindow, gm) {
    if (gm.lastOpen != null) {
      gm.lastOpen.close();
    }
    gm.lastOpen = infoWindow;
    infoWindow.open();
  }

  onMouseOut(infoWindow, $event: MouseEvent) {
    infoWindow.close();
  }

  ngOnDestroy(): void {
  }


}
