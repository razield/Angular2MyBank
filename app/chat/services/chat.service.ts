import { Injectable }     from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Headers, RequestOptions, RequestMethod } from 'angular2/http';
import { Observable }     from 'rxjs/Observable';
import { ClientModel }   from '../models/client.model';
import { MessageModel }   from '../models/message.model';

@Injectable()
export class ChatService {

    constructor(private http: Http) { }

    private _url = 'https://mybankinternal.herokuapp.com/';

    getClients(): Observable<ClientModel[]> {
        return this.http.get(this._url + 'clientes')
            .map(this.extractData)
            .catch(this.handleError);
    }

    getMessages(token, email): Observable<MessageModel[]> {
        return this.http.get(this._url + 'mensajes/' + email + '?token=' + token)
            .map(this.extractData)
            .catch(this.handleError);
    }

    sendMessage(token, de, email, message): Observable<MessageModel> {
        let body = JSON.stringify({
          de: de,
          para: email,
          fecha: new Date(),
          estado: 'nuevo',
          mensaje: message
        });
        console.log(body)
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this._url + 'mensajes/post?token=' + token, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
