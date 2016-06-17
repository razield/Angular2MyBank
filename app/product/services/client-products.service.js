System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_2, Observable_1;
    var ClientProductsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            ClientProductsService = (function () {
                function ClientProductsService(http) {
                    this.http = http;
                    //    private _url = 'http://jsonplaceholder.typicode.com/comments';
                    //    private _url = 'https://api.myjson.com/bins/4i2aw';
                    this._url = 'https://shrouded-beyond-64833.herokuapp.com/clientes';
                }
                ClientProductsService.prototype.getProducts = function (token, typeDocument, document) {
                    var headers = new http_2.Headers({ 'My-Custom-Token': token, 'Access-Control-Allow-Origin': '*' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    console.log("tipo " + typeDocument + " doc " + document);
                    console.log("token: " + token);
                    return this.http.get(this._url + "/" + typeDocument + "/" + document + "?token=" + token)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                ClientProductsService.prototype.extractData = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    var body = res.json();
                    return body || {};
                };
                ClientProductsService.prototype.handleError = function (error) {
                    // In a real world app, we might send the error to remote logging infrastructure
                    var errMsg = error.message || 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                };
                ClientProductsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ClientProductsService);
                return ClientProductsService;
            }());
            exports_1("ClientProductsService", ClientProductsService);
        }
    }
});
//# sourceMappingURL=client-products.service.js.map