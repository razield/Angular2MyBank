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
    var HomeFormComponent;
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
            HomeFormComponent = (function () {
                function HomeFormComponent(params, _router) {
                    this._router = _router;
                    this.model = new index_1.ExecutiveUserModel;
                    this.model.id = params.get('id');
                    this.model.name = params.get('name');
                    this.model.email = params.get('email');
                    this.model.avatar = params.get('avatar');
                    this.model.token = params.get('token');
                }
                HomeFormComponent.prototype.IraProductos = function () {
                    this._router.navigate(['Productos',
                        { id: this.model.id, name: this.model.email, email: this.model.email,
                            avatar: this.model.avatar, token: this.model.token }]);
                };
                HomeFormComponent.prototype.IraChat = function () {
                    this._router.navigate(['Chat', { id: this.model.id, name: this.model.email,
                            email: this.model.email, avatar: this.model.avatar, token: this.model.token }]);
                };
                HomeFormComponent = __decorate([
                    core_1.Component({
                        selector: 'mbk-inicioform',
                        templateUrl: 'admin/components/home-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router])
                ], HomeFormComponent);
                return HomeFormComponent;
            }());
            exports_1("HomeFormComponent", HomeFormComponent);
        }
    }
});
//# sourceMappingURL=home-form.component.js.map