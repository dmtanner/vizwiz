import { Component, OnInit } from '@angular/core';

import { ResponseService } from './response.service';
import { IResponse } from './response';

@Component({
    moduleId: module.id,
    templateUrl: './response-list.component.html'
})
export class ResponseListComponent implements OnInit {

    responses: IResponse[];
    errorMessage: string;

    constructor(private _responseService: ResponseService) {}

    ngOnInit(): void {
        this._responseService.getResponses()
            .subscribe(responses => this.responses = responses,
                        error => this.errorMessage = <any>error);
    } 

}