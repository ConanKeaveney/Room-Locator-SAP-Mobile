webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiPage = /** @class */ (function () {
    function ApiPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
    }
    ApiPage.prototype.getTime = function () {
        this.restProvider.getLuasTime();
        console.log('method called');
    };
    ApiPage.prototype.getTimeBus = function () {
        this.restProvider.getBusTime();
        console.log(' bus method called');
    };
    ApiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApiPage');
        this.getTime();
        this.getTimeBus();
    };
    ApiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-api',template:/*ion-inline-start:"C:\Users\I348462\Documents\Projects\roomlocator-deploy\Room Locator\src\pages\api\api.html"*/'<!--\n  Generated template for the ApiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Commute From Citywest</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="home">\n\n  <button ion-button color="secondary" id="getInfo" type="button" (click)="getTime()">Refresh Luas From Citywest</button>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <strong class="destination">\n            Station\n          </strong>\n           <div id="currentLuasA">Time</div>\n        </ion-item>\n\n        <ion-item>\n            <strong class="destination">\n              Station\n            </strong>\n            <div id="nextLuasA">Time</div>\n          </ion-item>\n\n          <ion-item>\n            <strong class="destination">\n              Station\n            </strong>\n            <div id="currentLuasB">Time</div>\n          </ion-item>\n\n         <!--<ion-item>\n            <strong class="destination">\n              Station\n            </strong>\n            <div id="nextLuasB">Time</div>\n          </ion-item>-->\n         \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <button ion-button color="secondary" id="getInfo" type="button" (click)="getTimeBus()">Refresh Bus From CityWest</button>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <strong>\n            <div class="nextBusDestination">Location</div>\n          </strong>\n           <div class="nextBusTime">Time</div>\n        </ion-item>\n        \n        <ion-item>\n            <strong>\n              <div class="nextBusDestination">Location</div>\n            </strong>\n             <div class="nextBusTime">Time</div>\n          </ion-item>\n        \n         \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\I348462\Documents\Projects\roomlocator-deploy\Room Locator\src\pages\api\api.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], ApiPage);
    return ApiPage;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/api/api.module": [
		282,
		3
	],
	"../pages/modal/modal.module": [
		283,
		0
	],
	"../pages/settings/settings.module": [
		284,
		2
	],
	"../pages/waterside/waterside.module": [
		285,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_api__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__api_api__["a" /* ApiPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\I348462\Documents\Projects\roomlocator-deploy\Room Locator\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Kingswood" tabIcon="home"></ion-tab>\n<!--  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>-->\n  <ion-tab [root]="tab3Root" tabTitle="Commute" tabIcon="alarm"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\I348462\Documents\Projects\roomlocator-deploy\Room Locator\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\I348462\Documents\Projects\roomlocator-deploy\Room Locator\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <strong>\n            App Name :\n          </strong>\n            SAPP\n        </ion-item>\n        <ion-item>\n            <strong>\n              Version :\n            </strong>\n            1.0.0\n          </ion-item>\n          <ion-item>\n            <strong>\n              Description :\n            </strong>\n               SAP App\n          </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\I348462\Documents\Projects\roomlocator-deploy\Room Locator\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.generateTopics();
    }
    HomePage.prototype.openModal = function (topic) {
        var myData = {
            name: topic
        };
        var myModal = this.modalCtrl.create('ModalPage', { data: myData });
        myModal.present();
    };
    HomePage.prototype.generateTopics = function () {
        this.topics = [
            'An Craobh Ruadh',
            'Aonghus Og',
            'Bran Agus Sieolaing',
            'Brugh Na Boinne',
            'Cu Chulainn',
            'Oisin',
            'Muirne',
            'Na Fianna',
            'Nas Na Riogh',
            'Nuada',
            'Setanta (Telepresence Room)',
            'Training Room One',
            'Training Room Two',
            'Canteen',
            'Human Resources',
            'Tuan Mac Carrel',
            'First Finger',
            'Middle Finger',
            'End Finger',
            'Cath Chnucha',
            'Lia Fail',
            'Gaoth Domhair',
            'Creidhne',
            'Grainne Mhaol',
            'Fionn MacCumahaill',
            'Mullach Ide',
            'An Tain',
            'Fir Blog',
            'Cormaic Mac Airt',
            'War Room',
            'Clan Chaoilte',
            'Teamhair',
            'An Bradan Freasa',
            'COL'
        ];
    };
    HomePage.prototype.getTopics = function (ev) {
        this.generateTopics();
        var serVal = ev.target.value;
        if (serVal && serVal.trim() != '') {
            this.topics = this.topics.filter(function (topic) {
                return (topic.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
            });
        }
    };
    HomePage.prototype.gotomap = function (topic) {
        console.log(topic);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\I348462\Documents\Projects\roomlocator-deploy\Room Locator\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Kingswood</ion-title>\n    \n\n\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="home">\n  <ion-searchbar (ionInput)="getTopics($event)" [showCancelButton]="shouldShowCancel" (ionCancel)="onCancel($event)"></ion-searchbar>\n \n  <ion-list>\n    <ion-item *ngFor="let topic of topics" (click)="openModal(topic)">\n      {{ topic }}\n    </ion-item>\n  </ion-list>\n  \n</ion-content>\n\n    \n\n'/*ion-inline-end:"C:\Users\I348462\Documents\Projects\roomlocator-deploy\Room Locator\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\I348462\Documents\Projects\roomlocator-deploy\Room Locator\src\pages\settings\settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Waterside</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\I348462\Documents\Projects\roomlocator-deploy\Room Locator\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatersidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the WatersidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WatersidePage = /** @class */ (function () {
    function WatersidePage(modalCtrl, navCtrl, navParams, restProvider) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.generateTopics();
    }
    WatersidePage.prototype.openModal = function (topic) {
        var myData = {
            name: topic
        };
        var myModal = this.modalCtrl.create('ModalPage', { data: myData });
        myModal.present();
    };
    WatersidePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WatersidePage');
    };
    WatersidePage.prototype.generateTopics = function () {
        this.topics = [];
    };
    WatersidePage.prototype.getTopics = function (ev) {
        this.generateTopics();
        var serVal = ev.target.value;
        if (serVal && serVal.trim() != '') {
            this.topics = this.topics.filter(function (topic) {
                return (topic.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
            });
        }
    };
    WatersidePage.prototype.gotomap = function (topic) {
        console.log(topic);
    };
    WatersidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-waterside',template:/*ion-inline-start:"C:\Users\I348462\Documents\Projects\roomlocator-deploy\Room Locator\src\pages\waterside\waterside.html"*/'<!--\n  Generated template for the WatersidePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Waterside</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding class="waterside">\n<ion-searchbar (ionInput)="getTopics($event)" [showCancelButton]="shouldShowCancel" (ionCancel)="onCancel($event)"></ion-searchbar>\n \n<ion-list>\n  <ion-item *ngFor="let topic of topics" (click)="openModal(topic)">\n    {{ topic }}\n  </ion-item>\n</ion-list>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\I348462\Documents\Projects\roomlocator-deploy\Room Locator\src\pages\waterside\waterside.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], WatersidePage);
    return WatersidePage;
}());

//# sourceMappingURL=waterside.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_waterside_waterside__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_api_api__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_rest_rest__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_waterside_waterside__["a" /* WatersidePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_api_api__["a" /* ApiPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/api/api.module#ApiPageModule', name: 'ApiPage', segment: 'api', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/waterside/waterside.module#WatersidePageModule', name: 'WatersidePage', segment: 'waterside', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_waterside_waterside__["a" /* WatersidePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_api_api__["a" /* ApiPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__providers_rest_rest__["a" /* RestProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\I348462\Documents\Projects\roomlocator-deploy\Room Locator\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\I348462\Documents\Projects\roomlocator-deploy\Room Locator\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\I348462\Documents\Projects\roomlocator-deploy\Room Locator\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\I348462\Documents\Projects\roomlocator-deploy\Room Locator\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestProvider = /** @class */ (function () {
    //apiUrl =  'https://luasforecasts.rpa.ie/xml/get.ashx?action=forecast&stop=sti&encrypt=false';
    function RestProvider(http) {
        this.http = http;
        //////////////////////////////////////////////////////////////////////////
        this.getBusTime = function () {
            var httpRequest;
            var httpRequest2;
            var respText, respText2, parse, xmlObj;
            makeRequest();
            function makeRequest() {
                httpRequest = new XMLHttpRequest();
                httpRequest2 = new XMLHttpRequest();
                if (!httpRequest) {
                    alert('Unable to create a XMLHTTP instance');
                    return false;
                }
                httpRequest.onreadystatechange = alertContents;
                httpRequest2.onreadystatechange = alertContents;
                httpRequest.open('GET', 'https://data.smartdublin.ie/cgi-bin/rtpi/realtimebusinformation?stopid=5022&format=xml');
                httpRequest.send();
                httpRequest2.open('GET', 'https://data.smartdublin.ie/cgi-bin/rtpi/realtimebusinformation?stopid=4438&format=xml');
                httpRequest2.send();
            }
            function alertContents() {
                if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest2.readyState === XMLHttpRequest.DONE) {
                    if (httpRequest.status === 200 && httpRequest2.status === 200) {
                        respText = httpRequest.responseText;
                        respText2 = httpRequest2.responseText;
                        //console.log("resptext2: "+respText2);
                        parse = new DOMParser();
                        var respXML = parse.parseFromString(respText, "text/xml");
                        var respXML2 = parse.parseFromString(respText2, "text/xml");
                        //var directionIn = respXML.getElementsByTagName("direction")[0].childNodes[0].data;
                        var destination = respXML.getElementsByTagName("destinationlocalized")[0].innerHTML;
                        var dueTime = respXML.getElementsByTagName("duetime")[0].innerHTML;
                        var destination2 = respXML2.getElementsByTagName("destinationlocalized")[0].innerHTML;
                        var dueTime2 = respXML2.getElementsByTagName("duetime")[0].innerHTML;
                        //console.log(dueTime);
                        document.getElementsByClassName("nextBusTime")[0].innerHTML = dueTime;
                        document.getElementsByClassName("nextBusDestination")[0].innerHTML = destination;
                        document.getElementsByClassName("nextBusTime")[1].innerHTML = dueTime2;
                        document.getElementsByClassName("nextBusDestination")[1].innerHTML = destination2;
                    }
                    else {
                        alert('There was a problem with the request\n');
                        alert(httpRequest.responseText);
                    }
                }
            }
        };
        ///////////////////////////////////////////////////////////////////////////////////
        /////////////////Luas Function////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////
        this.getLuasTime = function () {
            var httpRequest;
            var respText, parse, xmlObj;
            makeRequest();
            function makeRequest() {
                httpRequest = new XMLHttpRequest();
                if (!httpRequest) {
                    alert('Unable to create a XMLHTTP instance');
                    return false;
                }
                httpRequest.onreadystatechange = alertContents;
                httpRequest.open('GET', 'https://luasforecasts.rpa.ie/xml/get.ashx?action=forecast&stop=cit&encrypt=false');
                httpRequest.send();
            }
            function alertContents() {
                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    if (httpRequest.status === 200) {
                        // alert(httpRequest.responseText);
                        // document.getElementById("").innerHTML = reponseXML.getElementsByTagName("direction")[0].childNodes[0].nodeValue;
                        // Get XML response
                        respText = httpRequest.responseText;
                        // console.log(respText);
                        //alert(typeof(respText));
                        //alert(respText);
                        // Setup XML Object from responseText (if using responseText)
                        parse = new DOMParser();
                        var respXML = parse.parseFromString(respText, "text/xml");
                        //alert("type of respXML is " + typeof(respXML));
                        //alert(respXML);
                        /////////////////////////////////////////////////////
                        // Populate Dom elements with retrieved info
                        /////////////////////////////////////////////////////
                        var directionIn = respXML.getElementsByTagName("direction")[0].childNodes;
                        //var tramTwo = directionIn[0].childNodes[0].getAttribute("dueMins");
                        var destination = respXML.getElementsByTagName("tram")[0].getAttribute("destination");
                        var destination2 = respXML.getElementsByTagName("tram")[1].getAttribute("destination");
                        var destination3 = respXML.getElementsByTagName("tram")[2].getAttribute("destination");
                        //var destination4= respXML.getElementsByTagName("tram")[3].getAttribute("destination");
                        document.getElementsByClassName("destination")[0].innerHTML = destination;
                        document.getElementsByClassName("destination")[1].innerHTML = destination2;
                        document.getElementsByClassName("destination")[2].innerHTML = destination3;
                        //document.getElementsByClassName("destination")[3].innerHTML = destination4;
                        var tramOne = respXML.getElementsByTagName("tram")[0].getAttribute("dueMins");
                        document.getElementById("currentLuasA").innerHTML = tramOne;
                        var tramTwo = respXML.getElementsByTagName("tram")[1].getAttribute("dueMins");
                        document.getElementById("nextLuasA").innerHTML = tramTwo;
                        var tramThree = respXML.getElementsByTagName("tram")[2].getAttribute("dueMins");
                        document.getElementById("currentLuasB").innerHTML = tramThree;
                        //var tramFour = respXML.getElementsByTagName("tram")[3].getAttribute("dueMins");
                        //document.getElementById("nextLuasB").innerHTML = tramFour;
                        //          console.log(tramThree);
                        //          console.log(tramFour);
                        //var root = respXML.documentElement;
                        //alert("root is typeof " + typeof(root));
                        //alert(root);
                        //alert(root.getElementsByTagName("stopInfo")[1].childNodes[0].nodeValue);
                        /////////////////////////////////////////////////////
                        // Xpath setup
                        /////////////////////////////////////////////////////
                        var txt = "";
                        var path = '//direction[@name="Inbound"]/tram';
                        var pathResult = respXML.evaluate(path, respXML, null, XPathResult.ANY_TYPE, null);
                        var result = pathResult.iterateNext();
                        while (result) {
                            txt += result.textContent;
                            result = pathResult.iterateNext();
                        }
                        //alert(pathResult);
                    }
                    else {
                        alert('There was a problem with the request\n');
                        alert(httpRequest.responseText);
                    }
                }
            }
        };
        //console.log('Hello RestProvider Provider');
    }
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map