import { Component }             from 'angular2/core';
import { HTTP_PROVIDERS }        from 'angular2/http';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { HeaderBarComponent } from '../../common/index';
import { ChatFormComponent } from './chat-form.component';
import { ChatService } from '../services/chat.service';

@Component({
    selector  : 'my-chat',
    template: `<header-bar></header-bar>
    <chat-client></chat-client>`,
    directives: [
      HeaderBarComponent,
      ChatFormComponent
     ],
    providers : [
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS,
        ChatService
    ]
})

export class ChatComponent { }
