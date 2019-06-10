import {AfterContentInit, Component, ElementRef, Inject, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {LocationModel} from '../../model/ILocation.model';
import {MapsAPILoader} from '@agm/core';
import {Actions, ofActionSuccessful, Store} from '@ngxs/store';
import * as fromUsers from '../../store/users';
import {MapService} from '../service/map.service';
import {untilComponentDestroyed} from '@w11k/ngx-componentdestroyed';

declare var google;

@Component({
  selector: 'app-marker-edit',
  templateUrl: './marker-edit.component.html',
  styleUrls: ['./marker-edit.component.less']
})
export class MarkerEditComponent implements OnInit, AfterContentInit, OnDestroy {

  userId: string | null;
  markerDetailForm: FormGroup;
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  markerData: LocationModel;
  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private dialogRef: MatDialogRef<MarkerEditComponent>, @Inject(MAT_DIALOG_DATA) data: { markerData: LocationModel, userId: string | null }, private fb: FormBuilder,
              public mapSrv: MapService,
              private actions$: Actions,
              private store: Store,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
    this.markerData = data.markerData;
    this.userId = data.userId;
    this.latitude = this.markerData.latitude;
    this.longitude = this.markerData.longitude;
  }

  ngOnInit() {
    this.actions$.pipe(ofActionSuccessful(fromUsers.UserInsertOrUpdateLocationSuccess), untilComponentDestroyed(this)).subscribe(() => {
      this.dialogRef.close();
    });
  }


  createForm() {
    this.markerDetailForm = this.fb.group({
      latitude: [this.latitude, Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')],
      longitude: [this.longitude, Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')],
      info: [this.markerData.info],
      label: [this.markerData.label],
      iconUrl: [this.markerData.iconUrl]
    });
  }

  ngAfterContentInit(): void {
    this.createForm();
    const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
      types: ['address']
    });
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        const place = google.maps.places.PlaceResult = autocomplete.getPlace();
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
        this.zoom = 12;
      });
    });
  }

  onSubmitMarkerDetails() {
    if (this.markerDetailForm.invalid) {
      return;
    }
    this.store.dispatch(new fromUsers.UserInsertOrUpdateLocation({userId: this.userId, location: this.markerData}));
  }

  markerDragEnd($event: any) {
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.markerData.latitude = this.latitude;
    this.markerData.longitude = this.longitude;
  }


  ngOnDestroy(): void {
  }

}
