import { Component }          from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import { LoginFormComponent } from './login/index';
import { HomeFormComponent }  from './admin/index';
import { ProductComponent }   from './product/index';
import { ChatComponent }   from './chat/index';

@Component({
    selector  : 'mbk-app',
    template  : `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path  : '/login', name: 'Login', component: LoginFormComponent, useAsDefault: true },
    { path  : '/home/:id', name: 'Home', component: HomeFormComponent },
    { path  : '/products', name: 'Productos', component: ProductComponent },
    { path  : '/chat', name: 'Chat', component: ChatComponent }
])
export class AppComponent {
    title = 'MBK Bank - Ejecutivos';
}
