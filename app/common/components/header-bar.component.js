System.register(['angular2/core', '../../executive-user/index', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, index_1, router_1;
    var HeaderBarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HeaderBarComponent = (function () {
                function HeaderBarComponent(params) {
                    this.model = new index_1.ExecutiveUserModel;
                    this.model.id = params.get('id');
                    this.model.name = params.get('name');
                    this.model.email = params.get('email');
                    this.model.avatar = params.get('avatar');
                    this.model.token = params.get('token');
                }
                HeaderBarComponent = __decorate([
                    core_1.Component({
                        selector: 'header-bar',
                        templateUrl: 'common/components/header-bar.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], HeaderBarComponent);
                return HeaderBarComponent;
            }());
            exports_1("HeaderBarComponent", HeaderBarComponent);
        }
    }
});
//# sourceMappingURL=header-bar.component.js.map