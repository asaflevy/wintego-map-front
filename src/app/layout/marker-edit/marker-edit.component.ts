import {AfterContentInit, Component, ElementRef, Inject, NgZone, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {LocationModel} from '../../model/ILocation.model';
import {MapsAPILoader} from '@agm/core';
import {Store} from '@ngxs/store';
import * as fromUsers from '../../store/users';

declare var google;

@Component({
  selector: 'app-marker-edit',
  templateUrl: './marker-edit.component.html',
  styleUrls: ['./marker-edit.component.less']
})
export class MarkerEditComponent implements OnInit, AfterContentInit {
  userId: string | null;
  markerDetailForm: FormGroup;
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  markerData: LocationModel;
  @ViewChild('search')
  public searchElementRef: ElementRef;
  private geoCoder;

  constructor(private dialogRef: MatDialogRef<MarkerEditComponent>, @Inject(MAT_DIALOG_DATA) data: { markerData: LocationModel, userId: string | null }, private fb: FormBuilder,
              private store: Store,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
    this.markerData = data.markerData[0];
    this.userId = data.userId;
    this.latitude = this.markerData.latitude;
    this.longitude = this.markerData.longitude;
  }

  ngOnInit() {

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
    this.store.dispatch(new fromUsers.UserUpdateLocation({userId: this.userId, location: this.markerData}));
  }

  markerDragEnd($event: any) {
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.markerData.latitude = this.latitude;
    this.markerData.longitude = this.longitude;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({location: {lat: latitude, lng: longitude}}, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          console.log('No results found');
        }
      } else {
        console.log('Geocoder failed due to: ' + status);
      }

    });
  }
}
