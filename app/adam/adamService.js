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
// Observable Version
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
// import { Hero }           from './hero';
var Observable_1 = require('rxjs/Observable');
var AdamService = (function () {
    function AdamService(http) {
        this.http = http;
        this.adamUrl = 'http://jsonplaceholder.typicode.com/posts/1'; // URL to web API
    }
    AdamService.prototype.getThatThing = function () {
        console.info('AdamService getThatThing()');
        var result = this.http.get(this.adamUrl)
            .catch(this.handleError);
        console.info(result);
        return result;
    };
    AdamService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    AdamService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    AdamService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AdamService);
    return AdamService;
}());
exports.AdamService = AdamService;
/*
  private heroesUrl = 'app/heroes.json'; // URL to JSON file
*/
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=adamService.js.map