import { bootstrap }        from 'angular2/platform/browser';
import { FORM_PROVIDERS } from 'angular2/common';
import { AppComponent }     from './app.component';
import {ROUTER_PROVIDERS} from 'angular2/router'; 

// Solo para desarrollo: ------------------------------------
import { enableProdMode }   from 'angular2/core';
enableProdMode();
// ----------------------------------------------------------

// Probando el listado de productos
import { HTTP_PROVIDERS }   from 'angular2/http';
import { ProductComponent } from './product/index';
import 'rxjs/Rx';

bootstrap(AppComponent, [ROUTER_PROVIDERS, FORM_PROVIDERS])
