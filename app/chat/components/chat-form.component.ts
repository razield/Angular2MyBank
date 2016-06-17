import { Component }             from 'angular2/core';
import { HTTP_PROVIDERS }        from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import { HeaderBarComponent } from '../../common/index';

@Component({
    selector  : 'my-chat',
    template: `<header-bar></header-bar>
    <chat-form></chat-form>`,
    directives: [HeaderBarComponent],
    providers : [
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS
    ]
})
export class ChatComponent { }
