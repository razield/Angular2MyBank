import { Injectable }     from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Headers, RequestOptions, RequestMethod } from 'angular2/http';
import { Observable }     from 'rxjs/Observable';
import { ClientProductsModel }   from '../index';

@Injectable()
export class ClientProductsService {

    constructor(private http: Http) { }

//    private _url = 'http://jsonplaceholder.typicode.com/comments';
//    private _url = 'https://api.myjson.com/bins/4i2aw';

    private _url = 'https://shrouded-beyond-64833.herokuapp.com/clientes';


    getProducts(token, typeDocument, document): Observable<ClientProductsModel[]> {
        var headers = new Headers({ 'My-Custom-Token': token, 'Access-Control-Allow-Origin': '*' });
        var options = new RequestOptions({ headers: headers });
        console.log("tipo " + typeDocument +" doc " + document);
        console.log("token: " + token);
        return this.http.get(this._url +"/"+typeDocument+"/"+document+"?token="+token)
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
