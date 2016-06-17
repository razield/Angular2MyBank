import { Component } from 'angular2/core';
import {ExecutiveUserModel} from '../../executive-user/index';
import {RouteParams} from 'angular2/router';


@Component({
    selector   : 'header-bar',
    templateUrl: 'common/components/header-bar.component.html'
})
export class HeaderBarComponent {
    private model: ExecutiveUserModel;

    constructor(params: RouteParams) {

        this.model = new ExecutiveUserModel;
        this.model.id = params.get('id');
        this.model.name = params.get('name');
        this.model.email = params.get('email');
        this.model.avatar = params.get('avatar');
        this.model.token = params.get('token');

    }
}
