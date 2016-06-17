import { Component } from 'angular2/core';
import { HTTP_PROVIDERS }        from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import { ClientProductsService, ProductListComponent }  from '../index';
import { HeaderBarComponent } from '../../common/index';

@Component({
    selector  : 'my-products',
    template: `<header-bar></header-bar>
    <product-list></product-list>`,
    directives: [ProductListComponent, HeaderBarComponent],
    providers : [
        HTTP_PROVIDERS,
        ClientProductsService,
        ROUTER_PROVIDERS
    ]
})
export class ProductComponent { }
