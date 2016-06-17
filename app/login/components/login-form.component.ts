import { Component }          from 'angular2/core';
import { FormBuilder, Validators, FORM_DIRECTIVES } from 'angular2/common';
import { FormValidationService } from '../../validation/index';
import { FirebaseService }    from 'ng2-firebase/core';
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams} from 'angular2/router';
import { ExecutiveUserModel } from '../../executive-user/index';
import { HomeFormComponent }  from '../../admin/index';

@Component({
    selector: 'mbk-loginform',
    templateUrl: 'login/components/login-form.component.html',
    directives: [FORM_DIRECTIVES]
})

export class LoginFormComponent {
    userForm: any;
    
    constructor(private routerNavigation: Router, private _formBuilder: FormBuilder) {
        this.userForm = this._formBuilder.group({
        'email': ['', Validators.compose([Validators.required, FormValidationService.emailValidator])],
        'password': ['', Validators.required]
    });
     }

    credentials = { email: '', password: '' };

    loggingInUser(email, password) {
        var _this = this;
        var dataref = new Firebase("https://mybankapp.firebaseio.com/");
        //var dataref = new Firebase("https://torrid-heat-7366.firebaseio.com/");
        var user;
        
        if  ( this . userForm . dirty &&  this . userForm . valid )  {
        dataref.authWithPassword({
            email, password
        }, function(error, authData) {
            if (error) {
                alert("Usuario y password incorrecto");
            } else {
                console.log("Authenticated successfully");
                user = {
                    name: email,
                    email: email,
                    token: authData.token
                };
                dataref.child(authData.uid).once('value', function(snapshot) {
                    if (snapshot.exists()) {
                        snapshot.ref().update(user);
                    } else {
                        var payload = {};
                        payload[authData.uid] = user;
                        snapshot.ref().parent().update(payload);
                    }
                });
                var p = new RouteParams({ id: authData.uid, name: email, email: email, avatar: 'https://secure.gravatar.com/avatar/0617ecd178b4f2d159070705bdce6764?d=retro', token: authData.token });
                _this.routerNavigation.navigate(['Home', { id: authData.uid, name: email, email: email, avatar: 'https://secure.gravatar.com/avatar/0617ecd178b4f2d159070705bdce6764?d=retro', token: authData.token }]);
            };
        }, {
                remember: "none"
            });
            
        }
    }
}
