System.register(['angular2/core', 'angular2/common', '../../validation/index', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, common_1, index_1, router_1;
    var LoginFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LoginFormComponent = (function () {
                function LoginFormComponent(routerNavigation, _formBuilder) {
                    this.routerNavigation = routerNavigation;
                    this._formBuilder = _formBuilder;
                    this.credentials = { email: '', password: '' };
                    this.userForm = this._formBuilder.group({
                        'email': ['', common_1.Validators.compose([common_1.Validators.required, index_1.FormValidationService.emailValidator])],
                        'password': ['', common_1.Validators.required]
                    });
                }
                LoginFormComponent.prototype.loggingInUser = function (email, password) {
                    var _this = this;
                    var dataref = new Firebase("https://mybankapp.firebaseio.com/");
                    //var dataref = new Firebase("https://torrid-heat-7366.firebaseio.com/");
                    var user;
                    if (this.userForm.dirty && this.userForm.valid) {
                        dataref.authWithPassword({
                            email: email, password: password
                        }, function (error, authData) {
                            if (error) {
                                alert("Usuario y password incorrecto");
                            }
                            else {
                                console.log("Authenticated successfully");
                                user = {
                                    name: email,
                                    email: email,
                                    token: authData.token
                                };
                                dataref.child(authData.uid).once('value', function (snapshot) {
                                    if (snapshot.exists()) {
                                        snapshot.ref().update(user);
                                    }
                                    else {
                                        var payload = {};
                                        payload[authData.uid] = user;
                                        snapshot.ref().parent().update(payload);
                                    }
                                });
                                var p = new router_1.RouteParams({ id: authData.uid, name: email, email: email, avatar: 'https://secure.gravatar.com/avatar/0617ecd178b4f2d159070705bdce6764?d=retro', token: authData.token });
                                _this.routerNavigation.navigate(['Home', { id: authData.uid, name: email, email: email, avatar: 'https://secure.gravatar.com/avatar/0617ecd178b4f2d159070705bdce6764?d=retro', token: authData.token }]);
                            }
                            ;
                        }, {
                            remember: "none"
                        });
                    }
                };
                LoginFormComponent = __decorate([
                    core_1.Component({
                        selector: 'mbk-loginform',
                        templateUrl: 'login/components/login-form.component.html',
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, common_1.FormBuilder])
                ], LoginFormComponent);
                return LoginFormComponent;
            }());
            exports_1("LoginFormComponent", LoginFormComponent);
        }
    }
});
//# sourceMappingURL=login-form.component.js.map