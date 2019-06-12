(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/layout/dashboard/components/map-action/map-action.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/map-action/map-action.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-action-container\">\n  <button mat-raised-button (click)=\"onAddLocation()\" [disabled]=\"disabled\" >Add Location</button>\n  <app-user-selection *ngIf=\"showUsersSelection\" [userList]=\"userList\"></app-user-selection>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/map-action/map-action.component.less":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/map-action/map-action.component.less ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .dashboard-action-container {\n  display: flex;\n  height: 50px;\n}\n:host .dashboard-action-container app-user-selection {\n  margin-left: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2FmbGV2eS9wcm9qZWN0L3dpbnRlZ29fcHJvamVjdC93aW50ZWdvLW1hcC1mcm9udC9zcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvY29tcG9uZW50cy9tYXAtYWN0aW9uL21hcC1hY3Rpb24uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvY29tcG9uZW50cy9tYXAtYWN0aW9uL21hcC1hY3Rpb24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERUk7RUFDRSxpQkFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL21hcC1hY3Rpb24vbWFwLWFjdGlvbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAuZGFzaGJvYXJkLWFjdGlvbi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDUwcHg7XG5cbiAgICAmIGFwcC11c2VyLXNlbGVjdGlvbntcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QgLmRhc2hib2FyZC1hY3Rpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuOmhvc3QgLmRhc2hib2FyZC1hY3Rpb24tY29udGFpbmVyIGFwcC11c2VyLXNlbGVjdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/map-action/map-action.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/map-action/map-action.component.ts ***!
  \********************************************************************************/
/*! exports provided: MapActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapActionComponent", function() { return MapActionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapActionComponent = /** @class */ (function () {
    function MapActionComponent() {
        this.showUsersSelection = false;
        this.disabled = false;
        this.userList = [];
        this.onNewLocationAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MapActionComponent.prototype.onAddLocation = function () {
        this.onNewLocationAction.emit();
    };
    MapActionComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapActionComponent.prototype, "showUsersSelection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapActionComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MapActionComponent.prototype, "userList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapActionComponent.prototype, "onNewLocationAction", void 0);
    MapActionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map-action',
            template: __webpack_require__(/*! ./map-action.component.html */ "./src/app/layout/dashboard/components/map-action/map-action.component.html"),
            styles: [__webpack_require__(/*! ./map-action.component.less */ "./src/app/layout/dashboard/components/map-action/map-action.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapActionComponent);
    return MapActionComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/user-selection/user-selection.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/user-selection/user-selection.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-selection-container\">\n  <mat-form-field>\n    <mat-label>Select User</mat-label>\n    <mat-select (selectionChange)=\"onUserChange($event)\">\n      <mat-option *ngFor=\"let user of userList\" [value]=\"user._id\">\n        {{user.firstName}}  {{user.lastName}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/user-selection/user-selection.component.less":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/user-selection/user-selection.component.less ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvY29tcG9uZW50cy91c2VyLXNlbGVjdGlvbi91c2VyLXNlbGVjdGlvbi5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/user-selection/user-selection.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/user-selection/user-selection.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UserSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSelectionComponent", function() { return UserSelectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/service/user.service */ "./src/app/core/service/user.service.ts");



var UserSelectionComponent = /** @class */ (function () {
    function UserSelectionComponent(userSrv) {
        this.userSrv = userSrv;
    }
    UserSelectionComponent.prototype.ngOnInit = function () {
    };
    UserSelectionComponent.prototype.onUserChange = function ($event) {
        this.userSrv.setSelectedUser($event.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], UserSelectionComponent.prototype, "userList", void 0);
    UserSelectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-selection',
            template: __webpack_require__(/*! ./user-selection.component.html */ "./src/app/layout/dashboard/components/user-selection/user-selection.component.html"),
            styles: [__webpack_require__(/*! ./user-selection.component.less */ "./src/app/layout/dashboard/components/user-selection/user-selection.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserSelectionComponent);
    return UserSelectionComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/container/dashboard.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/dashboard/container/dashboard.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-container\">\n  <app-progress-bar [isLoading]=\"(isLoading$ | async)\"></app-progress-bar>\n  <mat-card>\n    <app-map-action [disabled]=\"authSrv.getUserId() !== selectedUserId\" [userList]=\"(userList$ | async)\" [showUsersSelection]=\"userSrv.isAdminUser()\"\n                    (onNewLocationAction)=\"onAddLocation()\"></app-map-action>\n  </mat-card>\n  <agm-map #gm [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n    <div *ngFor=\"let marker of (userData)?.fkLocation\" class=\"dashboard-marker\">\n      <agm-marker [animation]=\"2\"\n                  [label]=\"{fontSize: '16px', text:mapSrv.getLocationProperty(marker,'label'), id:mapSrv.getLocationProperty(marker,'_id')}\"\n                  [iconUrl]=\"marker.iconUrl\"\n                  [latitude]=\"marker.latitude\" [longitude]=\"marker.longitude\"\n                  (markerClick)=\"onMarkerClicked($event)\"\n                  (mouseOver)=\"onMouseOver(infoWindow,gm)\"\n                  (mouseOut)=\"onMouseOut(infoWindow, $event)\">\n        <agm-info-window [disableAutoPan]=\"false\" #infoWindow>\n          <div class=\"gmap-info-window-container\">\n            {{marker.info}}\n          </div>\n\n        </agm-info-window>\n      </agm-marker>\n    </div>\n  </agm-map>\n\n</div>\n"

/***/ }),

/***/ "./src/app/layout/dashboard/container/dashboard.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/layout/dashboard/container/dashboard.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\nagm-map {\n  height: 100%;\n}\n:host .dashboard-container {\n  width: 100%;\n  height: 100%;\n  margin-top: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb250YWluZXIvZGFzaGJvYXJkLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL2FzYWZsZXZ5L3Byb2plY3Qvd2ludGVnb19wcm9qZWN0L3dpbnRlZ28tbWFwLWZyb250L3NyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb250YWluZXIvZGFzaGJvYXJkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7QUNHWDtFQUNFLFlBQUE7QURERjtBQ0lBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FESEoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZGFzaGJvYXJkL2NvbnRhaW5lci9kYXNoYm9hcmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb2xvcnMgKi9cbmFnbS1tYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuZGFzaGJvYXJkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzXCI7XG5cblxuYWdtLW1hcCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuOmhvc3Qge1xuICAuZGFzaGJvYXJkLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/dashboard/container/dashboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/dashboard/container/dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _store_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../store/users */ "./src/app/store/users/index.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @w11k/ngx-componentdestroyed */ "./node_modules/@w11k/ngx-componentdestroyed/dist/es2015/index.js");
/* harmony import */ var _marker_edit_service_marker_edit_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../marker-edit/service/marker-edit.service */ "./src/app/layout/marker-edit/service/marker-edit.service.ts");
/* harmony import */ var _service_map_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/map.service */ "./src/app/layout/service/map.service.ts");
/* harmony import */ var _core_auth_auth_srv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/auth/auth.srv */ "./src/app/core/auth/auth.srv.ts");
/* harmony import */ var _core_service_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/service/user.service */ "./src/app/core/service/user.service.ts");











var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(store, authSrv, actions$, userSrv, markerDlgSrv, mapSrv) {
        var _this = this;
        this.store = store;
        this.authSrv = authSrv;
        this.actions$ = actions$;
        this.userSrv = userSrv;
        this.markerDlgSrv = markerDlgSrv;
        this.mapSrv = mapSrv;
        this.map = null;
        this.zoom = 6;
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.selectedUserId = this.authSrv.getUserId();
        this.userData$.pipe(Object(_w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_6__["untilComponentDestroyed"])(this)).subscribe(function (resData) {
            _this.userData = resData;
            if (_this.userData && _this.userData.fkLocation && _this.userData.fkLocation.length) {
                var lat = _this.userData.fkLocation[0].latitude;
                var log = _this.userData.fkLocation[0].longitude;
                _this.mapSrv.centerMapAroundMarker(_this.map, lat, log);
            }
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actions$.pipe(Object(_w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_6__["untilComponentDestroyed"])(this), Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["ofActionSuccessful"])(_store_users__WEBPACK_IMPORTED_MODULE_3__["USER_UPDATE_LOCATION_SUCCESS"])).subscribe(function (location) {
            _this.mapSrv.centerMapAroundMarker(_this.map, location.latitude, location.longitude);
        });
        this.userSrv.getSelectedUser().pipe(Object(_w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_6__["untilComponentDestroyed"])(this)).subscribe(function (userId) {
            _this.selectedUserId = userId;
            _this.store.dispatch(new _store_users__WEBPACK_IMPORTED_MODULE_3__["UsersDetails"](userId));
        });
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.gm.mapReady.subscribe(function (map) {
            _this.map = map;
            _this.store.dispatch(new _store_users__WEBPACK_IMPORTED_MODULE_3__["UsersDetails"]());
        });
    };
    DashboardComponent.prototype.onMarkerClicked = function (marker) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var markerData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        markerData = this.userData.fkLocation.filter(function (loc) {
                            return loc._id === marker.label['id'];
                        })[0];
                        return [4 /*yield*/, this.mapSrv.centerMapAroundMarker(this.map, marker.latitude, marker.longitude)];
                    case 1:
                        _a.sent();
                        this.markerDlgSrv.openMarkerEditDialog({ markerData: markerData, userId: this.authSrv.getUserId() });
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.onAddLocation = function () {
        var tempLocation = this.mapSrv.createLocation();
        this.markerDlgSrv.openMarkerEditDialog({ markerData: tempLocation, userId: this.authSrv.getUserId() });
    };
    DashboardComponent.prototype.onMouseOver = function (infoWindow, gm) {
        if (gm.lastOpen != null) {
            gm.lastOpen.close();
        }
        gm.lastOpen = infoWindow;
        infoWindow.open();
    };
    DashboardComponent.prototype.onMouseOut = function (infoWindow, $event) {
        infoWindow.close();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_users__WEBPACK_IMPORTED_MODULE_3__["UsersState"].isLoading),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], DashboardComponent.prototype, "isLoading$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_users__WEBPACK_IMPORTED_MODULE_3__["UsersState"].getUsersDetails),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], DashboardComponent.prototype, "userData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_users__WEBPACK_IMPORTED_MODULE_3__["UsersState"].getAllUsers),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], DashboardComponent.prototype, "userList$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMap"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardComponent.prototype, "gm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmInfoWindow"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardComponent.prototype, "infoWindow", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/layout/dashboard/container/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.less */ "./src/app/layout/dashboard/container/dashboard.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"], _core_auth_auth_srv__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Actions"], _core_service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
            _marker_edit_service_marker_edit_service__WEBPACK_IMPORTED_MODULE_7__["MarkerEditDialogService"], _service_map_service__WEBPACK_IMPORTED_MODULE_8__["MapService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _container_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/dashboard.component */ "./src/app/layout/dashboard/container/dashboard.component.ts");




var routes = [
    { path: '', component: _container_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.module.ts ***!
  \******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _container_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container/dashboard.component */ "./src/app/layout/dashboard/container/dashboard.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/layout/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _components_map_action_map_action_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/map-action/map-action.component */ "./src/app/layout/dashboard/components/map-action/map-action.component.ts");
/* harmony import */ var _components_user_selection_user_selection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user-selection/user-selection.component */ "./src/app/layout/dashboard/components/user-selection/user-selection.component.ts");









var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_container_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _components_map_action_map_action_component__WEBPACK_IMPORTED_MODULE_7__["MapActionComponent"], _components_user_selection_user_selection_component__WEBPACK_IMPORTED_MODULE_8__["UserSelectionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCJO8-vFe0zqQaSrzIqcpftDiwJYbQB2bQ'
                    //apiKey: 'AIzaSyDEhMCTsKcRrtSy59Nmn4PgCPxE8DTurSY'
                })
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map