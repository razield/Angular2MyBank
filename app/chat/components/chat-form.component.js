System.register(['angular2/core', 'angular2/router', '../services/chat.service'], function(exports_1, context_1) {
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
    var core_1, router_1, chat_service_1;
    var ChatFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (chat_service_1_1) {
                chat_service_1 = chat_service_1_1;
            }],
        execute: function() {
            ChatFormComponent = (function () {
                function ChatFormComponent(_chatService, params) {
                    this._chatService = _chatService;
                    this.de = null;
                    this.chat = false;
                    this.token = null;
                    this.correo = null;
                    this.clients = [];
                    this.message = null;
                    this.messages = [];
                    this.errorMessage = null;
                    this.de = params.get('email');
                    this.token = params.get('token');
                    console.log(this);
                    this.getClients();
                }
                ChatFormComponent.prototype.getClients = function () {
                    var _this = this;
                    this._chatService.getClients().subscribe(function (clients) {
                        _this.clients = clients;
                        _this.errorMessage = null;
                    }, function (error) { return _this.errorMessage = error; });
                };
                ChatFormComponent.prototype.openChat = function (correo) {
                    var _this = this;
                    this.correo = correo;
                    this._chatService.getMessages(this.token, this.correo).subscribe(function (messages) {
                        _this.chat = true;
                        _this.messages = messages;
                        _this.errorMessage = null;
                    }, function (error) { return _this.errorMessage = error; });
                };
                ChatFormComponent.prototype.closeChat = function () {
                    this.chat = false;
                    this.correo = null;
                    this.message = "";
                    this.messages = [];
                };
                ChatFormComponent.prototype.sendMessage = function () {
                    var _this = this;
                    this._chatService.sendMessage(this.token, this.de, this.correo, this.message).subscribe(function (message) {
                        _this.messages.push(message);
                        _this.errorMessage = null;
                    }, function (error) { return _this.errorMessage = error; });
                };
                ChatFormComponent = __decorate([
                    core_1.Component({
                        selector: 'chat-client',
                        templateUrl: 'chat/components/chat-form.component.html',
                        styles: ['.error {color:red;}']
                    }), 
                    __metadata('design:paramtypes', [chat_service_1.ChatService, router_1.RouteParams])
                ], ChatFormComponent);
                return ChatFormComponent;
            }());
            exports_1("ChatFormComponent", ChatFormComponent);
        }
    }
});
//# sourceMappingURL=chat-form.component.js.map