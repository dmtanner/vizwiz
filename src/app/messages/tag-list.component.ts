import { Component, OnInit } from '@angular/core';

import { MessageService } from './message.service';
import { IMessage } from './message';
import { ITag } from './tag';

@Component({
    moduleId: module.id,
    templateUrl: './tag-list.component.html'
})
export class TagListComponent implements OnInit {

    tags: ITag[];
    errorMessage: string;

    constructor(private _messageService: MessageService) {}

    ngOnInit(): void {
        this._messageService.getTags()
            .subscribe(tags => this.tags = tags,
                        error => this.errorMessage = <any>error);
    } 

}