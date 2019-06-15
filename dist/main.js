(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"./src/app/layout/dashboard/dashboard.module.ts",
		"default~dashboard-dashboard-module~layout-layout-module",
		"dashboard-dashboard-module"
	],
	"./layout/layout.module": [
		"./src/app/layout/layout.module.ts",
		"default~dashboard-dashboard-module~layout-layout-module",
		"layout-layout-module"
	],
	"./loggerInterseptor/loggerInterseptor.module": [
		"./src/app/layout/loggerInterseptor/loggerInterseptor.module.ts",
		"loggerInterseptor-loggerInterseptor-module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"default~login-login-module~register-register-module",
		"login-login-module"
	],
	"./register/register.module": [
		"./src/app/register/register.module.ts",
		"default~login-login-module~register-register-module",
		"register-register-module"
	],
	"src/app/layout/dashboard/dashboard.module": [
		"./src/app/layout/dashboard/dashboard.module.ts",
		"default~dashboard-dashboard-module~layout-layout-module",
		"dashboard-dashboard-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_auth_guard_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/auth/auth-guard.srv */ "./src/app/core/auth/auth-guard.srv.ts");
/* harmony import */ var _core_auth_auth_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/auth/auth.srv */ "./src/app/core/auth/auth.srv.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");






var routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [_core_auth_auth_guard_srv__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterModule' },
    { path: 'dashbaord', loadChildren: 'src/app/layout/dashboard/dashboard.module#DashboardModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_core_auth_auth_guard_srv__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _core_auth_auth_srv__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wintego-app-container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  margin-left: auto;\n  margin-right: auto;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2FmbGV2eS9wcm9qZWN0L3dpbnRlZ29fcHJvamVjdC93aW50ZWdvLW1hcC1mcm9udC9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG59XG4iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "./node_modules/@ngxs/devtools-plugin/fesm5/ngxs-devtools-plugin.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _store_users_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/users/state */ "./src/app/store/users/state/index.ts");
/* harmony import */ var _core_Interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/Interceptor/token.interceptor */ "./src/app/core/Interceptor/token.interceptor.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forRoot([_store_users_state__WEBPACK_IMPORTED_MODULE_10__["UsersState"]]),
                _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_7__["NgxsReduxDevtoolsPluginModule"].forRoot({
                    name: 'NGXS Wintego Store',
                    disabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
                }),
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                    useClass: _core_Interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptor"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/Interceptor/token.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/Interceptor/token.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_srv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.srv */ "./src/app/core/auth/auth.srv.ts");



var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(authService) {
        this.authService = authService;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        if (!request.url.match(/signIn/g) && this.authService.isLoggedIn()) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + this.authService.getAccessToken()
                }
            });
        }
        return next.handle(request);
    };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_srv__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/core/auth/auth-guard.srv.ts":
/*!*********************************************!*\
  !*** ./src/app/core/auth/auth-guard.srv.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.srv */ "./src/app/core/auth/auth.srv.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authSrv) {
        this.router = router;
        this.authSrv = authSrv;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authSrv.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_srv__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.srv.ts":
/*!***************************************!*\
  !*** ./src/app/core/auth/auth.srv.ts ***!
  \***************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/message.service */ "./src/app/core/service/message.service.ts");








var AuthService = /** @class */ (function () {
    function AuthService(http, router, messageSrv) {
        this.http = http;
        this.router = router;
        this.messageSrv = messageSrv;
        this.loginUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/auth/signIn";
    }
    AuthService.prototype.ngOnInit = function () {
    };
    AuthService.prototype.login = function (userData) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        return this.http
            .post(this.loginUrl, "email=" + encodeURIComponent(userData.email) + "&password=" + encodeURIComponent(userData.password), httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) { return _this.setCurrentUser(res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.messageSrv.showMessage('Login fail');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }));
    };
    AuthService.prototype.logout = function () {
        return this.removeUserToken();
        this.router.navigate(['/']);
    };
    AuthService.prototype.removeUserToken = function () {
        localStorage.removeItem('currentUser');
    };
    AuthService.prototype.getAccessToken = function () {
        if (this.isLoggedIn()) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            return currentUser.accessToken;
        }
        return null;
    };
    AuthService.prototype.getUserId = function () {
        if (this.isLoggedIn()) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            return currentUser.userId;
        }
        return null;
    };
    AuthService.prototype.getUserType = function () {
        if (this.isLoggedIn()) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            return currentUser.role;
        }
        return null;
    };
    AuthService.prototype.isLoggedIn = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser')) || false;
        return currentUser && currentUser.accessToken != null;
    };
    AuthService.prototype.setCurrentUser = function (authRes) {
        localStorage.setItem('currentUser', JSON.stringify(authRes));
    };
    AuthService.prototype.getCurrentUser = function () {
        if (this.isLoggedIn()) {
            return JSON.parse(localStorage.getItem('currentUser'));
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/service/message.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/service/message.service.ts ***!
  \*************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MessageService = /** @class */ (function () {
    function MessageService(_snackBar) {
        this._snackBar = _snackBar;
    }
    MessageService.prototype.showMessage = function (message, action, config) {
        if (action === void 0) { action = '<--'; }
        if (config === void 0) { config = {
            duration: 4500,
            horizontalPosition: 'center',
            verticalPosition: 'bottom', panelClass: 'map-message'
        }; }
        this._snackBar.open(message, action, config);
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/core/service/user.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/service/user.service.ts ***!
  \**********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_auth_srv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.srv */ "./src/app/core/auth/auth.srv.ts");
/* harmony import */ var _model_auth_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/auth.model */ "./src/app/model/auth.model.ts");








var UserService = /** @class */ (function () {
    function UserService(http, authSrv) {
        this.http = http;
        this.authSrv = authSrv;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseApiUrl;
        this.usersUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseApiUrl + "/users";
        this.selectedUser = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    UserService.prototype.getUsers = function (selectedUserId) {
        var userId = selectedUserId || this.authSrv.getUserId();
        return this.http
            .get(this.apiUrl + "/users/getUserData/" + userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.json()); }));
    };
    UserService.prototype.registerUser = function (userData) {
        return this.http
            .post(this.usersUrl + "/register", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, userData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.json()); }));
    };
    UserService.prototype.updateUserLocation = function (userId, location) {
        var updateLocationDto = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ userId: userId }, location);
        return this.http
            .post(this.apiUrl + "/users/updateOrInsertLocation", { updateLocationDto: updateLocationDto })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.json()); }));
    };
    UserService.prototype.getAllUsers = function () {
        return this.http
            .get(this.apiUrl + "/users/getAllUsers")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.json()); }));
    };
    UserService.prototype.deleteUserLocation = function (params) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('locationId', params.locationId)
            .set('userId', params.userId);
        var options = { params: httpParams };
        return this.http
            .delete(this.apiUrl + "/users/deleteLocation", options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.json()); }));
    };
    UserService.prototype.setSelectedUser = function (userId) {
        this.selectedUser.next(userId);
    };
    UserService.prototype.getSelectedUser = function () {
        return this.selectedUser;
    };
    UserService.prototype.isAdminUser = function () {
        return this.authSrv.getUserType() === _model_auth_model__WEBPACK_IMPORTED_MODULE_7__["UserTypeModel"].Admin;
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_auth_srv__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/layout/components/app-progras-bar/app-progress-bar.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/components/app-progras-bar/app-progress-bar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoading\" class=\"art-top-progress-bar\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <div class=\"art-top-progress-bar__container\">\n    <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/layout/components/app-progras-bar/app-progress-bar.component.less":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/components/app-progras-bar/app-progress-bar.component.less ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n:host ::ng-deep .mat-progress-bar-fill::after {\n  background-color: #01d3b9;\n}\n:host ::ng-deep .mat-progress-bar-buffer {\n  background: #E4E8EB;\n}\n:host ::ng-deep .mat-progress-bar {\n  border-radius: 2px;\n}\n.art-top-progress-bar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 57px;\n  width: 100%;\n  left: 0px;\n  z-index: 999999999999;\n}\n.art-top-progress-bar .art-top-progress-bar__container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvYXBwLXByb2dyYXMtYmFyL2FwcC1wcm9ncmVzcy1iYXIuY29tcG9uZW50Lmxlc3MiLCIvVXNlcnMvYXNhZmxldnkvcHJvamVjdC93aW50ZWdvX3Byb2plY3Qvd2ludGVnby1tYXAtZnJvbnQvc3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9hcHAtcHJvZ3Jhcy1iYXIvYXBwLXByb2dyZXNzLWJhci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXO0FDRVg7RUFHSSx5QkFBQTtBREZKO0FDREE7RUFPSSxtQkFBQTtBREhKO0FDSkE7RUFXSSxrQkFBQTtBREpKO0FDWUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBRFZGO0FDRUE7RUFXSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FEVkoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9hcHAtcHJvZ3Jhcy1iYXIvYXBwLXByb2dyZXNzLWJhci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbG9ycyAqL1xuOmhvc3QgOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxZDNiOTtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICBiYWNrZ3JvdW5kOiAjRTRFOEVCO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmFydC10b3AtcHJvZ3Jlc3MtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1N3B4O1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiA5OTk5OTk5OTk5OTk7XG59XG4uYXJ0LXRvcC1wcm9ncmVzcy1iYXIgLmFydC10b3AtcHJvZ3Jlc3MtYmFyX19jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzJztcblxuOmhvc3Qge1xuXG4gIDo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHNlY29uZGFyeS1wcmltYXJ5LWNvbG9yO1xuICB9XG5cbiAgOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgYmFja2dyb3VuZDogI0U0RThFQjtcbiAgfVxuXG4gIDo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhciB7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB9XG5cbn1cblxuXG5cblxuLmFydC10b3AtcHJvZ3Jlc3MtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1N3B4O1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiA5OTk5OTk5OTk5OTk7XG5cbiAgLmFydC10b3AtcHJvZ3Jlc3MtYmFyX19jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG5cblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/components/app-progras-bar/app-progress-bar.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/components/app-progras-bar/app-progress-bar.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this.isLoading = false;
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProgressBarComponent.prototype, "isLoading", void 0);
    ProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-progress-bar',
            template: __webpack_require__(/*! ./app-progress-bar.component.html */ "./src/app/layout/components/app-progras-bar/app-progress-bar.component.html"),
            styles: [__webpack_require__(/*! ./app-progress-bar.component.less */ "./src/app/layout/components/app-progras-bar/app-progress-bar.component.less")]
        })
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());



/***/ }),

/***/ "./src/app/model/auth.model.ts":
/*!*************************************!*\
  !*** ./src/app/model/auth.model.ts ***!
  \*************************************/
/*! exports provided: UserTypeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTypeModel", function() { return UserTypeModel; });
var UserTypeModel;
(function (UserTypeModel) {
    UserTypeModel[UserTypeModel["User"] = 0] = "User";
    UserTypeModel[UserTypeModel["Admin"] = 1] = "Admin";
})(UserTypeModel || (UserTypeModel = {}));


/***/ }),

/***/ "./src/app/shared/capitalize.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/capitalize.pipe.ts ***!
  \*******************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    };
    CapitalizePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'capitalize' })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./capitalize.pipe */ "./src/app/shared/capitalize.pipe.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _core_auth_auth_srv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/auth/auth.srv */ "./src/app/core/auth/auth.srv.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_openlayers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-openlayers */ "./node_modules/ngx-openlayers/dist/index.js");
/* harmony import */ var ngx_openlayers__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_openlayers__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _layout_components_app_progras_bar_app_progress_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layout/components/app-progras-bar/app-progress-bar.component */ "./src/app/layout/components/app-progras-bar/app-progress-bar.component.ts");










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_capitalize_pipe__WEBPACK_IMPORTED_MODULE_3__["CapitalizePipe"], _layout_components_app_progras_bar_app_progress_bar_component__WEBPACK_IMPORTED_MODULE_9__["ProgressBarComponent"]],
            providers: [
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsAPIWrapper"], _core_auth_auth_srv__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_SNACK_BAR_DEFAULT_OPTIONS"], useValue: { duration: 2500 } }
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCJO8-vFe0zqQaSrzIqcpftDiwJYbQB2bQ'
                })
            ],
            exports: [
                _layout_components_app_progras_bar_app_progress_bar_component__WEBPACK_IMPORTED_MODULE_9__["ProgressBarComponent"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                ngx_openlayers__WEBPACK_IMPORTED_MODULE_8__["AngularOpenlayersModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _capitalize_pipe__WEBPACK_IMPORTED_MODULE_3__["CapitalizePipe"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/store/users/actions/index.ts":
/*!**********************************************!*\
  !*** ./src/app/store/users/actions/index.ts ***!
  \**********************************************/
/*! exports provided: CLEAR_USER_DATA, USER_DETAILS, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, USER_UPDATE_LOCATION, USER_UPDATE_LOCATION_SUCCESS, USER_UPDATE_LOCATION_FAIL, GET_ALL_USER, GET_ALL_USER_SUCCESS, GET_ALL_USER_FAIL, DELETE_USER_LOCATION, DELETE_USER_LOCATION_SUCCESS, DELETE_USER_LOCATION_FAIL, ClearUserData, UsersDetails, UsersDetailsSuccess, UsersDetailsFail, UserInsertOrUpdateLocation, UserInsertOrUpdateLocationSuccess, UserUpdateLocationFail, GetAllUsers, GetAllUsersSuccess, GetAllUsersFail, DeleteUserLocation, DeleteUserLocationSuccess, DeleteUserLocationFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _users_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.action */ "./src/app/store/users/actions/users.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLEAR_USER_DATA", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["CLEAR_USER_DATA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USER_DETAILS", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["USER_DETAILS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USER_DETAILS_SUCCESS", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["USER_DETAILS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USER_DETAILS_FAIL", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["USER_DETAILS_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USER_UPDATE_LOCATION", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["USER_UPDATE_LOCATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USER_UPDATE_LOCATION_SUCCESS", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["USER_UPDATE_LOCATION_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USER_UPDATE_LOCATION_FAIL", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["USER_UPDATE_LOCATION_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_USER", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_USER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_USER_SUCCESS", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_USER_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_USER_FAIL", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_USER_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_USER_LOCATION", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["DELETE_USER_LOCATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_USER_LOCATION_SUCCESS", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["DELETE_USER_LOCATION_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_USER_LOCATION_FAIL", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["DELETE_USER_LOCATION_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClearUserData", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["ClearUserData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersDetails", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["UsersDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersDetailsSuccess", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["UsersDetailsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersDetailsFail", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["UsersDetailsFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserInsertOrUpdateLocation", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["UserInsertOrUpdateLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserInsertOrUpdateLocationSuccess", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["UserInsertOrUpdateLocationSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserUpdateLocationFail", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["UserUpdateLocationFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetAllUsers", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["GetAllUsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetAllUsersSuccess", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["GetAllUsersSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetAllUsersFail", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["GetAllUsersFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteUserLocation", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["DeleteUserLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteUserLocationSuccess", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["DeleteUserLocationSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteUserLocationFail", function() { return _users_action__WEBPACK_IMPORTED_MODULE_0__["DeleteUserLocationFail"]; });




/***/ }),

/***/ "./src/app/store/users/actions/users.action.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/users/actions/users.action.ts ***!
  \*****************************************************/
/*! exports provided: CLEAR_USER_DATA, USER_DETAILS, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, USER_UPDATE_LOCATION, USER_UPDATE_LOCATION_SUCCESS, USER_UPDATE_LOCATION_FAIL, GET_ALL_USER, GET_ALL_USER_SUCCESS, GET_ALL_USER_FAIL, DELETE_USER_LOCATION, DELETE_USER_LOCATION_SUCCESS, DELETE_USER_LOCATION_FAIL, ClearUserData, UsersDetails, UsersDetailsSuccess, UsersDetailsFail, UserInsertOrUpdateLocation, UserInsertOrUpdateLocationSuccess, UserUpdateLocationFail, GetAllUsers, GetAllUsersSuccess, GetAllUsersFail, DeleteUserLocation, DeleteUserLocationSuccess, DeleteUserLocationFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_USER_DATA", function() { return CLEAR_USER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_DETAILS", function() { return USER_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_DETAILS_SUCCESS", function() { return USER_DETAILS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_DETAILS_FAIL", function() { return USER_DETAILS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_UPDATE_LOCATION", function() { return USER_UPDATE_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_UPDATE_LOCATION_SUCCESS", function() { return USER_UPDATE_LOCATION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_UPDATE_LOCATION_FAIL", function() { return USER_UPDATE_LOCATION_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_USER", function() { return GET_ALL_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_USER_SUCCESS", function() { return GET_ALL_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_USER_FAIL", function() { return GET_ALL_USER_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_USER_LOCATION", function() { return DELETE_USER_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_USER_LOCATION_SUCCESS", function() { return DELETE_USER_LOCATION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_USER_LOCATION_FAIL", function() { return DELETE_USER_LOCATION_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearUserData", function() { return ClearUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersDetails", function() { return UsersDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersDetailsSuccess", function() { return UsersDetailsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersDetailsFail", function() { return UsersDetailsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInsertOrUpdateLocation", function() { return UserInsertOrUpdateLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInsertOrUpdateLocationSuccess", function() { return UserInsertOrUpdateLocationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUpdateLocationFail", function() { return UserUpdateLocationFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllUsers", function() { return GetAllUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllUsersSuccess", function() { return GetAllUsersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllUsersFail", function() { return GetAllUsersFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserLocation", function() { return DeleteUserLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserLocationSuccess", function() { return DeleteUserLocationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserLocationFail", function() { return DeleteUserLocationFail; });
var CLEAR_USER_DATA = '[USER] CLEAR_USER_DATA';
var USER_DETAILS = '[USER] USER_DETAILS';
var USER_DETAILS_SUCCESS = '[USER] USER_DETAILS_SUCCESS';
var USER_DETAILS_FAIL = '[USER] USER_DETAILS_FAIL';
var USER_UPDATE_LOCATION = '[USER] USER_UPDATE_LOCATION';
var USER_UPDATE_LOCATION_SUCCESS = '[USER] USER_UPDATE_LOCATION_SUCCESS';
var USER_UPDATE_LOCATION_FAIL = '[USER] USER_UPDATE_LOCATION_FAIL';
var GET_ALL_USER = '[USER] GET_ALL_USER';
var GET_ALL_USER_SUCCESS = '[USER] GET_ALL_USER_SUCCESS';
var GET_ALL_USER_FAIL = '[USER] GET_ALL_USER_FAIL';
var DELETE_USER_LOCATION = '[USER] DELETE_USER_LOCATION';
var DELETE_USER_LOCATION_SUCCESS = '[USER] DELETE_USER_LOCATION_SUCCESS';
var DELETE_USER_LOCATION_FAIL = '[USER] DELETE_USER_LOCATION_FAIL';
var ClearUserData = /** @class */ (function () {
    function ClearUserData() {
    }
    ClearUserData.type = CLEAR_USER_DATA;
    return ClearUserData;
}());

var UsersDetails = /** @class */ (function () {
    function UsersDetails(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
    }
    UsersDetails.type = USER_DETAILS;
    return UsersDetails;
}());

var UsersDetailsSuccess = /** @class */ (function () {
    function UsersDetailsSuccess(payload) {
        this.payload = payload;
    }
    UsersDetailsSuccess.type = USER_DETAILS_SUCCESS;
    return UsersDetailsSuccess;
}());

var UsersDetailsFail = /** @class */ (function () {
    function UsersDetailsFail(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
    }
    UsersDetailsFail.type = USER_DETAILS_FAIL;
    return UsersDetailsFail;
}());

var UserInsertOrUpdateLocation = /** @class */ (function () {
    function UserInsertOrUpdateLocation(payload) {
        this.payload = payload;
    }
    UserInsertOrUpdateLocation.type = USER_UPDATE_LOCATION;
    return UserInsertOrUpdateLocation;
}());

var UserInsertOrUpdateLocationSuccess = /** @class */ (function () {
    function UserInsertOrUpdateLocationSuccess(payload) {
        this.payload = payload;
    }
    UserInsertOrUpdateLocationSuccess.type = USER_UPDATE_LOCATION_SUCCESS;
    return UserInsertOrUpdateLocationSuccess;
}());

var UserUpdateLocationFail = /** @class */ (function () {
    function UserUpdateLocationFail(payload) {
        this.payload = payload;
    }
    UserUpdateLocationFail.type = USER_UPDATE_LOCATION_FAIL;
    return UserUpdateLocationFail;
}());

var GetAllUsers = /** @class */ (function () {
    function GetAllUsers() {
    }
    GetAllUsers.type = GET_ALL_USER;
    return GetAllUsers;
}());

var GetAllUsersSuccess = /** @class */ (function () {
    function GetAllUsersSuccess(payload) {
        this.payload = payload;
    }
    GetAllUsersSuccess.type = GET_ALL_USER_SUCCESS;
    return GetAllUsersSuccess;
}());

var GetAllUsersFail = /** @class */ (function () {
    function GetAllUsersFail(payload) {
        this.payload = payload;
    }
    GetAllUsersFail.type = GET_ALL_USER_FAIL;
    return GetAllUsersFail;
}());

var DeleteUserLocation = /** @class */ (function () {
    function DeleteUserLocation(payload) {
        this.payload = payload;
    }
    DeleteUserLocation.type = DELETE_USER_LOCATION;
    return DeleteUserLocation;
}());

var DeleteUserLocationSuccess = /** @class */ (function () {
    function DeleteUserLocationSuccess(payload) {
        this.payload = payload;
    }
    DeleteUserLocationSuccess.type = DELETE_USER_LOCATION_SUCCESS;
    return DeleteUserLocationSuccess;
}());

var DeleteUserLocationFail = /** @class */ (function () {
    function DeleteUserLocationFail(payload) {
        this.payload = payload;
    }
    DeleteUserLocationFail.type = DELETE_USER_LOCATION_FAIL;
    return DeleteUserLocationFail;
}());



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




/***/ }),

/***/ "./src/app/store/users/state/users.state.ts":
/*!**************************************************!*\
  !*** ./src/app/store/users/state/users.state.ts ***!
  \**************************************************/
/*! exports provided: UsersListStateModel, UsersState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListStateModel", function() { return UsersListStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersState", function() { return UsersState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/app/store/users/actions/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/service/user.service */ "./src/app/core/service/user.service.ts");
/* harmony import */ var _model_auth_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../model/auth.model */ "./src/app/model/auth.model.ts");
/* harmony import */ var _core_service_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/service/message.service */ "./src/app/core/service/message.service.ts");








var UsersListStateModel = /** @class */ (function () {
    function UsersListStateModel() {
    }
    return UsersListStateModel;
}());

var UsersState = /** @class */ (function () {
    function UsersState(userSrv, messageSrv) {
        this.userSrv = userSrv;
        this.messageSrv = messageSrv;
    }
    UsersState.getUsersDetails = function (state) {
        return state.data;
    };
    UsersState.getAllUsers = function (state) {
        return state.allUsers;
    };
    UsersState.isLoading = function (state) {
        return state.loading;
    };
    UsersState.prototype.ClearUserData = function (_a) {
        var patchState = _a.patchState;
        patchState({
            data: null,
            allUsers: [],
            loaded: false,
            loading: false,
        });
    };
    UsersState.prototype.UsersListDetails = function (_a, action) {
        var dispatch = _a.dispatch, patchState = _a.patchState;
        patchState({ loading: true });
        return this.userSrv.getUsers(action.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            dispatch(new _actions__WEBPACK_IMPORTED_MODULE_2__["UsersDetailsSuccess"](data));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(dispatch(new _actions__WEBPACK_IMPORTED_MODULE_2__["UsersDetailsFail"](error))); }));
    };
    UsersState.prototype.UsersListDetailsSuccess = function (_a, action) {
        var dispatch = _a.dispatch, patchState = _a.patchState;
        var data = action.payload;
        if (data.role === _model_auth_model__WEBPACK_IMPORTED_MODULE_6__["UserTypeModel"].Admin) {
            dispatch(new _actions__WEBPACK_IMPORTED_MODULE_2__["GetAllUsers"]());
        }
        patchState({
            data: data,
            loading: false,
            loaded: true
        });
    };
    UsersState.prototype.UsersListDetailsFail = function (_a) {
        var patchState = _a.patchState;
        this.messageSrv.showMessage('failed to load user detail');
        patchState({
            loading: false,
            loaded: false,
        });
    };
    UsersState.prototype.UserUpdateLocation = function (_a, action) {
        var dispatch = _a.dispatch, patchState = _a.patchState;
        patchState({ loading: true });
        var payload = action.payload;
        return this.userSrv.updateUserLocation(payload.userId, payload.location)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            dispatch(new _actions__WEBPACK_IMPORTED_MODULE_2__["UserInsertOrUpdateLocationSuccess"](data));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(dispatch(new _actions__WEBPACK_IMPORTED_MODULE_2__["UserUpdateLocationFail"](error))); }));
    };
    // tslint:disable-next-line:max-line-length
    UsersState.prototype.UserInsertOrUpdateLocationSuccess = function (_a, action) {
        var patchState = _a.patchState, getState = _a.getState;
        this.messageSrv.showMessage('update location data succeeded');
        var data = getState().data;
        var newLocation = data.fkLocation.filter(function (loc) {
            return loc._id === action.payload._id;
        });
        if (newLocation.length) {
            data = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data, newLocation);
        }
        else {
            data.fkLocation.push(action.payload);
        }
        patchState(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data, { loading: false, loaded: true }));
    };
    UsersState.prototype.UserUpdateLocationFail = function (_a) {
        var patchState = _a.patchState;
        this.messageSrv.showMessage('update location data failed');
        patchState({
            loading: false,
            loaded: false,
        });
    };
    UsersState.prototype.GetAllUsers = function (_a) {
        var dispatch = _a.dispatch, patchState = _a.patchState;
        patchState({ loading: true });
        return this.userSrv.getAllUsers()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            dispatch(new _actions__WEBPACK_IMPORTED_MODULE_2__["GetAllUsersSuccess"](data));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(dispatch(new _actions__WEBPACK_IMPORTED_MODULE_2__["UserUpdateLocationFail"](error))); }));
    };
    UsersState.prototype.GetAllUsersSuccess = function (_a, action) {
        var patchState = _a.patchState, getState = _a.getState;
        var allUserPayLoad = action.payload;
        patchState({
            allUsers: allUserPayLoad,
            loading: false,
            loaded: true
        });
    };
    UsersState.prototype.GetAllUsersFail = function (_a) {
        var patchState = _a.patchState;
        this.messageSrv.showMessage('get all users data failed');
        patchState({
            loading: false,
            loaded: false,
        });
    };
    UsersState.prototype.DeleteUserLocation = function (_a, action) {
        var dispatch = _a.dispatch, patchState = _a.patchState;
        patchState({ loading: true });
        return this.userSrv.deleteUserLocation(action.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            dispatch(new _actions__WEBPACK_IMPORTED_MODULE_2__["DeleteUserLocationSuccess"](data));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(dispatch(new _actions__WEBPACK_IMPORTED_MODULE_2__["DeleteUserLocationFail"](error))); }));
    };
    UsersState.prototype.DeleteUserLocationSuccess = function (_a, action) {
        var patchState = _a.patchState, getState = _a.getState;
        var data = getState().data;
        var location = action.payload;
        data.fkLocation = data.fkLocation.filter(function (ob) {
            return ob._id !== location._id;
        });
        patchState(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data, { loading: false, loaded: true }));
    };
    UsersState.prototype.DeleteUserLocationFail = function (_a) {
        var patchState = _a.patchState;
        this.messageSrv.showMessage('get all users data failed');
        patchState({
            loading: false,
            loaded: false,
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions__WEBPACK_IMPORTED_MODULE_2__["ClearUserData"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], UsersState.prototype, "ClearUserData", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions__WEBPACK_IMPORTED_MODULE_2__["UsersDetails"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions__WEBPACK_IMPORTED_MODULE_2__["UsersDetails"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], UsersState.prototype, "UsersListDetails", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions__WEBPACK_IMPORTED_MODULE_2__["UsersDetailsSuccess"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions__WEBPACK_IMPORTED_MODULE_2__["UsersDetailsSuccess"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], UsersState.prototype, "UsersListDetailsSuccess", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions__WEBPACK_IMPORTED_MODULE_2__["UsersDetailsFail"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], UsersState.prototype, "UsersListDetailsFail", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions__WEBPACK_IMPORTED_MODULE_2__["UserInsertOrUpdateLocation"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions__WEBPACK_IMPORTED_MODULE_2__["UserInsertOrUpdateLocation"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], UsersState.prototype, "UserUpdateLocation", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions__WEBPACK_IMPORTED_MODULE_2__["UserInsertOrUpdateLocationSuccess"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions__WEBPACK_IMPORTED_MODULE_2__["UserInsertOrUpdateLocationSuccess"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], UsersState.prototype, "UserInsertOrUpdateLocationSuccess", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions__WEBPACK_IMPORTED_MODULE_2__["UserUpdateLocationFail"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], UsersState.prototype, "UserUpdateLocationFail", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GetAllUsers"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], UsersState.prototype, "GetAllUsers", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GetAllUsersSuccess"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions__WEBPACK_IMPORTED_MODULE_2__["GetAllUsersSuccess"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], UsersState.prototype, "GetAllUsersSuccess", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GetAllUsersFail"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], UsersState.prototype, "GetAllUsersFail", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteUserLocation"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions__WEBPACK_IMPORTED_MODULE_2__["DeleteUserLocation"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], UsersState.prototype, "DeleteUserLocation", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteUserLocationSuccess"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions__WEBPACK_IMPORTED_MODULE_2__["DeleteUserLocationSuccess"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], UsersState.prototype, "DeleteUserLocationSuccess", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteUserLocationFail"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], UsersState.prototype, "DeleteUserLocationFail", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [UsersListStateModel]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Object)
    ], UsersState, "getUsersDetails", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [UsersListStateModel]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Array)
    ], UsersState, "getAllUsers", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [UsersListStateModel]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Boolean)
    ], UsersState, "isLoading", null);
    UsersState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
            name: 'usersState',
            defaults: {
                data: null,
                allUsers: [],
                loaded: false,
                loading: false,
            }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _core_service_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
    ], UsersState);
    return UsersState;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// export const environment = {
//   production: false,
//   baseUrl: 'http://localhost:3000',
//   baseApiUrl: 'http://localhost:3000/api'
// };
var environment = {
    production: true,
    baseUrl: 'https://wintego-map-backend.herokuapp.com',
    baseApiUrl: 'https://wintego-map-backend.herokuapp.com/api'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/asaflevy/project/wintego_project/wintego-map-front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map