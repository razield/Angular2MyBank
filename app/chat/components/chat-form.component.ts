import { Component } from 'angular2/core';
import { RouteParams }             from 'angular2/router';
import { ChatService } from '../services/chat.service';
import { ClientModel } from '../models/client.model';
import { MessageModel } from '../models/message.model';

@Component({
    selector   : 'chat-client',
    templateUrl: 'chat/components/chat-form.component.html',
    styles     : ['.error {color:red;}']
})
export class ChatFormComponent {

    constructor(private _chatService: ChatService, params: RouteParams) {
      this.de = params.get('email');
      this.token = params.get('token');

      console.log(this)

      this.getClients();
    }

    de: String = null;
    chat: boolean = false;
    token: String = null;
    correo: String = null;
    clients: ClientModel[] = [];
    message: String = null;
    messages: MessageModel[] = [];
    errorMessage: String = null;

    getClients() {
      this._chatService.getClients().subscribe(
        clients => {
          this.clients = clients
          this.errorMessage = null
        },
        error => this.errorMessage = <any> error
      )
    }

    openChat(correo) {
      this.correo = correo;

      this._chatService.getMessages(this.token, this.correo).subscribe(
        messages => {
          this.chat = true
          this.messages = messages
          this.errorMessage = null
        },
        error => this.errorMessage = <any> error
       )
    }

    closeChat() {
      this.chat = false;
      this.correo = null;
      this.message = "";
      this.messages = [];
    }

    sendMessage() {
      this._chatService.sendMessage(this.token, this.de, this.correo, this.message).subscribe(
        message => {
          this.messages.push(message)
          this.errorMessage = null
        },
        error => this.errorMessage = <any> error
       )
    }

}
