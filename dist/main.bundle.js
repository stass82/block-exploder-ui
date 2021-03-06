webpackJsonp([1,5],{

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 127;


/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(143);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_layout_header_header_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_layout_footer_footer_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_homePage_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_blocks_blocksPage_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_network_networkPage_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_block_blockPage_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_transactions_transactionsPage_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_address_addressPage_component__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: 'home',
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_layout_header_header_component__["a" /* HeaderComponent */], outlet: 'header' },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_homePage_component__["a" /* HomePageComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__pages_layout_footer_footer_component__["a" /* FooterComponent */], outlet: 'footer' }
        ]
    },
    {
        path: 'blocks',
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_layout_header_header_component__["a" /* HeaderComponent */], outlet: 'header' },
            { path: ':hash', component: __WEBPACK_IMPORTED_MODULE_7__pages_block_blockPage_component__["a" /* BlockPageComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_5__pages_blocks_blocksPage_component__["a" /* BlocksPageComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__pages_layout_footer_footer_component__["a" /* FooterComponent */], outlet: 'footer' }
        ]
    },
    {
        path: 'network',
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_layout_header_header_component__["a" /* HeaderComponent */], outlet: 'header' },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_6__pages_network_networkPage_component__["a" /* NetworkPageComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__pages_layout_footer_footer_component__["a" /* FooterComponent */], outlet: 'footer' }
        ]
    },
    {
        path: 'transactions',
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_layout_header_header_component__["a" /* HeaderComponent */], outlet: 'header' },
            { path: ':txid', component: __WEBPACK_IMPORTED_MODULE_8__pages_transactions_transactionsPage_component__["a" /* TransactionsPageComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__pages_layout_footer_footer_component__["a" /* FooterComponent */], outlet: 'footer' }
        ]
    },
    {
        path: 'addresses',
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_layout_header_header_component__["a" /* HeaderComponent */], outlet: 'header' },
            { path: ':hash', component: __WEBPACK_IMPORTED_MODULE_9__pages_address_addressPage_component__["a" /* AddressPageComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__pages_layout_footer_footer_component__["a" /* FooterComponent */], outlet: 'footer' }
        ]
    },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing-module.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(213),
        styles: [__webpack_require__(204)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_infinite_scroll__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customDirectives_angular2_google_chart_directive__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_layout_header_header_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_layout_footer_footer_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_homePage_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_blocks_blocksPage_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_network_networkPage_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_block_blockPage_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_transactions_transactionsPage_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_address_addressPage_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_layout_footer_footer_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_homePage_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_blocks_blocksPage_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_block_blockPage_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_transactions_transactionsPage_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_address_addressPage_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_network_networkPage_service__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_layout_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_layout_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_homePage_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_blocks_blocksPage_component__["a" /* BlocksPageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_network_networkPage_component__["a" /* NetworkPageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_block_blockPage_component__["a" /* BlockPageComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pages_transactions_transactionsPage_component__["a" /* TransactionsPageComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pages_address_addressPage_component__["a" /* AddressPageComponent */],
            __WEBPACK_IMPORTED_MODULE_7__customDirectives_angular2_google_chart_directive__["a" /* GoogleChart */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDVGMQhtueV-z7v4kjQ80kYd26jrmqV-o4'
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__pages_layout_footer_footer_service__["a" /* FooterService */],
            __WEBPACK_IMPORTED_MODULE_18__pages_home_homePage_service__["a" /* HomePageService */],
            __WEBPACK_IMPORTED_MODULE_19__pages_blocks_blocksPage_service__["a" /* BlocksPageService */],
            __WEBPACK_IMPORTED_MODULE_20__pages_block_blockPage_service__["a" /* BlockPageService */],
            __WEBPACK_IMPORTED_MODULE_21__pages_transactions_transactionsPage_service__["a" /* TransactionsPageService */],
            __WEBPACK_IMPORTED_MODULE_22__pages_address_addressPage_service__["a" /* AddressPageService */],
            __WEBPACK_IMPORTED_MODULE_23__pages_network_networkPage_service__["a" /* NetworkPageService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleChart; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoogleChart = (function () {
    function GoogleChart(element) {
        this.element = element;
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._element = this.element.nativeElement;
    }
    GoogleChart.prototype.ngOnChanges = function () {
        var _this = this;
        if (!googleLoaded) {
            googleLoaded = true;
            google.charts.load('current', { 'packages': ['corechart', 'gauge']['orgchart'] });
        }
        setTimeout(function () { return _this.drawGraph(_this.chartOptions, _this.chartType, _this.chartData, _this._element, _this.ready); }, 1000);
    };
    GoogleChart.prototype.drawGraph = function (chartOptions, chartType, chartData, ele, ready) {
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var wrapper;
            wrapper = new google.visualization.ChartWrapper({
                chartType: chartType,
                dataTable: chartData,
                options: chartOptions || {}
            });
            google.visualization.events.addListener(wrapper, 'error', function (googleError) {
                google.visualization.errors.removeError(googleError.id);
            });
            wrapper.draw(ele);
            ready.emit(); // customized this shit because divic wanter the dummy graph to be "blured" before the real one had loaded, and i added an event so i could know when to swap
        }
    };
    return GoogleChart;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartType'),
    __metadata("design:type", String)
], GoogleChart.prototype, "chartType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartOptions'),
    __metadata("design:type", Object)
], GoogleChart.prototype, "chartOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartData'),
    __metadata("design:type", Object)
], GoogleChart.prototype, "chartData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('ready'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], GoogleChart.prototype, "ready", void 0);
GoogleChart = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[GoogleChart]',
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], GoogleChart);

var _a, _b;
//# sourceMappingURL=angular2-google-chart.directive.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    Object.defineProperty(AppSettings, "API_ENDPOINT", {
        get: function () {
            if (AppSettings.devMode) {
                return 'http://localhost:8080/api/';
            }
            else {
                return 'https://blockexplorer.gamecredits.com/api/';
            }
        },
        enumerable: true,
        configurable: true
    });
    return AppSettings;
}());

AppSettings.devMode = false;
//# sourceMappingURL=appSettings.js.map

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"../assets/css/exploder.css\">\n\n<router-outlet name=\"header\"></router-outlet>\n\n<router-outlet> </router-outlet>\n\n<router-outlet name=\"footer\"></router-outlet>\n"

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid page-banner block-header\">\n    \t<div class=\"container\">\n    \t\t<div class=\"row\">\n    \t\t\t<div class=\"col-xs-12\">\n    \t\t\t\t<h1 class=\"block-title\">\n    \t\t\t\t\tAddress <small>View information about a GameCredits address</small>\n    \t\t\t\t</h1>\n    \t\t\t\t<p>\n    \t\t\t\t\t<i class=\"fa fa-at\"></i>\n    \t\t\t\t\tAddress: {{address}}\n    \t\t\t\t</p>\n    \t\t\t</div>\n    \t\t\t<div class=\"col-md-6\">\n    \t\t\t\t<div class=\"table-responsive\">\n    \t\t\t\t\t<table class=\"table\">\n    \t\t\t\t\t\t<tbody>\n    \t\t\t\t\t\t\t<tr>\n    \t\t\t\t\t\t\t\t<th>Summary</th>\n    \t\t\t\t\t\t\t\t<th></th>\n    \t\t\t\t\t\t\t</tr>\n    \t\t\t\t\t\t\t<tr>\n    \t\t\t\t\t\t\t\t<td>Number Of Transactions</td>\n    \t\t\t\t\t\t\t\t<td>{{totalTransactionsNumber}}</td>\n    \t\t\t\t\t\t\t</tr>\n    \t\t\t\t\t\t</table>\n    \t\t\t\t\t</div>\n    \t\t\t\t</div>\n    \t\t\t\t<div class=\"col-md-6\">\n    \t\t\t\t\t<div class=\"table-responsive\">\n    \t\t\t\t\t\t<table class=\"table\">\n    \t\t\t\t\t\t\t<tr>\n    \t\t\t\t\t\t\t\t<td>Total volume:</td>\n    \t\t\t\t\t\t\t\t<td>{{volume | number:'1.5-5'}} GAME</td>\n    \t\t\t\t\t\t\t</tr>\n    \t\t\t\t\t\t\t<tr>\n    \t\t\t\t\t\t\t\t<td>Estimated balance</td>\n                                    <td>{{currentValue | number:'1.5-5'}} GAME</td>\n    \t\t\t\t\t\t\t</tr>\n    \t\t\t\t\t\t</table>\n    \t\t\t\t\t</div>\n    \t\t\t\t</div>\n    \t\t\t</div>\n    \t\t</div>\n    \t</div>\n\n    \t<div class=\"container address-transactions\">\n    \t\t<div class=\"row\">\n    \t\t\t<div class=\"col-xs-12 block-transactions\">\n    \t\t\t\t<h3 class=\"address-transactions-title\">{{selectedTrancationsTagName}} {{transactionsTagNumber}} <button class=\"btn btn-primary pull-right\" (click)=\"setMenu('All Transactions')\">All transactions</button>\n    \t\t\t\t\t<button class=\"pull-right btn btn-primary\" (click)=\"setMenu('Unspent Transactions')\">Unspent transactions </button></h3>\n\n    \t\t\t\t\t<div  *ngIf=\"selectedTrancationsTagName == 'All Transactions' && allTransactions\">\n    \t\t\t\t\t\t<div class=\"panel panel-default\" *ngFor=\"let trans of allTransactions\">\n    \t\t\t\t\t\t\t<div class=\"panel-heading\">\n    \t\t\t\t\t\t\t\t<a href=\"/transactions/345da10d5d5bff42e5949dd609bc993220b68ddfc9add9b15e7cdfeab57af35f\">\n    \t\t\t\t\t\t\t\t\t345da10d5d5bff42e5949dd609bc993220b68ddfc9add9b15e7cdfeab57af35f\n    \t\t\t\t\t\t\t\t</a>\n    \t\t\t\t\t\t\t\t<span class=\"pull-right\"><i class=\"fa fa-calendar\"> 2017-05-11T14:43:06+02:00</i></span>\n    \t\t\t\t\t\t\t</div>\n    \t\t\t\t\t\t\t<div class=\"panel-body\">\n    \t\t\t\t\t\t\t\t<div class=\"row\">\n    \t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n    \t\t\t\t\t\t\t\t\t\t<p><b>Inputs</b></p>\n    \t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\n    \t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let input of trans?.vin\" >\n    \t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"input.prev_txid\"> \n    \t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"{{'/transactions/'+ input.prev_txid}}\">\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t{{input.prev_txid}}\n    \t\t\t\t\t\t\t\t\t\t\t\t\t</a> \n    \t\t\t\t\t\t\t\t\t\t\t\t</div>\n    \t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"!input.prev_txid\">No Inputs (Newly Generated Coins)</div>\n    \t\t\t\t\t\t\t\t\t\t\t</li> \n\n    \t\t\t\t\t\t\t\t\t\t</ul>\n    \t\t\t\t\t\t\t\t\t</div>\n    \t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n    \t\t\t\t\t\t\t\t\t\t<p><b>Outputs</b></p>\n    \t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\n    \t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\" let output of trans?.vout \">\n\n    \t\t\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let adress of output?.addresses\">\n    \t\t\t\t\t\t\t\t\t\t\t\t\t[\n    \t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"{{'/addresses/'+ adress}}\" >\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t{{adress}}\n    \t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t]\n    \t\t\t\t\t\t\t\t\t\t\t\t</div>\n    \t\t\t\t\t\t\t\t\t\t\t\tAmount: {{output.value | number:'1.5-5'}} GAME\n    \t\t\t\t\t\t\t\t\t\t\t\t<Br> <br>\n    \t\t\t\t\t\t\t\t\t\t\t\t</li>\n\n    \t\t\t\t\t\t\t\t\t\t\t</ul>\n    \t\t\t\t\t\t\t\t\t\t</div>\n    \t\t\t\t\t\t\t\t\t</div>\n    \t\t\t\t\t\t\t\t</div>\n    \t\t\t\t\t\t\t\t<div class=\"panel-footer text-right\">\n    \t\t\t\t\t\t\t\t\t<b>Total:</b> 50 GAME\n    \t\t\t\t\t\t\t\t</div>\n    \t\t\t\t\t\t\t</div>\n\n                                <button class=\"btn btn-primary col-md-12 load-more-button\" *ngIf=\"totalTransactionsNumber > allTransactions.length\" (click)=\"loadMoreTransactions()\"> Load More Transactions </button>\n    \t\t\t\t\t\t</div>        \n\n    \t\t\t\t\t\t<div class=\"panel panel-default\" *ngIf=\"selectedTrancationsTagName == 'Unspent Transactions'\" >\n    \t\t\t\t\t\t<div class=\"panel panel-default\" *ngFor=\"let trans of unspent \">\n                                <div class=\"panel-heading\">\n                                    <a href=\"/transactions/345da10d5d5bff42e5949dd609bc993220b68ddfc9add9b15e7cdfeab57af35f\">\n                                        345da10d5d5bff42e5949dd609bc993220b68ddfc9add9b15e7cdfeab57af35f\n                                    </a>\n                                    <span class=\"pull-right\"><i class=\"fa fa-calendar\"> 2017-05-11T14:43:06+02:00</i></span>\n                                </div>\n                                <div class=\"panel-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                            <p><b>Inputs</b></p>\n                                            <ul class=\"list-unstyled\">\n\n                                                <li *ngFor=\"let input of trans?.vin\" >\n                                                    <div *ngIf=\"input.prev_txid\"> \n                                                        <a routerLink=\"{{'/transactions/'+ input.prev_txid}}\">\n                                                            {{input.prev_txid}}\n                                                        </a> \n                                                    </div>\n                                                    <div *ngIf=\"!input.prev_txid\">No Inputs (Newly Generated Coins)</div>\n                                                </li> \n\n                                            </ul>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <p><b>Outputs</b></p>\n                                            <ul class=\"list-unstyled\">\n\n                                                    <div *ngFor=\"let adress of trans?.vout?.addresses\">\n                                                        [\n                                                        <a routerLink=\"{{'/addresses/'+ adress}}\" >\n                                                            {{adress}}\n                                                        </a>\n                                                        ]\n                                                    </div>\n                                                    Amount: {{trans?.vout?.value | number:'1.5-5'}} GAME\n                                                    <Br> <br>\n\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"panel-footer text-right\">\n                                        <b>Total:</b> 50 GAME\n                                    </div>\n                                </div>\n    \t\t\t\t\t\t</div>  \n\n    \t\t\t\t\t</div>\n    \t\t\t\t</div>\n    \t\t\t</div>"

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports = "<div class=\"block-details\"> \n  <div class=\"container-fluid page-banner block-header\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <h1 class=\"block-title\">\n            Block #{{block?.height}} <small>{{block?.hash}}</small>\n          </h1>\n          <p>\n            <i class=\"fa fa-tree\"></i>\n            Merkle root: {{block?.merkleroot}}\n          </p>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <tbody>\n                <tr>\n                  <th>Summary</th>\n                  <th></th>\n                </tr>\n                <tr>\n                  <td>Number Of Transactions</td>\n                  <td>{{block?.tx?.length}}</td>\n                </tr>\n                <tr>\n                  <td>Total sent</td>\n                  <td>{{block?.total | number:'1.5-5'}} GAME</td>\n                </tr>\n                <tr>\n                  <td>Difficulty</td>\n                  <td>{{block?.difficulty}}</td>\n                </tr>\n                <tr>\n                  <td>Version</td>\n                  <td>{{block?.version}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <tr>\n                <td>Confirmations</td>\n                <td>{{confirmations?.confirmations}}</td>\n              </tr>\n              <tr>\n                <td>Bits</td>\n                <td>{{block?.bits}}</td>\n              </tr>\n              <tr>\n                <td>Size</td>\n                <td>{{block?.size}} kB</td>\n              </tr>\n              <tr>\n                <td>Timestamp</td>\n                <td>{{ (block?.time * 1000 ) | date:'medium'}}</td>\n              </tr>\n              <tr>\n                <td>Nonce</td>\n                <td>{{block?.nonce}}</td>\n              </tr>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container-fluid boxes-banner\">\n    <div class=\"container\">\n      <h4 class=\"chain-links-label\"><i class=\"fa fa-chain\"></i> Chain links</h4>\n      <div class=\"row boxes\">\n        <div class=\"col-md-1 hidden-sm hidden-xs\"></div>\n        <div class=\"col-md-2\">\n          <p>\n            Previous\n          </p>\n          <p>\n            <i class=\"fa fa-cube fa-5x\"></i> \n          </p>\n          <p class=\"block-link\">\n            <a routerLink=\"{{ '/blocks/' + block?.previousblockhash}}\">{{block?.previousblockhash}}</a>\n          </p>\n        </div>\n        <div class=\"col-md-2 hidden-xs hidden-sm\">\n          <div class=\"line\"></div>\n        </div>\n        <div class=\"col-md-2\">\n          <p class=\"box-label\">\n            This block\n          </p>\n          <p>\n            <i class=\"fa fa-cube fa-5x\"></i> \n          </p>\n          <p class=\"block-link\">\n            <a routerLink=\"{{ '/blocks/' + block?.hash}}\">{{block?.hash}}</a>\n          </p>\n        </div>\n        <div *ngIf=\"block?.nextblockhash\">\n          <div class=\"col-md-2 hidden-xs hidden-sm\">\n            <div class=\"line\"></div>\n          </div>\n          <div class=\"col-md-2\">\n            <p>\n              Next\n            </p>\n            <p>\n              <i class=\"fa fa-cube fa-5x\"></i> \n            </p>\n            <p class=\"block-link\">\n              <a routerLink=\"{{ '/blocks/' + block?.nextblockhash}}\">{{block?.nextblockhash}}</a>\n            </p>\n          </div>\n          <div class=\"col-md-1 hidden-sm hidden-xs\"></div>\n        </div>\n      </div>   \n    </div>\n  </div>\n\n  <div class=\"container block-transactions\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 block-transactions\">\n        <h3 class=\"block-transactions-title\">Block Transactions ({{transactions?.length}})</h3>\n\n\n        <div class=\"panel panel-default\" *ngFor=\"let trans of transactions\">\n          <div class=\"panel-heading custom-panel-heading\">\n            <b> TXID: </b>\n            <a routerLink=\"{{'/transactions/' + trans.txid}}\">\n             {{trans.txid}}\n           </a>\n           <span class=\"pull-right\"><i class=\"fa fa-calendar\"> {{ (trans.blocktime * 1000 ) | date:'medium'}}</i></span>\n         </div>\n         <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <p><b>Inputs</b></p>\n              <ul class=\"list-unstyled\">\n\n                <li *ngFor=\"let input of trans.vin\" >\n                  <div *ngIf=\"input.prev_txid\"> \n                    <a routerLink=\"{{'/transactions/'+ input.prev_txid}}\">\n                      {{input.prev_txid}}\n                    </a> \n                  </div>\n                  <div *ngIf=\"!input.prev_txid\">No Inputs (Newly Generated Coins)</div>\n                </li> \n\n              </ul>\n            </div>\n            <div class=\"col-md-6\">\n              <p><b>Outputs</b></p>\n              <ul class=\"list-unstyled\">\n\n                <li *ngFor=\" let output of trans.vout \">\n                  <div *ngFor=\"let adress of output.addresses\">\n                    {{output.value | number:'1.5-5'}} GAME ->\n                    <a routerLink=\"{{'/addresses/'+ adress}}\" >\n                      {{adress}}\n                    </a> <span *ngIf=\"output.spent\" class=\"badge badge-status\" style=\"background-color: #EB5757\">Spent</span> <span  *ngIf=\"!output.spent\" class=\"badge badge-status\" style=\"background-color: #F47F4B\">Unspent</span>\n                  </div>\n                </li>\n\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel-footer custom-panel-footing text-right\">\n        <hr class=\"custom-panel-line\">\n          <b>Total:</b> {{trans?.total | number:'1.5-5'}} GAME\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>All blocks </h1>\n    <div class=\"search-results\"\n\t    infiniteScroll\n\t    [infiniteScrollDistance]=\"1\"\n\t    [infiniteScrollThrottle]=\"300\"\n\t    (scrolled)=\"onScroll()\">\n\t\t<table class=\"table latest-blocks-table\">\n\t\t    <thead>\n\t\t    <tr>\n\t\t      <th>Height</th>\n\t\t      <th>Age</th>\n\t\t      <th>Transactions</th>\n\t\t      <th>Total Sent</th>\n\t\t      <th>Size (kB)</th>\n\t\t    </tr>\n\t\t    </thead>\n\n\t\t    <tbody>\n\t\t        <tr *ngFor=\"let block of blockArray\">\n\t\t          <td>\n\t\t            <a routerLink=\"{{ '/blocks/' + block.hash}}\">{{block?.height}}</a>\n\t\t          </td>\n\t\t          <td>\n\t\t            {{calulateMinutesFromNow(block?.time)}}\n\t\t          </td>\n\t\t          <td>\n\t\t            {{block?.tx?.length}}\n\t\t          </td>\n\t\t          <td>\n\t\t            {{block?.total | number:'1.5-5'}} GAME\n\t\t          </td>\n\t\t          <td>\n\t\t            {{block?.size}}\n\t\t          </td>\n\t\t        </tr>\n\t\t    </tbody>\n\t\t</table>\n\t</div>\n</div>"

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = "    \n    <div class=\"container-fluid page-banner\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-9\">\n                    <img *ngIf=\"showPlaceholder\" src=\"../../assets/images/placeholder.png\" alt=\"\" style=\"filter: blur(5px);\">\n                    <div id=\"line_chart\" [chartData]=\"line_ChartData\" [chartOptions]= \"line_ChartOptions\" (ready)=\"hidePlaceholder()\" chartType=\"LineChart\" GoogleChart></div>\n                </div>\n                <div class=\"col-md-3 network-info\">\n                    <div class=\"page-header home-title\">\n                      <h3>GameCredits</h3>\n                    </div>\n                    <div>\n                    <span class=\"usd-price-big\">${{price | number:'1.5-5'}}</span> <a class=\"link-underline\" href=\"https://coinmarketcap.com/currencies/gamecredits/\"> source</a>  \n                    </div>\n                    <table class=\"home-table\">\n                      <tr>\n                          <td>\n                            Blockchain height:\n                          </td>\n                          <td>\n                            <a class=\"link-underline\" routerLink=\"{{ '/blocks/' + latestBlocks[0]?.hash}}\">{{latestBlocks[0]?.height}}</a>\n                          </td>\n                      </tr>\n                      <tr>\n                          <td>\n                            Coin supply:\n                          </td>\n                          <td>\n                             {{networkInfo?.coinSupply}}\n                          </td>\n                      </tr>\n                      <tr>\n                          <td>\n                            Blockchain size:\n                          </td>\n                          <td>\n                             {{networkInfo?.blockchainSize}}GB\n                          </td>\n                      </tr>\n                      <tr>\n                          <td>\n                            Hash rate:\n                          </td>\n                          <td>\n                             {{networkInfo?.hashrate / 1000000000 | number:'1.1-1'}} GH/s\n                          </td>\n                      </tr>\n                      <tr>\n                          <td>\n                            Number of transactions: &nbsp;\n                          </td>\n                          <td>\n                              {{networkInfo?.numTransactions}}\n                          </td>\n                      </tr>\n                      <tr>\n                          <td>\n                            Sync status:\n                          </td>\n                          <td>\n                            {{clientInfo?.syncProgress}} %\n                          </td>\n                      </tr>\n                    </table>\n                    <p>\n                        <a href=\"{{bootstrapLink}}\" class=\"btn btn-primary download-button\" role=\"button\"> <i class=\"fa fa-download\" aria-hidden=\"true\"> Download bootstrap.zip </i></a>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"container\">\n        <div class=\"search-div\">\n            <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n            <input #search type=\"text\" class=\"search\" placeholder=\"Search by block hash, transaction ID or address\" (keyup.enter)=\"onSearch(search.value)\">\n        </div>\n\n        <h1>Latest blocks</h1>\n        <table class=\"table latest-blocks-table\">\n            <thead>\n            <tr>\n              <th>Height</th>\n              <th>Age</th>\n              <th>Transactions</th>\n              <th>Total Sent</th>\n              <th>Size (kB)</th>\n            </tr>\n            </thead>\n\n            <tbody *ngIf=\"latestBlocks\" >\n                <tr *ngFor=\"let block of latestBlocks\">\n                  <td>\n                    <a routerLink=\"{{ '/blocks/' + block.hash}}\">{{block?.height}}</a>\n                  </td>\n                  <td>\n                    {{calulateMinutesFromNow(block?.time)}}\n                  </td>\n                  <td>\n                    {{block?.tx?.length}}\n                  </td>\n                  <td>\n                    {{block?.total | number:'1.5-5'}} GAME\n                  </td>\n                  <td>\n                    {{block?.size}}\n                  </td>\n                </tr>\n              </tbody>\n          </table>\n          <div class=\"row text-center\">\n             <hr>\n             <div class=\"cointainer-blocks\">\n                <a class=\"btn btn-primary all-blocks-button\" routerLink=\"/blocks\"> <i class=\"fa fa-th\" aria-hidden=\"true\"> </i> Show all blocks</a>\n             </div>\n          </div>\n    </div>"

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "<footer class=\"container-fluid\">\n\t<div class=\"container\">\n\t\t<div class=\"footer-wrap\">\n\t\t\t<div class=\"logo\">\n\t\t\t<img src=\"../../../assets/images/logo.png\" alt=\"\">\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6 game-text\">\n\t\t\t\t<h2>New to GameCredits?</h2>\n\t\t\t\t<p>\n\t\t\t\t\tGameCredits is creating a new payment gateway for the gaming industry.\n\t\t\t\t\tThere are a lot of challenges and limitations with current payment solutions and platforms in the gaming industry.\n\t\t\t\t\tWe will provide gaming companies a very specific solution to make payments seamless, easy and secure.\n\t\t\t\t\tWe will offer the gaming industry ways to pay less and make more.\n\t\t\t\t\tOur in game payment gateway is built for the gaming industry by the gaming industry. <a class=\"link-underline\"href=\"https://gamecredits.com\">Read more</a>\n\t\t\t\t</p>\n\t\t\t\t<a href=\"https://www.facebook.com/gamecredits/\"><i class=\"fa fa-facebook-square fa-2x\" aria-hidden=\"true\"></i></a>\n\t\t\t\t<a href=\"https://twitter.com/game_credits\"><i class=\"fa fa-twitter-square fa-2x\" aria-hidden=\"true\"></i></a>\n\t\t\t\t<a href=\"https://www.linkedin.com/company/gamecredits\"><i class=\"fa fa-linkedin-square fa-2x\" aria-hidden=\"true\"></i></a>\n\t\t\t\t<a href=\"https://www.youtube.com/channel/UCzkC8rkM38sxpuPcnyr1lXg\"><i class=\"fa fa-youtube-square fa-2x\" aria-hidden=\"true\"></i></a>\n\t\t\t\t<a href=\"https://gamecredits.com/slack.html\"><i class=\"fa fa-slack fa-2x\" aria-hidden=\"true\"></i></a>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6 latest-transactions\">\n\t\t\t\t<h2>Latest (mined) transactions</h2>\n\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t<table class=\"table latest-transactions-table\">\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr *ngFor=\"let transaction of latestTransactions\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<a href=\"{{'/transactions/' + transaction.txid}}\"> {{transaction.txid.substring(0,29)}}..</a>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{{transaction.total | number:'1.5-5'}} GAME\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer>"

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n\t<div class=\"container\">\n\t\t<!-- Brand and toggle get grouped for better mobile display -->\n\t\t<div class=\"navbar-header\">\n\n\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t</button>\n\t\t\t\t<div class=\"padding-top-5\">\n\t\t\t\t\t \n\t\t\t\t\t <a class=\"header-logo\" href=\"#\">  <img src=\"../../../assets/images/whitelogo.png\" alt=\"\" height=\"40\"> Block Explorer <span class=\"badge\" style=\"background-color: #F47F4B\">Beta</span></a>\n\t\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- Collect the nav links, forms, and other content for toggling -->\n\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t<li><a routerLink=\"/home\">Home</a></li>\n\t\t\t\t<li><a routerLink=\"/blocks\">Blocks</a></li>\n\t\t\t\t<li><a routerLink=\"/network\">Network</a></li>\n\t\t\t\t<li><a href=\"https://blockexplorer.gamecredits.com/api/ui\">API</a></li>\n\t\t\t</ul>\n\t\t</div><!-- /.navbar-collapse -->\n\t</div><!-- /.container-fluid -->\n</nav>"

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row text-center\">\n\t\t<h1 class=\"pull-left network-title\"> Block Explorer: addnode = 148.251.15.209:40002 </h1>\n\t\t<div class=\"col-md-4\">\n\t\t\t<div class=\"row\">\n\t\t\t<p class=\"pull-left\">\n\t\t\t\tMAP OF EXPLORER CONNECTIONS\n \t\t\t</p>\n\t\t\t</div>\n\t\t\t<br>\n\t\t\t<div class=\"row\">\n\t\t\t\t<p align=\"left\"> \n\t\t\t\t\t<b>\n\t\t\t\t\tThis maps shows live full nodes that are connected to the\n\t\t\t\t\tBlock Explorer. These are NOT all live nodes, only the ones\n\t\t\t\t\tthat the Explorer client is “talking to” at the moment.\n\t\t\t\t\t</b>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<table class=\"table peers-table\">\n\t\t\t\t\t<tr >\n\t\t\t\t\t\t<th class=\"no-border-top\">\n\t\t\t\t\t\t\tNode\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th class=\"no-border-top\">\n\t\t\t\t\t\t\tVersion\n\t\t\t\t\t\t</th>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr *ngFor=\"let peer of peersToShow\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<span class=\"pull-left\">{{peer?.addr}}</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<span class=\"pull-left\">{{peer?.subver}}</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t\t<span *ngIf=\"showButton\" (click)=\"showAll()\" class=\"all-peers-button\"> <b> Show all peers </b> </span>\n \t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-8\">\n\t\t\t<sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" class=\"map\">\n\t\t\t<div *ngFor=\"let peer of clientInfo?.peerInfo\">\n\t\t\t  <sebm-google-map-marker [latitude]=\"peer.latitude\" [longitude]=\"peer.longitude\" ></sebm-google-map-marker>\n\t\t\t</div>\n\t\t\t</sebm-google-map>\t\n\t\t</div>\n\t</div>\n\t<div class=\"row last-row text-for-network\"> \n\t<p>\n\t\t* If syncing of your client takes a long time you can add a node manually and it may speed up the syncing process. In order to do that start your client from the command line with the -addnode=148.251.15.209:40002 parameter or you can add that parameter to the gamecredits.conf file in your data directory. \nFor more info read this article about running Bitcoin, all the same rules apply to GameCredits: https://en.bitcoin.it/wiki/Running_Bitcoin\n\t</p>\n\t</div>\n</div>"

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid transaction-header\">\n  <div class=\"container\">\n    <h1>Transaction <small>View information about a GameCredits transaction</small></h1>\n    <p>\n      <i class=\"fa fa-hashtag\"></i>\n      {{transaction?.blockhash}}\n    </p>\n  </div>\n</div>\n\n<div class=\"container-fluid transaction-body\">\n  <div class=\"container\">\n    <div class=\"transaction-card col-xs-12\">\n      <div class=\"transaction-card__body\">\n        <div class=\"col-md-6\">\n          <p><strong>Inputs:</strong></p>\n          <ul class=\"list-unstyled\">\n\n            <li *ngFor=\"let input of transaction?.vin\" >\n              <div *ngIf=\"input.prev_txid\"> \n                <a routerLink=\"{{'/transactions/'+ input.prev_txid}}\">\n                  {{input.prev_txid}}\n                </a> \n              </div>\n              <div *ngIf=\"!input.prev_txid\">No Inputs (Newly Generated Coins)</div>\n            </li> \n\n          </ul>\n        </div>\n        <div class=\"col-md-6\">\n          <p><strong>Outputs</strong></p>\n          <ul class=\"list-unstyled\">\n\n            <li *ngFor=\" let output of transaction?.vout \">\n\n              <div *ngFor=\"let adress of output.addresses\">\n                [\n                <a routerLink=\"/addresses/Gf2uS2ZaWWXkbj3DK263zsK2bqU4rvLHCy\" >\n                  {{adress}}\n                </a>\n                ]\n              </div>\n              Amount: {{output.value | number:'1.5-5'}} GAME\n              <Br> <br>\n              </li>\n\n            </ul>\n          </div>\n        </div>\n        <div class=\"transaction-card__footer\">\n          <div class=\"col-xs-12\">\n            <p class=\"pull-right\">\n              <span data-toggle=\"tooltip\" title=\"Transaction is considered confirmed if more than 6 confirmations are available\">\n                Total sent: {{transaction?.total | number:'1.5-5'}} GAME, Confirmations: {{confirmations}},  Status: <i class=\"fa fa-check-circle-o\" *ngIf=\" confirmations > 6\"></i> <i class=\"fa fa-times\" *ngIf=\" confirmations < 7\"></i> \n              </span>\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-12 transaction-summary\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <tr>\n              <th>Summary</th>\n              <th></th>\n            </tr>\n            <tr>\n              <td>Blockhash:</td>\n              <td>{{transaction?.blockhash}}</td>\n            </tr>\n            <tr>\n              <td>Blocktime:</td>\n              <td>{{ ( transaction?.blocktime * 1000 )  | date:'medium'}}</td>\n            </tr>\n            <tr>\n              <td>Version:</td>\n              <td>{{transaction?.version}}</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(128);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addressPage_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddressPageComponent = (function () {
    function AddressPageComponent(addressPageService, route) {
        this.addressPageService = addressPageService;
        this.route = route;
        this.address = '';
        this.allTransactions = [];
        this.unspent = [];
        this.selectedTrancationsTagName = "All Transactions";
        this.transactionsTagNumber = 0;
        this.volume = 0;
        this.nextTransactionsPageLink = '';
        this.currentValue = 0;
        this.totalTransactionsNumber = 0;
    }
    AddressPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.address = '' + params['hash'];
        });
        this.route.params
            .switchMap(function (params) { return _this.addressPageService.getAddressAllTransactions('' + params['hash']); })
            .subscribe(function (resp) {
            _this.allTransactions = resp.transactions;
            _this.nextTransactionsPageLink = resp.next;
            _this.setMenu('All Transactions');
        });
        this.route.params
            .switchMap(function (params) { return _this.addressPageService.getAddressUnspent('' + params['hash']); })
            .subscribe(function (resp) {
            var i;
            for (i = 0; i < resp.length; i++) {
                var item = resp[i];
                item.vin = Array.from(resp[i].vin);
                _this.unspent.push(item);
            }
            console.log(_this.unspent);
        });
        this.route.params
            .switchMap(function (params) { return _this.addressPageService.getAddressVolume('' + params['hash']); })
            .subscribe(function (resp) {
            _this.volume = Number(resp);
            isNaN(_this.volume) ? _this.volume = 0 : _this.volume = resp;
        });
        this.route.params
            .switchMap(function (params) { return _this.addressPageService.getAddressTotalTransactionsNumber('' + params['hash']); })
            .subscribe(function (resp) {
            _this.totalTransactionsNumber = Number(resp);
            isNaN(_this.totalTransactionsNumber) ? _this.totalTransactionsNumber = 0 : _this.totalTransactionsNumber = resp;
        });
        this.route.params
            .switchMap(function (params) { return _this.addressPageService.getAddressBalance('' + params['hash']); })
            .subscribe(function (resp) {
            _this.currentValue = Number(resp);
            isNaN(_this.currentValue) ? _this.currentValue = 0 : _this.currentValue = resp;
        });
    };
    AddressPageComponent.prototype.setMenu = function (name) {
        this.selectedTrancationsTagName = name;
        if (name == 'All Transactions') {
            this.transactionsTagNumber = this.allTransactions ? this.allTransactions.length : 0;
        }
        else if (name == 'Unspent Transactions') {
            this.transactionsTagNumber = 0; // FIX THIS AFTER DIVIC FIXES BACKEND 
        }
    };
    AddressPageComponent.prototype.loadMoreTransactions = function () {
        var _this = this;
        this.addressPageService.getNextTransactions(this.nextTransactionsPageLink).subscribe(function (resp) {
            _this.allTransactions = _this.allTransactions.concat(resp.transactions);
            _this.nextTransactionsPageLink = resp.next;
            _this.transactionsTagNumber = _this.allTransactions.length;
        });
    };
    return AddressPageComponent;
}());
AddressPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-adress',
        template: __webpack_require__(214)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__addressPage_service__["a" /* AddressPageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__addressPage_service__["a" /* AddressPageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], AddressPageComponent);

var _a, _b;
//# sourceMappingURL=addressPage.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddressPageService = (function () {
    function AddressPageService(_http) {
        this._http = _http;
        this.baseApiUrl = __WEBPACK_IMPORTED_MODULE_3__appSettings__["a" /* AppSettings */].API_ENDPOINT;
    }
    AddressPageService.prototype.getAddressAllTransactions = function (hash) {
        var _this = this;
        var url = this.baseApiUrl + 'addresses/' + hash;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    AddressPageService.prototype.getAddressUnspent = function (hash) {
        var _this = this;
        var url = this.baseApiUrl + 'addresses/' + hash + '/unspent';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    AddressPageService.prototype.getAddressTotalTransactionsNumber = function (hash) {
        var _this = this;
        var url = this.baseApiUrl + 'addresses/' + hash + '/transaction-count';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    AddressPageService.prototype.getAddressVolume = function (hash) {
        var _this = this;
        var url = this.baseApiUrl + 'addresses/' + hash + '/volume';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    AddressPageService.prototype.getAddressBalance = function (hash) {
        var _this = this;
        var url = this.baseApiUrl + 'addresses/' + hash + '/balance';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    AddressPageService.prototype.getNextTransactions = function (link) {
        var _this = this;
        var url = this.baseApiUrl + link.substring(1);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    AddressPageService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    AddressPageService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    return AddressPageService;
}());
AddressPageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AddressPageService);

var _a;
//# sourceMappingURL=addressPage.service.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blockPage_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlockPageComponent = (function () {
    function BlockPageComponent(blockPageService, route) {
        this.blockPageService = blockPageService;
        this.route = route;
    }
    BlockPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.blockPageService.getBlock('' + params['hash']); })
            .subscribe(function (resp) {
            _this.block = resp;
        });
        this.route.params
            .switchMap(function (params) { return _this.blockPageService.getBlockConfirmations('' + params['hash']); })
            .subscribe(function (resp) {
            _this.confirmations = resp;
        });
        this.route.params
            .switchMap(function (params) { return _this.blockPageService.getBlockTransactions('' + params['hash']); })
            .subscribe(function (resp) {
            _this.transactions = resp;
        });
    };
    return BlockPageComponent;
}());
BlockPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-block',
        template: __webpack_require__(215)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__blockPage_service__["a" /* BlockPageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__blockPage_service__["a" /* BlockPageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], BlockPageComponent);

var _a, _b;
//# sourceMappingURL=blockPage.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockPageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BlockPageService = (function () {
    function BlockPageService(_http) {
        this._http = _http;
        this.baseApiUrl = __WEBPACK_IMPORTED_MODULE_3__appSettings__["a" /* AppSettings */].API_ENDPOINT;
    }
    BlockPageService.prototype.getBlock = function (hash) {
        var _this = this;
        var url = this.baseApiUrl + 'blocks/' + hash;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    BlockPageService.prototype.getBlockConfirmations = function (hash) {
        var _this = this;
        var url = this.baseApiUrl + 'blocks/' + hash + '/confirmations';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    BlockPageService.prototype.getBlockTransactions = function (hash) {
        var _this = this;
        var url = this.baseApiUrl + 'transactions?blockhash=' + hash;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    BlockPageService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    BlockPageService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    return BlockPageService;
}());
BlockPageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], BlockPageService);

var _a;
//# sourceMappingURL=blockPage.service.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocksPage_service__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocksPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlocksPageComponent = (function () {
    function BlocksPageComponent(blocksPageService) {
        this.blocksPageService = blocksPageService;
        this.blockArray = [];
        this.currentlyLoaded = 0;
        this.loadPerScroll = 30;
    }
    BlocksPageComponent.prototype.ngOnInit = function () {
        this.addBlocks();
    };
    BlocksPageComponent.prototype.addBlocks = function () {
        var _this = this;
        this.blocksPageService.getBlocks(this.loadPerScroll, this.currentlyLoaded).subscribe(function (resp) {
            _this.blockArray = _this.blockArray.concat(resp);
        });
        this.currentlyLoaded += this.loadPerScroll;
    };
    BlocksPageComponent.prototype.onScroll = function () {
        this.addBlocks();
    };
    BlocksPageComponent.prototype.calulateMinutesFromNow = function (time) {
        var now = new Date();
        var minutesOld = Math.abs(Math.round((now.valueOf() / 1000 - time) / 60));
        var message = '';
        var days = Math.floor(minutesOld / (60 * 24));
        var hours = Math.floor((minutesOld - days * 60 * 24) / 60);
        var minutes = minutesOld % 60;
        message += minutes + ' m ';
        if (hours || days) {
            message += hours + ' h ';
        }
        if (days) {
            message += days + ' d ';
        }
        return message;
    };
    return BlocksPageComponent;
}());
BlocksPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-blocks',
        template: __webpack_require__(216)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__blocksPage_service__["a" /* BlocksPageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__blocksPage_service__["a" /* BlocksPageService */]) === "function" && _a || Object])
], BlocksPageComponent);

var _a;
//# sourceMappingURL=blocksPage.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocksPageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BlocksPageService = (function () {
    function BlocksPageService(_http) {
        this._http = _http;
        this.baseApiUrl = __WEBPACK_IMPORTED_MODULE_3__appSettings__["a" /* AppSettings */].API_ENDPOINT;
    }
    BlocksPageService.prototype.getBlocks = function (limit, offset) {
        var _this = this;
        var url = this.baseApiUrl + 'blocks/latest?limit=' + limit + '&offset=' + offset;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    BlocksPageService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    BlocksPageService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    return BlocksPageService;
}());
BlocksPageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], BlocksPageService);

var _a;
//# sourceMappingURL=blocksPage.service.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__homePage_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePageComponent = (function () {
    function HomePageComponent(homePageService, router) {
        this.homePageService = homePageService;
        this.router = router;
        this.latestBlocks = [];
        this.networkInfo = [];
        this.bootstrapLink = [];
        this.clientInfo = [];
        this.showPlaceholder = true;
        this.line_ChartData = [];
        this.tempLineChartData = [];
        this.line_ChartOptions = {
            curveType: 'function',
            height: 400,
            vAxis: { baselineColor: '#CCCCCC', gridlines: { count: 13, color: '#dddddd' }, textStyle: { color: 'white' } },
            hAxis: { format: 'd. MMM', baselineColor: '#CCCCCC', gridlines: { count: 10, color: '#bbbbbb' }, minorGridlines: { color: 'red' }, textStyle: { color: 'white' } },
            chartArea: { left: 40, top: 40, width: '90%', height: '80%' },
            backgroundColor: '#33A579',
            yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    color: 'red'
                }],
            legend: {
                position: 'top', textStyle: { color: 'white', fontSize: 16 }, alignment: 'center', opacity: 0.1
            },
            colors: ['white'],
            pointSize: 8,
            dataOpacity: 0.5
        };
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homePageService.getLatestBlocks().subscribe(function (resp) {
            (_a = _this.latestBlocks).push.apply(_a, resp);
            var _a;
        });
        this.homePageService.getNetworkPrice().subscribe(function (resp) {
            _this.price = resp.priceUSD;
        });
        this.homePageService.getNetworkInfo().subscribe(function (resp) {
            _this.networkInfo = resp;
        });
        this.homePageService.getClientInfo().subscribe(function (resp) {
            _this.clientInfo = resp;
        });
        this.homePageService.getBootstrapLink().subscribe(function (resp) {
            _this.bootstrapLink = resp;
        });
        this.homePageService.getHashrates().subscribe(function (resp) {
            _this.tempLineChartData.push(['Date', 'Network Hashrate']);
            for (var index = 0; index < resp.length; ++index) {
                _this.tempLineChartData.push([new Date(resp[index].timestamp * 1000), resp[index].hashrate / 1000000000]);
            }
            _this.line_ChartData = _this.tempLineChartData; // Change dependant vaulue only one ( so we dont trriger onChange in directive multiple times)
        });
    };
    HomePageComponent.prototype.calulateMinutesFromNow = function (time) {
        var now = new Date();
        var minutesOld = Math.abs(Math.round((now.valueOf() / 1000 - time) / 60));
        var message = '';
        var days = Math.floor(minutesOld / (60 * 24));
        var hours = Math.floor((minutesOld - days * 60 * 24) / 60);
        var minutes = minutesOld % 60;
        message += minutes + ' m ';
        if (hours || days) {
            message += hours + ' h ';
        }
        if (days) {
            message += days + ' d ';
        }
        return message;
    };
    HomePageComponent.prototype.hidePlaceholder = function () {
        this.showPlaceholder = false;
    };
    HomePageComponent.prototype.onSearch = function (param) {
        var _this = this;
        this.homePageService.getSearchItemType(param).subscribe(function (resp) {
            if (resp.type == 'block') {
                _this.router.navigateByUrl('blocks/' + resp.searchBy);
            }
            else if (resp.type == 'address') {
                _this.router.navigateByUrl('addresses/' + resp.searchBy);
            }
            else if (resp.type == 'transaction') {
                _this.router.navigateByUrl('transactions/' + resp.searchBy);
            }
        });
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-home',
        template: __webpack_require__(217)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__homePage_service__["a" /* HomePageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__homePage_service__["a" /* HomePageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], HomePageComponent);

var _a, _b;
//# sourceMappingURL=homePage.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePageService = (function () {
    function HomePageService(_http) {
        this._http = _http;
        this.baseApiUrl = __WEBPACK_IMPORTED_MODULE_3__appSettings__["a" /* AppSettings */].API_ENDPOINT;
    }
    HomePageService.prototype.getLatestBlocks = function () {
        var _this = this;
        var url = this.baseApiUrl + 'blocks/latest?limit=10';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    HomePageService.prototype.getLatestNetworkHashRates = function () {
        var _this = this;
        var url = this.baseApiUrl + 'network/hashrates?limit=20';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    HomePageService.prototype.getNetworkPrice = function () {
        var _this = this;
        var url = this.baseApiUrl + 'network/price';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    HomePageService.prototype.getNetworkInfo = function () {
        var _this = this;
        var url = this.baseApiUrl + 'network/info';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    HomePageService.prototype.getClientInfo = function () {
        var _this = this;
        var url = this.baseApiUrl + 'client/info';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    HomePageService.prototype.getSearchItemType = function (param) {
        var _this = this;
        var url = this.baseApiUrl + 'search/' + param;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    HomePageService.prototype.getBootstrapLink = function () {
        var _this = this;
        var url = this.baseApiUrl + 'network/bootstrap';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return '' + _this.baseApiUrl.substring(0, _this.baseApiUrl.length - 5) + _this.extractData(res).url; })
            .catch(this.handleError);
    };
    HomePageService.prototype.getHashrates = function () {
        var _this = this;
        var url = this.baseApiUrl + 'network/hashrates?limit=25';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    HomePageService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    HomePageService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    return HomePageService;
}());
HomePageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], HomePageService);

var _a;
//# sourceMappingURL=homePage.service.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_service__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(footerService) {
        this.footerService = footerService;
        this.latestTransactions = [];
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.footerService.getLatestTransactions().subscribe(function (resp) {
            _this.latestTransactions = resp;
        });
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-footer',
        template: __webpack_require__(218)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__footer_service__["a" /* FooterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__footer_service__["a" /* FooterService */]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FooterService = (function () {
    function FooterService(_http) {
        this._http = _http;
        this.baseApiUrl = __WEBPACK_IMPORTED_MODULE_3__appSettings__["a" /* AppSettings */].API_ENDPOINT;
    }
    FooterService.prototype.getLatestTransactions = function () {
        var _this = this;
        var url = this.baseApiUrl + 'transactions/latest?limit=5';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    FooterService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    FooterService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    return FooterService;
}());
FooterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], FooterService);

var _a;
//# sourceMappingURL=footer.service.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-header',
        template: __webpack_require__(219)
    })
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__networkPage_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NetworkPageComponent = (function () {
    function NetworkPageComponent(networkPageService) {
        this.networkPageService = networkPageService;
        this.lat = 31.678418;
        this.lng = 7.809007;
        this.prva = 53.678418;
        this.druga = 89.809007;
        this.zoom = 1;
        this.markers = [];
        this.peersToShow = [];
        this.showButton = false;
    }
    NetworkPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkPageService.getNetworkInfo().subscribe(function (resp) {
            _this.networkInfo = resp;
        });
        this.networkPageService.getClientInfo().subscribe(function (resp) {
            _this.clientInfo = resp;
            _this.peersToShow = _this.clientInfo.peerInfo.slice(0, 5);
            _this.showButton = true;
        });
    };
    NetworkPageComponent.prototype.showAll = function () {
        this.peersToShow = this.clientInfo.peerInfo;
    };
    return NetworkPageComponent;
}());
NetworkPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-network',
        template: __webpack_require__(220)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__networkPage_service__["a" /* NetworkPageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__networkPage_service__["a" /* NetworkPageService */]) === "function" && _a || Object])
], NetworkPageComponent);

var _a;
//# sourceMappingURL=networkPage.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkPageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NetworkPageService = (function () {
    function NetworkPageService(_http) {
        this._http = _http;
        this.baseApiUrl = __WEBPACK_IMPORTED_MODULE_3__appSettings__["a" /* AppSettings */].API_ENDPOINT;
    }
    NetworkPageService.prototype.getNetworkInfo = function () {
        var _this = this;
        var url = this.baseApiUrl + 'network/info';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    NetworkPageService.prototype.getClientInfo = function () {
        var _this = this;
        var url = this.baseApiUrl + 'client/info';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    NetworkPageService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    NetworkPageService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    return NetworkPageService;
}());
NetworkPageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], NetworkPageService);

var _a;
//# sourceMappingURL=networkPage.service.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transactionsPage_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransactionsPageComponent = (function () {
    function TransactionsPageComponent(transactionsPageService, route) {
        this.transactionsPageService = transactionsPageService;
        this.route = route;
    }
    TransactionsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.transactionsPageService.getTransaction('' + params['txid']); })
            .subscribe(function (resp) {
            _this.transaction = resp;
            _this.transactionsPageService.getBlockConfirmations(_this.transaction.blockhash)
                .subscribe(function (resp) {
                _this.confirmations = resp.confirmations;
            });
        });
    };
    return TransactionsPageComponent;
}());
TransactionsPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exploder-transactions',
        template: __webpack_require__(221)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__transactionsPage_service__["a" /* TransactionsPageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__transactionsPage_service__["a" /* TransactionsPageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], TransactionsPageComponent);

var _a, _b;
//# sourceMappingURL=transactionsPage.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TransactionsPageService = (function () {
    function TransactionsPageService(_http) {
        this._http = _http;
        this.baseApiUrl = __WEBPACK_IMPORTED_MODULE_3__appSettings__["a" /* AppSettings */].API_ENDPOINT;
    }
    TransactionsPageService.prototype.getTransaction = function (hash) {
        var _this = this;
        var url = this.baseApiUrl + 'transactions/' + hash;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    TransactionsPageService.prototype.getBlockConfirmations = function (hash) {
        var _this = this;
        var url = this.baseApiUrl + 'blocks/' + hash + '/confirmations';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this._http.get(url, { headers: headers })
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    TransactionsPageService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    TransactionsPageService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    return TransactionsPageService;
}());
TransactionsPageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], TransactionsPageService);

var _a;
//# sourceMappingURL=transactionsPage.service.js.map

/***/ })

},[268]);
//# sourceMappingURL=main.bundle.js.map