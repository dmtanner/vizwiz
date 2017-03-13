import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IResponse } from './response';

@Injectable()
export class ResponseService {

    private _responsesUrl = 'api/responses/responses.json';

    constructor(private _http: Http) { }

    getResponses(): Observable<IResponse[]> {
        return this._http.get(this._responsesUrl)
            .map((response: Response) => <IResponse[]> response.json() )
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Error on Server');
    }

}