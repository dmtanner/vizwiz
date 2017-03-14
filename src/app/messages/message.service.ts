import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IMessage } from './message';
import { ITag } from './tag';

@Injectable()
export class MessageService {

    private _tagUrl = 'api/tags/tags.json';
    private _messagesUrl = 'api/messages/'

    constructor(private _http: Http) { }

    getTags(): Observable<ITag[]> {
        return this._http.get(this._tagUrl)
                .map((response: Response) => <ITag[]> response.json() )
                .catch(this.handleError);
    }

    getMessages(tag: string): Observable<IMessage[]> {
        return this._http.get(this._messagesUrl + tag)
                .map((response: Response) => <IMessage[]> response.json() )
                .catch(this.handleError);
    }

    private handleError(error: Response) {
        //console.error(error);
        return Observable.throw(error.json().error || 'Error on Server');
    }

}