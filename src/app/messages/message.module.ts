import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {TagListComponent} from './tag-list.component';
import {MessageVisualizationComponent} from './message-visualization.component';
import { MessageService } from './message.service';

@NgModule({
    declarations: [
        TagListComponent,
        MessageVisualizationComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'tags', component: TagListComponent},
            { path: 'tag/:id', component: MessageVisualizationComponent}
        ])
    ],
    providers: [MessageService],
    exports: []
})
export class MessageModule {}
