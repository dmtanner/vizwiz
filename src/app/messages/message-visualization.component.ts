import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { IMessage } from './message';
import { MessageService } from './message.service';

@Component({
    moduleId: module.id,
    templateUrl: './message-visualization.component.html'
})
export class MessageVisualizationComponent implements OnInit{
    
    messages: IMessage[];
    errorMessage: string;
    private subscription: Subscription;

    constructor(private _messageService: MessageService,
                private _route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.subscription = this._route.params.subscribe(
            params => {
                let tagId = params['id'];
                this.getMessages(tagId);
            });
    }

    getMessages(tagId): void {
        this._messageService.getMessages(tagId + '.json')
            .subscribe(messages => this.messages = messages,
                        error => this.errorMessage = <any>error );

    }
}