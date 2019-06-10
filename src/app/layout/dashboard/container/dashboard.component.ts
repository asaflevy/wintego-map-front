import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AgmMap, AgmMarker} from '@agm/core';
import * as fromState from './../../../store/users';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {UserModel} from '../../../model/user.model';
import {untilComponentDestroyed} from '@w11k/ngx-componentdestroyed';
import {MarkerEditDialogService} from '../../marker-edit/service/marker-edit.service';
import {LocationModel} from '../../../model/ILocation.model';
import {MapService} from '../../service/map.service';
import {AuthService} from '../../../core/auth/auth.srv';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  @Select(fromState.UsersState.getUsersDetails) userData$: Observable<UserModel>;
  userData: UserModel;
  @ViewChild(AgmMap) agmMap;
  map: any = null;
  zoom = 4;
  lat = 51.678418;
  lng = 7.809007;

  constructor(private store: Store, private authSrv: AuthService, private markerDlgSrv: MarkerEditDialogService, private mapSrv: MapService) {

    this.userData$.pipe(untilComponentDestroyed(this)).subscribe(_resData => {
      this.userData = _resData;
      if (this.userData && this.userData.fkLocation) {
        const lat = this.userData.fkLocation[0].latitude;
        const log = this.userData.fkLocation[0].longitude;
        this.mapSrv.canterMapAroundMarker(this.map, lat, log);
      }
    });
  }

  getMarkerId(id) {
    return id;
  }

  onMarkerClicked(marker: AgmMarker) {
    const markerData = this.userData.fkLocation.filter((loc: LocationModel) => {
      return loc._id === marker.label['id'];
    });
    this.mapSrv.canterMapAroundMarker(this.map, marker.latitude, marker.longitude);
    this.markerDlgSrv.openMarkerEditDialog({markerData, userId: this.authSrv.getUserId()});
  }


  ngOnInit() {
  }

  ngAfterViewInit() {
    this.agmMap.mapReady.subscribe(map => {
      this.map = map;
      this.store.dispatch(new fromState.UsersDetails());

    });
  }

  ngOnDestroy(): void {
  }


}
