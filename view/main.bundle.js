webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<shakemap-view-header></shakemap-view-header>\n\n<shakemap-view-events></shakemap-view-events>\n\n<shakemap-view-map></shakemap-view-map>\n\n<div *ngIf=\"!c.conf?.display || c.conf?.display !== 'static'\">\n    <shakemap-view-bottom-panel></shakemap-view-bottom-panel>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var conf_service_1 = __webpack_require__("./src/app/conf.service.ts");
var event_service_1 = __webpack_require__("./src/app/events/event.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(c, eService) {
        this.c = c;
        this.eService = eService;
        this.title = 'shakemap-view';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (!this.configs) {
            this.c.getConfigs();
        }
        if (!this.eventFeed) {
            this.eService.getEventFeed();
        }
    };
    AppComponent.prototype.ngOnChanges = function () {
        this.eService.manualEntry = this.eventFeed;
        if (this.eventFeed) {
            var events = [];
            events.push({
                id: this.eventFeed['properties']['products']['shakemap'][0]['code'],
                shakemap: this.eventFeed['properties']['products']['shakemap']
            });
            this.eService.events.next(events);
        }
        if (this.configs) {
            this.c.conf = this.configs;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "eventFeed", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "configs", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'shakemap-view-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [conf_service_1.ConfService,
            event_service_1.EventService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var map_component_1 = __webpack_require__("./src/app/map/map.component.ts");
var layer_service_1 = __webpack_require__("./src/app/map/layers/layer.service.ts");
var events_component_1 = __webpack_require__("./src/app/events/events.component.ts");
var event_service_1 = __webpack_require__("./src/app/events/event.service.ts");
var map_service_1 = __webpack_require__("./src/app/map/map.service.ts");
var conf_service_1 = __webpack_require__("./src/app/conf.service.ts");
var bottom_panel_component_1 = __webpack_require__("./src/app/bottom-panel/bottom-panel.component.ts");
//import { InfoComponent } from './bottom-panel/info/info.component';
//import { InfoService } from './bottom-panel/info/info.service';
//import { StationListComponent } from './bottom-panel/station-list/station-list.component';
//import { StationService } from './bottom-panel/station-list/station.service';
var map_control_component_1 = __webpack_require__("./src/app/map/map-control/map-control.component.ts");
var map_control_service_1 = __webpack_require__("./src/app/map/map-control/map-control.service.ts");
//import { EventService as EventControl } from 'earthquake-eventpages';
//import { StationService } from 'earthquake-eventpages';
var earthquake_eventpages_1 = __webpack_require__("./node_modules/earthquake-eventpages/index.ts");
var earthquake_eventpages_2 = __webpack_require__("./node_modules/earthquake-eventpages/index.ts");
var header_component_1 = __webpack_require__("./src/app/header/header.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                map_component_1.MapComponent,
                events_component_1.EventsComponent,
                bottom_panel_component_1.BottomPanelComponent,
                map_control_component_1.MapControlComponent,
                header_component_1.HeaderComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                material_1.MatIconModule,
                earthquake_eventpages_1.EventpagesModule.forRoot(),
                earthquake_eventpages_2.ShakemapModule
            ],
            providers: [layer_service_1.LayerService,
                event_service_1.EventService,
                map_service_1.MapService,
                conf_service_1.ConfService,
                map_control_service_1.MapControlService
            ],
            bootstrap: [app_component_1.AppComponent],
            exports: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/bottom-panel/bottom-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [@panelState]='panelState'>\n    <div class=\"state-toggle\" (click)=\"toggleState()\">\n      <div class=\"arrow\">\n        <div class=\"up\" *ngIf=\"panelState === 'inactive'\">\n          <mat-icon class=\"md-32\">keyboard_arrow_up</mat-icon>\n        </div>\n        <div class=\"down\" *ngIf=\"panelState === 'active'\">\n          <mat-icon class=\"md-32\">keyboard_arrow_down</mat-icon>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"content-container\">\n      <div class=\"tabs\">\n        <h3 class=\"tab\" *ngIf=\"metadataService.metadata$.value != null\" (click)=\"selected='metadata'\">Metadata</h3>\n        <h3 class=\"tab\" *ngIf=\"stationService.stationsJson$.value != null && stationService.stationsJson$.value?.features?.length > 0\" (click)=\"selected='stations'\">Station List</h3>\n      </div>\n\n      <div class=\"exit\" *ngIf=\"selected\">\n        <mat-icon (click)=\"selected=null\">close</mat-icon>\n      </div>\n\n      <div class=\"data-container\">\n        <shakemap-metadata [hidden]=\"selected!='metadata'\"></shakemap-metadata>\n        <shakemap-station-list [hidden]=\"selected!='stations'\"></shakemap-station-list>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bottom-panel/bottom-panel.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  position: absolute;\n  bottom: 0;\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n  z-index: 1000;\n  width: 100%;\n  background-color: #ffffff; }\n\n.container.show {\n  -webkit-transform: translateY(0);\n          transform: translateY(0); }\n\n.state-toggle {\n  position: absolute;\n  top: 0;\n  -webkit-transform: translateY(-30%) translateX(-50%);\n          transform: translateY(-30%) translateX(-50%);\n  height: 75px;\n  width: 150px;\n  border-radius: 40%;\n  left: 50%;\n  background-color: #ffffff; }\n\n.content-container {\n  position: relative;\n  padding: 10px;\n  z-index: 1001; }\n\n.arrow {\n  font-size: 32px;\n  -webkit-transform: translateY(-20%);\n          transform: translateY(-20%);\n  cursor: pointer;\n  text-align: center; }\n\n.tabs {\n  text-align: center; }\n\n.tab {\n  display: inline-block;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding: 10px;\n  border: 2px solid #0099FF;\n  border-radius: 10px;\n  cursor: pointer; }\n\n.tab:hover {\n  background-color: #0099FF; }\n\n.exit {\n  text-align: right;\n  margin-right: 10px;\n  font-size: 34px; }\n\n.exit * {\n  cursor: pointer; }\n\n.material-icons.md-32 {\n  font-size: 32px;\n  height: 32px;\n  width: 32px; }\n\n.data-container {\n  max-height: 400px;\n  overflow-y: scroll; }\n"

/***/ }),

/***/ "./src/app/bottom-panel/bottom-panel.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var animations_1 = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var earthquake_eventpages_1 = __webpack_require__("./node_modules/earthquake-eventpages/index.ts");
var earthquake_eventpages_2 = __webpack_require__("./node_modules/earthquake-eventpages/index.ts");
var BottomPanelComponent = /** @class */ (function () {
    function BottomPanelComponent(metadataService, stationService) {
        this.metadataService = metadataService;
        this.stationService = stationService;
        this.panelState = 'inactive';
        this.selected = null;
    }
    BottomPanelComponent.prototype.ngOnInit = function () {
        this.panelState = 'active';
    };
    BottomPanelComponent.prototype.select = function (tab) {
        if (tab === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = tab;
        }
    };
    BottomPanelComponent.prototype.toggleState = function () {
        if (this.panelState === 'active') {
            this.panelState = 'inactive';
        }
        else {
            this.panelState = 'active';
        }
    };
    BottomPanelComponent = __decorate([
        core_1.Component({
            selector: 'shakemap-view-bottom-panel',
            template: __webpack_require__("./src/app/bottom-panel/bottom-panel.component.html"),
            styles: [__webpack_require__("./src/app/bottom-panel/bottom-panel.component.scss")],
            animations: [
                animations_1.trigger('panelState', [
                    animations_1.state('inactive', animations_1.style({
                        transform: 'translateY(100%)'
                    })),
                    animations_1.state('active', animations_1.style({
                        transform: 'translateY(0)'
                    })),
                    animations_1.transition('inactive => active', animations_1.animate('300ms ease-in')),
                    animations_1.transition('active => inactive', animations_1.animate('300ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [earthquake_eventpages_1.MetadataService,
            earthquake_eventpages_2.StationService])
    ], BottomPanelComponent);
    return BottomPanelComponent;
}());
exports.BottomPanelComponent = BottomPanelComponent;


/***/ }),

/***/ "./src/app/conf.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
;
var ConfService = /** @class */ (function () {
    function ConfService(http) {
        this.http = http;
        this.conf = {};
    }
    ConfService.prototype.getConfigs = function () {
        var _this = this;
        /* This is a description */
        this.http.get('configs.json')
            .subscribe(function (conf) {
            _this.conf = conf;
        });
    };
    ConfService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ConfService);
    return ConfService;
}());
exports.ConfService = ConfService;


/***/ }),

/***/ "./src/app/events/event.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var replaysubject_1 = __webpack_require__("./node_modules/rxjs/replaysubject.js");
var map_service_1 = __webpack_require__("./src/app/map/map.service.ts");
var earthquake_eventpages_1 = __webpack_require__("./node_modules/earthquake-eventpages/index.ts");
var EventService = /** @class */ (function () {
    function EventService(http, mapService, eventControl) {
        this.http = http;
        this.mapService = mapService;
        this.eventControl = eventControl;
        this.selectedEvent = new replaysubject_1.ReplaySubject(1);
        this.events = new replaysubject_1.ReplaySubject(1);
        this.manualEntry = null;
    }
    EventService.prototype.getEventFeed = function () {
        var _this = this;
        this.http.get('products.json').subscribe(function (data) {
            _this.events.next(data);
        }, function (error) {
        });
    };
    EventService.prototype.parseFromEventJson = function (event) {
    };
    EventService.prototype.selectEvent = function (event) {
        this.mapService.plotEvent.next(event);
        this.eventControl.product$.next(event.shakemap[0]);
    };
    EventService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            map_service_1.MapService,
            earthquake_eventpages_1.EventService])
    ], EventService);
    return EventService;
}());
exports.EventService = EventService;


/***/ }),

/***/ "./src/app/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"eventData.length > 1\">\n  <div class=\"event-list\">\n    <div class=\"event\" *ngFor=\"let event of eventData\">\n      <h1 (click)=\"plot(event)\">{{ event.id }}</h1>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/events/events.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  position: fixed;\n  top: 0;\n  border: 2px black dashed;\n  background-color: white;\n  z-index: 500; }\n"

/***/ }),

/***/ "./src/app/events/events.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var event_service_1 = __webpack_require__("./src/app/events/event.service.ts");
var EventsComponent = /** @class */ (function () {
    function EventsComponent(eventService) {
        this.eventService = eventService;
        this.eventData = [];
        this.subs = [];
    }
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.push(this.eventService.events.subscribe(function (data) {
            _this.eventData = data;
            if (data.length > 0) {
                _this.plot(data[0]);
            }
        }));
    };
    EventsComponent.prototype.plot = function (event) {
        this.eventService.selectEvent(event);
    };
    EventsComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    EventsComponent = __decorate([
        core_1.Component({
            selector: 'shakemap-view-events',
            template: __webpack_require__("./src/app/events/events.component.html"),
            styles: [__webpack_require__("./src/app/events/events.component.scss")]
        }),
        __metadata("design:paramtypes", [event_service_1.EventService])
    ], EventsComponent);
    return EventsComponent;
}());
exports.EventsComponent = EventsComponent;


/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"logo\">\n        <img src=\"favicon.ico\">\n    </div>\n    <h1>ShakeMap</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  z-index: 1000;\n  left: 10%; }\n\nimg {\n  height: 50px; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'shakemap-view-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/map/layers/cont_mi.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var L = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
var mmi_roman_1 = __webpack_require__("./src/app/util/mmi_roman.ts");
var lineStyle = {
    "color": "#EFEFF0",
    "weight": 2,
    "opacity": 1
};
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
        layer.bindPopup(generatePopup(feature.properties));
    }
}
function generatePopup(props) {
    var mmi = mmi_roman_1.getRomanFromMmi(props.value);
    var popupContent = "\n        <table style=\"background-color:" + props.color + ";\n                        border:2px solid black;\n                        border-radius:3px;\n                        width:100%;\n                        text-align:center\">\n            <tr>\n                <th>\n                    <h1 style=\"margin:0;\">\n                        " + mmi + "\n                    </h1>\n                </th>\n            </tr>\n            <tr>\n                <td>\n                    mmi\n                </td>\n            </tr>\n        </table>\n    ";
    return popupContent;
}
function getLineStyle(feature) {
    lineStyle.color = feature.properties.color;
    return lineStyle;
}
exports.miLayer = {
    name: 'MMI Contours',
    id: 'mmi_cont',
    productId: 'download/cont_mi.json',
    type: 'json',
    legendImages: ['assets/legend-intensity-scale.png'],
    generateLayer: function (json) {
        return L.geoJson(json, {
            style: function (feature, latlng) {
                if (lineStyle.weight == 4) {
                    lineStyle.weight = 2;
                }
                else {
                    lineStyle.weight = 4;
                }
                lineStyle.color = feature.properties.color;
                return lineStyle;
            },
            onEachFeature: onEachFeature
        });
    }
};


/***/ }),

/***/ "./src/app/map/layers/cont_mmi.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var L = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
var mmi_colors_1 = __webpack_require__("./src/app/util/mmi_colors.ts");
var mmi_roman_1 = __webpack_require__("./src/app/util/mmi_roman.ts");
var lineStyle = {
    "color": "#EFEFF0",
    "weight": 2,
    "opacity": 1
};
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
        layer.bindPopup(generatePopup(feature.properties));
    }
}
function generatePopup(props) {
    var mmi = mmi_roman_1.getRomanFromMmi(props.value);
    var color = mmi_colors_1.getMmiRgba(props.value);
    var popupContent = "\n        <table style=\"background-color:" + color + ";\n                        border:2px solid black;\n                        border-radius:3px;\n                        width:100%;\n                        text-align:center\">\n            <tr>\n                <th>\n                    <h1 style=\"margin:0;\">\n                        " + mmi + "\n                    </h1>\n                </th>\n            </tr>\n            <tr>\n                <td>\n                    mmi\n                </td>\n            </tr>\n        </table>\n    ";
    return popupContent;
}
exports.mmiLayer = {
    name: 'MMI Contours',
    id: 'mmi_cont',
    productId: 'download/cont_mmi.json',
    type: 'json',
    legendImages: ['assets/legend-intensity-scale.png'],
    generateLayer: function (json) {
        return L.geoJson(json, {
            style: function (feature, latlng) {
                lineStyle.color = mmi_colors_1.getMmiRgba(feature.properties.value);
                if (lineStyle.weight == 4) {
                    lineStyle.weight = 2;
                }
                else {
                    lineStyle.weight = 4;
                }
                return lineStyle;
            },
            onEachFeature: onEachFeature
        });
    }
};


/***/ }),

/***/ "./src/app/map/layers/cont_pga.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var L = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
var lineStyle = {
    "color": "#ffffff",
    "weight": 2,
    "opacity": 1
};
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
        layer.bindPopup('PGA: ' + feature.properties.value);
    }
}
exports.pgaLayer = {
    name: 'PGA Contours',
    id: 'pga_cont',
    productId: 'download/cont_pga.json',
    type: 'json',
    generateLayer: function (json) {
        return L.geoJson(json, {
            style: function (feature, latlng) {
                if (lineStyle.weight == 4) {
                    lineStyle.weight = 2;
                }
                else {
                    lineStyle.weight = 4;
                }
                return lineStyle;
            },
            onEachFeature: onEachFeature
        });
    }
};


/***/ }),

/***/ "./src/app/map/layers/cont_pgv.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var L = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
var lineStyle = {
    "color": "#ffffff",
    "weight": 4,
    "opacity": 1
};
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
        layer.bindPopup('PGV: ' + feature.properties.value);
    }
}
exports.pgvLayer = {
    name: 'PGV Contours',
    id: 'pgv_cont',
    productId: 'download/cont_pgv.json',
    type: 'json',
    generateLayer: function (json) {
        return L.geoJson(json, {
            style: function (feature, latlng) {
                if (lineStyle.weight == 4) {
                    lineStyle.weight = 2;
                }
                else {
                    lineStyle.weight = 4;
                }
                return lineStyle;
            },
            onEachFeature: onEachFeature
        });
    }
};


/***/ }),

/***/ "./src/app/map/layers/epicenter.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var L = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
var epiIcon = L.icon({
    iconUrl: 'assets/star.png',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
});
exports.epicenterLayer = {
    name: 'Epicenter',
    id: 'epicenter',
    productId: 'download/info.json',
    productType: 'json',
    legendImages: ['assets/legend-epicenter.png'],
    generateLayer: function (info) {
        var event_info = info['input']['event_information'];
        var popupHtml = '<table>' +
            '<tr><th>' + event_info['event_id'] + '</th></tr>' +
            '<tr><table><th>Magnitude:</th><td>' + event_info['magnitude'] + '</td></table></tr>' +
            '<tr><table><th>Depth:</th><td>' + event_info['depth'] + '</td></table></tr>' +
            '<tr><table><th>Location:</th><td>' + event_info['latitude'] + ', ' + event_info['longitude'] + '</td></table></tr>' +
            '</table>';
        return L.marker([event_info['latitude'], event_info['longitude']], { icon: epiIcon })
            .bindPopup(popupHtml)
            .openPopup();
    }
};


/***/ }),

/***/ "./src/app/map/layers/layer.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ReplaySubject_1 = __webpack_require__("./node_modules/rxjs/ReplaySubject.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var cont_mmi_1 = __webpack_require__("./src/app/map/layers/cont_mmi.ts");
var cont_mi_1 = __webpack_require__("./src/app/map/layers/cont_mi.ts");
var cont_pga_1 = __webpack_require__("./src/app/map/layers/cont_pga.ts");
var cont_pgv_1 = __webpack_require__("./src/app/map/layers/cont_pgv.ts");
var epicenter_1 = __webpack_require__("./src/app/map/layers/epicenter.ts");
var stations_1 = __webpack_require__("./src/app/map/layers/stations.ts");
var layers = [epicenter_1.epicenterLayer, cont_mmi_1.mmiLayer, cont_mi_1.miLayer, cont_pga_1.pgaLayer, cont_pgv_1.pgvLayer, stations_1.stationLayer];
var LayerService = /** @class */ (function () {
    function LayerService(http) {
        this.http = http;
        this.nextLayer = new ReplaySubject_1.ReplaySubject(1);
        this.data = {};
        this.waiting = [];
    }
    LayerService.prototype.genLayers = function (event) {
        var _this = this;
        // stop waiting on old map layers
        this.stopWaiting();
        var contents = event['shakemap'][0]['contents'];
        var _loop_1 = function (layer) {
            // check if this layers product is available
            if (layer['productId'] in contents) {
                // get the product
                this_1.waiting.push(this_1.http.get(contents[layer['productId']]['url'], { responseType: layer['productType'] })
                    .subscribe(function (product) {
                    // generate the layer
                    layer['layer'] = layer.generateLayer(product);
                    // let the map know it's ready
                    _this.nextLayer.next(layer);
                    // record data for later usage
                    _this.data[layer['id']] = product;
                }));
            }
        };
        var this_1 = this;
        for (var _i = 0, layers_1 = layers; _i < layers_1.length; _i++) {
            var layer = layers_1[_i];
            _loop_1(layer);
        }
    };
    LayerService.prototype.stopWaiting = function () {
        // Stop existing request for layers
        for (var _i = 0, _a = this.waiting; _i < _a.length; _i++) {
            var sub = _a[_i];
            if (sub) {
                sub.unsubscribe();
            }
        }
    };
    LayerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LayerService);
    return LayerService;
}());
exports.LayerService = LayerService;


/***/ }),

/***/ "./src/app/map/layers/stations.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var L = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
__webpack_require__("./src/app/util/leaflet-svg-shape-markers.ts");
var mmi_colors_1 = __webpack_require__("./src/app/util/mmi_colors.ts");
var mmi_roman_1 = __webpack_require__("./src/app/util/mmi_roman.ts");
var shapeMarkerOptions = {
    shape: 'circle',
    fillColor: '#ffffff',
    fillOpacity: 1,
    color: '#444444',
    radius: 6,
    weight: 1,
};
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
        layer.bindPopup(generatePopup(feature.properties));
    }
}
var generatePopup = function (props) {
    var mmi = mmi_roman_1.getRomanFromMmi(props.intensity);
    var color = mmi_colors_1.getMmiRgba(props.intensity);
    return "\n    <div>\n        <h3 style=\"border-bottom:2px solid black\">" +
        props.network + ': ' + props.name +
        "</h3>\n        <table style=\"width:100%;\n                    text-align:center;\">\n            <tr>\n                <td style=\"width:60px;\n                        padding-right:10px;\">\n                    <table style=\"background-color:" + color + ";\n                            border:2px solid black;\n                            border-radius:3px;\n                            width:100%\">\n                        <tr>\n                            <th>\n                                <h1 style=\"margin:0;\">\n                                    " + mmi + "\n                                </h1>\n                            </th>\n                        </tr>\n                        <tr>\n                            <td>\n                                mmi\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n                <td>\n                    <table>\n                        <tr>\n                            <th>\n                                " + makeNumber(props.pga) + " %g\n                            </th>\n                        </tr>\n                        <tr>\n                            <td>\n                                pga\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n                <td>\n                    <table>\n                        <tr>\n                            <th>\n                                " + makeNumber(props.pgv) + " cm/s\n                            </th>\n                        </tr>\n                        <tr>\n                            <td>\n                                pgv\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n                <td>\n                    <table>\n                        <tr>\n                            <th>\n                                " + makeNumber(props.distance) + " km\n                            </th>\n                        </tr>\n                        <tr>\n                            <td>\n                                distance\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n            </tr>\n        </table>\n    </div>\n    ";
};
var makeNumber = function (num) {
    return Number(Number(num).toPrecision(3));
};
exports.stationLayer = {
    name: 'Stations',
    id: 'stations',
    productId: 'download/stationlist.json',
    type: 'json',
    legendImages: ['assets/legend-shakemap-station.png',
        'assets/legend-seismic-station.png',
        'assets/legend-intensity-scale.png'],
    generateLayer: function (json) {
        return L.geoJson(json, {
            pointToLayer: function (feature, latlng) {
                if ((feature.properties['station_type']) && feature.properties['station_type'] === 'macroseismic') {
                    shapeMarkerOptions.shape = 'circle';
                }
                else {
                    shapeMarkerOptions.shape = 'triangle';
                }
                shapeMarkerOptions.fillColor = mmi_colors_1.getMmiRgba(feature.properties.intensity);
                return L.shapeMarker(latlng, shapeMarkerOptions);
            },
            onEachFeature: onEachFeature
        });
    }
};


/***/ }),

/***/ "./src/app/map/map-control/map-control.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!confService.conf?.display || confService.conf?.display !== 'static'\">\n  <div class=\"control\" \n        [ngClass]=\"{'collapsed': controlCollapsed}\" \n        (dblclick)=\"$event.stopPropagation();\">\n\n    <div class=\"collapsed-control\" *ngIf=\"controlCollapsed\" (click)=\"controlCollapsed=false\">\n      <div class=\"control-image\">\n        <img src=\"{{ layersImg }}\">\n      </div>\n    </div>\n\n    <div class=\"open\" *ngIf=\"!controlCollapsed\">\n      <div class=\"close\">\n        <div class=\"close-icon\" (click)=\"controlCollapsed=true\">\n          <mat-icon>close</mat-icon>\n        </div>\n      </div>\n\n      <div class=\"items\">\n        <p *ngFor=\"let item of control\" \n            (click)=\"toggleLayer(item);\"\n            class=\"layer-item\">\n          <input type=\"checkbox\" [checked]=\"plotting.indexOf(item.id) > -1\">\n          {{ item.name }}\n        </p>\n      </div>\n    </div>\n\n  </div>\n\n  <!-- Clear the float to let legend sit under control -->\n  <br style=\"clear:both\" />\n\n  <div class=\"legend control\" \n          [ngClass]=\"{'collapsed': legendCollapsed}\" \n          (dblclick)=\"$event.stopPropagation();\">\n\n    <div class=\"collapsed-control\" *ngIf=\"legendCollapsed\" (click)=\"toggleLegend()\">\n      <div class=\"control-image\">\n        <mat-icon class=\"key\">vpn_key</mat-icon>\n      </div>\n    </div>\n    <div class=\"open\" *ngIf=\"!legendCollapsed\">\n      <div class=\"close\">\n        <div class=\"close-icon\" (click)=\"toggleLegend()\">\n          <mat-icon>close</mat-icon>\n        </div>\n      </div>\n\n      <div class=\"items\">\n        <div class=\"image\" *ngFor=\"let image of objKeys(legend)\">\n          <img *ngIf=\"legend[image].count>0\" class=\"legend-image\" src=\"{{ legend[image].url }}\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/map/map-control/map-control.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  z-index: 501;\n  text-align: center;\n  position: fixed;\n  top: 5px;\n  right: 5px; }\n\n.control {\n  border: 2px solid #aaaaaa;\n  background-color: white;\n  display: block;\n  border-radius: 5px;\n  margin: 5px;\n  max-width: -webkit-max-content;\n  max-width: -moz-max-content;\n  max-width: max-content;\n  position: relative;\n  float: right;\n  cursor: auto; }\n\n.control.collapsed {\n  min-width: 45px;\n  height: 45px;\n  cursor: pointer; }\n\n.control.collapsed:hover {\n  border: 2px solid #0099FF; }\n\n.control .collapsed-control {\n  height: 100%;\n  width: 100%; }\n\n.control-image {\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  color: #454545;\n  font-size: 18px; }\n\n.close {\n  text-align: right;\n  padding-right: 5px; }\n\n.close-icon {\n  display: inline-block;\n  cursor: pointer; }\n\n.layer-item {\n  margin: 0 0 0 5px;\n  padding: 5px 5px; }\n\n.items {\n  text-align: left; }\n\n.legend-image {\n  max-width: 200px; }\n\n.key {\n  vertical-align: top; }\n"

/***/ }),

/***/ "./src/app/map/map-control/map-control.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var map_control_service_1 = __webpack_require__("./src/app/map/map-control/map-control.service.ts");
var map_service_1 = __webpack_require__("./src/app/map/map.service.ts");
var conf_service_1 = __webpack_require__("./src/app/conf.service.ts");
var TimerObservable_1 = __webpack_require__("./node_modules/rxjs/observable/TimerObservable.js");
__webpack_require__("./node_modules/rxjs/add/operator/take.js");
var L = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
var MapControlComponent = /** @class */ (function () {
    function MapControlComponent(controlService, mapService, confService) {
        this.controlService = controlService;
        this.mapService = mapService;
        this.confService = confService;
        this.subs = [];
        this.controlCollapsed = true;
        this.legendCollapsed = true;
        this.allowLegend = false;
        this.control = [];
        this.plotting = [];
        this.legend = {};
        this.onMap = {};
        this.objKeys = Object.keys;
        this.layersImg = __webpack_require__("./node_modules/leaflet/dist/images/layers.png");
        this.initLoading = true; // True after first map layers render
        this.timeoutTimer = null;
    }
    MapControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.push(this.controlService.addOverlay_.subscribe(function (overlay) {
            _this.newOverlay(overlay);
        }));
        this.subs.push(this.controlService.clear_.subscribe(function (overlay) {
            // remember which layers are plotted
            _this.clearAll();
        }));
        this.timeoutTimer = TimerObservable_1.TimerObservable.create(5000, 1000).subscribe(function (time) {
            _this.initLoading = false;
            _this.timeoutTimer.unsubscribe();
        });
    };
    MapControlComponent.prototype.toggleLayer = function (overlay) {
        if (!this.onMap[overlay.id]) {
            this.addLayer(overlay);
        }
        else {
            this.removeLayer(overlay);
        }
    };
    MapControlComponent.prototype.newOverlay = function (overlay) {
        this.control.push(overlay);
        if (((this.confService.conf['defaultLayers'].includes(overlay.id))
            && (this.plotting.length === 0) ||
            ((this.confService.conf['defaultLayers'].includes(overlay.id))
                && this.initLoading)) ||
            (this.plotting.indexOf(overlay.id) > -1)) {
            // add the layer to the map
            this.addLayer(overlay);
            // align map
            var layers = [];
            for (var layer in this.onMap) {
                layers.push(this.onMap[layer].layer);
            }
            var group = L.featureGroup(layers);
            this.mapService.setBounds.next(group.getBounds().pad(0.1));
        }
    };
    MapControlComponent.prototype.addLayer = function (overlay) {
        // if legend images exists, add them
        if (overlay['legendImages']) {
            for (var _i = 0, _a = overlay['legendImages']; _i < _a.length; _i++) {
                var url = _a[_i];
                if (!this.legend[url]) {
                    this.legend[url] = { 'count': 1,
                        'url': url };
                }
                else {
                    this.legend[url].count += 1;
                }
            }
        }
        this.onMap[overlay.id] = overlay;
        overlay['onMap'] = true;
        this.plotting.push(overlay.id);
        // add to map
        this.mapService.map.addLayer(overlay.layer);
        // check if the legend is available
        this.checkAllowLegend();
    };
    MapControlComponent.prototype.removeLayer = function (overlay) {
        if (this.onMap[overlay.id]) {
            delete this.onMap[overlay.id];
            overlay.onMap = false;
            if (overlay['legendImages']) {
                for (var _i = 0, _a = overlay['legendImages']; _i < _a.length; _i++) {
                    var url = _a[_i];
                    this.legend[url].count -= 1;
                }
            }
        }
        // remove from map
        this.mapService.map.removeLayer(overlay.layer);
        // stop tracking this layer
        this.plotting = this.plotting.filter(function (l) { return l !== overlay.id; });
        // check if the legend should be open
        this.checkAllowLegend();
    };
    MapControlComponent.prototype.clearAll = function () {
        for (var overlay in this.onMap) {
            this.mapService.map.removeLayer(this.onMap[overlay].layer);
        }
        this.control = [];
        this.legend = [];
        this.onMap = {};
    };
    MapControlComponent.prototype.checkAllowLegend = function () {
        for (var item in this.legend) {
            if (this.legend[item].count > 0) {
                this.allowLegend = true;
                return true;
            }
        }
        // no legends in use
        this.legendCollapsed = true;
        this.allowLegend = false;
        return false;
    };
    MapControlComponent.prototype.toggleLegend = function () {
        var allow = this.checkAllowLegend();
        if (!this.legendCollapsed) {
            this.legendCollapsed = true;
        }
        else if (allow) {
            this.legendCollapsed = false;
        }
    };
    MapControlComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            if (sub) {
                sub.unsubscribe();
            }
        }
    };
    MapControlComponent = __decorate([
        core_1.Component({
            selector: 'shakemap-view-map-control',
            template: __webpack_require__("./src/app/map/map-control/map-control.component.html"),
            styles: [__webpack_require__("./src/app/map/map-control/map-control.component.scss")]
        }),
        __metadata("design:paramtypes", [map_control_service_1.MapControlService,
            map_service_1.MapService,
            conf_service_1.ConfService])
    ], MapControlComponent);
    return MapControlComponent;
}());
exports.MapControlComponent = MapControlComponent;


/***/ }),

/***/ "./src/app/map/map-control/map-control.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ReplaySubject_1 = __webpack_require__("./node_modules/rxjs/ReplaySubject.js");
var MapControlService = /** @class */ (function () {
    function MapControlService() {
        this.addOverlay_ = new ReplaySubject_1.ReplaySubject(1);
        this.clear_ = new ReplaySubject_1.ReplaySubject(1);
    }
    MapControlService.prototype.addOverlay = function (layer) {
        this.addOverlay_.next(layer);
    };
    MapControlService.prototype.clear = function () {
        this.clear_.next(true);
    };
    MapControlService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], MapControlService);
    return MapControlService;
}());
exports.MapControlService = MapControlService;


/***/ }),

/***/ "./src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\">\n    <shakemap-view-map-control></shakemap-view-map-control>\n</div>\n"

/***/ }),

/***/ "./src/app/map/map.component.scss":
/***/ (function(module, exports) {

module.exports = "#map {\n  height: 100%;\n  min-height: 220px;\n  min-width: 200px; }\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var L = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
var map_service_1 = __webpack_require__("./src/app/map/map.service.ts");
var layer_service_1 = __webpack_require__("./src/app/map/layers/layer.service.ts");
var map_control_service_1 = __webpack_require__("./src/app/map/map-control/map-control.service.ts");
var conf_service_1 = __webpack_require__("./src/app/conf.service.ts");
var MapComponent = /** @class */ (function () {
    function MapComponent(mapService, layerService, controlService, c) {
        this.mapService = mapService;
        this.layerService = layerService;
        this.controlService = controlService;
        this.c = c;
        this.subs = [];
        this.map = null;
        this.basemap = null;
        this.layersControl = null;
        this.defLayers = [];
        this.allLayers = [];
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.push(this.mapService.plotEvent.subscribe(function (event) {
            _this.clearMap();
            _this.plotEvent(event);
        }));
        this.subs.push(this.layerService.nextLayer.subscribe(function (layer) {
            _this.addLayer(layer);
        }));
        this.subs.push(this.mapService.setBounds.subscribe(function (bounds) {
            _this.setBounds(bounds);
        }));
        // eslint-disable-next-line  
        delete L.Icon.Default.prototype._getIconUrl;
        // eslint-disable-next-line  
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: __webpack_require__("./node_modules/leaflet/dist/images/marker-icon-2x.png"),
            iconUrl: __webpack_require__("./node_modules/leaflet/dist/images/marker-icon.png"),
            shadowUrl: __webpack_require__("./node_modules/leaflet/dist/images/marker-shadow.png")
        });
        this.genBasemap();
        var mapControls = {};
        if (this.c.conf['display'] === 'static') {
            mapControls = {
                boxZoom: false,
                center: [0, 0],
                zoom: 0,
                doubleClickZoom: false,
                dragging: false,
                fadeAnimation: false,
                keyboard: false,
                markerZoomAnimation: false,
                scrollWheelZoom: false,
                tap: false,
                touchZoom: false,
                zoomAnimation: false,
                zoomControl: false
            };
        }
        else {
            mapControls = {
                scrollWheelZoom: false
            };
        }
        this.map = L.map('map', mapControls).setView([51.505, -0.09], 13);
        this.basemap.addTo(this.map);
        this.layersControl = L.control.layers({ 'Basemap': this.basemap });
        this.mapService.map = this.map;
    };
    MapComponent.prototype.plotEvent = function (event) {
        this.layersControl = L.control.layers({ 'Basemap': this.basemap });
        this.layerService.genLayers(event);
    };
    MapComponent.prototype.addLayer = function (layer) {
        this.controlService.addOverlay(layer);
    };
    MapComponent.prototype.setBounds = function (bounds) {
        this.map.fitBounds(bounds);
    };
    MapComponent.prototype.genBasemap = function () {
        this.basemap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + this.mapService.mapKey, {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery � <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.streets'
        });
    };
    MapComponent.prototype.clearMap = function () {
        this.controlService.clear();
    };
    MapComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: 'shakemap-view-map',
            template: __webpack_require__("./src/app/map/map.component.html"),
            styles: [__webpack_require__("./src/app/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [map_service_1.MapService,
            layer_service_1.LayerService,
            map_control_service_1.MapControlService,
            conf_service_1.ConfService])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;


/***/ }),

/***/ "./src/app/map/map.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ReplaySubject_1 = __webpack_require__("./node_modules/rxjs/ReplaySubject.js");
var MapService = /** @class */ (function () {
    function MapService() {
        this.plotEvent = new ReplaySubject_1.ReplaySubject(1);
        this.setBounds = new ReplaySubject_1.ReplaySubject(1);
        this.mapKey = 'pk.eyJ1IjoiZHNsb3NreSIsImEiOiJjaXR1aHJnY3EwMDFoMnRxZWVtcm9laWJmIn0.1C3GE0kHPGOpbVV9kTxBlQ';
        this.map = null;
    }
    MapService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], MapService);
    return MapService;
}());
exports.MapService = MapService;


/***/ }),

/***/ "./src/app/util/leaflet-svg-shape-markers.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var L = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
/* Modified from leaflet-svg-shape-markers
https://www.npmjs.com/package/leaflet-svg-shape-markers
https://github.com/rowanwins/Leaflet.SvgShapeMarkers

The MIT License (MIT)

Copyright (c) 2016 Rowan Winsemius

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
L.SVG.include({
    _updateShape: function (layer) {
        var p = layer._point;
        var s = layer._radius;
        var shape = layer.options.shape;
        if (shape === "triangle") {
            var d = "M" + (p.x - s) + " " + (p.y + s) + " L" + (p.x) + " " + (p.y - s) + " L" + (p.x + s) + " " + (p.y + s) + " Z";
            this._setPath(layer, d);
        }
        if (shape === "circle") {
            this._updateCircle(layer);
        }
    }
});
L.ShapeMarker = L.Path.extend({
    options: {
        fill: true,
        shape: 'triangle',
        radius: 10
    },
    initialize: function (latlng, options) {
        L.setOptions(this, options);
        this._latlng = L.latLng(latlng);
        this._radius = this.options.radius;
    },
    setLatLng: function (latlng) {
        this._latlng = L.latLng(latlng);
        this.redraw();
        return this.fire('move', { latlng: this._latlng });
    },
    getLatLng: function () {
        return this._latlng;
    },
    setRadius: function (radius) {
        this.options.radius = this._radius = radius;
        return this.redraw();
    },
    getRadius: function () {
        return this._radius;
    },
    setStyle: function (options) {
        var radius = options && options.radius || this._radius;
        L.Path.prototype.setStyle.call(this, options);
        this.setRadius(radius);
        return this;
    },
    _project: function () {
        this._point = this._map.latLngToLayerPoint(this._latlng);
        this._updateBounds();
    },
    _updateBounds: function () {
        var r = this._radius, r2 = this._radiusY || r, w = this._clickTolerance(), p = [r + w, r2 + w];
        this._pxBounds = new L.Bounds(this._point.subtract(p), this._point.add(p));
    },
    _update: function () {
        if (this._map) {
            this._updatePath();
        }
    },
    _updatePath: function () {
        this._renderer._updateShape(this);
    },
    _empty: function () {
        return this._size && !this._renderer._bounds.intersects(this._pxBounds);
    },
    toGeoJSON: function () {
        return L.GeoJSON.getFeature(this, {
            type: 'Point',
            coordinates: L.GeoJSON.latLngToCoords(this.getLatLng())
        });
    }
});
// @factory L.shapeMarker(latlng: LatLng, options? ShapeMarker options)
//
L.shapeMarker = function (latlng, options) {
    return new L.ShapeMarker(latlng, options);
};


/***/ }),

/***/ "./src/app/util/mmi_colors.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var colormap = {
    0: { 'r': 255, 'g': 255, 'b': 255 },
    1: { 'r': 255, 'g': 255, 'b': 255 },
    2: { 'r': 191, 'g': 204, 'b': 255 },
    3: { 'r': 160, 'g': 230, 'b': 255 },
    4: { 'r': 128, 'g': 255, 'b': 255 },
    5: { 'r': 122, 'g': 255, 'b': 147 },
    6: { 'r': 255, 'g': 255, 'b': 0 },
    7: { 'r': 255, 'g': 200, 'b': 0 },
    8: { 'r': 255, 'g': 145, 'b': 0 },
    9: { 'r': 255, 'g': 0, 'b': 0 },
    10: { 'r': 200, 'g': 0, 'b': 0 },
    13: { 'r': 128, 'g': 0, 'b': 0 },
};
function getMmiRgba(mmi, opacity) {
    if (opacity === void 0) { opacity = 1; }
    if (mmi === 'null') {
        mmi = .1;
    }
    var low = Math.floor(mmi);
    var lowC = colormap[low];
    var high = low + 1;
    var highC = colormap[high];
    var colors = { 'r': 0, 'g': 0, 'b': 0 };
    for (var color in colors) {
        var cNum = (high - mmi) * highC[color] +
            (mmi - low) * lowC[color];
        colors[color] = Math.round(cNum);
    }
    return 'rgba(' + colors['r'] + ',' +
        colors['g'] + ',' +
        colors['b'] + ',' +
        opacity + ')';
}
exports.getMmiRgba = getMmiRgba;
/*

DEFAULT COLOR MAP

0       255     255     255     1       255     255     255
1       255     255     255     2       191     204     255
2       191     204     255     3       160     230     255
3       160     230     255     4       128     255     255
4       128     255     255     5       122     255     147
5       122     255     147     6       255     255     0
6       255     255     0       7       255     200     0
7       255     200     0       8       255     145     0
8       255     145     0       9       255     0       0
9       255     0       0       10      200     0       0
#10      200     0       0       13      128     0       0

*/ 


/***/ }),

/***/ "./src/app/util/mmi_roman.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getRomanFromMmi(mmiIn) {
    var mmi;
    switch (Math.round(Number(mmiIn))) {
        case 1: {
            mmi = 'I';
            break;
        }
        case 2: {
            mmi = 'II';
            break;
        }
        case 3: {
            mmi = 'III';
            break;
        }
        case 4: {
            mmi = 'IV';
            break;
        }
        case 5: {
            mmi = 'V';
            break;
        }
        case 6: {
            mmi = 'VI';
            break;
        }
        case 7: {
            mmi = 'VII';
            break;
        }
        case 8: {
            mmi = 'VIII';
            break;
        }
        case 9: {
            mmi = 'IX';
            break;
        }
        case 10: {
            mmi = 'X';
            break;
        }
        case 11: {
            mmi = 'XI';
            break;
        }
        case 12: {
            mmi = 'XII';
            break;
        }
        default: {
            mmi = '0';
        }
    }
    return mmi;
}
exports.getRomanFromMmi = getRomanFromMmi;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map