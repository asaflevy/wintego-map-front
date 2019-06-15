(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/components/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar\">\n  <mat-nav-list>\n    <a [routerLinkActive]=\"'active'\" [routerLink]=\"['/dashboard']\" mat-list-item>\n      <mat-icon class=\"sidenav-icon\">home</mat-icon>\n      {{ 'Dashboard'  }}\n    </a>\n    <a  [routerLinkActive]=\"'active'\"  [routerLink]=\"['/logger']\" mat-list-item>\n      <mat-icon class=\"sidenav-icon\">assignment</mat-icon>\n      {{ 'Logger'  }}\n    </a>\n  </mat-nav-list>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.less":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n#sidebar {\n  width: 250px;\n  position: fixed;\n  top: 56px;\n  bottom: 0;\n  background: #222222;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24);\n  z-index: 999;\n  -ms-overflow-y: auto;\n  overflow-y: auto;\n}\n#sidebar .mat-list-item {\n  color: #00d3b9;\n}\n#sidebar .mat-nav-list {\n  width: 100%;\n}\n#sidebar .mat-nav-list .active {\n  background: #2b2b2b;\n}\n#sidebar .mat-nav-list a {\n  display: block;\n}\n#sidebar .mat-nav-list a .mat-icon {\n  margin-right: 15px;\n}\n@media screen and (max-width: 992px) {\n  #sidebar {\n    left: -250px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL2FzYWZsZXZ5L3Byb2plY3Qvd2ludGVnb19wcm9qZWN0L3dpbnRlZ28tbWFwLWZyb250L3NyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7QUNFWDtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QURBRjtBQ1RBO0VBWUksY0FBQTtBREFKO0FDWkE7RUFpQkksV0FBQTtBREZKO0FDZkE7RUFvQk0sbUJBQUE7QURGTjtBQ2xCQTtFQTRCTSxjQUFBO0FEUE47QUNyQkE7RUF5QlEsa0JBQUE7QUREUjtBQ1VBO0VBQ0U7SUFDRSxZQUFBO0VEUkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbG9ycyAqL1xuI3NpZGViYXIge1xuICB3aWR0aDogMjUwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1NnB4O1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICMyMjIyMjI7XG4gIGJveC1zaGFkb3c6IDNweCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICB6LWluZGV4OiA5OTk7XG4gIC1tcy1vdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuI3NpZGViYXIgLm1hdC1saXN0LWl0ZW0ge1xuICBjb2xvcjogIzAwZDNiOTtcbn1cbiNzaWRlYmFyIC5tYXQtbmF2LWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbiNzaWRlYmFyIC5tYXQtbmF2LWxpc3QgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMyYjJiMmI7XG59XG4jc2lkZWJhciAubWF0LW5hdi1saXN0IGEge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiNzaWRlYmFyIC5tYXQtbmF2LWxpc3QgYSAubWF0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAjc2lkZWJhciB7XG4gICAgbGVmdDogLTI1MHB4O1xuICB9XG59XG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzJztcblxuI3NpZGViYXIge1xuICB3aWR0aDogMjUwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1NnB4O1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IEBzZWNvbmRhcnktY29sb3I7XG4gIGJveC1zaGFkb3c6IDNweCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICB6LWluZGV4OiA5OTk7XG4gIC1tcy1vdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gIC5tYXQtbGlzdC1pdGVtIHtcbiAgICBjb2xvcjogQHByaW1hcnktY29sb3I7XG4gIH1cblxuXG4gIC5tYXQtbmF2LWxpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBAY29sb3ItZGFyay1ncmV5O1xuICAgIH1cblxuICAgIGEge1xuICAgICAgLm1hdC1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgfVxuXG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAjc2lkZWJhciB7XG4gICAgbGVmdDogLTI1MHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.showMenu = '';
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.less */ "./src/app/layout/components/sidebar/sidebar.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/topnav/topnav.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/topnav/topnav.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"fix-nav\" color=\"primary\">\n  <button (click)=\"toggleSidebar()\" class=\"visible-md\" mat-icon-button type=\"button\">\n    <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n  </button>\n  <div class=\"nav-brand\">\n    Wintego Map\n    <div class=\"user-name\">\n      {{this.user?.firstName}} {{this.user?.lastName}}\n    </div>\n  </div>\n\n  <span class=\"nav-spacer\"></span>\n  <form class=\"hidden-sm\" style=\"margin-left: 20px; margin-top: 5px\">\n    <span class=\"nav-spacer\"></span>\n    <a class=\"hidden-sm\" href=\"https://github.com/asaflevy/wintego-map-front\" mat-raised-button\n       style=\"margin-right: 10px\">\n      <mat-icon>cloud_download</mat-icon>\n      {{ 'Download Now' }}\n    </a>\n\n    <button (click)=\"onLoggedout()\" mat-icon-button>\n      <mat-icon>exit_to_app</mat-icon>\n    </button>\n  </form>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/layout/components/topnav/topnav.component.less":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/topnav/topnav.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 1000;\n}\n.nav-brand {\n  position: relative;\n  top: 1px;\n  width: 131px;\n  margin-left: 20px;\n}\n.nav-brand .user-name {\n  font-size: 12px;\n  position: relative;\n  bottom: 5px;\n  text-align: center;\n}\n.nav-spacer {\n  flex: 1 1 auto;\n}\n@media screen and (max-width: 992px) {\n  .visible-md {\n    display: block;\n  }\n}\n@media screen and (max-width: 768px) {\n  .visible-sm {\n    display: block;\n  }\n  .nav-brand {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 768px) {\n  .hidden-sm {\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2FmbGV2eS9wcm9qZWN0L3dpbnRlZ29fcHJvamVjdC93aW50ZWdvLW1hcC1mcm9udC9zcmMvYXBwL2xheW91dC9jb21wb25lbnRzL3RvcG5hdi90b3BuYXYuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL3RvcG5hdi90b3BuYXYuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7QUNDRjtBREVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQUY7QURKQTtFQU1JLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKO0FESUE7RUFDRSxjQUFBO0FDRkY7QURNQTtFQUNFO0lBQ0UsY0FBQTtFQ0pGO0FBQ0Y7QURPQTtFQUNFO0lBQ0UsY0FBQTtFQ0xGO0VEUUE7SUFDRSxXQUFBO0VDTkY7QUFDRjtBRFNBO0VBQ0U7SUFDRSxhQUFBO0VDUEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL3RvcG5hdi90b3BuYXYuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5uYXYtYnJhbmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xuICB3aWR0aDogMTMxcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAudXNlci1uYW1lIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG5cbi5uYXYtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnZpc2libGUtbWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC52aXNpYmxlLXNtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5uYXYtYnJhbmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oaWRkZW4tc20ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwMDtcbn1cbi5uYXYtYnJhbmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xuICB3aWR0aDogMTMxcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLm5hdi1icmFuZCAudXNlci1uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubmF2LXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnZpc2libGUtbWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudmlzaWJsZS1zbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLm5hdi1icmFuZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oaWRkZW4tc20ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/components/topnav/topnav.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/topnav/topnav.component.ts ***!
  \**************************************************************/
/*! exports provided: TopnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopnavComponent", function() { return TopnavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_auth_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/auth/auth.srv */ "./src/app/core/auth/auth.srv.ts");
/* harmony import */ var _store_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/users */ "./src/app/store/users/index.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");






var TopnavComponent = /** @class */ (function () {
    function TopnavComponent(router, authSrv, store) {
        var _this = this;
        this.router = router;
        this.authSrv = authSrv;
        this.store = store;
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] && window.innerWidth <= 992) {
                _this.toggleSidebar();
            }
        });
    }
    TopnavComponent.prototype.ngOnInit = function () {
        this.user = this.authSrv.getCurrentUser();
    };
    TopnavComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    TopnavComponent.prototype.onLoggedout = function () {
        this.store.dispatch(new _store_users__WEBPACK_IMPORTED_MODULE_4__["ClearUserData"]());
        this.authSrv.logout();
        this.router.navigate(['/login']);
    };
    TopnavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topnav',
            template: __webpack_require__(/*! ./topnav.component.html */ "./src/app/layout/components/topnav/topnav.component.html"),
            styles: [__webpack_require__(/*! ./topnav.component.less */ "./src/app/layout/components/topnav/topnav.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_auth_auth_srv__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], TopnavComponent);
    return TopnavComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");




var routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'logger',
                loadChildren: './loggerInterseptor/loggerInterseptor.module#LoggerInterseptorModule'
            },
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-nav></app-nav> -->\n<app-topnav></app-topnav>\n<app-sidebar></app-sidebar>\n<div class=\"main-container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/topnav/topnav.component */ "./src/app/layout/components/topnav/topnav.component.ts");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _marker_edit_marker_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./marker-edit/marker-edit.component */ "./src/app/layout/marker-edit/marker-edit.component.ts");
/* harmony import */ var _marker_edit_service_marker_edit_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./marker-edit/service/marker-edit.service */ "./src/app/layout/marker-edit/service/marker-edit.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");











var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            providers: [_marker_edit_service_marker_edit_service__WEBPACK_IMPORTED_MODULE_9__["MarkerEditDialogService"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__["LayoutRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            ],
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"], _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__["TopnavComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _marker_edit_marker_edit_component__WEBPACK_IMPORTED_MODULE_8__["MarkerEditComponent"]],
            entryComponents: [_marker_edit_marker_edit_component__WEBPACK_IMPORTED_MODULE_8__["MarkerEditComponent"]],
            exports: [_marker_edit_marker_edit_component__WEBPACK_IMPORTED_MODULE_8__["MarkerEditComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map