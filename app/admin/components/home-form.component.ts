import { Component }     from 'angular2/core';
//import { RouteParams }   from 'angular2/router';
import { ExecutiveUserModel } from '../../executive-user/index';
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams} from
'angular2/router';

@Component({
    selector     : 'mbk-inicioform',
    templateUrl  : 'admin/components/home-form.component.html'
    // styleUrls : ['admin/components/home-form-component.css']
})
export class HomeFormComponent {


    //constructor(private executiveUser: ExecutiveUserModel,
    //    private parametros: RouteParams) {
    //    this.modelo = executiveUser;
    //    let id = +parametros.get('id');
    //}
    model : ExecutiveUserModel;

    constructor(params: RouteParams,private _router:Router) {

        this.model = new ExecutiveUserModel;
        this.model.id = params.get('id');
        this.model.name = params.get('name');
        this.model.email = params.get('email');
        this.model.avatar = params.get('avatar');
        this.model.token = params.get('token');

    }

    IraProductos(){
        this._router.navigate(['Productos',
        { id: this.model.id, name: this.model.email, email: this.model.email,
          avatar: this.model.avatar, token: this.model.token }]);
    }

    IraChat(){
        this._router.navigate(['Chat', { id: this.model.id, name: this.model.email,
          email: this.model.email, avatar: this.model.avatar, token: this.model.token }]);
    }
}
