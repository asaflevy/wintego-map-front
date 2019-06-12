(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~layout-layout-module"],{

/***/ "./node_modules/@w11k/ngx-componentdestroyed/dist/es2015/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@w11k/ngx-componentdestroyed/dist/es2015/index.js ***!
  \************************************************************************/
/*! exports provided: componentDestroyed, untilComponentDestroyed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentDestroyed", function() { return componentDestroyed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untilComponentDestroyed", function() { return untilComponentDestroyed; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


function componentDestroyed(component) {
    var modifiedComponent = component;
    if (modifiedComponent.__componentDestroyed$) {
        return modifiedComponent.__componentDestroyed$;
    }
    var oldNgOnDestroy = component.ngOnDestroy;
    var stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
    modifiedComponent.ngOnDestroy = function () {
        oldNgOnDestroy && oldNgOnDestroy.apply(component);
        stop$.next(true);
        stop$.complete();
    };
    return modifiedComponent.__componentDestroyed$ = stop$.asObservable();
}
function untilComponentDestroyed(component) {
    return function (source) { return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(componentDestroyed(component))); };
}


/***/ }),

/***/ "./src/app/layout/marker-edit/marker-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/marker-edit/marker-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form novalidate>\n  <button [mat-dialog-close]=\"true\" class=\"dialog-close\" mat-button>×</button>\n  <div class=\"marker-edit-container\">\n    <div class=\"top-title\">\n      <h2 mat-dialog-title>\n      </h2>\n\n    </div>\n    <div class=\"marker-edit-container-main\">\n      <div mat-dialog-content>\n        <div class=\"marker-form\">\n          <mat-card class=\"marker-form-card\">\n            <mat-card-header>\n            </mat-card-header>\n\n            <mat-card-content>\n\n              <form (ngSubmit)=\"onSubmitMarkerDetails()\" [formGroup]=\"markerDetailForm\">\n                <mat-form-field class=\"full-width\">\n                  <input [(ngModel)]=\"latitude\" formControlName=\"latitude\" matInput placeholder=\"latitude\" required>\n                  <mat-error\n                    *ngIf=\"!markerDetailForm.controls['latitude'].valid && markerDetailForm.controls['latitude'].touched\">\n                    must be flout number\n                  </mat-error>\n                </mat-form-field>\n\n                <mat-form-field class=\"full-width\">\n                  <input [(ngModel)]=\"longitude\" formControlName=\"longitude\" matInput placeholder=\"longitude\" required>\n                  <mat-error\n                    *ngIf=\"!markerDetailForm.controls['longitude'].valid && markerDetailForm.controls['longitude'].touched\">\n                    must be flout number\n                  </mat-error>\n                </mat-form-field>\n\n\n                <mat-form-field class=\"full-width\">\n                  <input [(ngModel)]=\"markerData.info\" formControlName=\"info\" matInput placeholder=\"windows info\">\n                </mat-form-field>\n\n\n                <mat-form-field class=\"full-width\">\n                  <input [(ngModel)]=\"markerData.label\" formControlName=\"label\" matInput placeholder=\"label\">\n                </mat-form-field>\n\n                <mat-form-field class=\"full-width\">\n                  <input [(ngModel)]=\"markerData.iconUrl\" formControlName=\"iconUrl\" matInput placeholder=\"iconUrl\">\n                  <mat-error\n                    *ngIf=\"!markerDetailForm.controls['iconUrl'].valid && markerDetailForm.controls['iconUrl'].touched\">\n                  </mat-error>\n\n                </mat-form-field>\n                <button [disabled]=\"!markerDetailForm.valid\" class=\"submit-btn\" color=\"primary\" mat-raised-button\n                        type=\"submit\">\n                  Submit\n                </button>\n              </form>\n\n            </mat-card-content>\n          </mat-card>\n\n\n        </div>\n        <div class=\"marker-map\">\n\n          <mat-card>\n            <div class=\"form-group\">\n              <mat-form-field class=\"form-search-address-container\">\n                <input c #search matInput (keydown.enter)=\"$event.preventDefault()\" autocapitalize=\"off\"\n                       autocorrect=\"off\" placeholder=\"Search Location\" spellcheck=\"off\"\n                       type=\"text\" type=\"text\">\n              </mat-form-field>\n            </div>\n\n          </mat-card>\n          <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"6\">\n            <agm-marker (dragEnd)=\"markerDragEnd($event)\" [animation]=\"1\" [latitude]=\"latitude\" [longitude]=\"longitude\"\n                        [label]=\"{fontSize: '16px', text:mapSrv.getLocationProperty(markerData,'label'), id:mapSrv.getLocationProperty(markerData,'_id')}\"\n                        [iconUrl]=\"markerData.iconUrl\"\n                        [markerDraggable]=\"true\">\n              <agm-info-window [disableAutoPan]=\"false\" [isOpen]=\"true\">\n                <div class=\"gmap-info-window-container\">\n                  {{markerData.info}}\n                </div>\n              </agm-info-window>\n            </agm-marker>\n          </agm-map>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/layout/marker-edit/marker-edit.component.less":
/*!***************************************************************!*\
  !*** ./src/app/layout/marker-edit/marker-edit.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-content {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-flow: row;\n}\nagm-map {\n  height: 90vh;\n  width: 100%;\n}\n:host .marker-edit-container-main {\n  display: flex;\n  flex-direction: row;\n}\n:host .marker-edit-container-main .form-search-address-container {\n  min-width: 300px;\n}\n:host .marker-edit-container-main .marker-form {\n  min-width: 300px;\n}\n:host .marker-edit-container-main .marker-form .marker-form-card {\n  height: 100%;\n  margin-right: 9px;\n}\n:host .marker-edit-container-main .marker-form .mat-card-content form {\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n}\n:host .marker-edit-container-main .marker-map {\n  display: flex;\n  width: 100%;\n  flex-flow: column;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2FmbGV2eS9wcm9qZWN0L3dpbnRlZ29fcHJvamVjdC93aW50ZWdvLW1hcC1mcm9udC9zcmMvYXBwL2xheW91dC9tYXJrZXItZWRpdC9tYXJrZXItZWRpdC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbGF5b3V0L21hcmtlci1lZGl0L21hcmtlci1lZGl0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0NGO0FER0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0RGO0FESUE7RUFHSSxhQUFBO0VBQ0EsbUJBQUE7QUNKSjtBREFBO0VBT00sZ0JBQUE7QUNKTjtBREhBO0VBV00sZ0JBQUE7QUNMTjtBRE9NO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDTFI7QURXUTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNUVjtBRGZBO0VBK0JNLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNiTiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYXJrZXItZWRpdC9tYXJrZXItZWRpdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbn1cblxuXG5hZ20tbWFwIHtcbiAgaGVpZ2h0OiA5MHZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuOmhvc3Qge1xuXG4gIC5tYXJrZXItZWRpdC1jb250YWluZXItbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgLmZvcm0tc2VhcmNoLWFkZHJlc3MtY29udGFpbmVyIHtcbiAgICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgfVxuXG4gICAgLm1hcmtlci1mb3JtIHtcbiAgICAgIG1pbi13aWR0aDogMzAwcHg7XG5cbiAgICAgICYgLm1hcmtlci1mb3JtLWNhcmQge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOXB4O1xuICAgICAgfVxuXG4gICAgICAubWF0LWNhcmQtY29udGVudCB7XG5cblxuICAgICAgICAmIGZvcm0ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXJrZXItbWFwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIH1cbiAgfVxuXG59XG4iLCIubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG59XG5hZ20tbWFwIHtcbiAgaGVpZ2h0OiA5MHZoO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IC5tYXJrZXItZWRpdC1jb250YWluZXItbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG46aG9zdCAubWFya2VyLWVkaXQtY29udGFpbmVyLW1haW4gLmZvcm0tc2VhcmNoLWFkZHJlc3MtY29udGFpbmVyIHtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cbjpob3N0IC5tYXJrZXItZWRpdC1jb250YWluZXItbWFpbiAubWFya2VyLWZvcm0ge1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuOmhvc3QgLm1hcmtlci1lZGl0LWNvbnRhaW5lci1tYWluIC5tYXJrZXItZm9ybSAubWFya2VyLWZvcm0tY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiA5cHg7XG59XG46aG9zdCAubWFya2VyLWVkaXQtY29udGFpbmVyLW1haW4gLm1hcmtlci1mb3JtIC5tYXQtY2FyZC1jb250ZW50IGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAubWFya2VyLWVkaXQtY29udGFpbmVyLW1haW4gLm1hcmtlci1tYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/marker-edit/marker-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/marker-edit/marker-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: MarkerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerEditComponent", function() { return MarkerEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _store_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/users */ "./src/app/store/users/index.ts");
/* harmony import */ var _service_map_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/map.service */ "./src/app/layout/service/map.service.ts");
/* harmony import */ var _w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @w11k/ngx-componentdestroyed */ "./node_modules/@w11k/ngx-componentdestroyed/dist/es2015/index.js");









var MarkerEditComponent = /** @class */ (function () {
    function MarkerEditComponent(dialogRef, data, fb, mapSrv, actions$, store, mapsAPILoader, ngZone) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.mapSrv = mapSrv;
        this.actions$ = actions$;
        this.store = store;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.markerData = data.markerData;
        this.userId = data.userId;
        this.latitude = this.markerData.latitude;
        this.longitude = this.markerData.longitude;
    }
    MarkerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actions$.pipe(Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["ofActionSuccessful"])(_store_users__WEBPACK_IMPORTED_MODULE_6__["UserInsertOrUpdateLocationSuccess"]), Object(_w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_8__["untilComponentDestroyed"])(this)).subscribe(function () {
            _this.dialogRef.close();
        });
    };
    MarkerEditComponent.prototype.createForm = function () {
        this.markerDetailForm = this.fb.group({
            latitude: [this.latitude, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[+-]?([0-9]*[.])?[0-9]+')],
            longitude: [this.longitude, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[+-]?([0-9]*[.])?[0-9]+')],
            info: [this.markerData.info],
            label: [this.markerData.label],
            iconUrl: [this.markerData.iconUrl]
        });
    };
    MarkerEditComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.createForm();
        var autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
            types: ['address']
        });
        autocomplete.addListener('place_changed', function () {
            _this.ngZone.run(function () {
                var place = google.maps.places.PlaceResult = autocomplete.getPlace();
                if (place.geometry === undefined || place.geometry === null) {
                    return;
                }
                _this.latitude = place.geometry.location.lat();
                _this.longitude = place.geometry.location.lng();
                _this.zoom = 12;
            });
        });
    };
    MarkerEditComponent.prototype.onSubmitMarkerDetails = function () {
        if (this.markerDetailForm.invalid) {
            return;
        }
        this.store.dispatch(new _store_users__WEBPACK_IMPORTED_MODULE_6__["UserInsertOrUpdateLocation"]({ userId: this.userId, location: this.markerData }));
    };
    MarkerEditComponent.prototype.markerDragEnd = function ($event) {
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        this.markerData.latitude = this.latitude;
        this.markerData.longitude = this.longitude;
    };
    MarkerEditComponent.prototype.ngOnDestroy = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MarkerEditComponent.prototype, "searchElementRef", void 0);
    MarkerEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marker-edit',
            template: __webpack_require__(/*! ./marker-edit.component.html */ "./src/app/layout/marker-edit/marker-edit.component.html"),
            styles: [__webpack_require__(/*! ./marker-edit.component.less */ "./src/app/layout/marker-edit/marker-edit.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _service_map_service__WEBPACK_IMPORTED_MODULE_7__["MapService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Actions"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], MarkerEditComponent);
    return MarkerEditComponent;
}());



/***/ }),

/***/ "./src/app/layout/marker-edit/service/marker-edit.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/marker-edit/service/marker-edit.service.ts ***!
  \*******************************************************************/
/*! exports provided: MarkerEditDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerEditDialogService", function() { return MarkerEditDialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _marker_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../marker-edit.component */ "./src/app/layout/marker-edit/marker-edit.component.ts");




var MarkerEditDialogService = /** @class */ (function () {
    function MarkerEditDialogService(dialog) {
        this.dialog = dialog;
    }
    MarkerEditDialogService.prototype.openMarkerEditDialog = function (data) {
        return this.dialog.open(_marker_edit_component__WEBPACK_IMPORTED_MODULE_3__["MarkerEditComponent"], {
            width: '100vw',
            maxWidth: '100vw',
            height: '100vh',
            maxHeight: '100vh',
            data: data
        });
    };
    MarkerEditDialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], MarkerEditDialogService);
    return MarkerEditDialogService;
}());



/***/ }),

/***/ "./src/app/layout/service/map.service.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/service/map.service.ts ***!
  \***********************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_location_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/location-type.enum */ "./src/app/model/location-type.enum.ts");



var MapService = /** @class */ (function () {
    function MapService() {
    }
    MapService.prototype.centerMapAroundMarker = function (map, lat, lon) {
        var latLng = new google.maps.LatLng(lat, lon);
        return map.panTo(latLng);
    };
    MapService.prototype.createLocation = function (_id, latitude, longitude, label, info, iconUrl) {
        if (_id === void 0) { _id = null; }
        if (latitude === void 0) { latitude = 32.816; }
        if (longitude === void 0) { longitude = 34.9821; }
        if (label === void 0) { label = ''; }
        if (info === void 0) { info = ''; }
        if (iconUrl === void 0) { iconUrl = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'; }
        return {
            _id: _id,
            latitude: latitude,
            longitude: longitude,
            label: label,
            type: _model_location_type_enum__WEBPACK_IMPORTED_MODULE_2__["LocationType"].User,
            iconUrl: iconUrl,
            info: info,
        };
    };
    MapService.prototype.getLocationProperty = function (location, property) {
        var value = location[property];
        if (value) {
            return location[property];
        }
        return ' ';
    };
    MapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/model/location-type.enum.ts":
/*!*********************************************!*\
  !*** ./src/app/model/location-type.enum.ts ***!
  \*********************************************/
/*! exports provided: LocationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationType", function() { return LocationType; });
var LocationType;
(function (LocationType) {
    LocationType[LocationType["Interceptor"] = 1] = "Interceptor";
    LocationType[LocationType["User"] = 2] = "User";
})(LocationType || (LocationType = {}));


/***/ }),

/***/ "./src/app/store/users/index.ts":
/*!**************************************!*\
  !*** ./src/app/store/users/index.ts ***!
  \**************************************/
/*! exports provided: USER_DETAILS, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, USER_UPDATE_LOCATION, USER_UPDATE_LOCATION_SUCCESS, USER_UPDATE_LOCATION_FAIL, GET_ALL_USER, GET_ALL_USER_SUCCESS, GET_ALL_USER_FAIL, UsersDetails, UsersDetailsSuccess, UsersDetailsFail, UserInsertOrUpdateLocation, UserInsertOrUpdateLocationSuccess, UserUpdateLocationFail, GetAllUsers, GetAllUsersSuccess, GetAllUsersFail, UsersListStateModel, UsersState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/index */ "./src/app/store/users/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USER_DETAILS", function() { return _actions_index__WEBPACK_IMPORTED_MODULE_0__["USER_DETAILS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USER_DETAILS_SUCCESS", function() { return _actions_index__WEBPACK_IMPORTED_MODULE_0__["USER_DETAILS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USER_DETAILS_FAIL", function() { return _actions_index__WEBPACK_IMPORTED_MODULE_0__["USER_DETAILS_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USER_UPDATE_LOCATION", function() { return _actions_index__WEBPACK_IMPORTED_MODULE_0__["USER_UPDATE_LOCATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USER_UPDATE_LOCATION_SUCCESS", function() { return _actions_index__WEBPACK_IMPORTED_MODULE_0__["USER_UPDATE_LOCATION_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USER_UPDATE_LOCATION_FAIL", function() { return _actions_index__WEBPACK_IMPORTED_MODULE_0__["USER_UPDATE_LOCATION_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_USER", function() { return _actions_index__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_USER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_USER_SUCCESS", function() { return _actions_index__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_USER_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_USER_FAIL", function() { return _actions_index__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_USER_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersDetails", function() { return _actions_index__WEBPACK_IMPORTED_MODULE_0__["UsersDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersDetailsSuccess", function() { return _actions_index__WEBPACK_IMPORTED_MODULE_0__["UsersDetailsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersDetailsFail", function() { return _actions_index__WEBPACK_IMPORTED_MODULE_0__["UsersDetailsFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserInsertOrUpdateLocation", function() { return _actions_index__WEBPACK_IMPORTED_MODULE_0__["UserInsertOrUpdateLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserInsertOrUpdateLocationSuccess", function() { return _actions_index__WEBPACK_IMPORTED_MODULE_0__["UserInsertOrUpdateLocationSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserUpdateLocationFail", function() { return _actions_index__WEBPACK_IMPORTED_MODULE_0__["UserUpdateLocationFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetAllUsers", function() { return _actions_index__WEBPACK_IMPORTED_MODULE_0__["GetAllUsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetAllUsersSuccess", function() { return _actions_index__WEBPACK_IMPORTED_MODULE_0__["GetAllUsersSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetAllUsersFail", function() { return _actions_index__WEBPACK_IMPORTED_MODULE_0__["GetAllUsersFail"]; });

/* harmony import */ var _state_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/index */ "./src/app/store/users/state/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersListStateModel", function() { return _state_index__WEBPACK_IMPORTED_MODULE_1__["UsersListStateModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersState", function() { return _state_index__WEBPACK_IMPORTED_MODULE_1__["UsersState"]; });





/***/ }),

/***/ "./src/app/store/users/state/index.ts":
/*!********************************************!*\
  !*** ./src/app/store/users/state/index.ts ***!
  \********************************************/
/*! exports provided: UsersListStateModel, UsersState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _users_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.state */ "./src/app/store/users/state/users.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersListStateModel", function() { return _users_state__WEBPACK_IMPORTED_MODULE_0__["UsersListStateModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersState", function() { return _users_state__WEBPACK_IMPORTED_MODULE_0__["UsersState"]; });




/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~layout-layout-module.js.map